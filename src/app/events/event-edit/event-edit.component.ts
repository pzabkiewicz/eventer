import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl
} from '@angular/forms';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { EventSaveModel, EventCreationDiscountSaveModel } from 'src/app/model/event-save-model';
import { DiscountSaveModel } from 'src/app/model/discount-save-model';
import { DiscountService } from 'src/app/discounts/discount.service';

class DiscountReadModel {
  constructor(public summary: string, public checked: boolean) {}
}

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  eventForm: FormGroup;
  discounts: DiscountReadModel[] = [];

  constructor(private router: Router,
              private fb: FormBuilder,
              private eventService: EventService,
              private discountService: DiscountService) {
    
    this.discounts = this.mapDiscountsToSummary(this.discountService.getDiscounts());
    this.initEventForm();
  }

  ngOnInit() {
  }

  onSave() {
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
    // TODO: temporarily navigate hardcoded in this place
    this.router.navigate(['events']);
  }

  getDiscounts() {
    return (<FormArray>this.eventForm.get('discounts')).controls;
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
    return this.fb.array(this.discounts.map(d => this.fb.control(d.checked)));
  }

  private mapDiscountsToSaveModel(discountFormControls: AbstractControl[]): EventCreationDiscountSaveModel[]  {
    return discountFormControls.map((selected, i) => new EventCreationDiscountSaveModel(this.discounts[i].summary, selected.value))
  }

  private mapDiscountsToSummary(discountSaveModelList: DiscountSaveModel[]) {
    return discountSaveModelList.map(d => new DiscountReadModel(d.summary, false));
  }
}
