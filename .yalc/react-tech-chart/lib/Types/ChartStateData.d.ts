import { ChartPeriod, NumericDate } from "./ChartTime";
import { IndicatorModel } from "./IndicatorModel";
export declare type Data = ChartData | IndicatorData;
export declare type ChartData = {
    id: string;
    name: string;
    type: "chart";
    data: ChartDataSeries;
    decimals: number;
    dateStat: ChartDateStat | null;
    meta: {
        chartPeriod: ChartPeriod | null;
        dataPeriod: number;
        dataPeriodConfidence: number;
        type: "candlechart" | "linechart";
    };
};
export declare type IndicatorData = {
    id: string;
    name: string;
    fullName: string;
    type: "indicator";
    data: IndicatorDataSeries;
    decimals: number;
    indicator: IndicatorModel;
    indSrcId: string;
};
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
export declare type ChartDateStat = {
    years: {
        year: number;
        months: {
            month: number;
            weeks: {
                week: number;
                days: {
                    day: number;
                    hours: {
                        hour: number;
                        minutes: {
                            minute: number;
                        }[];
                    }[];
                }[];
            }[];
        }[];
    }[];
    accAmt: {
        years: number;
        months: number;
        weeks: number;
        days: number;
        hours: number;
        minutes: number;
        lastData: Partial<NumericDate> | null;
    };
};
export declare type MinuteStat = {
    minute: number;
}[];
export declare type HourStat = {
    hour: number;
    minutes: MinuteStat;
}[];
export declare type DayStat = {
    day: number;
    hours: HourStat;
}[];
export declare type WeekStat = {
    week: number;
    days: DayStat;
}[];
export declare type MonthStat = {
    month: number;
    weeks: WeekStat;
}[];
export declare type YearStat = {
    year: number;
    months: MonthStat;
}[];
export declare type PeriodStat = YearStat | MonthStat | WeekStat | DayStat | HourStat | MinuteStat;
export {};
