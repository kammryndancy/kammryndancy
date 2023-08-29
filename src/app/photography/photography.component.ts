import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { PhotoexamplesComponent } from "../components/photogrpahy/photoexamples.component";

@Component({
  selector: 'photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    PhotoexamplesComponent
  ],
  standalone: true
})
export class PhotographyComponent {}
