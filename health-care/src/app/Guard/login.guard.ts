import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if (!this.auth.isLoggedIn()) {
        this.route.navigate(['auth/login']);
      }
      return this.auth.isLoggedIn();
    }
}
