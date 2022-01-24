import { Component, OnInit } from '@angular/core';
import {UsersDataService} from '../services/users-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users:any;

  constructor(private usersData:UsersDataService){
    usersData.users().subscribe((data:any)=>{
      console.warn("data",data); 
      this.users = data
    });
  }

  ngOnInit(): void {
  }

}
