import {
    Component, EventEmitter, Input, OnDestroy, Output, ViewChild
} from '@angular/core';
import { BarecodeScannerLivestreamComponent } from '../barcode-scanner-livestream/barcode-scanner-livestream.component';

@Component({
    selector: 'barcode-scanner-livestream-overlay',
    templateUrl: './barcode-scanner-livestream-overlay.component.html',
    styleUrls: ['./barcode-scanner-livestream-overlay.component.scss'],
})
export class BarecodeScannerLivestreamOverlayComponent implements OnDestroy {

    private _started = false;

    get isStarted(): boolean {
        return this._started;
    }

    // Inputs
    @Input() type: string | string[];

    @Input() deviceId: string;

    @Output() valueChanges = new EventEmitter<string>();

    @Output() started = new EventEmitter<boolean>();

    @ViewChild(BarecodeScannerLivestreamComponent)
    scanner: BarecodeScannerLivestreamComponent;

    private _showScanner = false;

    get showScanner(): boolean {
        return this._showScanner;
    }

    ngOnDestroy(): void {
        this.scanner.stop();
    }

    show(): void {
        this._showScanner = true;
        this.scanner.start();
    }

    hide(): void {
        this._showScanner = false;
        this.scanner.stop();
    }

    onStarted(value: boolean): void {
        this._started = value;
        this.started.next(value);
    }

    onValueChanges(result: string): void {
        this.valueChanges.next(result);
    }

}
