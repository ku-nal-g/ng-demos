import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }

  private url:string = "/assets/data/usersData.json";

  get(): Observable<any>{
    return this.http.get(this.url);
  }
}
