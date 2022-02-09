import { UserInfo } from './../interfaces/user-info';
import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() userInfoData:UserInfo;

  alertMsg(){
    alert("You followed him Successfully");
  }

  alertText(){
    alert("Sorry option not avialbale currently");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
