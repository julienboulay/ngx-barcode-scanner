import { QuaggaJSConfigObject } from '@ericblade/quagga2';
import { BARCODE_TYPES, mapToReader } from '../helper';

export const DEFAULT_CONFIG: QuaggaJSConfigObject = {
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    target: null,
    constraints: {
      width: { min: 640 },
      height: { min: 480 },
      aspectRatio: { min: 1, max: 2 },
      facingMode: 'environment', // or user
    },
    singleChannel: false, // true: only the red color-channel is read
  },
  locator: {
    patchSize: 'medium',
    halfSample: true,
  },
  locate: true,
  numOfWorkers: 4,
  decoder: {
    readers: mapToReader(BARCODE_TYPES),
  },
};
