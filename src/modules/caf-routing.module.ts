import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePage} from '../components/Pages/home.component';

const routes: Routes = [
  {path: 'users', component: HomePage},
  {path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CafRoutingModule { }
