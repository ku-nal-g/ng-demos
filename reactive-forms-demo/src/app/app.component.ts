import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-forms-demo';

  devicesList:any = ['Desktop','Smartphone','Laptop','Tablet'];

  loginForm  = new FormGroup({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required]),
    email:new FormControl('@gmail.com',[Validators.required,Validators.email]),
    pd:new FormControl('',[Validators.required,Validators.minLength(6)]),
    phone:new FormControl('',[Validators.required]),
    time:new FormControl('',[Validators.required]),
    place:new FormControl('',[Validators.required]),
    device:new FormControl('',[Validators.required]),
  })

  showUserInfo(){
    console.warn(this.loginForm.value);
  }

  get fname(){
    return this.loginForm.get('fname');
  }
  get lname(){
    return this.loginForm.get('lname');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get pd(){
    return this.loginForm.get('pd');
  }  
  get phone(){
    return this.loginForm.get('phone');
  }
  get time(){
    return this.loginForm.get('time');
  }
  get place(){
    return this.loginForm.get('place');
  }
  get device(){
    return this.loginForm.get('device');
  }
}
