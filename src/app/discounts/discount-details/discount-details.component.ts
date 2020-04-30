import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Discount } from 'src/app/model/discount';
import { DiscountService } from '../discount.service';
import { switchMap } from 'rxjs/operators';

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
    this.discountSubscription = this.route.paramMap
      .pipe(
        switchMap((paramMap: ParamMap) => {
          const id = +paramMap.get('id');
          return this.discountService.getDiscount(id);
        })
      ).subscribe(discount => this.discount = discount);
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
