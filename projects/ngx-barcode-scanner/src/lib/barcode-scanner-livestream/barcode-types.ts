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
]

export function mapToReader(value) {
    return [ value + '_reader' ];
}
