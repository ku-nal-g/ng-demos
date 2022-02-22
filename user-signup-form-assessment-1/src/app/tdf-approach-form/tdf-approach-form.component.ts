import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-approach-form',
  templateUrl: './tdf-approach-form.component.html',
  styleUrls: ['./tdf-approach-form.component.css']
})
export class TdfApproachFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveUserData(item:NgForm){
    alert("User successfully Registered");
    console.log(item.value)
  }

}
