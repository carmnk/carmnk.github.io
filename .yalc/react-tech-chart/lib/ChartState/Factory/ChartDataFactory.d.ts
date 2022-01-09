import * as T from "../../Types";
export declare const createChartData: (chartData: T.ChartDataset[], chartName: string, id: string) => T.ChartData | null;
export declare const updateChartData: (chartData: T.ChartData, newDataSeries: T.ChartDataset[]) => T.ChartData | null;
export declare const updateChartDataAndDeps: (current: T.ChartState, dataId: string, newDatasets: T.ChartDataset[]) => T.ChartState;
export declare const getDateStat: (data: T.DataSeries, chartPeriod: T.ChartPeriod, prevDateStat?: T.ChartDateStat | null | undefined) => T.ChartData["dateStat"];
