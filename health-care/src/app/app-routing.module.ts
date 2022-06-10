import { AuthGuardGuard } from './Guard/auth-guard.guard';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Component/signup/signup.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { LoginGuard } from './Guard/login.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, canActivate: []
  },
  {
    path: 'auth',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: 'user-details',
  //   canActivate: [LoginGuard],
  //   component: UsersDetailsComponent
  // },
  {
    path: 'signup',
    component: SignupComponent 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth/home',
    component: UsersDetailsComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
