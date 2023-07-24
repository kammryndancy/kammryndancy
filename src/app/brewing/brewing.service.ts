import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Brew } from './brew';
import { BREWS } from './mock-brews';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class BrewingService {

  constructor(private messageService: MessageService) { }

  getBrews(): Observable<Brew[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('BrewService: fetched brews');
    return of(BREWS);
  }

  getBrew(id: number | string) {
    return this.getBrews().pipe(
      // (+) before `id` turns the string into a number
      map((brews: Brew[]) => brews.find(brew => brew.id === +id)!)
    );
  }
}
