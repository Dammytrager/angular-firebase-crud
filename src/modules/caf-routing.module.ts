import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePage} from '../components/Pages/home.component';
import {CreatePage} from '../components/Pages/create.component';
import {EditPage} from '../components/Pages/edit.component';
import {DeletePage} from '../components/Pages/delete.component';

const routes: Routes = [
  {path: 'users', component: HomePage},
  {path: 'user/create', component: CreatePage},
  {path: 'user/edit/:id', component: EditPage},
  {path: 'user/delete/:id', component: DeletePage},
  {path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CafRoutingModule { }
