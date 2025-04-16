import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LandingComponent } from '../components/landing/landing.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ScavengerHuntComponent as ComponentScavengerHunt } from '../components/component-scavenger-hunt/scavenger-hunt.component';
import { ImageProcessingService } from '../services/image-processing.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-scavenger-hunt',
  templateUrl: './scavenger-hunt.component.html',
  styleUrls: ['./scavenger-hunt.component.scss'],
  standalone: true,
  imports: [CommonModule, LandingComponent, FooterComponent, ComponentScavengerHunt],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScavengerHuntComponent implements OnInit {
  title = 'Nature Scavenger Hunt';
  description = 'Explore the great outdoors with our interactive scavenger hunt';
  defaultTextColor = '#ffffff';
  textColor$!: Observable<string>;

  constructor(private imageProcessingService: ImageProcessingService) {}

  ngOnInit() {
    this.updateImageAndColor();
  }

  private updateImageAndColor() {
    const image = this.getSeasonImage();
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
        morning: '/assets/images/landings/seasonal/spring-solitary-morning-forest.jpg',
        afternoon: '/assets/images/landings/seasonal/spring-road-forest.jpg',
        evening: '/assets/images/landings/seasonal/spring-morning-road-forest.jpg',
        night: '/assets/images/landings/seasonal/summer-evening-road-forest.jpg'
      },
      summer: {
        morning: '/assets/images/landings/seasonal/fall-morning-road-forest.jpg',
        afternoon: '/assets/images/landings/seasonal/fall-noon-road-forest.jpg',
        evening: '/assets/images/landings/seasonal/summer-evening-road-forest.jpg',
        night: '/assets/images/landings/seasonal/fall-night-road-forest.jpg'
      },
      fall: {
        morning: '/assets/images/landings/seasonal/fall-morning-road-forest.jpg',
        afternoon: '/assets/images/landings/seasonal/fall-noon-road-forest.jpg',
        evening: '/assets/images/landings/seasonal/fall-foggy-road-forest.jpg',
        night: '/assets/images/landings/seasonal/fall-night-road-forest.jpg'
      },
      winter: {
        morning: '/assets/images/landings/seasonal/winter-morning-road-forest.jpg',
        afternoon: '/assets/images/landings/seasonal/winter-solitary-forest.jpg',
        evening: '/assets/images/landings/seasonal/fall-morning-road-forest.jpg',
        night: '/assets/images/landings/seasonal/winter-morning-road-forest.jpg'
      }
    };

    return images[season][timeOfDay];
  }
}
