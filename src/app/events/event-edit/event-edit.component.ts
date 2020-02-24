import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup } from '@angular/forms';
import { EventService } from '../event.service';
import { EventSummary } from 'src/app/model/event-summary';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  eventCreationForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private eventService: EventService) { 
    this.eventCreationForm = this.fb.group({
      evName: [''],
      evLocation: [''],
      evDate: [null],
      evHour: [null],
      evPrice: [0.00],
      evImgPath: [''],
      evDescription: ['']
    });
  }

  ngOnInit() {
  }

  onSave() {
    console.log(this.eventCreationForm);
    // TODO: Replace then with other object than EventSummary
    const newEvent = new EventSummary(
      this.eventCreationForm.get('evName').value,
      this.eventCreationForm.get('evDate').value,
      this.eventCreationForm.get('evLocation').value,
      this.eventCreationForm.get('evPrice').value,
      0,
      this.eventCreationForm.get('evImgPath').value
    );
    this.eventService.save(newEvent);
    // temporarily navigate hardcoded in this place
    this.router.navigate(['events']);
  }

}
