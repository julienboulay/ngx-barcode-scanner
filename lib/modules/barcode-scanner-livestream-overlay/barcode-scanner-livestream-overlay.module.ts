import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarecodeScannerLivestreamOverlayComponent } from './barcode-scanner-livestream-overlay.component';
import { BarecodeScannerLivestreamModule } from '../barcode-scanner-livestream/barcode-scanner-livestream.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

