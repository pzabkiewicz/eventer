import { EventsRoutingModule } from "./events-routing.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        EventsRoutingModule
    ]
})
export class EventsModule { }