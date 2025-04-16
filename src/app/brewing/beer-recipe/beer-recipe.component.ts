import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule]
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
    const index = Math.min(Math.floor(this.srm), srmColors.length - 1);
    return srmColors[index];
  }

  getScalePercent(value: number, min: number, max: number): number {
    // Clamp value within min/max
    const clamped = Math.max(min, Math.min(value, max));
    return ((clamped - min) / (max - min)) * 100;
  }
}
