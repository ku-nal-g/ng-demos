import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { HomeComponent } from './home/home.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { AboutComponent } from './about/about.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { AboutClientsComponent } from './about/about-clients/about-clients.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WeatherDetailsComponent,
    HomeComponent,
    DigitalClockComponent,
    AboutComponent,
    NopagefoundComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    AboutClientsComponent,
    UsersDataComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
