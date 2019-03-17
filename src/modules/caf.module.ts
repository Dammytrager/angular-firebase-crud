import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CafRoutingModule } from './caf-routing.module';
import {CAFComponent} from '../components/container/caf.container';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {SideBarComponent} from '../components/components/side-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TitleComponent} from '../components/components/title.component';
import {HomePage} from '../components/Pages/home.component';
import {FilterComponent} from '../components/components/filter.component';
import {UsersComponent} from '../components/components/users.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
      CAFComponent,
      SideBarComponent,
      TitleComponent,
      HomePage,
      FilterComponent,
      UsersComponent
  ],
  imports: [
      BrowserModule,
      CafRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      FontAwesomeModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [CAFComponent]
})
export class CafModule { }
