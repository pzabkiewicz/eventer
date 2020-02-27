import { Component, OnInit } from '@angular/core';
import { DiscountSummary } from '../model/discount-summary';
import { DiscountService } from './discount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.components.scss']
})
export class DiscountsComponent implements OnInit {

  constructor(private discountService: DiscountService,
    private router: Router) { }

  ngOnInit() {
  }

  getDiscounts(): DiscountSummary[] {
    return this.discountService.getDiscounts();
  }

  onAdd() {
    this.router.navigate(['/events']);
  }
}