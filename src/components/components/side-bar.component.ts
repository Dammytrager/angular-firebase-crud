import { Component } from '@angular/core';
import {faHome, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'caf-side-bar',
    templateUrl: '../../templates/components/side-bar.html'
})
export class SideBarComponent {
    faHome = faHome;
    faPlus = faPlus;
}
