import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BarecodeScannerLivestreamModule,
  BarecodeScannerLivestreamOverlayModule,
} from 'ngx-barcode-scanner';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScannerLivestreamRouteComponent } from './barcode-scanner-livestream';
import { BarcodeScannerOverlayRouteComponent } from './barcode-scanner-livestream-overlay';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeScannerLivestreamRouteComponent,
    BarcodeScannerOverlayRouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BarecodeScannerLivestreamModule,
    BarecodeScannerLivestreamOverlayModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
