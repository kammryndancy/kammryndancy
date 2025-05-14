import { Component } from '@angular/core';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { ProjectListComponent, ProjectEntry } from '../components/project/project-list.component';

@Component({
  selector: 'woodworking',
  templateUrl: './woodworking.component.html',
  styleUrls: ['./woodworking.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    ProjectListComponent,
  ],
  standalone: true
})
export class WoodworkingComponent {
  projects: ProjectEntry[] = [
    {
      images: [
        'assets/images/woodwork/d20_flower_mat.jpg',
        'assets/images/woodwork/d20_flower_projection.jpg',
        'assets/images/woodwork/d20_dragon_1.jpg',
        'assets/images/woodwork/d20_dragon_2.jpg',
        'assets/images/woodwork/d20_dragon_blue.jpg'
      ],
      title: 'D20 Lamp - Laser Cut/Engraved',
      description: 'Not entirely orginal but believe it or not I did design it from the ground up. The lamp stands at about 20cm tall and wide. Cut using 1.5mm plywood and assembled with UV resin with a wifi connected LED light inside. The first one was made with a flower motif and sproudly sits on my desk. The second made as a gift was adorned with a dragon motif.'
    },
    {
      images: ['assets/images/woodwork/sprout_stand_full.jpg', 'assets/images/woodwork/sprout_stand_side.jpg', 'assets/images/woodwork/sprout_stand_detail.jpg'],
      title: 'Sprouting Jar Stand',
      description: 'Made using oak wood and brass rods, this stand is meant to allow seeds to drain and promote their sprouting. The stand is about 15cm tall, 20cm deep and 35cm wide. The internal structure was sized to allow a small tray to sit and gather draining water. Simple but effective.'
    },
    {
      images: ['assets/images/woodwork/ChristmasOrnament.jpg'],
      title: 'Christmas Ornaments - Laser Cut/Engraved',
      description: 'Made using 1.5mm plywood, wrapping paper, twine, artificial flowers, and UV resin. Made for the members of theDungeons and Dragons campaign I am DMing. The ornaments are about 10cm tall and wide. Merry Critmas!'
    },
    {
      images: ['assets/images/woodwork/dice_tower_closed.jpg', 'assets/images/woodwork/dice_tower_open.jpg'],
      title: 'Dice Tower - Laser Cut/Engraved',
      description: 'A rather large dice tower made using 3.5mm red oak plywood. This is not my design but instead downloaded from Etsy. The tower is about 25cm tall and 15cm wide. This tower was made as a gift.'
    }
  ];
}
