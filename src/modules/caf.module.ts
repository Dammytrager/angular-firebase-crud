import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CafRoutingModule } from './caf-routing.module';
import {CAFComponent} from '../components/container/caf.container';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {SideBarComponent} from '../components/components/side-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TitleComponent} from '../components/components/title.component';
import {HomePage} from '../components/Pages/home.component';
import {FilterComponent} from '../components/components/filter.component';
import {UsersComponent} from '../components/components/users.component';
import {HttpClientModule} from '@angular/common/http';
import {CreatePage} from '../components/Pages/create.component';
import {EditPage} from '../components/Pages/edit.component';
import {DeletePage} from '../components/Pages/delete.component';
import {UserFormComponent} from '../components/components/user-form.component';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import {AppState} from '../state/interface';
import {StoreEnhancer} from 'redux';
import {INITIAL_STATE, rootReducer} from '../state/store';
import {LoaderComponent} from '../components/components/loader.component';
import {FirebaseService} from '../services/firebase.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
      CAFComponent,
      SideBarComponent,
      TitleComponent,
      HomePage,
      FilterComponent,
      UsersComponent,
      CreatePage,
      EditPage,
      DeletePage,
      UserFormComponent,
      LoaderComponent
  ],
  imports: [
      BrowserModule,
      CafRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireStorageModule,
      FontAwesomeModule,
      HttpClientModule,
      NgReduxModule,
      ReactiveFormsModule,
      FormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [CAFComponent]
})
export class CafModule {
    constructor (private ngRedux: NgRedux<AppState>,
                 private reduxDevTools: DevToolsExtension) {
        const enhancers: StoreEnhancer<AppState>[] = (this.reduxDevTools.isEnabled && !environment.production)
            ? [this.reduxDevTools.enhancer()] : [];
        ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
    }
}
