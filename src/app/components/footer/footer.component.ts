import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
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
        NgIf,
        NgClass
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
        setTimeout(() => {
            this.isDiceContainerVisible = false;
        }, 2000);
    }
}
