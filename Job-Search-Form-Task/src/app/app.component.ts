import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Job-Search-Form-Task';

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
    file: new FormControl(),
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
  get educationDate(){
    return this.educationInfo.get('educationDate');
  }

}
