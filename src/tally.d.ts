// src/tally.d.ts

interface TallyPopupOptions {
    emoji?: {
        text: string;
        animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
    };
    overlay?: boolean;
    autoClose?: number;
    doNotShowAfterSubmit?: boolean;
    [key: string]: any;
}

interface TallyConfig {
    formId: string;
    popup?: TallyPopupOptions;
}

interface Window {
    TallyConfig?: TallyConfig;
}