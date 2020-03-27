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
import { DiscountsModule } from './discounts/discounts.module';
import { HeaderComponent } from './shared/header/header.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    EventDashboardComponent,
    EventItemComponent,
    EventEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    ReactiveFormsModule,
    DiscountsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
