import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSocialsDetailsComponent } from './user-socials-details/user-socials-details.component';
import { ProjectStatus1Component } from './project-status1/project-status1.component';
import { ProjectStatus2Component } from './project-status2/project-status2.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInfoComponent,
    UserDetailsComponent,
    UserSocialsDetailsComponent,
    ProjectStatus1Component,
    ProjectStatus2Component,
    HomeComponent,
    UserComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
