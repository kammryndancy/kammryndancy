import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Brew } from './brew';
import { BREWS } from './mock-brews';

@Injectable({
  providedIn: 'root',
})
export class BrewingService {

  constructor() { }

  getBrews(): Observable<Brew[]> {
    return of(BREWS);
  }

  getBrew(id: number | string) {
    return this.getBrews().pipe(
      // (+) before `id` turns the string into a number
      // @ts-ignore
      map((brews: Brew[]) => brews.find((brew: { id: number; }) => brew.id === +id)!)
    );
  }
}
