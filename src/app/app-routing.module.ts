import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  // {
  //   path: 'brewing',
  //   loadChildren: () => import('./brewing/brewing.module').then(m => m.BrewingModule),
  //   data: { preload: true }
  // },
  {
    path: 'DND',
    component: HomeComponent
  },
  {
    path: 'roaster',
    component: HomeComponent
  },
  {
    path: 'whiskey',
    component: HomeComponent
  },
  {
    path: 'woodwork',
    component: HomeComponent
  },
  {
    path: 'brewing',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
