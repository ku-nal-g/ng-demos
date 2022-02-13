import { Component, OnInit } from '@angular/core';
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

  basicInfo = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    reTypePassword: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('999-999-9999',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    province: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
  });

  educationInfo = new FormGroup({
    school: new FormControl('',[Validators.required]),
    program: new FormControl('',[Validators.required]),
    educationLevel: new FormControl('',[Validators.required]),
    graduationDate: new FormControl('',[Validators.required]),
  });

  workExperience = new FormGroup({
    employer: new FormControl(),
    jobTitle: new FormControl(),
    jobDuty: new FormControl(),
    workedYear: new FormControl(),
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


}
