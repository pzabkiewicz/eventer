import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscountsComponent } from './discounts.component';
import { DiscountEditComponent } from './discount-edit/discount-edit.component';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';


const routes: Routes = [
  { path: 'discounts', component: DiscountsComponent, children: [
      { path: 'new', component: DiscountEditComponent },
      { path: ':id', component: DiscountDetailsComponent },
      { path: ':id/edit', component: DiscountEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountsRoutingModule { }
