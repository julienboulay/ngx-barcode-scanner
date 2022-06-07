import { Component, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamOverlayComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-barcode-scanner-livestream-overlay',
  templateUrl: './barcode-scanner-livestream-overlay-route.component.html',
  styleUrls: ['./barcode-scanner-livestream-overlay-route.component.scss'],
})
export class BarcodeScannerOverlayRouteComponent {
  @ViewChild(BarcodeScannerLivestreamOverlayComponent)
  barcodeScannerOverlay: BarcodeScannerLivestreamOverlayComponent;

  barcodeValue: string;

  startBarcodeScannerOverlay(): void {
    this.barcodeScannerOverlay.show();
  }

  onValueChanges(result): void {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(event: boolean): void {
    console.log('started', event);
  }
}
