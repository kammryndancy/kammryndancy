import { Component, HostBinding, Input } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  toolsOpen = false;
  toolsActive = false;
  dndOpen = false;
  dndActive = false;

  @Input() baseTextColor: string = '';
  @HostBinding('style.--menu-base-color')
  get menuBaseColorVar(): string | null {
    return this.baseTextColor || null;
  }

  @Input() activeLinkColor: string = '';
  @HostBinding('style.--menu-active-color')
  get menuActiveColorVar(): string | null {
    return this.activeLinkColor || null;
  }

  constructor(private router: Router) {
    const updateActive = () => {
      const url = this.router.url || '';
      this.toolsActive = url.startsWith('/scavenger-hunt') || url.startsWith('/quilt');
      this.dndActive = url.startsWith('/withaerstice') || url.startsWith('/blacksheep') || url.startsWith('/dnd');
    };
    updateActive();
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(updateActive);
  }
}
