import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private baseHttp:BaseHttpService) { }

  fetchData(){
    return this.baseHttp.getPosts();
  }

  
}
