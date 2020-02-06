import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule
    ]
})
export class MaterialModule {}