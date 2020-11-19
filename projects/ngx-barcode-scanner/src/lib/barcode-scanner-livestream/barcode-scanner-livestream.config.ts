export const DEFAULT_CONFIG: QuaggaConfig = {
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

export interface QuaggaConfig {
    inputStream: {
        name: string,
        type: string,
        target: any,
        constraints: {
            width: { min: number },
            height: { min: number },
            aspectRatio: { min: number, max: number },
            facingMode: string, // or user
            deviceId?: string
        },
        singleChannel: boolean // true: only the red color-channel is read
    };
    frequency?: number;
    debug?: boolean;
    locator: {
        patchSize: string,
        halfSample: boolean,
        debug?: {
            showCanvas: boolean,
            showPatches: boolean,
            showFoundPatches: boolean,
            showSkeleton: boolean,
            showLabels: boolean,
            showPatchLabels: boolean,
            showRemainingPatchLabels: boolean,
            boxFromPatches: {
                showTransformed: boolean,
                showTransformedBox: boolean,
                showBB: boolean
            }
        }
    };
    locate: boolean;
    numOfWorkers: number;
    decoder: {
        readers: string[]
    };
}
