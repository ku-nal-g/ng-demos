import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { Filter1Pipe } from './pipes/filter1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SubjectDetailsComponent,
    Filter1Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
