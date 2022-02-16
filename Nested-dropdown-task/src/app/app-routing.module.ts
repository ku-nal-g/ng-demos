import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'subject-list',
    component: SubjectListComponent,
  },
  {
    path: 'sign-out',
    component: SignOutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
