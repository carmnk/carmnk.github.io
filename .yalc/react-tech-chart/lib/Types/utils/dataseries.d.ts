export declare type LineChartDataset = {
    date: Date;
    close: number;
    volume?: number;
};
export declare type CandleChartDataset = LineChartDataset & {
    open: number;
    high: number;
    low: number;
};
export declare type ChartDataset = LineChartDataset | CandleChartDataset;
export declare type IndicatorDataset = {
    prices: (number | null)[];
    date: Date;
    priceLabels?: string[];
};
export declare type Dataset = ChartDataset | IndicatorDataset;
declare type LineChartPixYDataset = {
    pixClose: number;
};
declare type CandleChartPixYDataset = {
    pixClose: number;
    pixOpen: number;
    pixHigh: number;
    pixLow: number;
};
declare type ChartPixYDataset = LineChartPixYDataset | CandleChartPixYDataset;
declare type IndicatorPixYDataset = {
    pixPrices: (number | null)[];
};
export declare type PixYDataset = ChartPixYDataset | IndicatorPixYDataset;
export declare type CandleChartPixDataset = {
    pixX: number;
    pixY: CandleChartPixYDataset;
};
export declare type LineChartPixDataset = {
    pixX: number;
    pixY: LineChartPixYDataset;
};
export declare type ChartPixDataset = {
    pixX: number;
    pixY: ChartPixYDataset;
};
export declare type IndicatorPixDataset = {
    pixX: number;
    pixY: IndicatorPixYDataset;
};
export declare type PixDataset = {
    pixX: number;
    pixY: PixYDataset | null;
};
export declare const isCandleChartPixDataset: (pixDataset: PixDataset) => pixDataset is CandleChartPixDataset;
export declare const isLineChartPixDataset: (pixDataset: PixDataset) => pixDataset is LineChartPixDataset;
export declare const isIndicatorPixDataset: (pixDataset: PixDataset) => pixDataset is IndicatorPixDataset;
export declare const isCandleChartDataset: (dataset: Dataset) => dataset is CandleChartDataset;
export declare const isLineChartDataset: (dataset: Dataset) => dataset is LineChartDataset;
export declare const isVolumeDataset: (dataset: Dataset) => dataset is ChartDataset & {
    volume: number;
};
export declare const isIndicatorDataset: (dataset: Dataset) => dataset is IndicatorDataset;
export declare type ChartDataSeries = ChartDataset[];
export declare type IndicatorDataSeries = IndicatorDataset[];
export declare type DataSeries = (ChartDataset | IndicatorDataset)[];
export declare const isIndicatorDataSeries: (dataSeries: DataSeries) => dataSeries is IndicatorDataSeries;
export declare const isChartDataSeries: (dataSeries: DataSeries) => dataSeries is ChartDataSeries;
export {};
