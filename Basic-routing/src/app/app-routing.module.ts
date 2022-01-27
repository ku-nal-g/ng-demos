import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './../../../Header-demo/src/app/header/header.component';
import { DocsComponent } from './docs/docs.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewpageComponent } from './newpage/newpage.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'docs',
    component: DocsComponent
  },
  {
    path: '',
    component: HomeComponent
  },

  // wild card routing this page will get displayed if user hit wrong Url...

  {
    path: '**',
    component:  NewpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
