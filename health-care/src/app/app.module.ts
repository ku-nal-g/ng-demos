import { NgModule } from '@angular/core';

import { ToastrModule } from "ngx-toastr";
import { FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './common/components/sidenav/sidenav.component';
import { DataTableComponent } from './Home/components/data-table/data-table.component';
// import { SidenavComponent } from './Common/components/sidenav/sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { SignupComponent } from './Component/signup/signup.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker'; //for datepicker
import { MatNativeDateModule } from '@angular/material/core'; //for datepicker
// import { NgxMatFileInputModule } from '@angular-material-components/file-input'; 
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { TopNavBarComponent } from './common/top-nav-bar/top-nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; //used for top navigation bar
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PopUpComponent } from './Home/components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TopNavBarComponent,
    HomeComponent,
    SidenavComponent,
    DataTableComponent,
    UsersDetailsComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatFileInputModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: "toast-top-right"}
    ),
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
