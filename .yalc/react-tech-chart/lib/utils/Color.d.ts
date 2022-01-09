export declare const colorNames: {
    [key: string]: string;
};
export declare const colorNameToHex: (name: string) => string | null;
export declare const colorNameToRGB: (name: string) => {
    r: number;
    g: number;
    b: number;
} | null;
export declare const hexToRgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;
