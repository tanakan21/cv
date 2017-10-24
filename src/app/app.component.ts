import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('menuState', [
            state('menu', style({})),
            state('return', style({})),
            transition('menu => return', [
                style({ transform: 'rotate(180deg)' }),
                animate('100ms ease-in')
            ]),
            transition('return => menu', [
                style({ transform: 'rotate(-180deg)' }),
                animate('100ms ease-out')
            ]),
        ])
    ],
})
export class AppComponent {
    title = 'Baronci Jonathan';
    menuState = 'menu';
    toggleMenuState() {
        this.menuState = this.menuState === 'menu' ? 'return' : 'menu';
    }
}
