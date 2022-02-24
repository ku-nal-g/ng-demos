import { UsersListService } from './../services/users-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})
export class UsersDataComponent implements OnInit {

  usersInformation:any;

  constructor(private UsersList:UsersListService) { }

  ngOnInit() {
    this.usersInformation = this.UsersList.getData();  
  }

}
