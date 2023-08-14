import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";

@Component({
  selector: 'roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
  ],
  standalone: true
})
export class RoasterComponent {}
