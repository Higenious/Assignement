import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from '../app/users/users.component';
import {AddUserComponent} from '../app/add-user/add-user.component';

const routes: Routes = [
 {path:'users', component : UsersComponent},
 {path: 'adduser', component:AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
