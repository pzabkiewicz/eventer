import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './material.module';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { DiscountListComponent } from './discounts/discount-list/discount-list.component';
import { DiscountItemComponent } from './discounts/discount-list/discount-item/discount-item.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventItemComponent,
    EventEditComponent,
    DiscountsComponent,
    DiscountListComponent,
    DiscountItemComponent
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
