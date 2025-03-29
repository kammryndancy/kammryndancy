import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PhotoItem {
  src: string;
  alt: string;
  groups: string[];
  title?: string;
  link?: string;
}

@Component({
  selector: 'photoexamples',
  templateUrl: './photoexamples.component.html',
  styleUrls: ['./photoexamples.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PhotoexamplesComponent implements OnInit {
  allPhotos: PhotoItem[] = [
    { src: '/assets/images/portfolio/tintin_lionel-1.jpg', alt: 'Tintin the Cat', groups: ['cats'], title: 'Tintin Lounging', link: 'https://example.com/tintin' },
    { src: '/assets/images/portfolio/yoshi-1.JPG', alt: 'Yoshi the Cat', groups: ['cats'], title: 'Yoshi Relaxing', link: 'https://example.com/yoshi' },
    { src: '/assets/images/portfolio/alfie.jpg', alt: 'Alfie the Dog', groups: ['dogs'], title: 'Alfie Playing', link: 'https://example.com/alfie' },
    { src: '/assets/images/portfolio/lionel-4.jpg', alt: 'Lionel the Cat', groups: ['cats'], title: 'Lionel Sleeping', link: 'https://example.com/lionel' },
    { src: '/assets/images/portfolio/thumper-1.JPG', alt: 'Thumper the Dog', groups: ['dogs'], title: 'Thumper Running', link: 'https://example.com/thumper' },
    { src: '/assets/images/portfolio/daisy-1.JPG', alt: 'Daisy the Cat', groups: ['cats'], title: 'Daisy Pouncing', link: 'https://example.com/daisy' },
    { src: '/assets/images/portfolio/hummingbird-1.JPG', alt: 'Hummingbird', groups: ['rest'], title: 'Hummingbird Flying', link: 'https://example.com/hummingbird' },
    { src: '/assets/images/portfolio/glyndwr-1.jpg', alt: 'Glyndwr the Cat', groups: ['cats'], title: 'Glyndwr Exploring', link: 'https://example.com/glyndwr' },
    { src: '/assets/images/portfolio/boo-1.JPG', alt: 'Boo the Cat', groups: ['cats'], title: 'Boo Hiding', link: 'https://example.com/boo' },
    { src: '/assets/images/portfolio/blue-1.jpg', alt: 'Blue the Dog', groups: ['dogs'], title: 'Blue Playing', link: 'https://example.com/blue' },
    { src: '/assets/images/portfolio/daisy-2.JPG', alt: 'Daisy the Cat', groups: ['cats'], title: 'Daisy Jumping', link: 'https://example.com/daisy' },
    { src: '/assets/images/portfolio/mallard-1.JPG', alt: 'Mallard', groups: ['rest'], title: 'Mallard Swimming', link: 'https://example.com/mallard' },
    { src: '/assets/images/portfolio/sahara-1.jpg', alt: 'Sahara the Cat', groups: ['cats'], title: 'Sahara Lounging', link: 'https://example.com/sahara' },
    { src: '/assets/images/portfolio/boo-2.JPG', alt: 'Boo the Cat', groups: ['cats'], title: 'Boo Pouncing', link: 'https://example.com/boo' },
    { src: '/assets/images/portfolio/birdo-1.JPG', alt: 'Birdo the Cat', groups: ['cats'], title: 'Birdo Flying', link: 'https://example.com/birdo' },
    { src: '/assets/images/portfolio/tintin-1.jpg', alt: 'Tintin the Cat', groups: ['cats'], title: 'Tintin Sleeping', link: 'https://example.com/tintin' },
    { src: '/assets/images/portfolio/bethany-1.jpg', alt: 'Bethany the Cat', groups: ['cats'], title: 'Bethany Playing', link: 'https://example.com/bethany' },
    { src: '/assets/images/portfolio/alfie-6.jpg', alt: 'Alfie the Dog', groups: ['dogs'], title: 'Alfie Running', link: 'https://example.com/alfie' },
    { src: '/assets/images/portfolio/birdo-2.JPG', alt: 'Birdo the Cat', groups: ['cats'], title: 'Birdo Jumping', link: 'https://example.com/birdo' },
    { src: '/assets/images/portfolio/lionel-6.jpg', alt: 'Lionel the Cat', groups: ['cats'], title: 'Lionel Pouncing', link: 'https://example.com/lionel' },
    { src: '/assets/images/portfolio/soleil-1.jpg', alt: 'Soleil the Cat', groups: ['cats'], title: 'Soleil Lounging', link: 'https://example.com/soleil' },
    { src: '/assets/images/portfolio/twigg-1.jpg', alt: 'Twigg the Cat', groups: ['cats'], title: 'Twigg Playing', link: 'https://example.com/twigg' },
    { src: '/assets/images/portfolio/daisy-3.JPG', alt: 'Daisy the Cat', groups: ['cats'], title: 'Daisy Hiding', link: 'https://example.com/daisy' },
    { src: '/assets/images/portfolio/boo-3.JPG', alt: 'Boo the Cat', groups: ['cats'], title: 'Boo Sleeping', link: 'https://example.com/boo' },
    { src: '/assets/images/portfolio/yoshi-2.JPG', alt: 'Yoshi the Cat', groups: ['cats'], title: 'Yoshi Exploring', link: 'https://example.com/yoshi' },
    { src: '/assets/images/portfolio/alfie-11.jpg', alt: 'Alfie the Dog', groups: ['dogs'], title: 'Alfie Playing', link: 'https://example.com/alfie' },
    { src: '/assets/images/portfolio/katashi-1.jpg', alt: 'Katashi the Cat', groups: ['cats'], title: 'Katashi Lounging', link: 'https://example.com/katashi' },
    { src: '/assets/images/portfolio/tintin_lionel-5.jpg', alt: 'Tintin and Lionel the Cats', groups: ['cats'], title: 'Tintin and Lionel Playing', link: 'https://example.com/tintin_lionel' },
    { src: '/assets/images/portfolio/bethany-2.jpg', alt: 'Bethany the Cat', groups: ['cats'], title: 'Bethany Jumping', link: 'https://example.com/bethany' },
    { src: '/assets/images/portfolio/luna-1.jpg', alt: 'Luna the Cat', groups: ['cats'], title: 'Luna Sleeping', link: 'https://example.com/luna' },
    { src: '/assets/images/portfolio/thumper-2.JPG', alt: 'Thumper the Dog', groups: ['dogs'], title: 'Thumper Running', link: 'https://example.com/thumper' },
    { src: '/assets/images/portfolio/birdo-3.JPG', alt: 'Birdo the Cat', groups: ['cats'], title: 'Birdo Flying', link: 'https://example.com/birdo' },
    { src: '/assets/images/portfolio/alfie-4.jpg', alt: 'Alfie the Dog', groups: ['dogs'], title: 'Alfie Playing', link: 'https://example.com/alfie' },
    { src: '/assets/images/portfolio/sahara-2.jpg', alt: 'Sahara the Cat', groups: ['cats'], title: 'Sahara Pouncing', link: 'https://example.com/sahara' },
    { src: '/assets/images/portfolio/boo-4.JPG', alt: 'Boo the Cat', groups: ['cats'], title: 'Boo Hiding', link: 'https://example.com/boo' },
    { src: '/assets/images/portfolio/glyndwr-2.jpg', alt: 'Glyndwr the Cat', groups: ['cats'], title: 'Glyndwr Exploring', link: 'https://example.com/glyndwr' },
    { src: '/assets/images/portfolio/daisy-4.JPG', alt: 'Daisy the Cat', groups: ['cats'], title: 'Daisy Jumping', link: 'https://example.com/daisy' },
    { src: '/assets/images/portfolio/tintin-2.jpg', alt: 'Tintin the Cat', groups: ['cats'], title: 'Tintin Sleeping', link: 'https://example.com/tintin' },
    { src: '/assets/images/portfolio/alfie-10.jpg', alt: 'Alfie the Dog', groups: ['dogs'], title: 'Alfie Running', link: 'https://example.com/alfie' },
    { src: '/assets/images/portfolio/twigg-2.jpg', alt: 'Twigg the Cat', groups: ['cats'], title: 'Twigg Playing', link: 'https://example.com/twigg' },
    { src: '/assets/images/portfolio/soleil-2.jpg', alt: 'Soleil the Cat', groups: ['cats'], title: 'Soleil Lounging', link: 'https://example.com/soleil' },
    { src: '/assets/images/portfolio/birdo-4.JPG', alt: 'Birdo the Cat', groups: ['cats'], title: 'Birdo Flying', link: 'https://example.com/birdo' },
    { src: '/assets/images/portfolio/lionel-3.jpg', alt: 'Lionel the Cat', groups: ['cats'], title: 'Lionel Pouncing', link: 'https://example.com/lionel' },
    { src: '/assets/images/portfolio/boo-5.JPG', alt: 'Boo the Cat', groups: ['cats'], title: 'Boo Sleeping', link: 'https://example.com/boo' },
    { src: '/assets/images/portfolio/tintin-3.jpg', alt: 'Tintin the Cat', groups: ['cats'], title: 'Tintin Exploring', link: 'https://example.com/tintin' },
    { src: '/assets/images/portfolio/katashi-2.jpg', alt: 'Katashi the Cat', groups: ['cats'], title: 'Katashi Lounging', link: 'https://example.com/katashi' },
    { src: '/assets/images/portfolio/yoshi-3.JPG', alt: 'Yoshi the Cat', groups: ['cats'], title: 'Yoshi Relaxing', link: 'https://example.com/yoshi' },
    { src: '/assets/images/portfolio/hummingbird-3.JPG', alt: 'Hummingbird', groups: ['rest'], title: 'Hummingbird Flying', link: 'https://example.com/hummingbird' },
    { src: '/assets/images/portfolio/tintin_lionel-6.jpg', alt: 'Tintin and Lionel the Cats', groups: ['cats'], title: 'Tintin and Lionel Playing', link: 'https://example.com/tintin_lionel' },
    { src: '/assets/images/portfolio/alfie-7.jpg', alt: 'Alfie the Dog', groups: ['dogs'], title: 'Alfie Playing', link: 'https://example.com/alfie' },
    { src: '/assets/images/portfolio/sahara-3.jpg', alt: 'Sahara the Cat', groups: ['cats'], title: 'Sahara Pouncing', link: 'https://example.com/sahara' },
    { src: '/assets/images/portfolio/birdo-5.JPG', alt: 'Birdo the Cat', groups: ['cats', 'dogs'], title: 'Birdo Flying', link: 'https://example.com/birdo' },
    { src: '/assets/images/portfolio/alfie-9.jpg', alt: 'Alfie the Dog', groups: ['dogs'], title: 'Alfie Running', link: 'https://example.com/alfie' },
    { src: '/assets/images/portfolio/twigg-3.jpg', alt: 'Twigg the Cat', groups: ['cats'], title: 'Twigg Playing', link: 'https://example.com/twigg' },
    { src: '/assets/images/portfolio/soleil-3.jpg', alt: 'Soleil the Cat', groups: ['cats'], title: 'Soleil Lounging', link: 'https://example.com/soleil' },
    { src: '/assets/images/portfolio/daisy-5.JPG', alt: 'Daisy the Cat', groups: ['cats'], title: 'Daisy Jumping', link: 'https://example.com/daisy' },
    { src: '/assets/images/portfolio/tintin_lionel-2.jpg', alt: 'Tintin and Lionel the Cats', groups: ['cats'], title: 'Tintin and Lionel Playing', link: 'https://example.com/tintin_lionel' },
    { src: '/assets/images/portfolio/glyndwr-3.jpg', alt: 'Glyndwr the Cat', groups: ['cats'], title: 'Glyndwr Exploring', link: 'https://example.com/glyndwr' },
    { src: '/assets/images/portfolio/boo-6.JPG', alt: 'Boo the Cat', groups: ['cats'], title: 'Boo Sleeping', link: 'https://example.com/boo' },
    { src: '/assets/images/portfolio/alfie-2.jpg', alt: 'Alfie the Dog', groups: ['dogs'], title: 'Alfie Playing', link: 'https://example.com/alfie' },
    { src: '/assets/images/portfolio/lionel-2.jpg', alt: 'Lionel the Cat', groups: ['cats'], title: 'Lionel Pouncing', link: 'https://example.com/lionel' },
    { src: '/assets/images/portfolio/thumper-3.JPG', alt: 'Thumper the Dog', groups: ['dogs'], title: 'Thumper Running', link: 'https://example.com/thumper' },
    { src: '/assets/images/portfolio/birdo-6.JPG', alt: 'Birdo the Cat', groups: ['cats'], title: 'Birdo Flying', link: 'https://example.com/birdo' },
    { src: '/assets/images/portfolio/katashi-3.jpg', alt: 'Katashi the Cat', groups: ['cats'], title: 'Katashi Lounging', link: 'https://example.com/katashi' }
  ];

  filteredPhotos: PhotoItem[] = [];
  visiblePhotos: PhotoItem[] = [];
  currentGroup: string = 'all';
  photosPerLoad: number = 8;
  currentPage: number = 1;

  ngOnInit(): void {
    this.filterPhotos(this.currentGroup);
  }

  filterPhotos(group: string): void {
    this.currentGroup = group;
    this.currentPage = 1;

    // Filter photos based on group
    this.filteredPhotos = group === 'all' 
      ? this.allPhotos 
      : this.allPhotos.filter(photo => photo.groups.includes(group));
    
    // Load initial set of photos (8 photos)
    this.visiblePhotos = this.filteredPhotos.slice(0, this.photosPerLoad);
  }

  loadMorePhotos(): void {
    const startIndex = this.currentPage * this.photosPerLoad;
    const endIndex = startIndex + this.photosPerLoad;
    
    const morePhotos = this.filteredPhotos.slice(startIndex, endIndex);
    
    // Add new photos to existing visible photos
    this.visiblePhotos = [
      ...this.visiblePhotos, 
      ...morePhotos
    ];

    // Increment page
    this.currentPage++;
  }

  // Determine if more photos can be loaded
  get hasMorePhotos(): boolean {
    return this.visiblePhotos.length < this.filteredPhotos.length;
  }

  // Track photos for performance optimization
  trackByFn(index: number, item: PhotoItem): string {
    return item.src;
  }
}
