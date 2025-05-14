import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectImageSlideshowComponent } from './project-image-slideshow.component';

export interface ProjectEntry {
  images: string[];
  title: string;
  description: string;
  details?: string[];
}

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [CommonModule, ProjectImageSlideshowComponent],
  standalone: true
})
export class ProjectListComponent {
  @Input() projects: ProjectEntry[] = [];
}
