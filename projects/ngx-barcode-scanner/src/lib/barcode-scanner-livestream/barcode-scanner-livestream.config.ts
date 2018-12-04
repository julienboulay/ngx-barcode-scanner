export const DEFAULT_CONFIG = {
    inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: null,
        constraints: {
            width: { min: 640 },
            height: { min: 480 },
            aspectRatio: { min: 1, max: 100 },
            facingMode: 'environment', // or user
        },
        singleChannel: false // true: only the red color-channel is read
    },
    locator: {
        patchSize: 'medium',
        halfSample: true
    },
    locate: true,
    numOfWorkers: 4,
    decoder: {
        readers: ['code_128_reader']
    }
};