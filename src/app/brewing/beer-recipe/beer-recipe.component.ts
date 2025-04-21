import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';

interface Award {
  name: string;
  competition: string;
  year: number;
  place?: string;
}

@Component({
  selector: 'app-beer-recipe',
  templateUrl: './beer-recipe.component.html',
  styleUrls: ['./beer-recipe.component.scss'],
  standalone: true,
  imports: [CommonModule, SafeUrlPipe]
})
export class BeerRecipeComponent {
  @Input() name: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
  @Input() malts: string[] = [];
  @Input() hops: string[] = [];
  @Input() yeast: string = '';
  @Input() adjuncts: string[] = [];
  @Input() abv: number = 0;
  @Input() og: number = 0;
  @Input() fg: number = 0;
  @Input() srm: number = 0;
  @Input() ibu: number = 0;
  @Input() buGu: number = 0;
  @Input() awards: Award[] = [];
  @Input() youtubeUrl: string | null = null;
  @Input() recipeUrl: string = '';

  showImageModal = false;

  openImageModal() {
    this.showImageModal = true;
  }

  closeImageModal() {
    this.showImageModal = false;
  }

  getSrmColor(): string {
    // SRM to color conversion
    const srmColors = [
      '#FFE699', '#FFD878', '#FFCA5A', '#FFBF42', '#FBB123', '#F8A600', '#F39C00',
      '#EA8F00', '#E58500', '#DE7C00', '#D77200', '#CF6900', '#CB6200', '#C35900',
      '#BB5100', '#B54C00', '#B04500', '#A63E00', '#A13700', '#9B3200', '#952D00',
      '#8E2900', '#882300', '#821E00', '#7B1A00', '#771900', '#701400', '#6A0E00',
      '#660D00', '#5E0B00', '#5A0A02', '#600903', '#520907', '#4C0505', '#470606',
      '#440607', '#3F0708', '#3B0607', '#3A070B', '#36080A'
    ];
    // Fix: round SRM to nearest integer for color lookup
    const srmIndex = Math.round(this.srm) - 1;
    return srmColors[Math.max(0, Math.min(srmIndex, srmColors.length - 1))];
  }

  getScalePercent(value: number, min: number, max: number): number {
    const clamped = Math.max(min, Math.min(value, max));
    return ((clamped - min) / (max - min)) * 100;
  }

  get srmScalePercent(): number {
    return this.getScalePercent(this.srm, 1, 40);
  }

  get srmValueClass(): string {
    return this.srmScalePercent > 45 ? 'srm-value-light' : '';
  }

  get ibuScalePercent(): number {
    return this.getScalePercent(this.ibu, 0, 120);
  }

  get ibuValueClass(): string {
    return this.ibuScalePercent > 45 ? 'ibu-value-light' : '';
  }

  get ibuBarColor(): string {
    // Map scale percent (0-100) to a green gradient from #baffb3 (light) to #155f1c (dark)
    const percent = this.ibuScalePercent / 100;
    // Interpolate between light and dark green
    const r = Math.round(186 + (21 - 186) * percent); // 186 -> 21
    const g = Math.round(255 + (95 - 255) * percent); // 255 -> 95
    const b = Math.round(179 + (28 - 179) * percent); // 179 -> 28
    return `rgb(${r},${g},${b})`;
  }

  get buGuScalePercent(): number {
    return this.getScalePercent(this.buGu, 0, 1.5);
  }

  get buGuBarColor(): string {
    // Interpolate from #f7931e (light brown) to #BDAB18 (yellow) to #84ab12 (light green)
    const percent = this.buGuScalePercent / 100;
    if (percent < 0.5) {
      // 0 to 0.5: brown to yellow
      const t = percent / 0.5;
      const r = Math.round(0xf7 + (0xbd - 0xf7) * t); // 247 -> 189
      const g = Math.round(0x93 + (0xab - 0x93) * t); // 147 -> 171
      const b = Math.round(0x1e + (0x18 - 0x1e) * t); // 30 -> 24
      return `rgb(${r},${g},${b})`;
    } else {
      // 0.5 to 1: yellow to green
      const t = (percent - 0.5) / 0.5;
      const r = Math.round(0xbd + (0x84 - 0xbd) * t); // 189 -> 132
      const g = Math.round(0xab + (0xab - 0xab) * t); // 171 -> 171
      const b = Math.round(0x18 + (0x12 - 0x18) * t); // 24 -> 18
      return `rgb(${r},${g},${b})`;
    }
  }

  get abvScalePercent(): number {
    return this.getScalePercent(this.abv, 2, 15);
  }

  get abvBarColor(): string {
    // 2% = #b3e5fc (light blue), 8% = #0288d1 (blue), 15% = #004d40 (teal)
    const percent = (this.abvScalePercent / 100);
    if (percent < 0.5) {
      // light blue to blue
      const t = percent / 0.5;
      const r = Math.round(179 + (2 - 179) * t); // 179 -> 2
      const g = Math.round(229 + (136 - 229) * t); // 229 -> 136
      const b = Math.round(252 + (209 - 252) * t); // 252 -> 209
      return `rgb(${r},${g},${b})`;
    } else {
      // blue to teal
      const t = (percent - 0.5) / 0.5;
      const r = Math.round(2 + (0 - 2) * t); // 2 -> 0
      const g = Math.round(136 + (77 - 136) * t); // 136 -> 77
      const b = Math.round(209 + (64 - 209) * t); // 209 -> 64
      return `rgb(${r},${g},${b})`;
    }
  }

  get abvValueClass(): string {
    return this.abvScalePercent > 50 ? 'abv-value-light' : '';
  }

  get ogScalePercent(): number {
    return this.getScalePercent(this.og, 1.030, 1.120);
  }

  get ogBarColor(): string {
    // 1.030 = #ffe082 (light gold), 1.075 = #ffb300 (amber), 1.120 = #6d4c41 (brown)
    const percent = (this.ogScalePercent / 100);
    if (percent < 0.5) {
      // gold to amber
      const t = percent / 0.5;
      const r = Math.round(255 + (255 - 255) * t); // 255 -> 255
      const g = Math.round(224 + (179 - 224) * t); // 224 -> 179
      const b = Math.round(130 + (0 - 130) * t); // 130 -> 0
      return `rgb(${r},${g},${b})`;
    } else {
      // amber to brown
      const t = (percent - 0.5) / 0.5;
      const r = Math.round(255 + (109 - 255) * t); // 255 -> 109
      const g = Math.round(179 + (76 - 179) * t); // 179 -> 76
      const b = Math.round(0 + (65 - 0) * t); // 0 -> 65
      return `rgb(${r},${g},${b})`;
    }
  }

  get ogValueClass(): string {
    return this.ogScalePercent > 50 ? 'og-value-light' : '';
  }

  get fgScalePercent(): number {
    return this.getScalePercent(this.fg, 0.990, 1.040);
  }

  get fgBarColor(): string {
    // 0.990 = #e0f7fa (very light blue), 1.015 = #b2ebf2 (light blue), 1.040 = #26a69a (teal)
    const percent = (this.fgScalePercent / 100);
    if (percent < 0.5) {
      // very light blue to light blue
      const t = percent / 0.5;
      const r = Math.round(224 + (178 - 224) * t); // 224 -> 178
      const g = Math.round(247 + (235 - 247) * t); // 247 -> 235
      const b = Math.round(250 + (242 - 250) * t); // 250 -> 242
      return `rgb(${r},${g},${b})`;
    } else {
      // light blue to teal
      const t = (percent - 0.5) / 0.5;
      const r = Math.round(178 + (38 - 178) * t); // 178 -> 38
      const g = Math.round(235 + (166 - 235) * t); // 235 -> 166
      const b = Math.round(242 + (154 - 242) * t); // 242 -> 154
      return `rgb(${r},${g},${b})`;
    }
  }

  get fgValueClass(): string {
    return this.fgScalePercent > 50 ? 'fg-value-light' : '';
  }

  get youtubeEmbedUrl(): string | null {
    if (!this.youtubeUrl) return null;
    // If already an embed URL, return as-is
    if (this.youtubeUrl.includes('youtube.com/embed/')) return this.youtubeUrl;
    // Extract video ID from various YouTube URL formats
    const match = this.youtubeUrl.match(/[?&]v=([\w-]{11})/) || this.youtubeUrl.match(/youtu\.be\/([\w-]{11})/);
    const videoId = match ? match[1] : null;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return this.youtubeUrl;
  }
}
