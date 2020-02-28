import { Injectable } from '@angular/core';
import { EventSummary } from '../model/event-summary';
import { EventSaveModel } from '../model/event-save-model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventService {

  eventsChanged: Subject<EventSummary[]> = new Subject<EventSummary[]>();

  private eventStorage: EventSaveModel[] = [
    new EventSaveModel("Football match: Poland - Italy", "Krakow, Tauron Arena", new Date(), new Date(), "100.0 PLN", 20,
      "https://7.allegroimg.com/s1024/0cabb5/d571bc7f45268037a426cee62c67", "", []),
    new EventSaveModel("Shakira's Concert", "Lodz, Atlas Arena", new Date(), new Date(), "250.0 PLN", 350,
      "https://d-art.ppstatic.pl/kadry/k/r/b4/bb/4dd463c4d5a8e_o_full.jpg", "", []),
    new EventSaveModel("Metallica", "Warszawa, Stadion Narodowy", new Date(), new Date(), "350.0 PLN", 1233,
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Metallica-Warsaw-2019_01.jpg", "", []),
    new EventSaveModel("WedrowkiPub", "Wroclaw, Hala Stulecia", new Date(), new Date(), "10.0 PLN", null,
      "https://wedrowkipub.pl/wp-content/uploads/2018/01/logo-kwadrat_logo-white.png", "", [])
  ];

  getEventSummaries() {
    return this.eventStorage.map(e => new EventSummary(e.name, e.date, e.location, e.price, e.places, e.imgPath));
  }

  save(event: EventSaveModel) {
    this.eventStorage.push(event);
    this.eventsChanged.next(this.getEventSummaries().slice());
  }
}