import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events = ['Event#1', 'Event#2', 'Event#3'];

  constructor() { }

  ngOnInit() {
  }

}
