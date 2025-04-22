import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { BeerRecipeComponent } from "./beer-recipe/beer-recipe.component";
import { BrewRequestFormComponent } from './brew-request-form.component';
import { KammryndancyApiService } from '../services/kammryndancy-api.service';

interface BeerRecipe {
  name: string;
  youtubeUrl?: string;
  imageUrl?: string;
  malts: string[];
  hops: string[];
  yeast: string;
  adjuncts?: string[];
  abv: number;
  og: number;
  fg: number;
  srm: number;
  ibu: number;
  buGu: number;
  description: string;
  awards?: { name: string; competition: string; year: number; place: string }[];
}

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
export class BrewingComponent implements OnInit {
  showBrewModal = false;
  beerRecipes: any[] = [];
  loading = false;
  error: string | null = null;

  // Pagination
  recipesPerPage = 4;
  currentPage = 1;
  get totalPages(): number {
    return Math.ceil(this.beerRecipes.length / this.recipesPerPage);
  }
  get paginatedRecipes(): any[] {
    const start = (this.currentPage - 1) * this.recipesPerPage;
    return this.beerRecipes.slice(start, start + this.recipesPerPage);
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  constructor(private api: KammryndancyApiService) {}

  ngOnInit() {
    this.fetchBeerRecipes();
  }

  fetchBeerRecipes() {
    this.loading = true;
    this.api.getBeerRecipes().subscribe({
      next: (recipes) => {
        this.beerRecipes = Array.isArray(recipes) ? recipes : [];
        this.loading = false;
      },
      error: err => {
        console.log(JSON.stringify(err, null, 4));
        this.error = 'Failed to load beer recipes.';
        this.loading = false;
      }
    });
  }

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