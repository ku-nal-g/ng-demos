import { SignupComponent } from './../../Component/signup/signup.component';
import { UsersDetailsComponent } from './../../users-details/users-details.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from 'src/app/Guard/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'user-details',
    canActivate: [LoginGuard],
    component: UsersDetailsComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
