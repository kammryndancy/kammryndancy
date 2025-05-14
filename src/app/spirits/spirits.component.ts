import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { ProjectListComponent, ProjectEntry } from '../components/project/project-list.component';

@Component({
  selector: 'spirits',
  templateUrl: './spirits.component.html',
  styleUrls: ['./spirits.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    ProjectListComponent,
  ],
  standalone: true
})
export class SpiritsComponent {
  projects: ProjectEntry[] = [
    {
      images: [
        'assets/images/absinthe/absinthe_bottle.jpg',
        'assets/images/absinthe/absinthe_louche.jpg'
      ],
      title: 'Absinthe',
      description: 'This was my first attempt at absinthe, all that green is completely natural. The louche was really strong, I found the workwood came through really strong and bitter during maceration. I redistilled the product and macerated again with less wormwood, and the result was great. 65% ABV.',
      details: ['800mL - 91% Neutral Spirit', '28.5g - Wormwood', '8.5g - Hyssop', '7.5g - Melissa', '30.4g - Anise Seed', '31g - Fennel', '3.6g - Coriander', '1.5g - Chamomile', '4 - Basil Leaves', 'Maceration', '2g - Chamomile', '1.1g - Wormwood', '0.5g - Lemon Peel', '1g - Orange Peel', '4 - Dried Basil Leaves', '4 - Dried Mint Leaves']
    }
  ];
}
