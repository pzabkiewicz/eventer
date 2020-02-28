import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDashboardComponent } from './events/event-dashboard/event-dashboard.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { DiscountEditComponent } from './discounts/discount-edit/discount-edit.component';
import { DiscountsComponent } from './discounts/discounts.component';


const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventDashboardComponent },
  { path: 'events/:id/edit', component: EventEditComponent },
  { path: 'discounts', component: DiscountsComponent, children: [
      { path: 'discounts/:id/edit', component: DiscountEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
