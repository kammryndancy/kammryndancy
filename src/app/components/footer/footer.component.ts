import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { DiceComponent } from '../dice/dice.component';

@Component({
    selector: 'footerComp',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [
        RouterLink,
        RouterLinkActive,
        DiceComponent,
        NgIf
    ],
    standalone: true
})
export class FooterComponent {
    isDiceContainerVisible = false;

    toggleDiceContainer(event: Event) {
        event.preventDefault();
        this.isDiceContainerVisible = !this.isDiceContainerVisible;
    }

    onDiceRollComplete(result: any) {
        // Wait 4 seconds after roll is complete, then hide the container
        console.log('Dice roll complete:', result);
        console.log('Current dice container visibility:', this.isDiceContainerVisible);
        
        // Ensure the method is being called
        setTimeout(() => {
            console.log('Hiding dice container');
            this.isDiceContainerVisible = false;
        }, 4000);
    }
}
