import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavComponent } from './nav/nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, NavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Kammryn Dancy';
  toolsOpen = false;
  toolsActive = false;
  dndOpen = false;
  dndActive = false;
  menuTextColor: string = '';
  menuActiveColor: string = '';

  constructor(private router: Router) {
    const updateActive = () => {
      const url = this.router.url || '';
      this.toolsActive = url.startsWith('/scavenger-hunt') || url.startsWith('/quilt');
      this.dndActive = url.startsWith('/withaerstice') || url.startsWith('/blacksheep') || url.startsWith('/dnd');
      if (url.startsWith('/quilt')) {
        this.menuTextColor = '#314e2a';
        this.menuActiveColor = '#10ce10';
      } else if (url.startsWith('/brewing') || url.startsWith('/spirits') || this.dndActive || this.toolsActive) {
        this.menuActiveColor = '#10ce10';
      } else if (url.startsWith('/scavenger-hunt')) {
        this.menuTextColor = '#d8e6d5ff';
      } else {
        this.menuTextColor = '';
        this.menuActiveColor = '#292e29ff';
      }
    };
    // Set immediately for initial load
    updateActive();
    // Update on navigation end
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(updateActive);
  }
}
