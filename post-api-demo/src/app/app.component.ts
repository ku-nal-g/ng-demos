import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'post-api-demo';

  usersInfo:any;

  constructor(private usersData:UsersDataService){}

  getUser(data:NgForm){
    const formBody = {
      name : data.value.name,
      username: data.value.username,
      email: data.value.email,
    };
    this.usersData.addUser(formBody).subscribe(res =>{
      console.log(res);
      this.usersInfo.push(formBody);
    },(err:any)=>{
      console.log("unable to add user :"+ err);
    })
  }

  ngOnInit(){
    console.log("ngOnInit called")
    this.usersData.getData().subscribe((data)=>{
      console.log(data);
      this.usersInfo = data;
    });
  }
}
