import {Component, OnInit} from '@angular/core';
import {faHome, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {AppState} from '../../state/interface';
import {CHANGE_ACTIVE_USER} from '../../state/actions';

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

    constructor(
        private _router: Router,
        private _ngRedux: NgRedux<AppState>) {}

    ngOnInit(): void {
        this.$route.subscribe((data) => {
           this.disable = this._route !== data;
        });
    }

    navigate(destination) {
        this._ngRedux.dispatch({type: CHANGE_ACTIVE_USER, activeUser: {}});
        this._router.navigate([destination]);
    }

}
