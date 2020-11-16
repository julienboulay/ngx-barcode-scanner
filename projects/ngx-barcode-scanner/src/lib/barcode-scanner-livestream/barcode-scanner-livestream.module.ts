import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from './barcode-scanner-livestream.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BarcodeScannerLivestreamComponent
    ],
    exports: [
        BarcodeScannerLivestreamComponent
    ]
})
export class BarcodeScannerLivestreamModule { }
