import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
    selector: 'app-barcode-scanner-livestream',
    templateUrl: './barcode-scanner-livestream-route.component.html',
    styleUrls: ['./barcode-scanner-livestream-route.component.scss']
})
export class BarcodeScannerLivestreamRouteComponent implements AfterViewInit {

    @ViewChild(BarecodeScannerLivestreamComponent)
    barecodeScanner: BarecodeScannerLivestreamComponent;

    barcodeValue;

    ngAfterViewInit(): void {
        this.barecodeScanner.start();
    }

    onValueChanges(result): void {
        this.barcodeValue = result.codeResult.code;
    }

    onStarted(event): void {
        console.log('started', event);
    }

}
