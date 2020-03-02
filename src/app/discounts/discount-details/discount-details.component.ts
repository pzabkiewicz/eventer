import { Component, OnInit } from '@angular/core';
import { DiscountSummary } from 'src/app/model/discount-summary';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.scss']
})
export class DiscountDetailsComponent implements OnInit {

  discount: DiscountSummary = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.discount = new DiscountSummary(id);
    });
  }

}
