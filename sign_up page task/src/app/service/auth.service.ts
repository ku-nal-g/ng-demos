import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  emailInfo = '';
  pdInfo = '';
  dobInfo = '';

  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  getDataFromStorage(email: string, password: string, birthDate: string) {
    this.emailInfo = email;
    this.pdInfo = password;
    this.dobInfo = birthDate;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({ email, password, dateOfBirth }: any): Observable<any> {
    if ((email == this.emailInfo && password == this.pdInfo) || (dateOfBirth === this.dobInfo && password === this.pdInfo)) {
      this.setToken('qwertyuiop');
      return of({ email: this.emailInfo, password: this.pdInfo });
    }
    return throwError(new Error('You are not allowed to view this page. You are redirected to login Page'));
  }

}
