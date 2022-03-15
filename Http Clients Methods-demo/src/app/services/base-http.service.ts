import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { PostsData } from '../interfaces/posts-data';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  url: string =
    'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http: HttpClient) {}

  // get request to Api

  getPosts(): Observable<PostsData[]> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      authenticationToken: 'qwertyuiop',
    });

    const params = new HttpParams().set('pageNum', '10').set('pageSize', '50');

    // passing headers and params to url in get()
    return this.http.get<PostsData[]>(this.url, {
      headers: headers,
      params: params,
    });
  }

  // post request to API

  addPosts(body: any): Observable<PostsData> {
    const customHeader = new HttpHeaders({
      authenticationKey: 'qwertyuiop',
    });

    const customParam = new HttpParams().set('userRole', 'admin');
    return this.http.post<PostsData>(this.url, body, {
      headers: customHeader,
      params: customParam,
    });
  }

  // put request to API

  updatePosts(body: any): Observable<PostsData> {
    const putHeader = new HttpHeaders({
      'content-type': 'application/json',
      authenticationToken: 'qwertyuiop',
      userId: 'testinguser',
    });

    const putParams = new HttpParams().set('userId', 'testingUser');
    return this.http.put<PostsData>('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts/'+body.id,body,{ headers: putHeader, params: putParams });
  }

  // delete reuest to API

  deletePosts(body:any): Observable<PostsData> {

    const deleteHeaders = new HttpHeaders({
      'authenticationToken' : 'qwertyuiop',
      'expiryToken': '15'
    });

    const deleteParam = new HttpParams()
    .set('userRole','admin');
    return this.http.delete<PostsData>('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts/'+body.id, {headers : deleteHeaders, params: deleteParam});
  }

  // patch req to API

  patchPosts(body:any): Observable<PostsData>{
    return this.http.patch<PostsData>('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts/'+body.id,body);
  }

}
