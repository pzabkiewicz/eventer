import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Discount } from 'src/app/model/discount';
import { Observable, of } from 'rxjs';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.scss']
})
export class DiscountListComponent implements OnInit {

  discounts$: Observable<Discount[]> = of([]);

  constructor(private discountService: DiscountService,
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.discounts$ = this.discountService.getDiscounts();
  }

  onCreate() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
