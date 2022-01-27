import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './../../../To-do-List/src/app/app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [
  {
    component: ProfileComponent,
    path: 'profile'
  },
  {
    component: LogoutComponent,
    path: 'logout'
  },
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: NopageComponent,
    path: '**'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
