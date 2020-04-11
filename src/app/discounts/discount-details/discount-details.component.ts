import { Component, OnInit, OnDestroy } from '@angular/core';
import { DiscountSummary } from 'src/app/model/discount-summary';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Discount } from 'src/app/model/discount';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.scss']
})
export class DiscountDetailsComponent implements OnInit, OnDestroy {

  discount: Discount = null;
  discountSubscription: Subscription;

  constructor(private discountService: DiscountService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.discountSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.discount = this.discountService.getDiscount(id);
    });
  }

  onBack() {
    this.router.navigate(['/discounts'], { relativeTo: this.route });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.discountSubscription.unsubscribe();
  }

}
