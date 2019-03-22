import { Component } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {FirebaseService} from '../../services/firebase.service';
import {CHANGE_LOADING, REPLACE_USERS} from '../../state/actions';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../state/interface';


@Component({
    selector: 'caf-filter',
    templateUrl: '../../templates/components/filter.html'
})
export class FilterComponent {
    faSearch = faSearch;

    constructor(
        private _api: FirebaseService,
        private _ngRedux: NgRedux<AppState>) {}

    filterUsers(by, value, condition) {
        this._api.filter(by, value, condition).then((data) => {
            let users = [];
            data.docs.forEach((doc) => {
                users.push({...{id: doc.id}, ...doc.data()});
            });
            this._ngRedux.dispatch({type: REPLACE_USERS, users: users});
        });
    }

}
