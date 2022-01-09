import * as T from "../../Types";
export declare const createData: (chartSeries: T.DataSeries, chartName: string, id: string, indicator?: T.IndicatorModel, indSrcId?: string, indSrcLineIdx?: number) => T.Data | null;
export declare const createIndicatorData: (chartSeries: T.DataSeries, indSrcId: string, indicator: T.IndicatorModel, indSrcLineIdx?: number, id?: string, name?: string) => T.IndicatorData;
export declare const createChartData: (chartData: T.ChartDataset[], chartName: string, id: string) => T.ChartData | null;
export declare const updateChartData: (chartData: T.ChartData, newDataSeries: T.ChartDataset[]) => T.ChartData | null;
export declare const updateChartDataAndDeps: (current: T.ChartState, dataId: string, newDatasets: T.ChartDataset[]) => T.ChartState;
export declare const getDateStat: (data: T.DataSeries, chartPeriod: T.ChartPeriod, prevDateStat?: T.ChartData["dateStat"]) => T.ChartData["dateStat"];
export declare const recalcIndicatorData: (data: T.ChartState["data"], dataId: string, updates?: {
    newIndSrcId?: string;
    newParams?: T.IndicatorModel["params"];
}, prevData?: T.IndicatorDataSeries) => T.IndicatorData | null;
export declare const getIndicatorsCalcDepIndicatorDatas: (data: ({
    id: string;
    type: "chart";
} | {
    id: string;
    type: "indicator";
    indSrcId: string;
})[], dataId: string, recursionResult?: string[]) => string[];
export declare const getIndicatorsDependantIndicatorDatas: (data: T.ChartState["data"], dataId: string) => string[];
export declare const isCircularIndicatorDependency: (data: T.ChartState["data"], dataId: string, newIndSrcId: string) => boolean;
export declare const updateIndicatorData: (current: T.ChartState, dataId: string, updates?: {
    newIndSrcId?: string;
    newParams?: T.IndicatorModel["params"];
}, prevData?: T.IndicatorDataSeries) => T.ChartState["data"];
