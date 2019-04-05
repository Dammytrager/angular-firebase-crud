import {Component, OnDestroy, OnInit} from '@angular/core';
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {NgRedux, select} from '@angular-redux/store';
import {Observable, Subscription} from 'rxjs';
import {FirebaseService} from '../../services/firebase.service';
import {AppState} from '../../state/interface';
import {CHANGE_ACTIVE_USER} from '../../state/actions';


@Component({
    selector: 'caf-users',
    templateUrl: '../../templates/components/users.html'
})
export class UsersComponent implements OnInit, OnDestroy {
    @select('users') $users: Observable<any>;
    @select('loading') $loading: Observable<boolean>;
    $users$: Subscription;
    $loading$: Subscription;
    loading: boolean;
    users = [];
    faPencilAlt = faPencilAlt;
    faTrash = faTrash;
    imageUrl = 'assets/images/avatar.svg';

    constructor(private _router: Router, private _ngRedux: NgRedux<AppState>) {
    }

    ngOnInit(): void {
        this.$users$ = this.$users.subscribe((data) => {
            this.users = data;
        });
        this.$loading$ = this.$loading.subscribe((data) => {
            this.loading = data;
        });
    }

    navigate(destination, activeUser, id) {
        this._ngRedux.dispatch({type: CHANGE_ACTIVE_USER, activeUser: activeUser});
        this._router.navigate([destination, id]);
    }

    ngOnDestroy(): void {
        this.$users$.unsubscribe();
    }
}
