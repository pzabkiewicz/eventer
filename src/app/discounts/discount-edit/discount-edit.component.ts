import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscountService } from '../discount.service';
import { Discount } from 'src/app/model/discount';
import { ComponentCanDeactivate } from 'src/app/shared/guards/can-deactivate.guard';
import { Observable, Subscription, of, EMPTY, throwError } from 'rxjs';
import { DialogService } from 'src/app/shared/modals/dialog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.scss']
})
export class DiscountEditComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  subscription: Subscription = null;
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
    this.initForm();
    this.subscription = this.route.paramMap
      .pipe(
        switchMap((paramMap: ParamMap) => {
          const discountId = paramMap.get('id');
          this.edit = discountId != null;
          if (this.edit) {
            return this.discountService.getDiscount(+discountId);
          } 
          return EMPTY;
        })
      ).subscribe(discount => {
        this.discount = discount;
        this.initForm();
      });
  }

  ngOnDestroy(): void {
    this.discountForm.reset();
    this.subscription.unsubscribe();
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.discountForm.pristine) {
      return true;
    }
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
      this.discountService.update(discount)
        .subscribe(discount => this.handleOnSaveResult(discount));
    } else {
      this.discountService.save(discount)
        .subscribe(discount => this.handleOnSaveResult(discount));  
    }
  }

  handleOnSaveResult(discount: Discount) {   
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
