import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscountService } from '../discount.service';
import { Discount } from 'src/app/model/discount';
import { ComponentCanDeactivate } from 'src/app/shared/guards/can-deactivate.guard';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/shared/modals/dialog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.scss']
})
export class DiscountEditComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  edit: boolean = false;
  discount: Discount = null;
  discountForm: FormGroup;
  amountUnitOptions = ['%', 'abs'];

  constructor(
    private discountService: DiscountService,
    private dialogService: DialogService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private routeLocation: Location) {}

  ngOnInit() {
    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      const discountId = paramMap.get('id');
      this.edit = discountId != null;
      if (this.edit) {
        this.discount = this.discountService.getDiscount(+discountId);
      }
      this.initForm();
    });
  }

  ngOnDestroy(): void {
    this.discountForm.reset();
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.discountForm.pristine) {
      return true;
    }

    const url: string = this.router.url;
    return this.dialogService.confirm("Would you like to discard the changes?");
  }

  onCancel() {
    this.routeLocation.back();
  }

  onSave() {
    const discount = new Discount(
      this.discountForm.get('name').value,
      this.discountForm.get('amount').value,
      this.discountForm.get('amountUnit').value,
      this.discountForm.get('description').value
    );

    if (this.edit) {
      discount.id = this.discount.id;
      this.discountService.update(discount);
    } else {
      this.discountService.save(discount);  
    }

    this.discountForm.reset();
    this.router.navigate([`/discounts/${discount.id}`]);
  }

  isSaveBtnDisabled(): boolean {
    return this.discountForm.invalid || this.discountForm.pristine;
  }

  private initForm() {
    let name = '';
    let amount = 0;
    let amountUnit = '';
    let description = '';

    if (this.edit) {
      name = this.discount.name;
      amount = this.discount.amount;
      amountUnit = this.discount.amountUnit;
      description = this.discount.description;
    }

    this.discountForm = this.fb.group({
      name: [name, Validators.required],
      amount: [amount, Validators.required],
      amountUnit: [amountUnit, Validators.required],
      description: [description, Validators.required]
    });
  }

}
