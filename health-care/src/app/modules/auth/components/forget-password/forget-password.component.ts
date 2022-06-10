import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfirmedValidator } from './custom-validators';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  passwordInfo = ['An uppercase character', 'A lowercase character', 'A number', 'A special character'];

  show = true;

  showBtn = true;

  originalValue: string = '';

  replacedValue: string = '';

  originalRetypeValue: string = '';

  replacedRetypeValue: string = '';

  star: string = '*';

  infoData = ['An uppercase character', 'A lowercase character', 'A number', 'A special character'];

  mainStr = '';


  form: FormGroup = new FormGroup({});

  constructor(private FB: FormBuilder) {
    this.form = FB.group({
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{9,64})')]],
      reTypePassword: ['', [Validators.required]],
      check: ['']
    },
      {
        validator: ConfirmedValidator('password', 'reTypePassword'),
      })
  }

  ngOnInit(): void {
  }

  logData() {
    alert("Account Activated Successfully");
    console.log(this.form.value);
  }

  hidePassword() {
    this.show = !this.show;
  }

  showPassword() {
    this.showBtn = !this.showBtn;
  }


  logPassword(event: any) {
    if (event.inputType == 'insertText') {
      this.originalValue = this.originalValue + event.data;
      this.replacedValue = this.star.repeat(this.originalValue.length);
    }
    if (event.inputType == 'deleteContentBackward') {
      this.replacedValue = this.replacedValue.substring(0, this.replacedValue.length - 1);
      this.originalValue = this.originalValue.substring(0, this.originalValue.length - 1);
    }
    this.form.patchValue({ password: this.originalValue });
  }

  logRetypePassword(event: any) {
    if (event.inputType == 'insertText') {
      this.originalRetypeValue = this.originalRetypeValue + event.data;
      this.replacedRetypeValue = this.star.repeat(this.originalRetypeValue.length);
    }
    if (event.inputType == 'deleteContentBackward') {
      this.replacedRetypeValue = this.replacedRetypeValue.substring(0, this.replacedRetypeValue.length - 1);
      this.originalRetypeValue = this.originalRetypeValue.substring(0, this.originalRetypeValue.length - 1);
    }
    this.form.patchValue({ reTypePassword: this.originalRetypeValue });
  }

  get f() {
    return this.form.controls;
  }
  get password() {
    return this.form.get('password');
  }

}
