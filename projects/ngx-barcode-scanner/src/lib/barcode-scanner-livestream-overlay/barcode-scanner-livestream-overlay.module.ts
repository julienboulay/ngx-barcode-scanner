import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarcodeScannerLivestreamModule } from '../barcode-scanner-livestream/barcode-scanner-livestream.module';
import { BarcodeScannerLivestreamOverlayComponent } from './barcode-scanner-livestream-overlay.component';

@NgModule({
  imports: [CommonModule, BarcodeScannerLivestreamModule],
  declarations: [BarcodeScannerLivestreamOverlayComponent],
  exports: [BarcodeScannerLivestreamOverlayComponent],
})
export class BarcodeScannerLivestreamOverlayModule {}
