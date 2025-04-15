import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { PortfolioPhotosComponent } from '../components/portfolio-photos/portfolio-photos.component';

@Component({
  selector: 'photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    PortfolioPhotosComponent
  ],
  standalone: true
})
export class PhotographyComponent {}
