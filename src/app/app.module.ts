import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './material.module';
import { EventDashboardComponent } from './events/event-dashboard/event-dashboard.component';
import { EventItemComponent } from './events/event-dashboard/event-item/event-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { DiscountListComponent } from './discounts/discount-list/discount-list.component';
import { DiscountEditComponent } from './discounts/discount-edit/discount-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDashboardComponent,
    EventItemComponent,
    EventEditComponent,
    DiscountsComponent,
    DiscountListComponent,
    DiscountEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
