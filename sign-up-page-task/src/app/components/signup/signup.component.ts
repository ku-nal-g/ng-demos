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

  editForm = new FormGroup({});

  editUserDetails = new FormGroup({});

  show = false;

  showConfirm = false;

  isEdit = true;

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

  editableFormGroup!: FormGroup
  contries_name!: { id: number, name: string }[]
  states_name!: { id: number, country_name: string, name: string }[]
  cities_name!: { id: number, state_name: string, name: string }[]


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
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      confirmPassword: [''],
      country: [''],
      state: [''],
      city: [''],
      addressLine1: ['', [Validators.required, Validators.pattern(this.addressLine1Regex)]],
      addressLine2: [''],
      pincode: [, Validators.pattern(this.pincodeRegex)],
    },
      {
        validator: ConfirmedValidator('password', 'confirmPassword'),
      })
    this.contries = this.cascade_data.getCountries();

    this.contries_name = this.cascade_data.getCountries();

    this.editForm = this.Fb.group({
      fname: ['', [Validators.required, Validators.pattern(this.textRegexName)]],
      lname: [''],
      dob: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      userCountry: [''],
      userState: [''],
      userCity: [''],
      userAddressLine1: ['', [Validators.required, Validators.pattern(this.addressLine1Regex)]],
      userAddressLine2: [''],
      userPincode: [, Validators.pattern(this.pincodeRegex)],
    })
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

  get fname() {
    return this.editForm.get('fname');
  }
  get lname() {
    return this.editForm.get('lname');
  }
  get dob() {
    return this.editForm.get('dob');
  }
  get userEmail() {
    return this.editForm.get('userEmail');
  }
  get userCountry() {
    return this.editForm.get('userCountry');
  }
  get userState() {
    return this.editForm.get('userState');
  }
  get userCity() {
    return this.editForm.get('userCity');
  }
  get userAddressLine1() {
    return this.editForm.get('userAddressLine1');
  }
  get userAddressLine2() {
    return this.editForm.get('userAddressLine2');
  }
  get userPinCode() {
    return this.editForm.get('userPincode');
  }


  showPassword() {
    this.show = !this.show;
  }
  showConfirmPassword() {
    this.showConfirm = !this.showConfirm;
  }

  onCountryChange(country: any) {
    this.states = this.cascade_data.getStates().filter((x) => x.country_name == country.target.value);
    this.cities = [];
    if (country.target.value == this.contries[country.target["selectedIndex"] - 1].name) {
      this.signUp.patchValue({
        state: '',
        city: ''
      }
      )
    }
  }

  onStateChange(state: any) {
    this.cities = this.cascade_data.getCities().filter((x) => x.state_name == state.target.value);
  }

  onCntryChanged(country: any) {
    this.states_name = this.cascade_data.getStates().filter((x) => x.country_name == country.target.value);
    this.cities_name = [];
    if (country.target.value == this.contries_name[country.target["selectedIndex"] - 1]?.name) {
      this.signUp.patchValue({
        userState: '',
        userCity: ''
      }
      )
    }
  }
  onStateChanged(state: any) {
    this.cities_name = this.cascade_data.getCities().filter((x) => x.state_name == state.target.value);
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
      this.signUp.patchValue({ 'firstName': this.editForm.value.fname, 'lastName': this.editForm.value.lname, 'dateOfBirth': this.editForm.value.dob, 'email': this.editForm.value.userEmail });
      this.signUp.patchValue({ 'addressLine1': this.editForm.value.userAddressLine1, 'addressLine2': this.editForm.value.userAddressLine2 });
      this.signUp.patchValue({ 'country': this.editForm.value.userCountry, 'state': this.editForm.value.userState, 'city': this.editForm.value.userCity, 'pincode': this.editForm.value.userPincode });
      let myObj =
      {
        firstName: this.signUp.value.firstName,
        lastName: this.signUp.value.lastName,
        DOB: this.signUp.value.dateOfBirth,
        email: this.signUp.value.email,
        password: this.signUp.value.password,
        country: this.signUp.value.country,
        state: this.signUp.value.state,
        city: this.signUp.value.city,
        addressLine1: this.signUp.value.addressLine1,
        addressLine2: this.signUp.value.addressLine2,
        pincode: this.signUp.value.pincode,
      };
      localStorage.setItem('userDetails', JSON.stringify(myObj));
      this.navigateUser();
    }
  }

  // navigates user to Login page and shows toaster

  navigateUser() {
    this.route.navigate(['/login']);
    this.toastr.success('Data Stored in Local Storage SuccessFully!');
  }

  //patches value of signup formgroup to edit form group on click of submit

  patchFormValue() {
    this.editForm.patchValue({ 'fname': this.signUp.get('firstName')?.value, 'lname': this.signUp.value.lastName, 'dob': this.signUp.value.dateOfBirth, 'userEmail': this.signUp.value.email });
    this.editForm.patchValue({ 'userAddressLine1': this.signUp.value.addressLine1, 'userAddressLine2': this.signUp.value.addressLine2 });
    this.editForm.patchValue({ 'userCountry': this.signUp.value.country, 'userState': this.signUp.value.state, 'userCity': this.signUp.value.city, 'userPincode': this.signUp.value.pincode });
  }

  formEditable() {
    this.isEdit = false;
  }

  displayFirstAndLast() {
    this.showFirstAndLast = false;
  }

  // transform view of password to asterisk
  changePassword(item: any) {
    if (item.inputType == 'insertText') {
      if (this.originalPassword.length == 0) this.str = '';
      this.str = this.str + item.data;
      this.originalPassword = this.str
      this.replacedPassword = this.originalPassword.replace(/./gi, '*');
    }
    if(item.inputType == 'deleteContentBackward') {
      this.str = this.str.slice(0, -1);
      this.replacedPassword = this.replacedPassword.slice(0, -1);
      this.originalPassword = this.originalPassword.slice(0, -1);
    }
    this.signUp.patchValue({ password: this.originalPassword });
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
    if (item.inputType == 'deleteContentBackward') {
      this.data = this.data.slice(0, -1);
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
  crossBtn() {
    this.isEdit = true;
    this.showFirstAndLast = true;
  }
}


