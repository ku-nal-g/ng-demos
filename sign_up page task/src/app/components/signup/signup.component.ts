import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CascadeDropdownDataService } from 'src/app/service/cascade-dropdown-data.service';
import { ConfirmedValidator } from '../custom-validator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUp = new FormGroup({});

  editUserDetails = new FormGroup({});

  show = false;

  showConfirm = false;

  isEdit = true;

  showPd = true;

  showFirstAndLast = true;

  originalPassword: string = '';

  replacedPassword: string = '';

  originalConfirmPassword: string = '';

  replacedConfirmPassword: string = '';

  str: any = '';

  data: any = '';

  date: any = new Date()


  constructor(private Fb: FormBuilder, private cascade_data: CascadeDropdownDataService, private toastr: ToastrService, private route: Router) { }

  registerFormGroup!: FormGroup
  contries!: { id: number, name: string }[]
  states!: { id: number, country_name: string, name: string }[]
  cities!: { id: number, state_name: string, name: string }[]
  textRegexName: RegExp = /^([A-Za-z]+)+[A-Za-z]+$|^[A-Za-z]+$/
  pincodeRegex: RegExp = /^[4-9][0-9]{5}$/
  addressLine1Regex: RegExp = /^([a-zA-Z0-9,.'-]+ )+[a-zA-Z0-9,.'-]+$|^[a-zA-Z0-9,.'-]+$/
  passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}/
  emailRegex: RegExp = /^[A-Za-z0-9_]{3,}@[A-Za-z]{5}[.]{1}[A-Za-z]{3}$/


  ngOnInit(): void {
    this.signUp = this.Fb.group({
      firstName: ['', [Validators.required, Validators.pattern(this.textRegexName)]],
      lastName: [''],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', Validators.pattern(this.passwordRegex)],
      confirmPassword: [''],
      country: [''],
      state: [''],
      city: [''],
      addressLine1: ['', [Validators.required, Validators.pattern(this.addressLine1Regex)]],
      addressLine2: [''],
      pincode: ['', Validators.pattern(this.pincodeRegex)],
    },
      {
        validator: ConfirmedValidator('password', 'confirmPassword'),
      })
    this.contries = this.cascade_data.getCountries();
  }

  get firstName() {
    return this.signUp.get('firstName');
  }
  get dateOfBirth() {
    return this.signUp.get('dateOfBirth');
  }
  get email() {
    return this.signUp.get('email');
  }
  get addressLine1() {
    return this.signUp.get('addressLine1');
  }
  get password() {
    return this.signUp.get('password');
  }

  get pincode() {
    return this.signUp.get('pincode');
  }

  showPassword() {
    this.show = !this.show;
  }
  showConfirmPassword() {
    this.showConfirm = !this.showConfirm;
  }

  onCountryChange(country: any) {
    this.states = this.cascade_data.getStates().filter((x) => x.country_name == country.target.value);
    this.cities = this.cascade_data.getCities().filter((x) => x.state_name == country.target.value);
  }

  onStateChange(state: any) {
    this.cities = this.cascade_data.getCities().filter((x) => x.state_name == state.target.value);
  }

  resetForm() {
    this.signUp.reset();
    this.isEdit = true;
  }

  get f() {
    return this.signUp.controls;
  }
  // set form field value in local storage
  setFormDataToStorage() {
    if (this.signUp.invalid) {
      alert("Fill the Form properly")
    }
    else {
      this.toastr.success('Data Stored in Local Storage SuccessFully!');
      localStorage.setItem('D.O.B', this.signUp.get('dateOfBirth')?.value);
      localStorage.setItem('email', this.signUp.get('email')?.value);
      localStorage.setItem('password', this.signUp.get('password')?.value);
      localStorage.setItem('firstName', this.signUp.get('firstName')?.value);
      this.signUp.patchValue({ 'firstName': this.signUp.value.firstName });
      this.signUp.patchValue({ 'lasttName': this.signUp.value.lasttName });
      this.signUp.patchValue({ 'dateOfBirth': this.signUp.value.dateOfBirth });
      this.signUp.patchValue({ 'email': this.signUp.value.email });
      this.signUp.patchValue({ 'addressLine1': this.signUp.value.addressLine1 });
      this.signUp.patchValue({ 'addressLine2': this.signUp.value.addressLine2 });
      this.signUp.patchValue({ 'country': this.signUp.value.country })
      this.signUp.patchValue({ 'state': this.signUp.value.state })
      this.signUp.patchValue({ 'city': this.signUp.value.city })
      this.signUp.patchValue({ 'pincode': this.signUp.value.pincode });
      console.log(this.signUp.value);
      this.route.navigate(['/login']);
    }
  }
  formEditable() {
    this.isEdit = false;
  }

  displayFirstAndLast() {
    this.showFirstAndLast = false;
  }

  showAsterisk() {
    this.showPd = !this.showPd;
  }

  // transform view of password to asterisk
  changePassword(item: any) {
    if (item.inputType == 'insertText'){
      if (this.originalPassword.length == 0)
      this.str = '';
      this.str = this.str + item.data;
      this.originalPassword = this.str
      this.replacedPassword = this.originalPassword.replace(/./gi, '*');
    }
    if (item.inputType == 'deleteContentBackward') {
      this.str = this.str.slice(0,-1);
      this.replacedPassword = this.replacedPassword.slice(0, -1);
      this.originalPassword = this.originalPassword.slice(0, -1);
    }
    this.signUp.patchValue({password: this.originalPassword});
  }
  // transform view of confirm password to asterisk
  changeConfirmPassword(item: any) {
    if (item.inputType == 'insertText') {
      if (this.originalConfirmPassword.length == 0)
      this.data = '';
      this.data = this.data + item.data;
      this.originalConfirmPassword = this.data;
      this.replacedConfirmPassword = this.originalConfirmPassword.replace(/./gi, '*');
    }
    if(item.inputType == 'deleteContentBackward') {
      this.data = this.data.slice(0,-1);
      this.replacedConfirmPassword = this.replacedConfirmPassword.slice(0, -1);
      this.originalConfirmPassword = this.originalConfirmPassword.slice(0, -1);
    }
    this.signUp.patchValue({ confirmPassword: this.originalConfirmPassword });
  }
  // restricts the date value in calendar
  changeDateForm() {
    let month = (this.date.getMonth() + 1).toString();
    let date = (this.date.getDate()).toString();
    if (month.length < 2) month = "0" + month
    if (date.length < 2) date = "0" + date
    return (this.date.getFullYear() + "-" + month + "-" + date);
  }
  crossBtn(){
    this.isEdit = true;
  }
}
