import * as T from "../../Types";
export declare const addSubchart: (current: T.ChartState, params: T.ReducerAction<"addSubchart">["params"]) => T.ChartState;
export declare const removeSubchart: (current: T.ChartState, params: T.ReducerAction<"removeSubchart">["params"]) => T.ChartState;
export declare const addGraph: (current: T.ChartState, params: T.ReducerAction<"addGraph">["params"]) => T.ChartState;
export declare const removeGraph: (current: T.ChartState, params: T.ReducerAction<"removeGraph">["params"]) => T.ChartState;
export declare const addInitialData: (current: T.ChartState, params: T.ReducerAction<"addData">["params"]) => T.ChartState;
export declare const clearChart: (current: T.ChartState, params: T.ReducerAction<"clearChart">["params"]) => any;
