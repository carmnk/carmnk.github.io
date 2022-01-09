import { ChartDataSeries, DataSeries, IndicatorDataSeries } from "./utils/dataseries";
export declare type IndicatorCategoryType = "Average" | "Oszillator" | "Volatility" | "Volume" | "Other";
export declare type ChartSeriesIndicatorFn = (params: {
    dataseries: ChartDataSeries;
    prev: IndicatorDataSeries;
    applyOn?: "open" | "high" | "low" | "close";
    [key: string]: any;
}) => IndicatorDataSeries;
export declare type DataSeriesIndicatorFn = (params: {
    dataseries: DataSeries;
    prev: IndicatorDataSeries;
    applyOn?: number | "open" | "high" | "low" | "close";
    [key: string]: any;
}) => IndicatorDataSeries;
export declare type IndicatorFn = ChartSeriesIndicatorFn | DataSeriesIndicatorFn;
export declare type IndicatorFnType = "chartSeries" | "dataSeries";
export declare type IndicatorParameter = {
    name: string;
    val: number | string;
};
export declare type IndicatorParameterType = "number" | "select" | "applyOn";
export declare type IndicatorParameterDefinition<T = IndicatorParameterType> = T extends "select" ? IndicatorParameter & {
    type: T;
    options: (string | number)[];
} : IndicatorParameter & {
    type: T;
};
export declare type IndicatorModel<T extends IndicatorFnType = IndicatorFnType> = {
    name: string;
    category: IndicatorCategoryType;
    params: IndicatorParameter[];
    graphTypes: {
        type: "line" | "bars";
        name?: string;
    }[];
    default: {
        params: IndicatorParameterDefinition[];
        newSubchart: boolean;
        fixedYScale?: [number, number];
        decimals?: number;
    };
    indicatorFn: T extends "chartSeries" ? ChartSeriesIndicatorFn : T extends "dataSeries" ? DataSeriesIndicatorFn : null;
    indicatorFnType: T;
};
