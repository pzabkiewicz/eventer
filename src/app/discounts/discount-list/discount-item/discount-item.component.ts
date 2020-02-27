import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiscountService } from '../../discount.service';
import { DiscountSaveModel } from 'src/app/model/discount-save-model';

@Component({
  selector: 'app-discount-item',
  templateUrl: './discount-item.component.html',
  styleUrls: ['./discount-item.component.scss']
})
export class DiscountItemComponent implements OnInit {

  @Output()
  onDiscountSave = new EventEmitter<void>();

  discountForm: FormGroup;
  amountUnitOptions = ['%', 'abs'];

  constructor(
    private fb: FormBuilder,
    private discountService: DiscountService) {
    
      this.initForm();
  }

  ngOnInit() {
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
    this.onDiscountSave.emit(null);
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
