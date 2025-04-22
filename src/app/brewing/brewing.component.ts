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

  // Recipe list
  recipes: BeerRecipe[] = [
    {
      name: 'Alsace Saison',
      youtubeUrl: 'https://www.youtube.com/watch?v=3rULfs9GeCk',
      malts: ['Pilsner 2-Row', 'Flaked Wheat', 'Wheat Malt','Rye Malt', 'Chit Malt', 'Caraaroma'],
      hops: ['Hallertau', 'Hallertau Blanc', 'Barbe Rouge'],
      yeast: 'French Saison Ale (M29)',
      abv: 6.3,
      og: 1.055,
      fg: 1.007,
      srm: 9,
      ibu: 28,
      buGu: 0.50,
      description: 'A dry, crisp, and refreshing saison, Alsace Saison is a perfect example of a French Saison. This beer has a malt and caramel character, and a bitterness that balances the sweetness of the malt.'
    },
    {
      name: 'Wild Fire Ale',
      youtubeUrl: 'https://www.youtube.com/watch?v=lWIohOInQY8',
      malts: ['Vienna Malt', 'ESB Pale Malt', 'Cherry Smoked Malt','Beechwood Smoked Malt', 'Rye Malt', 'Pale Chocolate', 'Crystal 120'],
      hops: ['Hallertau', 'East Kent Goldings', 'Amarillo'],
      yeast: 'Empire Ale (M15)',
      abv: 5.9,
      og: 1.059,
      fg: 1.014,
      srm: 24,
      ibu: 24,
      buGu: 0.41,
      description: 'Rauchbier made to emulate the smoke air of Alberta during the wildfire season. More than a hint of smoke, this beer has a malt and caramel character, and a bitterness that balances the sweetness of the malt.'
    },
    {
      name: 'Puny Pleasant',
      imageUrl: '/assets/images/beers/PunyPleasant.JPG',
      malts: ['Maris Otter Malt', 'Victory Malt', 'Melanoidin','Pale Chocolate Malt'],
      hops: ['Magnum', 'East Kent Goldings', 'Fuggles'],
      yeast: 'London ESB Ale (WY1968)',
      abv: 6,
      og: 1.061,
      fg: 1.015,
      srm: 14,
      ibu: 47,
      buGu: 0.77,
      description: 'A sweet, caramel malt ale with a touch of maple syrup, Canada Sap Ale is a perfect example of a Canadian-style ale. This beer has a malt and caramel character, and a bitterness that balances the sweetness of the malt. Sit back at the Cabane Au Sucre and enjoy a maple ale.',
      awards: [
        {
          name: 'English Ale',
          competition: 'Cowtown Yeast Wrangler Roundup',
          year: 2024,
          place: '2nd Place'
        }
      ]
    },
    {
      name: 'Canada Sap Ale',
      imageUrl: '/assets/images/beers/CanadaSapAle_Emblem.jpg',
      malts: ['Munich Malt', 'ESB Pale Malt', 'Melanoidin','Oats', 'Caraaroma', 'Crystal 60'],
      hops: ['Glacier', 'Vojvodina', 'Barbe Rouge'],
      yeast: 'London ESB Ale (WY1968)',
      adjuncts: ['Maple Syrup'],
      abv: 6.2,
      og: 1.066,
      fg: 1.019,
      srm: 24,
      ibu: 30,
      buGu: 0.46,
      description: 'A sweet, caramel malt ale with a touch of maple syrup, Canada Sap Ale is a perfect example of a Canadian-style ale. This beer has a malt and caramel character, and a bitterness that balances the sweetness of the malt. Sit back at the Cabane Au Sucre and enjoy a maple ale.'
    },
    {
      name: 'Archie Ale',
      imageUrl: '/assets/images/beers/ArchieAle.jpg',
      malts: ['ESB Pale Malt', 'Vienna Malt','Rye Malt', 'Cherry Smoked Malt', 'Dark Crystal', 'Medium Crystal', 'Chocolate Rye'],
      hops: ['Willamette', 'Goldings', 'Fuggles'],
      yeast: 'London Ale (WLP013)',
      abv: 6.4,
      og: 1.056,
      fg: 1.007,
      srm: 16,
      ibu: 24,
      buGu: 0.43,
      description: 'Brewed with Kieran Macauley to serve at the his wedding to Claudia Sacco, named after their dog Archie. This beer is robust Irish Red Ale with a malt and caramel character, and a bitterness that balances the sweetness of the malt.'
    },
    {
      name: 'Heavy K Ale',
      imageUrl: '/assets/images/beers/Macauley_Ale.jpg',
      malts: ['Munich Malt', 'Melanoidin','Medium Crystal', 'Caraaroma', 'Chit Malt'],
      hops: ['Hallertauer Mittelfrueh', 'Hallertau Blanc'],
      yeast: 'German Ale/Kolsch (WLP029)',
      abv: 5.3,
      og: 1.051,
      fg: 1.011,
      srm: 22,
      ibu: 13,
      buGu: 0.25,
      description: 'Brewed with Kieran Macauley to serve at the his birthday, sharing his nickname. A loose interpretation of a Munich Dunkel, this beer has a rich, malty character with a subtle caramel note.'
    },
    {
      name: 'Whinging Sipper',
      imageUrl: '/assets/images/beers/WhingingSipper.JPG',
      malts: ['Wheat Malt', 'ESB Pale Malt', '2-Row', 'Melanoidin', 'Flaked Wheat', 'Rice Hulls'],
      hops: ['Eclipse', 'Hallertau Blanc', 'Lotus'],
      yeast: 'French Saison (WY3711)',
      abv: 10.9,
      og: 1.100,
      fg: 1.017,
      srm: 14,
      ibu: 43,
      buGu: 0.43,
      description: 'A wheatwine that has a rich, malty character with a subtle caramel note. This beer is a big one, with a malt and caramel character, and a bitterness that balances the sweetness of the malt.',
      awards: [
        {
          name: 'Strong Ale',
          competition: 'Cowtown Yeast Wrangler Roundup',
          year: 2024,
          place: '2nd Place'
        }
      ]
    },
    {
      name: 'LoFi Murmur',
      imageUrl: '/assets/images/beers/LoFiMurmur.JPG',
      malts: ['Munich Malt', 'ESB Pale Malt', 'Melanoidin'],
      hops: ['East Kent Goldings', 'Fuggles', 'Barbe Rouge', 'Hallertau Blanc'],
      yeast: 'SafAle (S-33)',
      abv: 5.5,
      og: 1.053,
      fg: 1.015,
      srm: 10,
      ibu: 52,
      buGu: 0.89,
      description: 'The Munich malt contributes a bready, toasty flavor profile, while the Barbe Rouge (a type of Munich malt) adds a touch more caramel and toffee notes. The Hallertau Blanc hops would offer a floral, herbal aroma and a medium bitterness. ',
      awards: [
        {
          name: 'English Ale',
          competition: 'Cowtown Yeast Wrangler Roundup',
          year: 2024,
          place: '1st Place'
        }
      ]
    }
  ];

  // Pagination
  recipesPerPage = 4;
  currentPage = 1;
  get totalPages() {
    return Math.ceil(this.recipes.length / this.recipesPerPage);
  }

  get paginatedRecipes() {
    const start = (this.currentPage - 1) * this.recipesPerPage;
    return this.recipes.slice(start, start + this.recipesPerPage);
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

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
