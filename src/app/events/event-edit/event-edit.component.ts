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
import { Discount } from 'src/app/model/discount';
import { ComponentCanDeactivate } from 'src/app/shared/guards/can-deactivate.guard';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/shared/modals/dialog.service';
import { DiscountService } from 'src/app/discounts/discount.service';

class DiscountReadModel {
  constructor(public summary: string, public checked: boolean) {}
}

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit, ComponentCanDeactivate {

  eventForm: FormGroup;
  discounts: DiscountReadModel[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private eventService: EventService,
              private discountService: DiscountService,
              private dialogService: DialogService) {}

  ngOnInit() {
    this.discountService.getDiscounts().subscribe(discounts => {
      this.discounts = this.mapDiscountsToSummary(discounts);
      this.initEventForm();
    });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.eventForm.pristine) {
      return true;
    }
    return this.dialogService.confirm("Would you like discard the changes without saving?");
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

  private mapDiscountsToSummary(discountSaveModelList: Discount[]) {
    return discountSaveModelList.map(d => new DiscountReadModel(d.name, false));
  }
}
