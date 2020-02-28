import { Component, OnInit, OnDestroy } from '@angular/core';
import { DiscountSummary } from '../model/discount-summary';
import { DiscountService } from './discount.service';
import { Router } from '@angular/router';
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

  constructor(private discountService: DiscountService,
    private router: Router) { }

  ngOnInit() {
    this.discounts = this.discountService.getDiscounts();
    this.discountsSubscription = this.discountService.discountsChanged
      .subscribe((discounts: DiscountSaveModel[]) => {
        this.discounts = discounts;
      });
  }

  getDiscounts(): DiscountSummary[] {
    return this.discountService.getDiscounts();
  }

  ngOnDestroy() {
    this.discountsSubscription.unsubscribe();
  }
}