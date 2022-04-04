import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});

  constructor(private Fb: FormBuilder, private auth: AuthService,private route:Router) { }

  emailField = true;

  userEmail: any;
  userDateOfBirth: any;
  userPassowrd: any;

  ngOnInit(): void {
    this.loginForm = this.Fb.group({
      email: [''],
      dateOfBirth: [''],
      password: ['', Validators.required],
    })
    // get data from local storage and pass it to service file
    this.userEmail = localStorage.getItem('email');
    this.userDateOfBirth = localStorage.getItem('D.O.B');
    this.userPassowrd = localStorage.getItem('password');
    this.auth.getDataFromStorage(this.userEmail, this.userPassowrd,this.userDateOfBirth);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get dateOfBirth() {
    return this.loginForm.get('dateOfBirth');
  }
  get password() {
    return this.loginForm.get('password');
  }

  showDob() {
    this.emailField = !this.emailField;
  }
  showEmail() {
    this.emailField = !this.emailField;
  }

  onSubmit() {
    console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe(
        (res) => {
          this.route.navigate(['../table-data']);
        },
        (reject: Error) => {
          alert(reject.message);
        }
      )
    }
  }
