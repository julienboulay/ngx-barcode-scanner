import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BarecodeScannerLivestreamModule,
  BarecodeScannerLivestreamOverlayModule,
} from 'ngx-barcode-scanner';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BarecodeScannerLivestreamModule,
    BarecodeScannerLivestreamOverlayModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
