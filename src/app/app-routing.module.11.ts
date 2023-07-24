import {NgModule} from '@angular/core';
import {provideRouter, Routes, withComponentInputBinding} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: () =>
      import('./brewing/brewing.module').then(m => m.BrewingModule),
    data: {preload: true}
  },
  {path: '', redirectTo: '/superheroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule {
}
