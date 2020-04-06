import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) {

    this.authService.loggedIn.subscribe(
      (loggedIn: boolean) => {
         this.isLoggedIn = loggedIn;     
    })
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    
    return false;
  }

}
