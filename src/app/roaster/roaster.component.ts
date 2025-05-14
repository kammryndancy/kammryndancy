import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";

interface RoastEquipment {
  name: string;
  description: string;
  image: string;
  link?: string;
}

interface RoastHistory {
  date: string;
  beanOrigin: string;
  roastLevel: string;
  image: string;
  taste: string;
}

@Component({
  selector: 'roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    NgFor,
    NgIf
  ],
  standalone: true
})
export class RoasterComponent {
  equipment: RoastEquipment[] = [
    {
      name: 'Auvelcraft Infrared Coffee Roaster',
      description: 'Used over natural gas stove, this tiny machine produces a fantastic and consistent roast in batches of 50g - 200g. Taking between 11-15 minutes to roast a batch depending on desired roast level.',
      image: '/assets/images/coffee/coffee_roaster.avif',
      link: 'https://www.auvelcraft.co.jp/'
    },
    {
      name: 'Metal Cooling Tray',
      description: 'Simple barbeque vegetable roaster used as a cooling tray with integrated fan system to rapidly halt the roasting process and preserve bean flavor.',
      image: '/assets/images/coffee/coffee_colombian_tray.jpg'
    },
    {
      name: 'Natural Gas Stove',
      description: 'A simple natural gas stove used to heat up the roasters steel mesh plate in order to emit infrared heat towards the coffee beans.',
      image: '/assets/images/coffee/coffee_colombian_tray.jpg'
    }
  ];

  roastHistory: RoastHistory[] = [
    {
      date: '2024-03-15',
      beanOrigin: 'Colombian High Altitude',
      roastLevel: 'First Crack',
      image: '/assets/images/coffee/coffee_colombian_tray.jpg',
      taste: 'Chocolate, Blackberry, Nutty'
    },
    {
      date: '2024-04-22',
      beanOrigin: 'Ethiopian Yirgacheffe',
      roastLevel: 'City/First Crack+/First Crack/Green',
      image: '/assets/images/coffee/coffee_yirgacheffe_jars.jpg',
      taste: 'Citrus, Floral, Nutty, Molasses'
    },
    {
      date: '2024-05-10',
      beanOrigin: 'Brazilian Anaerobic Honey',
      roastLevel: 'First Crack+',
      image: '/assets/images/coffee/brazilian_honey.jpg',
      taste: 'Citrus, Floral, Oranges, Tannic'
    }
  ];
}
