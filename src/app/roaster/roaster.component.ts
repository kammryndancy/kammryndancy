import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';

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
  youtubeUrl?: string;
}

@Component({
  selector: 'roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    NgFor,
    NgIf,
    SafeUrlPipe
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
      image: '/assets/images/woodwork/coffee_tray_main.jpg'
    },
    {
      name: 'Natural Gas Stove',
      description: 'A simple butane camping stove that has a single burner that produces 7,650 BTUs of heat. The stove heats up the roaster\'s steel mesh plate in order to emit infrared heat towards the coffee beans.',
      image: '/assets/images/coffee/coffee_chip_out.jpg'
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
      date: '2025-05-18',
      beanOrigin: 'Brazilian Anaerobic Honey',
      roastLevel: 'First Crack',
      image: '/assets/images/coffee/brazilian_honey.jpg',
      taste: 'Brown Sugar, Molasses, Hazelnut, Marmalade',
      youtubeUrl: 'https://youtu.be/TgdPxuEk_Qg'
    }
  ];

  getYoutubeEmbedUrl(youtubeUrl?: string): string | null {
    if (!youtubeUrl) return null;
    if (youtubeUrl.includes('youtube.com/embed/')) return youtubeUrl;
    const match = youtubeUrl.match(/[?&]v=([\w-]{11})/) || youtubeUrl.match(/youtu\.be\/([\w-]{11})/);
    const videoId = match ? match[1] : null;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return youtubeUrl;
  }
}

