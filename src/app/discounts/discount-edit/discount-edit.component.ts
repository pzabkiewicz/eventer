import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiscountService } from '../discount.service';
import { DiscountSaveModel } from 'src/app/model/discount-save-model';
import { ComponentCanDeactivate } from 'src/app/shared/guards/can-deactivate.guard';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/shared/modals/dialog.service';

@Component({
  selector: 'app-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.scss']
})
export class DiscountEditComponent implements OnInit, ComponentCanDeactivate {

  discountForm: FormGroup;
  amountUnitOptions = ['%', 'abs'];

  constructor(
    private fb: FormBuilder,
    private discountService: DiscountService,
    private dialogService: DialogService) {
    
      this.initForm();
  }

  ngOnInit() {
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.discountForm.pristine) {
      return true;
    }
    return this.dialogService.confirm("Would you like discard the changes without saving?");
  }

  onSave() {
    const discount = new DiscountSaveModel(
      this.discountForm.get('summary').value,
      this.discountForm.get('amount').value,
      this.discountForm.get('amountUnit').value,
      this.discountForm.get('description').value
    );
    this.discountService.save(discount);  
    this.discountForm.reset();
  }

  private initForm() {
    this.discountForm = this.fb.group({
      'summary': this.fb.control(['']),
      'amount': this.fb.control([0]),
      'amountUnit': this.fb.control(['']),
      'description': this.fb.control([''])
    });
  }

}
