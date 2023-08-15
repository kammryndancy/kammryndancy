import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { BaseComponent } from "../components/base/base.component";
import { HobbiesComponent } from "../components/services/hobbies.component";
import { MapComponent } from "../components/map/map.component";
import { PortfolioComponent } from "../components/portfolio/portfolio.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    LandingComponent,
    BaseComponent,
    FooterComponent,
    HobbiesComponent,
    MapComponent,
    PortfolioComponent
  ],
  standalone: true
})
export class HomeComponent {}
