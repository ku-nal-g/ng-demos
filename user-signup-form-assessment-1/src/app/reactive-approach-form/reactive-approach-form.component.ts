import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach-form',
  templateUrl: './reactive-approach-form.component.html',
  styleUrls: ['./reactive-approach-form.component.css']
})
export class ReactiveApproachFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUpUser = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+( [A-Za-z]+)*')]),
    email: new FormControl('',[Validators.required,Validators.pattern("[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[com]+)$")]),
    address1: new FormControl('',[Validators.required,Validators.minLength(4)]),
    address2: new FormControl('',[Validators.required,Validators.minLength(4)]),
    zip: new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}')]),
    city: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+( [A-Za-z]+)*')]),
    state: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+( [A-Za-z]+)*')]),
    country: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+( [A-Za-z]+)*')]),
  });

  // this methods alerts user on successfully submiting data and logs json object of forms details

  saveUserData(){
    alert("User successfully Registered");
    console.log(this.signUpUser.value);
  }

  // getter methods helps in showing errors on UI
  get name(){
    return this.signUpUser.get('name');
  }
  get email(){
    return this.signUpUser.get('email');
  }
  get address1(){
    return this.signUpUser.get('address1');
  }
  get address2(){
    return this.signUpUser.get('address2');
  }
  get zip(){
    return this.signUpUser.get('zip');
  }
  get city(){
    return this.signUpUser.get('city');
  }
  get state(){
    return this.signUpUser.get('state');
  }
  get country(){
    return this.signUpUser.get('country');
  }
}
