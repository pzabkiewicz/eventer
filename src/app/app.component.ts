import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Infrastructure } from './shared/infrastructure';
import { AuthService } from './auth/auth.service';

interface SidenavLinks {
  name: string;
  link: string[];
}

const SIDENAV_LINKS = [
  {
    name: 'Events',
    link: ['/events']
  },
  {
    name: 'Discounts',
    link: ['discounts']
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedIn: boolean;
  isMobileScreen = true;
  dataSource: SidenavLinks[];

  constructor(private router: Router,
              private authService: AuthService) {
    this.dataSource = SIDENAV_LINKS;
    this.setMobileScreenWidth();
  }

  ngOnInit() {
    this.authService.loggedIn.subscribe( (loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    })
  }

  navigate(link: string[]) {
    this.router.navigate(link);
  }

  private setMobileScreenWidth() {
    this.isMobileScreen = window.innerWidth < Infrastructure.SM_MIN_BREAKBOINT;
    window.onresize = () => {
      this.isMobileScreen = window.innerWidth < Infrastructure.SM_MIN_BREAKBOINT;
    };
  }
}
