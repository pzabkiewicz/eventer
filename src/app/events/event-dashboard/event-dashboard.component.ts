import { Component, OnInit, OnDestroy} from '@angular/core';
import { EventSummary } from 'src/app/model/event-summary';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.scss']
})
export class EventDashboardComponent implements OnInit, OnDestroy {

  events: EventSummary[] = [];
  eventsSubscription: Subscription;

  constructor(private router: Router,
    private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEventSummaries();
    this.eventsSubscription = this.eventService.eventsChanged.subscribe( (eventSummaries: EventSummary[]) => {
      this.events = eventSummaries;
    });
  }

  onAddSimpleClick() {
    this.router.navigate(['/events/1/edit']);
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

}
