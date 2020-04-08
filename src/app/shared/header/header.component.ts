import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;

  @Output() 
  sidenavToggled = new EventEmitter<void>();

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedIn.subscribe( (loggedIn: boolean) => { 
      this.isAuthenticated = loggedIn
    });
  }

  onClickSidenavToggle() {
    this.sidenavToggled.emit(null);
  }

  onLoginNavigate() {
    if (this.isAuthenticated) {
      this.authService.logout();
    }
    this.router.navigate(["/login"]);
  }

}
