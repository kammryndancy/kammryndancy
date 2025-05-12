import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject, Output, EventEmitter } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import DiceBox from '@3d-dice/dice-box';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit, AfterViewInit {
  @Output() rollComplete = new EventEmitter<any>();
  title = 'D20 Dice Roller';
  diceBox: any;
  isRolling = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Initialize component properties
  }

  ngAfterViewInit() {
    // Initialize the DiceBox once the view is ready
    // Only initialize in browser environment
    if (this.isBrowser) {
      this.initDiceBox();
    }
  }

  initDiceBox() {
    // Safety check: only run in browser environment
    if (!this.isBrowser) {
      console.log('Not in browser environment, skipping DiceBox initialization');
      return;
    }

    try {
      // Basic configuration for DiceBox
      const config = {
        // Use the container ID
        container: '#dice-container',
        // Use default asset path that comes with the library
        // The library has internal fallbacks if this path doesn't exist
        assetPath: '/assets/dice-box/',
        // Visual options
        theme: 'default',
        scale: 9,
        throwForce: 15,
        gravity: 5,
        startingHeight: 8,
        // Enable high contrast for better visibility
        highContrast: true,
        // Use light background
        lightColor: '#ffffff',
        // Use standard D20 notation
        notation: '1d20'
      };

      console.log('Creating DiceBox with config:', config);
      this.diceBox = new DiceBox(config);

      // Initialize the dice box
      this.diceBox.init()
        .then(() => {
          console.log('DiceBox initialized successfully');
          // Optionally roll a dice immediately to test
          this.rollDice();
        })
        .catch((error: any) => {
          console.error('DiceBox initialization failed:', error);
          console.error('Config used:', config);
          // Try with a simpler fallback configuration
          this.tryFallbackInitialization();
        });
    } catch (error) {
      console.error('Error creating DiceBox:', error);
      // Only show alerts in browser environment
      if (this.isBrowser) {
        console.warn('Falling back to text-based dice');
      }
    }
  }

  tryFallbackInitialization() {
    console.log('Attempting fallback initialization...');
    
    // Safety check: only run in browser environment
    if (!this.isBrowser) {
      console.log('Not in browser environment, skipping fallback initialization');
      return;
    }
    
    try {
      // Simpler configuration for fallback
      const fallbackConfig = {
        container: '#site-footer',
        // Required property for the DiceBox configuration
        assetPath: '/assets/dice-box/',
        // Simplified options
        theme: 'default',
        scale: 4,
        throwForce: 5,
        gravity: 3,
        shadowTransparency: 0.8
      };

      console.log('Creating DiceBox with fallback config:', fallbackConfig);
      this.diceBox = new DiceBox(fallbackConfig);

      this.diceBox.init()
        .then(() => {
          console.log('DiceBox initialized with fallback configuration');
        })
        .catch((error: any) => {
          console.error('Fallback initialization also failed:', error);
        });
    } catch (error) {
      console.error('Error in fallback initialization:', error);
    }
  }

  rollDice() {
    // Only proceed in browser environment
    if (!this.isBrowser) {
      console.log('Not in browser environment, skipping dice roll');
      return;
    }
    
    if (!this.diceBox) {
      console.log('DiceBox not initialized, attempting to use text-based dice');
      return;
    }

    this.isRolling = true;
    console.log('Rolling a D20...');
    
    try {
      this.diceBox.roll('1d20')
        .then((result: any) => {
          console.log('Roll result:', result);
          this.isRolling = false;
          console.log('Emitting rollComplete event');
          this.rollComplete.emit(result);
        })
        .catch((error: any) => {
          console.error('Roll failed:', error);
          this.isRolling = false;
        });
    } catch (error) {
      console.error('Error during roll:', error);
      this.isRolling = false;
    }
  }
}
