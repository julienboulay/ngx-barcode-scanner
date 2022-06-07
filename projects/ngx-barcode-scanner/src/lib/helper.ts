import { ScanFormat } from '../enums/ScanFormat.enum';

export const BARCODE_TYPES = Object.values(ScanFormat);

export function mapToReader(value: string | string[]) {
  if (typeof value === 'string') {
    checkBarCodeType(value);
    return [mapToBarcodeType(value)];
  } else {
    return value.map((val) => {
      checkBarCodeType(val);
      return mapToBarcodeType(val);
    });
  }
}

function checkBarCodeType(value: string) {
  if (!BARCODE_TYPES.some((t) => t === value)) {
    throw new Error(`This barcode type '${value}' is not valid.`);
  }
}

function mapToBarcodeType(value) {
  return `${value}_reader`;
}
