import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { DiscountItemComponent } from './discounts/discount-list/discount-item/discount-item.component';
import { DiscountsComponent } from './discounts/discounts.component';


const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id/edit', component: EventEditComponent },
  { path: 'discounts', component: DiscountsComponent, children: [
      { path: 'discounts/:id/edit', component: DiscountItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
