import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscountsComponent } from './discounts.component';
import { DiscountEditComponent } from './discount-edit/discount-edit.component';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';
import { AuthGuard } from '../auth/auth.guard';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate.guard';


const routes: Routes = [
  { 
    path: 'discounts', 
    component: DiscountsComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: DiscountEditComponent, canDeactivate: [CanDeactivateGuard] },
      { path: ':id', component: DiscountDetailsComponent },
      { path: ':id/edit', component: DiscountEditComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountsRoutingModule { }
