import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  userName:string ='';
  userEmail:string = '';
  userRole: string = '';
  userVisibility: string = '';
  userNumber:String = '';
  userCity:string = '';
  userActions: string = '';

  headerData:[]= [];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.headerData = data.tableHeaders;
    this.userName = data.name;
    this.userEmail = data.email;
    this.userRole = data.role;
    this.userVisibility = data.visibility;
    this.userNumber = data.phone_number;
    this.userCity = data.city;
    this.userActions = data.actions;
   }

  ngOnInit(): void {
  }

}
