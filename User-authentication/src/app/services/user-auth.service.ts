import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private router:Router) { }

  setToken(token:string): void{
    localStorage.setItem('token',token);
  }
  
  getToken():string | null{
    return localStorage.getItem('token');
  }
  isLoggedIn(){
    return this.getToken() !== null;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
  login({ email, password }: any): Observable<any> {
    if (email === 'kunal@gmail.com' && password === 'kunal123') {
      this.setToken('qwertyuiop');
      return of({ name: 'Kunal Gupta', email: 'kunal@gmail.com' });
    }
    return throwError(new Error('You are not allowed to view this page. You are redirected to login Page'));
  }
}
