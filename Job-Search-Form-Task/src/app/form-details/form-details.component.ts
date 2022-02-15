import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  password1:string = '';
  password2:string = '';

  basicInfo = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]+.\.*.@.[gmail]+.\.[com]+')]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8})')]),
    reTypePassword: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+')]),
    lastName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+')]),
    phoneNumber: new FormControl('999-999-9999',[Validators.required,Validators.pattern('[0-9]{10}')]),
    address: new FormControl('',[Validators.required,Validators.minLength(4)]),
    city: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+( [A-Za-z]+)*')]),
    province: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+( [A-Za-z]+)*')]),
  });

  educationInfo = new FormGroup({
    school: new FormControl('',[Validators.required , Validators.pattern('[a-zA-Z.]+( [A-Za-z]+)*')]),
    program: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z.]+( [A-Za-z]+)*')]),
    educationLevel: new FormControl('',[Validators.required]),
    graduationStatus: new FormControl('',[Validators.required]),
    graduationDate: new FormControl('',[Validators.required]),
  });

  workExperience = new FormGroup({
    employer: new FormControl(),
    jobTitle: new FormControl(),
    jobDuty: new FormControl(),
    workedYear: new FormControl('',[Validators.required,Validators.pattern('[0-9]{1,2}')]),
  });

  attachment = new FormGroup({
    fileData: new FormControl(),
  });

  //getters methods helps in logging errors

  get email(){
    return this.basicInfo.get('email');
  }
  get password(){
    return this.basicInfo.get('password');
  }
  get reTypePassword(){
    return this.basicInfo.get('reTypePassword');
  }
  get firstName(){
    return this.basicInfo.get('firstName');
  }
  get lastName(){
    return this.basicInfo.get("lastName");
  }
  get phoneNumber(){
    return this.basicInfo.get('phoneNumber');
  }
  get address(){
    return this.basicInfo.get('address');
  }
  get city(){
    return this.basicInfo.get('city');
  }
  get province(){
    return this.basicInfo.get('province');
  }
  get country(){
    return this.basicInfo.get('country');
  }
  get school(){
    return this.educationInfo.get('school');
  }
  get program(){
    return this.educationInfo.get('program');
  }
  get educationLevel(){
    return this.educationInfo.get('educationLevel');
  }
  get graduationStatus(){
    return this.educationInfo.get('graduationStatus');
  }
  get graduationDate(){
    return this.educationInfo.get('graduationDate');
  }
  get employer(){
    return this.educationInfo.get('employer');
  }
  get jobTitle(){
    return this.educationInfo.get('jobTitle');
  }
  get jobDuty(){
    return this.educationInfo.get('jobDuty');
  }
  get workedYear(){
    return this.educationInfo.get('workedYear');
  }
  get fileData(){
    return this.attachment.get('fileData');
  }

  // method to compare password

  passwordMismatch(){
    if(this.basicInfo.value.password != this.basicInfo.value.reTypePassword)
    {
      alert("Password Mismatch");
    }
    else
    {
      alert("You have applied suucessfully");
      console.log(this.basicInfo.value);
      console.log(this.educationInfo.value);
      console.log(this.workExperience.value);
      console.log(this.attachment.value);

    }
  }

  resetForm(){
    this.basicInfo.reset();
    this.educationInfo.reset();
    this.workExperience.reset();
    this.attachment.reset();
  }
}
