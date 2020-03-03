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
  }

  onCreate() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onItemClick(discount: DiscountSummary) {
    // TODO: Replace with id
    const id = discount.summary;
    this.router.navigate([`${id}`], { relativeTo: this.route })
  }

}
