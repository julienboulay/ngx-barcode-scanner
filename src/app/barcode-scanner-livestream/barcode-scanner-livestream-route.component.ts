import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { QuaggaJSResultObject } from '@ericblade/quagga2';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { ScanFormat } from 'projects/ngx-barcode-scanner/src/enums/ScanFormat.enum';

@Component({
  selector: 'app-barcode-scanner-livestream',
  templateUrl: './barcode-scanner-livestream-route.component.html',
  styleUrls: ['./barcode-scanner-livestream-route.component.scss'],
})
export class BarcodeScannerLivestreamRouteComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  barcodeValue: string;

  type = [
    ScanFormat.QR_CODE,
    ScanFormat.CODE_128,
    ScanFormat.EAN,
    ScanFormat.EAN_8,
    ScanFormat.CODE_39,
    ScanFormat.CODE_39_VIN,
    ScanFormat.CODABAR,
    ScanFormat.UPC,
    ScanFormat.UPC_E,
    ScanFormat.I2OF5,
    ScanFormat._2OF5,
    ScanFormat.CODE_93,
  ];

  ngAfterViewInit(): void {
    this.barcodeScanner.start();
  }

  onValueChanges(result: QuaggaJSResultObject): void {
    console.log('onValueChanges', result);
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(event): void {
    console.log('started', event);
  }
}
