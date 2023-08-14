import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";

@Component({
  selector: 'dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
  ],
  standalone: true
})
export class DndComponent {}
