# ngx-barcode-scanner component

Angular components for [QuaggaJS](https://serratus.github.io/quaggaJS/) barcode reader. It uses the new [Quagga2](https://github.com/ericblade/quagga2) supported version.
Supporting Angular 10+

<a href="https://www.npmjs.com/package/ngx-barcode-scanner">
    <img src="https://img.shields.io/npm/v/ngx-barcode-scanner?style=flat-square&color" alt="npm@latest">
</a>
<a href="https://www.npmjs.com/package/ngx-barcode-scanner">
    <img alt="Dependencies status" src="https://img.shields.io/librariesio/github/julienboulay/ngx-barcode-scanner">
</a>
<a href="https://www.npmjs.com/package/ngx-barcode-scanner">
    <img src="https://img.shields.io/npm/dw/ngx-barcode-scanner?style=flat-square" alt="Downloads/week">
</a>
<a href="https://www.npmjs.com/package/ngx-barcode-scanner">
    <img src="https://img.shields.io/npm/dependency-version/ngx-barcode-scanner/peer/@ericblade/quagga2?style=flat-square">
</a>
<a href="https://www.npmjs.com/package/ngx-barcode-scanner">
    <img src="https://img.shields.io/npm/dependency-version/ngx-barcode-scanner/peer/@angular/core?style=flat-square">
</a>

[![GitHub issues](https://img.shields.io/github/issues/julienboulay/ngx-barcode-scanner.svg)](https://github.com/julienboulay/ngx-barcode-scanner/issues)
[![GitHub stars](https://img.shields.io/github/stars/julienboulay/ngx-barcode-scanner.svg)](https://github.com/julienboulay/ngx-barcode-scanner/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/julienboulay/ngx-barcode-scanner/master/LICENSE)

## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Compatibility](#compatibility)
- [Development](#development)
- [License](#license)

## Demo

A simple demo is available [here](https://julienboulay.github.io/ngx-barcode-scanner)

## Installation

Install through npm:

```bash
npm install --save @ericblade/quagga2 ngx-barcode-scanner
```

## Usage

### Module imports

```typescript
//demo.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { Demo } from "./demo.component";

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, BarcodeScannerLivestreamModule],
  bootstrap: [Demo],
})
export class DemoModule {}
```

### BarcodeScannerLivestreamComponent

This component creates a barcode scanner.

```typescript
//demo.component.ts
import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: "demo-app",
  template: `
    <barcode-scanner-livestream
      type="code_128"
      (valueChanges)="onValueChanges($event)"
      (started)="(onStarted)"
    ></barcode-scanner-livestream>
    <div [hidden]="!barcodeValue">
      {{ barcodeValue }}
    </div>
  `,
})
export class Demo implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  barcodeValue;

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started) {
    console.log(started);
  }
}
```

## Compatibility

Choose the right version

| Angular    | ngx-barcode-scanner  | @ericblade/quagga2 |
| :---:      | :---:                | :---:              |
| 10         | 0.2.0                | 1.2.6              |
| 11         | 0.2.0                | 1.2.6              |
| 12         | 0.3.0                | 1.4.2              |
| 13         | 13.0.0               | 1.7.7              |

## Development

### Development server

Run `ng serve` or `npm run start` for a dev server, on the example app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Known issues

Access to the camera (getUserMedia API) is restricted on iOS when running in a Progressive Web App or in browsers different than Safari. Live streaming will not work in this case.

## FAQ

### Which types of barcode are supported ?

All barcode types supported by [quaggajs](https://serratus.github.io/quaggaJS/)

### Does ngx-barcode-scanner support scanning QR Codes ?

No,
ngx-barcode-scanner is based on [quaggajs](https://serratus.github.io/quaggaJS/), and it can not support qr-code.

## License

MIT
