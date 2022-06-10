import { PostsData } from './../interfaces/posts-data';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  baseUrl: string = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http: HttpClient) { }

  // get request to Api

  get(url?:string): Observable<any>{
    if(url?.trim()) return this.http.get(url);
    return this.http.get(this.baseUrl);
  }

  // post request to API

  post(body: any,url?:string): Observable<any>{
    if(url?.trim()) return this.http.post(url,body);
    return this.http.post(this.baseUrl,body);
  }

  // put request to API

  put(body:any,url?:string): Observable<any>{
    if(url?.trim()) return this.http.put(url,body);
    return this.http.put('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts/' + body.id, body);
  }

  // delete reuest to API

  delete(url:string): Observable<any>{
    if(url.trim()) return this.http.delete(url);
    return this.http.delete(this.baseUrl); 
  }

  // patch req to API

  patch(body: any,url?:string): Observable<any> {
    if(url?.trim()) return this.http.patch(url,body);
    return this.http.patch('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts/' + body.id, body);
  }

}
