import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TableGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (!this.auth.isLoggedIn()) {
        this.route.navigate(['/login']);
      }
      return this.auth.isLoggedIn();
    }
  }
