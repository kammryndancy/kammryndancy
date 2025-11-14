import { Component } from '@angular/core';

import { LandingComponent } from "../components/landing/landing.component";
import { FooterComponent } from "../components/footer/footer.component";
import { LoneStarVisualizerComponent } from './lone-star-visualizer.component';

@Component({
  selector: 'app-lone-star',
  standalone: true,
  templateUrl: './lone-star.component.html',
  styleUrls: ['./lone-star.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    LoneStarVisualizerComponent
  ]
})
export class LoneStarComponent {}
