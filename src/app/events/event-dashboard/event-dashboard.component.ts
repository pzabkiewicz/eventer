import { Component, OnInit} from '@angular/core';
import { EventSummary } from 'src/app/model/event-summary';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.scss']
})
export class EventDashboardComponent implements OnInit {

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
