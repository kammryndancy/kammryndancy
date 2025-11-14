import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lonestar-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lone-star-visualizer.component.html',
  styleUrls: ['./lone-star-visualizer.component.scss']
})
export class LoneStarVisualizerComponent {
  // Canvas size
  size = 600;
  viewBox = `0 0 ${this.size} ${this.size}`;

  // State using Angular signals
  stripeCount = signal<3 | 4 | 5>(3);
  colors = signal<string[]>(['#628867', '#5d9e68', '#074628']);
  mode = signal<'stripe' | 'columns'>('stripe');
  backgroundFill = signal<string>('#f9f9f9');
  // Matrix of per-column colors: columns x depth
  columnColors = signal<string[][]>([
    ['#628867', '#5d9e68', '#074628'],
    ['#6db37a', '#55a86b', '#0d5e3a'],
    ['#85c790', '#5fbf84', '#10754a']
  ]);

  // Helper array of indices [0..n-1] for ngFor
  indices = computed(() => Array.from({ length: this.stripeCount() }, (_, i) => i));
  // Reversed indices [n-1..0]
  reversedIndices = computed(() => {
    const n = this.stripeCount();
    return Array.from({ length: n }, (_, i) => n - 1 - i);
  });

  // For stripe mode: legend color matrix [stripeIndex][depth]
  // Produces sequences like for n=3: [1,2,3], [2,3,2], [3,2,1]
  stripeLegend = computed(() => {
    const n = this.stripeCount();
    const base = this.colors();
    const out: string[][] = [];
    for (let ci = 0; ci < n; ci++) {
      const row: string[] = [];
      for (let d = 0; d < n; d++) {
        const t = ci + d;
        const idx = Math.min(t, (2 * (n - 1)) - t);
        row.push(base[idx]);
      }
      out.push(row);
    }
    return out;
  });

  // Default palette used to pad when increasing stripe count
  private readonly defaults = ['#628867', '#5d9e68', '#074628'] as const;

  onStripeCountChange(val: string) {
    const n = Math.max(3, Math.min(5, parseInt(val, 10))) as 3 | 4 | 5;
    this.stripeCount.set(n);
    // Immediately adjust colors array length to match new stripe count
    const next = this.colors().slice(0, n);
    while (next.length < n) {
      next.push(this.defaults[next.length % this.defaults.length]);
    }
    this.colors.set(next);

    // Resize per-column matrix to n x n while preserving existing entries
    const cols = this.columnColors();
    const resized: string[][] = [];
    for (let c = 0; c < n; c++) {
      const prev = cols[c] || [];
      const row: string[] = prev.slice(0, n);
      while (row.length < n) {
        row.push(this.defaults[row.length % this.defaults.length]);
      }
      resized.push(row);
    }
    this.columnColors.set(resized);
  }

  onColorChange(index: number, color: string) {
    const arr = this.colors().slice();
    arr[index] = color;
    this.colors.set(arr);
  }

  onModeChange(val: string) {
    this.mode.set(val === 'columns' ? 'columns' : 'stripe');
  }

  onColumnColorChange(col: number, depth: number, color: string) {
    const matrix = this.columnColors().map(row => row.slice());
    if (!matrix[col]) matrix[col] = [];
    matrix[col][depth - 1] = color;
    this.columnColors.set(matrix);
  }

  onBackgroundChange(color: string) {
    this.backgroundFill.set(color);
  }

  // Tile size derived from stripe count to keep star within view (vertical half-diagonal A)
  private tileStep(): number {
    const n = this.stripeCount();
    // Fit 2n-1 rows per arm, replicated around center. Empirical factor keeps within canvas.
    return this.size / (n * 6);
  }

  // Diamond (rhombus) with 45/135 angles centered at (cx, cy)
  // A = vertical half-diagonal, B = horizontal half-diagonal
  diamondPoints(cx: number, cy: number, A: number, B: number): string {
    const pts = [
      [cx, cy - A],    // top (acute)
      [cx + B, cy],    // right (obtuse)
      [cx, cy + A],    // bottom (acute)
      [cx - B, cy]     // left (obtuse)
    ];
    return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  }

  // Rotated diamond: rotate the four vertices around center by rad
  private diamondPointsRot(cx: number, cy: number, A: number, B: number, rad: number): string {
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const verts: Array<[number, number]> = [
      [0, -A],   // top
      [B, 0],    // right
      [0, A],    // bottom
      [-B, 0]    // left
    ];
    const pts = verts.map(([dx, dy]) => {
      const x = cx + dx * cos - dy * sin;
      const y = cy + dx * sin + dy * cos;
      return [x, y] as [number, number];
    });
    return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  }

  // Rotate a point around center
  private rotate(cx: number, cy: number, x: number, y: number, rad: number): { x: number, y: number } {
    const dx = x - cx;
    const dy = y - cy;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    return { x: cx + dx * cos - dy * sin, y: cy + dx * sin + dy * cos };
  }

  // Computed tiles for the full 8-point Lone Star
  tiles = computed(() => {
    const n = this.stripeCount();
    const cols = this.colors();
    const mode = this.mode();
    const columnColors = this.columnColors();
    
    const cx = this.size / 2;
    const cy = this.size / 2;
    const A = this.tileStep();               // vertical half-diagonal
    const B = A * 0.41421356237;             // horizontal half-diagonal so that acute angle ≈ 45° (tan(22.5°))

    type Tile = { x: number; y: number; color: string; angle: number };
    const armTiles: Tile[] = [];

    // Build one arm pointing up (negative Y) as a rhombus made of rows of diamonds
    // k = 1..(2n-1); rowLen increases to n then decreases; color index follows rowLen
    for (let k = 1; k <= 2 * n - 1; k++) {
      const rowLen = k <= n ? k : (2 * n - k);
      const colorIdx = rowLen - 1;
      const y = cy - k * A; // move up per row using vertical half-diagonal
      const xStart = cx - (rowLen - 1) * B;
      for (let i = 0; i < rowLen; i++) {
        const x = xStart + i * 2 * B;
        let color = cols[colorIdx];
        if (this.mode() === 'columns') {
          const isDecreasing = k > n;
          const shift = isDecreasing ? (k - n) : 0; // shift columns to the right on decreasing side
          const colIndex = shift + i; // 0..n-1 overall column index
          const depth = (rowLen - i) + shift; // 1..n depth from tip toward base
          const matrix = this.columnColors();
          if (matrix[colIndex] && matrix[colIndex][depth - 1]) {
            color = matrix[colIndex][depth - 1];
          }
        }
        armTiles.push({ x, y, color, angle: 0 });
      }
    }

    // Do not add center diamond here to avoid duplicating it per rotation

    // Replicate arm around center at 8 directions (0..7)*45deg
    const allTiles: Tile[] = [];
    const base = Math.PI / 8; // rotate whole star by 45° from current orientation
    for (let m = 0; m < 8; m++) {
      const rad = base + (Math.PI / 4) * m; // 45 degrees per step with base offset
      for (const t of armTiles) {
        const p = this.rotate(cx, cy, t.x, t.y, rad);
        allTiles.push({ x: p.x, y: p.y, color: t.color, angle: rad });
      }
    }

    // Map to drawable objects with points string
    return allTiles.map(t => ({ points: this.diamondPointsRot(t.x, t.y, A, B, t.angle), color: t.color }));
  });
}
