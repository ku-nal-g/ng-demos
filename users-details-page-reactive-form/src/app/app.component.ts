import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-details-page-reactive-form';

  myName:string = "";
  myEmail:string = "";
  myPassword:string = "";
  myPhone:any;

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+( [A-Za-z]+)*')]),
    email : new FormControl('',Validators.pattern('[a-zA-Z0-9]+@.[a-z]+\.[a-z]+')),
    password: new FormControl('',Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8})')),
    phone: new FormControl('',Validators.pattern('[0-9]{10}')),
  });

  // this method logs formcontrols value to console

  showUserData(){
    console.warn(this.loginForm.value)
  }

  // getter methods helps us to show error messages on template

  get userName(){
    return this.loginForm.get('userName');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get phone(){
    return this.loginForm.get('phone');
  }
}
