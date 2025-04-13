import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../components/landing/landing.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ImageProcessingService } from '../services/image-processing.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'scavenger-hunt',
  templateUrl: './scavenger-hunt.component.html',
  styleUrls: ['./scavenger-hunt.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LandingComponent,
    FooterComponent
  ]
})
export class ScavengerHuntComponent implements OnInit {
  currentImage: string = '';
  textColor$!: Observable<string>;
  defaultTextColor = '#ffffff';

  constructor(private imageProcessingService: ImageProcessingService) {}

  ngOnInit() {
    this.updateImageAndColor();
  }

  private updateImageAndColor() {
    const image = this.getSeasonImage();
    this.currentImage = image;
    this.textColor$ = this.imageProcessingService.getContrastColor(image).pipe(
      catchError(() => of(this.defaultTextColor))
    );
  }

  getSeasonImage(): string {
    const date = new Date();
    const month = date.getMonth();
    const hour = date.getHours();
    
    // Determine season
    let season: 'spring' | 'summer' | 'fall' | 'winter';
    
    if (month >= 3 && month < 6) season = 'spring';
    else if (month >= 6 && month < 9) season = 'summer';
    else if (month >= 9 && month < 12) season = 'fall';
    else season = 'winter';

    // Determine time of day
    let timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
    
    if (hour >= 5 && hour < 12) timeOfDay = 'morning';
    else if (hour >= 12 && hour < 18) timeOfDay = 'afternoon';
    else if (hour >= 18 && hour < 22) timeOfDay = 'evening';
    else timeOfDay = 'night';

    // Return appropriate image based on season and time of day
    const images = {
      spring: {
        morning: '/assets/images/landings/oaks-spring.jpg',
        afternoon: '/assets/images/landings/road-forest-spring.jpg',
        evening: '/assets/images/landings/forest-summer.jpg',
        night: '/assets/images/landings/green-forest.jpg'
      },
      summer: {
        morning: '/assets/images/landings/forest-summer.jpg',
        afternoon: '/assets/images/landings/oaks-spring.jpg',
        evening: '/assets/images/landings/road-forest-spring.jpg',
        night: '/assets/images/landings/larch-valley.jpg'
      },
      fall: {
        morning: '/assets/images/landings/forest-fall.jpg',
        afternoon: '/assets/images/landings/road-forest-fall.jpg',
        evening: '/assets/images/landings/oaks-forest.jpg',
        night: '/assets/images/landings/dead-forest.jpg'
      },
      winter: {
        morning: '/assets/images/landings/forest-winter.jpg',
        afternoon: '/assets/images/landings/snow-lake.jpg',
        evening: '/assets/images/landings/snowy-forest.jpg',
        night: '/assets/images/landings/dead-forest.jpg'
      }
    };

    return images[season][timeOfDay];
  }
}
