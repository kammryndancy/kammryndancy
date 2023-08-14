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

const routes: Routes = [
  {
    path: 'roaster',
    component: RoasterComponent
  },
  {
    path: 'spirits',
    component: SpiritsComponent
  },
  {
    path: 'woodwork',
    component: WoodworkingComponent
  },
  {
    path: 'brewing',
    component: BrewingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'withaerstice',
    component: DndComponent
  },
  {
    path: 'blacksheep',
    component: DndComponent
  },
  {
    path: 'dnd',
    component: DndComponent
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
