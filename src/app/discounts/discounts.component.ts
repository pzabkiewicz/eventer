import { Component, OnInit, OnDestroy } from '@angular/core';
import { DiscountSummary } from '../model/discount-summary';
import { DiscountService } from './discount.service';
import { Discount } from '../model/discount';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.components.scss']
})
export class DiscountsComponent implements OnInit, OnDestroy {

  discounts: Discount[] = [];
  discountsSubscription: Subscription;

  constructor(private discountService: DiscountService) { }

  ngOnInit() {
    this.discounts = this.discountService.getDiscounts();
    this.discountsSubscription = this.discountService.discountsChanged
      .subscribe((discounts: Discount[]) => {
        this.discounts = discounts;
      });
  }

  ngOnDestroy() {
    this.discountsSubscription.unsubscribe();
  }
}