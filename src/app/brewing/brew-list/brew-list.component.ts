import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BrewingService } from '../brewing.service';
import { Brew } from '../brew';

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.scss']
})
export class BrewListComponent implements OnInit {
  brews$!: Observable<Brew[]>;
  selectedId = 0;

  constructor(
    private service: BrewingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.brews$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getBrews();
      })
    );
  }
}
