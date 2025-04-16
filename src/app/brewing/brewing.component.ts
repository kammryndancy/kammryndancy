import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { BeerRecipeComponent } from "./beer-recipe/beer-recipe.component";

@Component({
  selector: 'brewing',
  templateUrl: './brewing.component.html',
  styleUrls: ['./brewing.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    BeerRecipeComponent
  ],
  standalone: true
})
export class BrewingComponent {}
