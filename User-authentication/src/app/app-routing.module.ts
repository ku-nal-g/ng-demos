import { AdminAuthGuard } from './admin-auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  // redirecting
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  // lazy loading modules
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) =>m.AdminModule),
    canActivate: [AdminAuthGuard],
  },
  // wildcard routing
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
