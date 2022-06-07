// Quagga may have a dependency on the name of the property _row
import { ImageWrapper } from '@ericblade/quagga2';
import jsQR, { QRCode } from 'jsqr';
import { ScanFormat } from '../../enums/ScanFormat.enum';

// From https://github.com/ericblade/quagga2-reader-qr/blob/master/src/index.ts
class QrCodeReader {
  // TODO: is FORMAT, _row, config, supplements actually necessary? check inside quagga to see if
  // they are used for anything? or if they are just customary.
  FORMAT: {
    value: ScanFormat.QR_CODE;
    writeable: false;
  };

  _row: [];

  config;

  supplements;

  constructor(config, supplements) {
    this._row = [];
    this.config = config || {};
    this.supplements = supplements;
    this.FORMAT = {
      value: ScanFormat.QR_CODE,
      writeable: false,
    };
    return this;
  }

  decodeImage(inputImageWrapper: ImageWrapper) {
    const data = inputImageWrapper.getAsRGBA();
    const result = jsQR(
      data,
      inputImageWrapper.size.x,
      inputImageWrapper.size.y
    );

    if (result) {
      return Object.assign(
        {
          codeResult: {
            code: result.data,
            format: this.FORMAT.value,
            decodedCodes: [],
          },
          line: this.calcLine(result.location),
          boxes: [this.calcBox(result.location)],
        },
        result
      );
    }

    return null;
  }

  decodePattern() {
    // STUB, this is probably meaningless to QR, but needs to be implemented for Quagga, in case
    // it thinks there's a potential barcode in the image
    return null;
  }

  private calcLine(location: QRCode['location']) {
    const xOffset = 10;
    const yOffset =
      (location.bottomLeftCorner.y - location.topLeftCorner.y) / 2;

    const p1 = {
      x: location.topLeftCorner.x - xOffset,
      y: location.topLeftCorner.y + yOffset,
    };
    const p2 = {
      x: location.bottomRightCorner.x + xOffset,
      y: location.bottomRightCorner.y - yOffset,
    };

    return [p1, p2];
  }

  private calcBox(location: QRCode['location']) {
    return [
      [location.topLeftCorner.x, location.topLeftCorner.y],
      [location.topRightCorner.x, location.topRightCorner.y],
      [location.bottomRightCorner.x, location.bottomRightCorner.y],
      [location.bottomLeftCorner.x, location.bottomLeftCorner.y],
    ];
  }
}

export default QrCodeReader;
