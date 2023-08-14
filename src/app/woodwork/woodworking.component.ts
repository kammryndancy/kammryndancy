import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";

@Component({
  selector: 'woodworking',
  templateUrl: './woodworking.component.html',
  styleUrls: ['./woodworking.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
  ],
  standalone: true
})
export class WoodworkingComponent {}
