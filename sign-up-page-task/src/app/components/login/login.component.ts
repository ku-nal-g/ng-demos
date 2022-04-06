import { ToastrService } from 'ngx-toastr';
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

  date: any = new Date()

  constructor(private Fb: FormBuilder, private auth: AuthService,private route:Router,private toaster:ToastrService) { }

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
    const obj= JSON.parse(localStorage.getItem('userDetails')||'{}');
    this.userEmail =obj.email;
    this.userPassowrd =  obj.password;
    this.userDateOfBirth = obj.DOB;
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

  changeDateForm() {
    let month = (this.date.getMonth() + 1).toString();
    let date = (this.date.getDate()).toString();
    if (month.length < 2) month = "0" + month
    if (date.length < 2) date = "0" + date
    return (this.date.getFullYear() + "-" + month + "-" + date);
  }

  onSubmit() {
      this.auth.login(this.loginForm.value).subscribe(
        (res) => {
          this.route.navigate(['../table-data']);
        },
        (reject: Error) => {
          this.toaster.error(reject.message);
        }
      )
    }
  }
