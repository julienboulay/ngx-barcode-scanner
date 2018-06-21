import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarecodeScannerLivestreamModule } from '../../lib/modules/barcode-scanner-livestream';
import { BarecodeScannerLivestreamOverlayModule } from '../../lib/modules/barcode-scanner-livestream-overlay';
import { routing, appRoutingProviders } from './app.routes';
import { BarcodeScannerLivestreamRouteComponent } from './+barcode-scanner-livestream';
import { BarcodeScannerOverlayRouteComponent } from './+barcode-scanner-livestream-overlay';

@NgModule({
    declarations: [
        AppComponent,
        BarcodeScannerLivestreamRouteComponent,
        BarcodeScannerOverlayRouteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        BarecodeScannerLivestreamModule,
        BarecodeScannerLivestreamOverlayModule
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
