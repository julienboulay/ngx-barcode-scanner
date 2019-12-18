import {
    Component, Input, Output, ViewChild, OnDestroy, EventEmitter
} from '@angular/core';
import { BarecodeScannerLivestreamComponent } from '../barcode-scanner-livestream/barcode-scanner-livestream.component';

@Component({
    selector: 'barcode-scanner-livestream-overlay',
    templateUrl: './barcode-scanner-livestream-overlay.component.html',
    styleUrls: ['./barcode-scanner-livestream-overlay.component.scss'],
})
export class BarecodeScannerLivestreamOverlayComponent implements OnDestroy {

    private _started = false;

    get isStarted() {
        return this._started;
    }

    // Inputs
    @Input() type: string;

    @Output() valueChanges = new EventEmitter();

    @Output() started = new EventEmitter();

    @ViewChild(BarecodeScannerLivestreamComponent)
    scanner: BarecodeScannerLivestreamComponent;

    private _showScanner = false;

    get showScanner(){
        return this._showScanner;
    }

    ngOnDestroy(){
        this.scanner.stop();
    }

    show() {
        this._showScanner = true;
        this.scanner.start();
    }

    hide() {
        this._showScanner = false;
        this.scanner.stop();
    }

    onStarted(value: boolean) {
        this._started = value;
        this.started.next(value);
    }

    onValueChanges(result){
        this.valueChanges.next(result);
    }


}
