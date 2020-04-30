import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountListComponent } from './discount-list/discount-list.component';
import { DiscountsComponent } from './discounts.component';
import { DiscountEditComponent } from './discount-edit/discount-edit.component';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DiscountsComponent,
    DiscountListComponent,
    DiscountEditComponent,
    DiscountDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    DiscountsRoutingModule
  ]
})
export class DiscountsModule { }
