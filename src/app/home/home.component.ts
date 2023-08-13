import { Component } from '@angular/core';

import { TopsectionComponent} from "../components/topsection/topsection.component";
import { WedoComponent} from "../components/wedo/wedo.component";
import { FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TopsectionComponent,
    WedoComponent,
    FooterComponent
  ],
  standalone: true
})
export class HomeComponent {}
