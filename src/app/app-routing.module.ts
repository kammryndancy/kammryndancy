import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { HomeComponent } from "./home/home.component";
import { BrewingComponent} from "./brewing/brewing.component";
import { WoodworkingComponent } from "./woodwork/woodworking.component";
import { SpiritsComponent } from "./spirits/spirits.component";
import { RoasterComponent } from "./roaster/roaster.component";
import { DndComponent } from "./dnd/dnd.component";
import { PhotographyComponent } from "./photography/photography.component";
import { ScavengerHuntComponent } from "./scavenger-hunt/scavenger-hunt.component";

export const routes: Routes = [
  {
    path: 'roaster',
    loadComponent: () => import('./roaster/roaster.component').then(m => m.RoasterComponent)
  },
  {
    path: 'spirits',
    loadComponent: () => import('./spirits/spirits.component').then(m => m.SpiritsComponent)
  },
  {
    path: 'woodwork',
    loadComponent: () => import('./woodwork/woodworking.component').then(m => m.WoodworkingComponent)
  },
  {
    path: 'brewing',
    loadComponent: () => import('./brewing/brewing.component').then(m => m.BrewingComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'withaerstice',
    loadComponent: () => import('./dnd/dnd.component').then(m => m.DndComponent)
  },
  {
    path: 'blacksheep',
    loadComponent: () => import('./dnd/dnd.component').then(m => m.DndComponent)
  },
  {
    path: 'dnd',
    loadComponent: () => import('./dnd/dnd.component').then(m => m.DndComponent)
  },
  {
    path: 'photography',
    loadComponent: () => import('./photography/photography.component').then(m => m.PhotographyComponent)
  },
  {
    path: 'scavenger-hunt',
    loadComponent: () => import('./scavenger-hunt/scavenger-hunt.component').then(m => m.ScavengerHuntComponent)
  },
  {
    path: 'lonestar',
    loadComponent: () => import('./lone-star/lone-star.component').then(m => m.LoneStarComponent)
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
