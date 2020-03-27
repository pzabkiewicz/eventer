import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: Subject<boolean> = new Subject();

  constructor() { 
    this.loggedIn.next(false);
  }
}
