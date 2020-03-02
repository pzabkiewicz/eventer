import { Component, OnInit, Input} from '@angular/core';
import { DiscountSummary } from 'src/app/model/discount-summary';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.scss']
})
export class DiscountListComponent implements OnInit {

  @Input()
  discounts: DiscountSummary[] = [];

  constructor(private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.discounts.length > 0) {
      this.onItemClick(this.discounts[0]);
    }
  }

  onCreate() {
    // TODO: replace with id ?
    this.router.navigate(["1/edit"], { relativeTo: this.route });
  }

  onItemClick(discount: DiscountSummary) {
    // TODO: Replace with id
    const id = discount.summary;
    this.router.navigate([`${id}/details`], { relativeTo: this.route })
  }

}
