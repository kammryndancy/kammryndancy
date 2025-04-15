import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { generateScavengerHuntItems, ScavengerHuntGeneratorConfig, ScavengerHuntItem } from '../../utils/scavengerHuntGenerator';

@Component({
  selector: 'component-scavenger-hunt',
  templateUrl: './scavenger-hunt.component.html',
  styleUrls: ['./scavenger-hunt.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ScavengerHuntComponent {
  @Input() title = 'Nature Scavenger Hunt';
  @Input() description = 'Explore the great outdoors with our interactive scavenger hunt';

  scavengerHuntItems: ScavengerHuntItem[] = [];
  isHuntGenerated = false;
  completedCount = 0;
  userName: string = '';

  scavengerHuntForm: FormGroup;

  // Modal state for image preview
  selectedImage: string | null = null;
  selectedName: string | null = null;
  selectedDescription: string | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.scavengerHuntForm = this.formBuilder.group({
      userName: [''],
      itemCount: ['5', [Validators.required, Validators.min(1), Validators.max(20)]],
      season: ['spring', Validators.required],
      includeAnimals: [true],
      includePlants: [true],
      includeInsects: [true]
    });
  }

  ngOnInit() {}

  generateHunt() {
    if (this.scavengerHuntForm.valid) {
      this.userName = this.scavengerHuntForm.value.userName;
      const formData = this.scavengerHuntForm.value;
      
      // Convert form values to proper types for the generator
      const config: ScavengerHuntGeneratorConfig = {
        count: parseInt(formData.itemCount || '5'),
        season: formData.season || 'spring',
        includeAnimals: !!formData.includeAnimals,
        includePlants: !!formData.includePlants,
        includeInsects: !!formData.includeInsects
      };
      
      console.log('Generating hunt with config:', config);
      const items = generateScavengerHuntItems(config);
      console.log('Generated items:', items);
      
      this.scavengerHuntItems = items;
      this.isHuntGenerated = true;
      this.completedCount = 0;
    } else {
      console.log('Form is invalid:', this.scavengerHuntForm.errors);
    }
  }

  toggleComplete(index: number) {
    this.scavengerHuntItems[index].completed = !this.scavengerHuntItems[index].completed;
    this.updateProgress();
  }

  private updateProgress() {
    this.completedCount = this.scavengerHuntItems.filter(item => item.completed).length;
  }

  resetHunt() {
    this.isHuntGenerated = false;
    this.scavengerHuntItems = [];
    this.completedCount = 0;
    this.userName = '';
    this.scavengerHuntForm.reset({
      userName: '',
      itemCount: '5',
      season: 'spring',
      includeAnimals: true,
      includePlants: true,
      includeInsects: true
    });
  }

  openImageModal(image: string, name: string, description: string): void {
    this.selectedImage = image;
    this.selectedName = name;
    this.selectedDescription = description;
  }

  closeImageModal(): void {
    this.selectedImage = null;
    this.selectedName = null;
    this.selectedDescription = null;
  }
}
