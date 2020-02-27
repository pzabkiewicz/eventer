import { Component, OnInit, Input } from '@angular/core';
import { DiscountSummary } from 'src/app/model/discount-summary';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.scss']
})
export class DiscountListComponent implements OnInit {

  @Input()
  discounts: DiscountSummary[] = [];

  constructor() { }

  ngOnInit() {
  }

}
