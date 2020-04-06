import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: Subject<boolean> = new Subject();
  redirectUrl: string;

  constructor() { 
    this.loggedIn.next(false);
  }

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  isLoggedIn() {

  }
}
