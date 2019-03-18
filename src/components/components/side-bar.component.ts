import {Component, OnInit} from '@angular/core';
import {faHome, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
    selector: 'caf-side-bar',
    templateUrl: '../../templates/components/side-bar.html'
})
export class SideBarComponent implements OnInit{
    faHome = faHome;
    faPlus = faPlus;
    disable;

    constructor (private _router: Router) {}

    ngOnInit(): void {
        this.checkRoute()
    }

    navigate(destination) {
        this._router.navigate([destination]);
    }

    checkRoute () {
        let page: any = location.href;
        page = page.substr(page.lastIndexOf('/') + 1);
        this.disable = page !== 'users'
    }
}
