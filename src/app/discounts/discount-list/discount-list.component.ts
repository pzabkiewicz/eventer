import { Component, OnInit, Input} from '@angular/core';
import { DiscountSummary } from 'src/app/model/discount-summary';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Discount } from 'src/app/model/discount';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.scss']
})
export class DiscountListComponent implements OnInit {

  @Input()
  discounts: Discount[] = [];

  constructor(private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCreate() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
