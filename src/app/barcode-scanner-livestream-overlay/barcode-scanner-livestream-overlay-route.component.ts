import { Component, OnInit, ViewChild } from '@angular/core';
import { BarecodeScannerLivestreamOverlayComponent } from 'ngx-barcode-scanner';

@Component({
    selector: 'app-barcode-scanner-livestream-overlay',
    templateUrl: './barcode-scanner-livestream-overlay-route.component.html',
    styleUrls: ['./barcode-scanner-livestream-overlay-route.component.scss']
})
export class BarcodeScannerOverlayRouteComponent {

    @ViewChild(BarecodeScannerLivestreamOverlayComponent)
    barecodeScannerOverlay: BarecodeScannerLivestreamOverlayComponent;

    barcodeValue: string;

    startBarecodeScannerOverlay() {
        this.barecodeScannerOverlay.show();
    }

    onValueChanges(result) {
        this.barcodeValue = result.codeResult.code;
    }

    onStarted(event: boolean) {
        console.log('started', event);
    }
}
