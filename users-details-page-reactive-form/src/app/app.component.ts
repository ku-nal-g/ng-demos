import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-details-page-reactive-form';

  //Properties for two way binding to bind view and input field

  myName:string = "";
  myEmail:string = "";
  myPassword:string = "";
  myPhone:any;

  userDetailPage = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+( [A-Za-z]+)*')]),
    email : new FormControl('',Validators.pattern('[a-zA-Z0-9]+@.[a-z]+.\.+[a-z]+')),
    password: new FormControl('',Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8})')),
    phone: new FormControl('',Validators.pattern('[0-9]{10}')),
  });

  // this method logs formcontrols value to console

  showUserData(){
    console.warn(this.userDetailPage.value)
  }

  // getter methods helps us to show error messages on template

  get userName(){
    return this.userDetailPage.get('userName');
  }
  get email(){
    return this.userDetailPage.get('email');
  }
  get password(){
    return this.userDetailPage.get('password');
  }
  get phone(){
    return this.userDetailPage.get('phone');
  }
}
