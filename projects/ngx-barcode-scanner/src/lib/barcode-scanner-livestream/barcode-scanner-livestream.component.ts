import {
    Component, Input, Output, ViewChild, OnDestroy, ViewEncapsulation, OnChanges, SimpleChanges, EventEmitter
} from '@angular/core';
import * as Quagga from 'quagga';
import { mapToReader } from './barcode-types';
import { DEFAULT_CONFIG } from './barcode-scanner-livestream.config';

@Component({
    selector: 'barcode-scanner-livestream',
    templateUrl: './barcode-scanner-livestream.component.html',
    styleUrls: ['./barcode-scanner-livestream.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BarecodeScannerLivestreamComponent implements OnChanges, OnDestroy {
    // Inputs
    @Input() type: string;

    // Outputs
    @Output() valueChanges = new EventEmitter();

    @Output() started = new EventEmitter();

    @ViewChild('BarecodeScanner') barecodeScanner;

    private _started = false;

    get isStarted() {
        return this._started;
    }

    private configQuagga = DEFAULT_CONFIG;

    ngOnDestroy(): void {
        this.stop();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.restart();
    }

    private _init() {
        return new Promise((resolve, reject) => {
            Quagga.onProcessed((result) => this.onProcessed(result));

            Quagga.onDetected((result) => this.onDetected(result));

            this.configQuagga.inputStream.target = this.barecodeScanner.nativeElement;

            if (this.type) {
                this.configQuagga.decoder.readers = mapToReader(this.type);
            }

            Quagga.init(this.configQuagga, (err) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }

                resolve();
            });
        });
    }

    async start() {
        if (!this._started) {
            await this._init();
            Quagga.start();
            this._started = true;
            this.started.next(true);
        }
    }

    stop() {
        if (this._started) {
            Quagga.stop();
            this._started = false;
            this.started.next(false);
        }
    }

    restart() {
        if (this._started) {
            this.stop();
            this.start();
        }
    }

    onProcessed(result: any): any {
        const drawingCtx = Quagga.canvas.ctx.overlay,
              drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, {
                        x: 0,
                        y: 1,
                    }, drawingCtx, {
                            color: 'green',
                            lineWidth: 2,
                        });
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, {
                    x: 0,
                    y: 1,
                }, drawingCtx, {
                        color: '#00F',
                        lineWidth: 2,
                    });
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, {
                    x: 'x',
                    y: 'y',
                }, drawingCtx, {
                        color: 'red',
                        lineWidth: 3,
                    });
            }

        }
    }

    onDetected(result) {
        this.valueChanges.next(result);
    }

}

