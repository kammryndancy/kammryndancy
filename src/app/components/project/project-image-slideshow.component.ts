import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-image-slideshow',
  templateUrl: './project-image-slideshow.component.html',
  styleUrls: ['./project-image-slideshow.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectImageSlideshowComponent {
  @Input() images: string[] = [];
  @Input() alt = '';
  currentIndex = 0;
  intervalId: any;
  paused = true;
  isFading = false;

  // Modal logic
  modalOpen = false;
  modalIndex = 0;

  // Portrait detection
  isPortrait: boolean = false;
  isModalPortrait: boolean = false;

  ngOnInit() {
    this.updatePortrait();
    if (this.images.length > 1) {
      this.startSlideshow();
    }
  }
  ngOnChanges() {
    this.updatePortrait();
  }
  ngOnDestroy() {
    this.stopSlideshow();
    this.removeEscapeListener();
  }
  startSlideshow() {
    this.stopSlideshow();
    if (!this.paused) {
      this.intervalId = setInterval(() => {
        this.fadeToImage((this.currentIndex + 1) % this.images.length);
      }, 3000);
    }
  }
  stopSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  togglePause() {
    this.paused = !this.paused;
    if (this.paused) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  }
  fadeToImage(nextIndex: number) {
    this.isFading = true;
    setTimeout(() => {
      this.currentIndex = nextIndex;
      this.isFading = false;
      this.updatePortrait();
    }, 350);
  }
  prevImage() {
    this.fadeToImage((this.currentIndex - 1 + this.images.length) % this.images.length);
    this.restartIfNotPaused();
  }
  nextImage() {
    this.fadeToImage((this.currentIndex + 1) % this.images.length);
    this.restartIfNotPaused();
  }
  restartIfNotPaused() {
    if (!this.paused) {
      this.startSlideshow();
    }
  }

  // Modal methods
  openModal(index: number) {
    this.modalOpen = true;
    this.modalIndex = index;
    this.paused = true;
    this.stopSlideshow();
    this.updateModalPortrait();
    this.addEscapeListener();
  }
  closeModal() {
    this.modalOpen = false;
    this.removeEscapeListener();
  }
  modalPrev() {
    this.modalIndex = (this.modalIndex - 1 + this.images.length) % this.images.length;
    this.updateModalPortrait();
  }
  modalNext() {
    this.modalIndex = (this.modalIndex + 1) % this.images.length;
    this.updateModalPortrait();
  }
  addEscapeListener() {
    window.addEventListener('keydown', this.handleEscape);
  }
  removeEscapeListener() {
    window.removeEventListener('keydown', this.handleEscape);
  }
  handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  // Portrait detection logic
  updatePortrait() {
    this.isPortrait = false;
    if (this.images && this.images.length > 0) {
      const img = new window.Image();
      img.onload = () => {
        this.isPortrait = img.height > img.width;
      };
      img.src = this.images[this.currentIndex];
    }
  }
  updateModalPortrait() {
    this.isModalPortrait = false;
    if (this.images && this.images.length > 0) {
      const img = new window.Image();
      img.onload = () => {
        this.isModalPortrait = img.height > img.width;
      };
      img.src = this.images[this.modalIndex];
    }
  }
}
