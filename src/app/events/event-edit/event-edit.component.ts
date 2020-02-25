import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  AbstractControl
} from '@angular/forms';
import { EventService } from '../event.service';
import { EventSummary } from 'src/app/model/event-summary';
import { Router } from '@angular/router';
import { EventSaveModel, DiscountsSaveModel } from 'src/app/model/event-save-model';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  eventForm: FormGroup;
  discounts: { id: string, description: string, value: boolean }[] = [
    { id: "1", description: 'discount#1', value: false },
    { id: "2", description: 'discount#2', value: true }
  ];

  constructor(private router: Router,
              private fb: FormBuilder,
              private eventService: EventService) {
    this.initEventForm();
  }

  ngOnInit() {
  }

  onSave() {
    console.log(this.eventForm);
    // TODO: Replace then with other object than EventSummary
    const newEvent = new EventSaveModel(
      this.eventForm.get('evName').value,
      this.eventForm.get('evLocation').value,
      this.eventForm.get('evDate').value,
      this.eventForm.get('evHour').value,
      this.eventForm.get('evPrice').value,
      0,
      this.eventForm.get('evImgPath').value,
      this.eventForm.get('evDescription').value,
      this.mapDiscountsToSaveModel(this.getDiscounts())
    );
    this.eventService.save(newEvent);
    // temporarily navigate hardcoded in this place
    this.router.navigate(['events']);
  }

  private initEventForm() {
    this.eventForm = this.fb.group({
      evName: [''],
      evLocation: [''],
      evDate: [null],
      evHour: [null],
      evPrice: [0.00],
      evImgPath: [''],
      evDescription: [''],
      discounts: this.initDiscounts()
    });
  }

  private initDiscounts() {
    return this.fb.array(this.discounts.map(d => this.fb.control(d.value)));
  }

  getDiscounts() {
    return (<FormArray>this.eventForm.get('discounts')).controls;
  }

  mapDiscountsToSaveModel(discountFormControls: AbstractControl[]): DiscountsSaveModel[]  {
    return discountFormControls.map((selected, i) => new DiscountsSaveModel(this.discounts[i].id, selected.value))
  }
}
