import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {CHANGE_ROUTE} from '../../state/actions';
import {AppState} from '../../state/interface';
import {NgRedux} from '@angular-redux/store';


@Component({
  selector: 'caf-root',
  templateUrl: '../../templates/container/caf.html'
})
export class CAFComponent implements OnInit{

  constructor (
      private _router: Router,
      private _ngRedux: NgRedux<AppState>
  ) {}

  ngOnInit(): void {
    this.setRoute();
  }

  setRoute () {
    this._router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this._ngRedux.dispatch({
          type: CHANGE_ROUTE,
          route: data.urlAfterRedirects
        });
      }
    });
  }


}
