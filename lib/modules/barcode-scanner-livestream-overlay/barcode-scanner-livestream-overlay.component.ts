import {
    Component, Input, Output, EventEmitter, ViewChild, OnDestroy
} from '@angular/core';
import { BarecodeScannerLivestreamComponent } from '../barcode-scanner-livestream/barcode-scanner-livestream.component';

@Component({
    selector: 'barcode-scanner-livestream-overlay',
    templateUrl: './barcode-scanner-livestream-overlay.component.html',
    styleUrls: ['./barcode-scanner-livestream-overlay.component.scss'],
})
export class BarecodeScannerLivestreamOverlayComponent implements OnDestroy{
    // Inputs
    @Input() type: string;

    @Output() valueChanges = new EventEmitter();

    @ViewChild(BarecodeScannerLivestreamComponent)
    scanner: BarecodeScannerLivestreamComponent;

    private showScanner = false;

    ngOnDestroy(){
        this.scanner.stop();
    }

    show() {
        this.showScanner = true;
        this.scanner.start();
    }

    hide() {
        this.showScanner = false;
        this.scanner.stop();
    }

    onValueChanges(result){
        this.valueChanges.next(result);
    }


}
