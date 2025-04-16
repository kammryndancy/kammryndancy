import { Component, Input } from '@angular/core';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [
    NgStyle
  ],
  standalone: true
})
export class LandingComponent {
  @Input() greeting: string | undefined;
  @Input() message: string | undefined;
  @Input() noticeButton: string | undefined;
  @Input() imageId: string | undefined;
  @Input() textColor: string | null = '#ffffff'; // Default to white text

  AddBackgroundCssStyle(imageId: string | undefined): { [key: string]: string } {
    let CssStyles: { [key: string]: string } = {
      'background': 'url(/assets/images/green-forest.jpg) no-repeat center / cover'
    };
    if (imageId != null) {
      CssStyles = {
        'height': '100vh',
        'background': 'url(' + imageId + ') no-repeat center / cover'
      };
    }
    return CssStyles;
  }
}
