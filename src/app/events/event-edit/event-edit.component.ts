import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  eventCreationForm: FormGroup;

  constructor(private fb: FormBuilder) { 
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
  }

}
