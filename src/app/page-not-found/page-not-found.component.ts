import { Component } from '@angular/core';
import {LandingComponent} from "../components/landing/landing.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  imports: [ LandingComponent, FooterComponent ],
  standalone: true
})
export class PageNotFoundComponent {}
