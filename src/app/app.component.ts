import { Component, ViewChild } from '@angular/core';
import {
  BarecodeScannerLivestreamComponent,
  BarecodeScannerLivestreamOverlayComponent,
} from 'ngx-barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = true;

  displaySingle = false;
  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  @ViewChild(BarecodeScannerLivestreamOverlayComponent)
  barecodeScannerOverlay: BarecodeScannerLivestreamOverlayComponent;

  barcodeValue: string;

  toggleLiveStream(): void {
    if (this.displaySingle) {
      this.stopLivestream();
    } else {
      this.startLiveStream();
    }
  }
  startLiveStream(): void {
    this.displaySingle = true;
    this.barecodeScanner.start();
  }

  stopLivestream(): void {
    this.displaySingle = false;
    this.barecodeScanner.stop();
  }

  startBarecodeScannerOverlay(): void {
    this.stopLivestream();
    this.barecodeScannerOverlay.show();
  }

  onValueChanges(result: any): void {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(event: any): void {
    console.log('started', event);
  }
}
