import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private auth:UserAuthService, private route:Router) { }

  userEmail:string = '';
  userPassword:string = '';

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.route.navigate(['admin']);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  onSubmit(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result) =>{
          this.route.navigate(['/admin']);
        },
        (reject: Error) =>{
          alert(reject.message);
        }
      )
    }

  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
