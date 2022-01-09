export declare function parseCsvFileObj(data: File): Promise<{
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}[]>;
