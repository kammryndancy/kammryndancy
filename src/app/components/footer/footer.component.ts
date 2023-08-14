import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'footerComp',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    standalone: true
})
export class FooterComponent {}
