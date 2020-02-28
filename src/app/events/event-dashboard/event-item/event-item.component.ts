import { Component, OnInit, Input } from '@angular/core';
import { EventSummary } from 'src/app/model/event-summary';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() event: EventSummary;

  constructor() { }

  ngOnInit() {
  }

}
