import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private baseHttp:BaseHttpService) { }

  url:string = 'https://jsonplaceholder.typicode.com/users';

  fetchData():Observable<any>{
    return this.baseHttp.get(this.url);
  }

  postData(body:any): Observable<any>{
    return this.baseHttp.post(body,this.url);
  }
  putData(body:any): Observable<any>{
    this.url = 'https://jsonplaceholder.typicode.com/users/' +body.id;
    return this.baseHttp.put(body,this.url);
  }

  deleteData(body:any): Observable<any>{
    this.url = 'https://jsonplaceholder.typicode.com/users/'+body.id;
    return this.baseHttp.delete(this.url);
  }

  patchData(body:any): Observable<any>{
    this.url = 'https://jsonplaceholder.typicode.com/users/' +body.id;
    return this.baseHttp.patch(body,this.url);
  }

}

