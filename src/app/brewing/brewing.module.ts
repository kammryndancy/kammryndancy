import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrewListComponent } from './brew-list/brew-list.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';

import { BrewingRoutingModule } from './brewing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrewingRoutingModule
  ],
  declarations: [
    BrewListComponent,
    BrewDetailComponent
  ]
})
export class BrewingModule {}
