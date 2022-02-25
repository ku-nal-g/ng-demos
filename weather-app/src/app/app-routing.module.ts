import { PaymentsComponent } from './payments/payments.component';
import { PaymentsAuthGuard } from './payments-auth.guard';
import { AboutComponent } from './about/about.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { AboutClientsComponent } from './about/about-clients/about-clients.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // in case of empty path redirects to home page
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', 
  },
  {
    path: 'weather-details',
    component: WeatherDetailsComponent
  },
  {
    path: 'users-data',
    component: UsersDataComponent
  },
  {
    path: 'digital-clock',
    component: DigitalClockComponent
  },
  {
    path: 'payments',
    canActivate :[PaymentsAuthGuard],
    component: PaymentsComponent,
  },
  // child routing
  {
    path: 'about',
    children: [
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: 'about-me',
        component: AboutMeComponent,
      },
      {
        path: 'about-company',
        component: AboutCompanyComponent,
      },
      {
         path: 'about-clients',
         component: AboutClientsComponent,
      },
    ]
  },
  //wildcard routing
  {
    path: '**',
    component: NopagefoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
