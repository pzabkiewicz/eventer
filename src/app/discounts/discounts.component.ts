import { Component, OnInit, OnDestroy } from '@angular/core';
import { DiscountSummary } from '../model/discount-summary';
import { DiscountService } from './discount.service';
import { DiscountSaveModel } from '../model/discount-save-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.components.scss']
})
export class DiscountsComponent implements OnInit, OnDestroy {

  discounts: DiscountSaveModel[] = [];
  discountsSubscription: Subscription;

  constructor(private discountService: DiscountService) { }

  ngOnInit() {
    this.discounts = this.discountService.getDiscounts();
    this.discountsSubscription = this.discountService.discountsChanged
      .subscribe((discounts: DiscountSaveModel[]) => {
        this.discounts = discounts;
      });
  }

  getDiscounts(): DiscountSummary[] {
    return this.discounts.map(d => new DiscountSummary(d.summary));
  }

  ngOnDestroy() {
    this.discountsSubscription.unsubscribe();
  }
}