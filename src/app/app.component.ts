import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Kammryn Dancy';
  toolsOpen = false;
  toolsActive = false;
  dndOpen = false;
  dndActive = false;

  constructor(private router: Router) {
    const updateActive = () => {
      const url = this.router.url || '';
      this.toolsActive = url.startsWith('/scavenger-hunt') || url.startsWith('/lonestar');
      this.dndActive = url.startsWith('/withaerstice') || url.startsWith('/blacksheep') || url.startsWith('/dnd');
    };
    // Set immediately for initial load
    updateActive();
    // Update on navigation end
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(updateActive);
  }
}
