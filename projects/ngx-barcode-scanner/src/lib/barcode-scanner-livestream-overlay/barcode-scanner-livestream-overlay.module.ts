import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarecodeScannerLivestreamOverlayComponent } from './barcode-scanner-livestream-overlay.component';
import { BarecodeScannerLivestreamModule } from '../barcode-scanner-livestream/barcode-scanner-livestream.module';

@NgModule({
    imports: [
        CommonModule,
        BarecodeScannerLivestreamModule
    ],
    declarations: [
        BarecodeScannerLivestreamOverlayComponent
    ],
    exports: [
        BarecodeScannerLivestreamOverlayComponent
    ]
})
export class BarecodeScannerLivestreamOverlayModule { }

