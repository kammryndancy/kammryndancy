import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { generateScavengerHuntItems, ScavengerHuntGeneratorConfig, ScavengerHuntItem } from '../../utils/scavengerHuntGenerator';
import { KammryndancyApiService } from '../../services/kammryndancy-api.service';
import { v4 as uuidv4 } from 'uuid';

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

  constructor(private formBuilder: FormBuilder, private api: KammryndancyApiService) {
    this.scavengerHuntForm = this.formBuilder.group({
      userName: [''],
      itemCount: ['5', [Validators.required, Validators.min(1), Validators.max(20)]],
      season: ['spring', Validators.required],
      includeAnimals: [true],
      includePlants: [true],
      includeInsects: [true]
    });
  }

  ngOnInit() {
    // On load, check for persisted hunt
    const huntId = localStorage.getItem('huntId');
    const finderName = localStorage.getItem('finderName');
    if (huntId && finderName) {
      this.api.getPersistentHunt(huntId).subscribe(
        (hunt) => {
          this.userName = hunt.finderName;
          this.scavengerHuntItems = hunt.items;
          this.isHuntGenerated = true;
          this.completedCount = hunt.items.filter((item: any) => item.completed).length;
        },
        () => {
          // If not found, clear storage
          localStorage.removeItem('huntId');
          localStorage.removeItem('finderName');
        }
      );
    }
  }

  async generateHunt() {
    if (this.scavengerHuntForm.valid) {
      this.userName = this.scavengerHuntForm.value.userName;
      const formData = this.scavengerHuntForm.value;
      const params: any = {
        count: parseInt(formData.itemCount || '5'),
        season: formData.season || 'spring',
        animals: formData.includeAnimals,
        plants: formData.includePlants,
        insects: formData.includeInsects
      };
      try {
        const items = await this.api.getScavengerHuntFiltered(params).toPromise();
        // Persist hunt in backend
        this.api.createPersistentHunt({ finderName: this.userName, items }).subscribe((res) => {
          localStorage.setItem('huntId', res.huntId);
          localStorage.setItem('finderName', this.userName);
          this.scavengerHuntItems = res.hunt.items;
          this.isHuntGenerated = true;
          this.completedCount = 0;
        });
      } catch (err) {
        // handle error
      }
    }
  }

  resetHunt() {
    const huntId = localStorage.getItem('huntId');
    if (huntId) {
      this.api.deletePersistentHunt(huntId).subscribe(() => {
        localStorage.removeItem('huntId');
        localStorage.removeItem('finderName');
        this.isHuntGenerated = false;
        this.scavengerHuntItems = [];
        this.completedCount = 0;
        this.userName = '';
      });
    }
  }

  toggleComplete(index: number) {
    this.scavengerHuntItems[index].completed = !this.scavengerHuntItems[index].completed;
    this.updateProgress();
  }

  private updateProgress() {
    this.completedCount = this.scavengerHuntItems.filter(item => item.completed).length;
  }

  resetChecklist() {
    this.scavengerHuntItems.map((item) => item.completed = false);
    this.updateProgress();
  };

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
