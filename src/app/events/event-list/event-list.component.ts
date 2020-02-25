import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventSummary } from 'src/app/model/event-summary';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: EventSummary[] = [];

  constructor(private router: Router,
    private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEventSummaries();
  }

  onAddSimpleClick() {
    this.router.navigate(['/events/1/edit']);
  }

}
