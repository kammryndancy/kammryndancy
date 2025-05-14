import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FooterComponent } from "../components/footer/footer.component";
import { LandingComponent } from "../components/landing/landing.component";
import { DiceComponent } from "../components/dice/dice.component";

@Component({
  selector: 'dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss'],
  imports: [
    LandingComponent,
    FooterComponent,
    DiceComponent,
    NgIf
  ],
  standalone: true
})
export class DndComponent {

  isDiceContainerVisible = false;

  toggleDiceContainer() {
      this.isDiceContainerVisible = true;
  }

  onDiceRollComplete(result: any) {
    setTimeout(() => {
        this.isDiceContainerVisible = false;
    }, 2000);
  }
}
