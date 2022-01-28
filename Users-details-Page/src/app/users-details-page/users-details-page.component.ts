import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details-page',
  templateUrl: './users-details-page.component.html',
  styleUrls: ['./users-details-page.component.css']
})
export class UsersDetailsPageComponent implements OnInit {

  constructor() { }

  // method log form field values on console

  showUserData(item:string){
    console.warn(item);
  }

  ngOnInit(): void {
  }

}
