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
  AddBackgroundCssStyle(imageId: String | undefined) {
    let CssStyles = {
      'background': 'url(/assets/images/green-forest.jpg) no-repeat center / cover'
    }
    if (imageId != null) {
      CssStyles = {
        'background': 'url('+ imageId +') no-repeat center / cover'
      }
    }
    return CssStyles
  }
}
