import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarecodeScannerLivestreamComponent } from './barcode-scanner-livestream.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BarecodeScannerLivestreamComponent
    ],
    exports: [
        BarecodeScannerLivestreamComponent
    ]
})
export class BarecodeScannerLivestreamModule { }
