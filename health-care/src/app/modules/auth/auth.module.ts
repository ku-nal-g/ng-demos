import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FormsModule } from '@angular/forms';
import { PasswordPipe } from './components/forget-password/pipes/password.pipe';


@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
