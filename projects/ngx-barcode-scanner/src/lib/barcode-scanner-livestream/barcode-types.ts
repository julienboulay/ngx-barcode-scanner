export const BARCODE_TYPES = [
    'code_128',
    'code_39',
    'code_39_vin',
    'ean',
    'ean_extended',
    'ean_8',
    'upc',
    'upc_e',
    'codabar',
    'i2of5',
    '2of5',
    'code_93'
];

export function mapToReader(value: string | string[]) {
    if (typeof value === 'string') {
        checkBarCodeType(value);
        return [ mapToBarcodeType(value)];
    } else {
        return value.map(val => {
            checkBarCodeType(val);
            return mapToBarcodeType(val);
        });
    }
}

function checkBarCodeType(value: string) {
    if (!BARCODE_TYPES.some(t => t === value)) {
        throw new Error(`This barcode type '${value}' is not valid.`);
    }
}

function mapToBarcodeType(value) {
    return `${value}_reader`;
}
