import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail: any = '';
  userPassword: any = '';

  constructor(private auth: AuthService, private route: Router) {
  }


  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$')]),
    password: new FormControl('', Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8})')),
    check: new FormControl(),
  })

  // if checkbox is checked then store credentials in localstorage

  onSubmit() {
    console.log(this.login.value);
    if (this.login.valid) {
      this.auth.login(this.login.value).subscribe(
        (result) => {
          this.route.navigate(['auth/user-details']);
        },
        (reject: Error) => {
          alert(reject.message);
        }
      )
    }
    if (this.login.value.check) {
      this.userEmail = this.login.value.email;
      this.userPassword = this.login.value.password;
      localStorage.setItem('userName', this.userEmail);
      localStorage.setItem('userPd', this.userPassword);
    }
  }

  // when component initalizes get value from localstorage

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.route.navigate(['auth/user-details']);
    }
    this.userEmail = localStorage.getItem('userName');
    this.userPassword = localStorage.getItem('userPd');
    if (this.userEmail && this.userPassword) {
      this.setValue();
    }
  }

  setValue() {
    let userData = {
      email: this.userEmail,
      password: this.userPassword,
      check: true,
    };
    this.login.setValue(userData);
  };

  // getters method for logging errors

  get email() {
    return this.login.get('email');
  }
  get password() {
    return this.login.get('password');
  }
}
