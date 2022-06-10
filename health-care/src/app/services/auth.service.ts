import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail:string = '';

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
    this.router.navigate(['auth/login']);
  }
  
  login({ email, password }: any): Observable<any> {
    if (email === 'kunal@gmail.com' && password === 'Kunal@12') {
      this.setToken('qwertyuiop');
      this.userEmail = email;
      return of({ email: 'kunal@gmail.com', password: 'Kunal@12'});
    }
      return throwError(new Error('You are not allowed to view this page. You are redirected to login Page'));    
  }
  
  getUserEmail(){
    return this.userEmail;
  }

}
