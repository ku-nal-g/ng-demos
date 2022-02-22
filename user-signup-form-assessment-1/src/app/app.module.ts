import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfApproachFormComponent } from './tdf-approach-form/tdf-approach-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveApproachFormComponent } from './reactive-approach-form/reactive-approach-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfApproachFormComponent,
    NavbarComponent,
    ReactiveApproachFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
