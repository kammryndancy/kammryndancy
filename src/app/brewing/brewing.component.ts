import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { BeerRecipeComponent } from "./beer-recipe/beer-recipe.component";
import { BrewRequestFormComponent } from './brew-request-form.component';

@Component({
  selector: 'brewing',
  templateUrl: './brewing.component.html',
  styleUrls: ['./brewing.component.scss'],
  imports: [
    CommonModule,
    LandingComponent,
    FooterComponent,
    BeerRecipeComponent,
    BrewRequestFormComponent
  ],
  standalone: true
})
export class BrewingComponent {
  showBrewModal = false;

  openBrewModal() {
    this.showBrewModal = true;
  }

  closeBrewModal() {
    this.showBrewModal = false;
  }

  onFormSuccess() {
    this.closeBrewModal();
  }
}
