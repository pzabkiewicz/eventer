import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventSummary } from 'src/app/model/event-summary';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: EventSummary[] = [
    new EventSummary("Football match: Poland - Italy", new Date(), "Krakow, Tauron Arena", "100.0 PLN", 20,
      "https://7.allegroimg.com/s1024/0cabb5/d571bc7f45268037a426cee62c67"),
    new EventSummary("Shakira's Concert", new Date(), "Lodz, Atlas Arena", "250.0 PLN", 350,
      "https://d-art.ppstatic.pl/kadry/k/r/b4/bb/4dd463c4d5a8e_o_full.jpg"),
    new EventSummary("Metallica", new Date(), "Warszawa, Stadion Narodowy", "350.0 PLN", 1233,
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Metallica-Warsaw-2019_01.jpg"),
    new EventSummary("WedrowkiPub", new Date(), "Wroclaw, Hala Stulecia", "10.0 PLN", null,
      "https://wedrowkipub.pl/wp-content/uploads/2018/01/logo-kwadrat_logo-white.png")
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddSimpleClick() {
    this.router.navigate(['/events/1/edit']);
  }

}
