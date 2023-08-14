import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";

@Component({
  selector: 'spirits',
  templateUrl: './spirits.component.html',
  styleUrls: ['./spirits.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
  ],
  standalone: true
})
export class SpiritsComponent {}
