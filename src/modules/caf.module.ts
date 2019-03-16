import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CafRoutingModule } from './caf-routing.module';
import {CAFComponent} from '../components/container/caf.container';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {SideBarComponent} from '../components/components/side-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
      CAFComponent,
      SideBarComponent
  ],
  imports: [
      BrowserModule,
      CafRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      FontAwesomeModule
  ],
  providers: [],
  bootstrap: [CAFComponent]
})
export class CafModule { }
