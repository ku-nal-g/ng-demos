import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  url ='https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }

  addUser(body:any){
    return this.http.post(this.url,body);
  }
}

  
