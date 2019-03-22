import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {CHANGE_LOADING, CHANGE_ROUTE, CHANGE_USERS} from '../../state/actions';
import {AppState} from '../../state/interface';
import {NgRedux, select} from '@angular-redux/store';
import {FirebaseService} from '../../services/firebase.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'caf-root',
  templateUrl: '../../templates/container/caf.html'
})

export class CAFComponent implements OnInit {
  constructor(
      private _router: Router,
      private _ngRedux: NgRedux<AppState>,
      private _api: FirebaseService
  ) {}

  ngOnInit(): void {
    this.setRoute();
    this.getUsers();
  }

  setRoute() {
    this._router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._ngRedux.dispatch({
          type: CHANGE_ROUTE,
          route: data.urlAfterRedirects
        });
      }
    });
  }

  getUsers() {
    this._api.getUsers();
  }
}
