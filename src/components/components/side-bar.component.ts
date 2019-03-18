import { Component } from '@angular/core';
import {faHome, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
    selector: 'caf-side-bar',
    templateUrl: '../../templates/components/side-bar.html'
})
export class SideBarComponent {
    faHome = faHome;
    faPlus = faPlus;

    constructor (private _router: Router) {}

    navigate(destination) {
        this._router.navigate([destination]);
    }
}
