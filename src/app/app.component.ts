import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
export class AppComponent {

  dataSource: SidenavLinks[];

  constructor(private router: Router) {
    this.dataSource = SIDENAV_LINKS;
  }

  navigate(link: string[]) {
    this.router.navigate(link);
  }

}
