import {Component, OnInit} from '@angular/core';
import {faHome, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';

@Component({
    selector: 'caf-side-bar',
    templateUrl: '../../templates/components/side-bar.html'
})
export class SideBarComponent implements OnInit {
    @select('route') $route: Observable<string>;
    private _route = '/users';

    faHome = faHome;
    faPlus = faPlus;
    disable;

    constructor (private _router: Router) {}

    ngOnInit(): void {
        this.$route.subscribe((data) => {
           this.disable = this._route !== data;
        });
    }

    navigate(destination) {
        this._router.navigate([destination]);
    }

}
