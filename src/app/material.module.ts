import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatCardImage } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class MaterialModule {}