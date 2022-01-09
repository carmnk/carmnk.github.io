import * as T from "../../Types";
export declare const createData: (chartSeries: T.DataSeries, chartName: string, id: string, indicator?: T.IndicatorModel<T.IndicatorFnType> | undefined, indSrcId?: string | undefined, indSrcLineIdx?: number | undefined) => T.Data | null;
export declare const addSubchart: (current: T.ChartState, params: T.ReducerAction<"addSubchart">["params"]) => T.ChartState;
export declare const removeSubchart: (current: T.ChartState, params: T.ReducerAction<"removeSubchart">["params"]) => T.ChartState;
export declare const addGraph: (current: T.ChartState, params: T.ReducerAction<"addGraph">["params"]) => T.ChartState;
export declare const removeGraph: (current: T.ChartState, params: T.ReducerAction<"removeGraph">["params"]) => T.ChartState;
export declare const initData: (current: T.ChartState, params: T.ReducerAction<"initData">["params"]) => T.ChartState;
export declare const clearChart: (current: T.ChartState, params: T.ReducerAction<"clearChart">["params"]) => any;
