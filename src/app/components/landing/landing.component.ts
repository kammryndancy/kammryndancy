import {Component, Input} from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true
})
export class LandingComponent {
  @Input() greeting: string | undefined;
  @Input() message: string | undefined;
  @Input() alarm: string | undefined;
}
