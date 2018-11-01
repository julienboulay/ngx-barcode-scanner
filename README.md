# ngx-barcode-scanner component

[![npm version](https://badge.fury.io/js/ngx-barcode-scanner.svg)](https://www.npmjs.com/ngx-barcode-scanner)
[![devDependency Status](https://david-dm.org/julienboulay/ngx-barcode-scanner/dev-status.svg)](https://david-dm.org/julienboulay/ngx-barcode-scanner#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/julienboulay/ngx-barcode-scanner.svg)](https://github.com/julienboulay/ngx-barcode-scanner/issues)
[![GitHub stars](https://img.shields.io/github/stars/julienboulay/ngx-barcode-scanner.svg)](https://github.com/julienboulay/ngx-barcode-scanner/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/julienboulay/ngx-barcode-scanner/master/LICENSE)

## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [License](#license)

## Demo

*Coming soon...*

## Installation

Install through npm:
```
npm install --save quagga ngx-barcode-scanner
```

## Usage

### Module imports

```typescript
//demo.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { Demo } from './demo.component';

@NgModule({
    declarations: [Demo],
    imports: [
        BrowserModule,
        BarecodeScannerLivestreamModule
    ],
    bootstrap: [Demo]
})
export class DemoModule {}
```

### BarcodeScannerLivestreamComponent

This component creates a barcode scanner 

```typescript
//demo.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';


@Component({
  selector: 'demo-app',
  template: `
    <barcode-scanner-livestream type="code_128" (valueChanges)="onValueChanges($event)"></barcode-scanner-livestream>
    <div [hidden]="!barcodeValue">
        {{barcodeValue}}
    </div>
  `
})
export class Demo implements AfterViewInit{
    
    @ViewChild(BarecodeScannerLivestreamComponent)
    BarecodeScanner: BarecodeScannerLivestreamComponent;
    
    barcodeValue;
    
    ngAfterViewInit() {
        this.BarecodeScanner.start();
    }

    onValueChanges(value){
        this.barcodeValue = value.code;
    }
}
```

## Development

### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Package

Run `npm run package` to package the project.
The project can then be installed with `npm install <relative_dir>/dist/ngx-barcode-scanner-<version>.tgz`

### Release

* Bump the version in package.json
* Commit and push to github
* Login to your npm account with `npm login`
* Publish to npm repository with `npm run release`


## Known issues

Access to the camera is restricted on iOS when running in a Progressive Web App. Live streaming will not work in this case.

## License

MIT