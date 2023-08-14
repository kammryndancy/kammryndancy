import {NgModule} from '@angular/core';
import {provideRouter, Routes, withComponentInputBinding} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule {
}
