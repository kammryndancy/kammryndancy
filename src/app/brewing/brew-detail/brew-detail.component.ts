import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Brew} from '../brew';
import {BrewingService} from '../brewing.service';

@Component({
  selector: 'app-brew-detail',
  templateUrl: './brew-detail.component.html',
  styleUrls: ['./brew-detail.component.scss']
})
export class BrewDetailComponent implements OnInit {
  brew$!: Observable<Brew>;

  constructor(private route: ActivatedRoute, private router: Router, private service: BrewingService) {
  }


  ngOnInit() {
    this.brew$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getBrew(params.get('id')!)));
  }

  gotoBrews(brew: Brew) {
    const brewId = brew ? brew.id : null;
    // Pass along the brew id if available
    // so that the BrewList component can select that brew.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/superheroes', {id: brewId, foo: 'foo'}]);
  }
}
