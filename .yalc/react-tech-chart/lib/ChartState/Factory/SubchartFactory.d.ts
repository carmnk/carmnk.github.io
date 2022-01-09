import * as T from "../../Types";
export declare const createSubChartModel: (params: {
    top: T.SubchartState["top"];
    bottom: T.SubchartState["bottom"];
    type: T.GraphState["type"];
    dataId: T.GraphState["dataId"];
    style: T.GraphState["style"];
    indicator?: T.IndicatorModel<T.IndicatorFnType> | undefined;
}) => T.SubchartState | null;
export declare const createYaxisModel: (params: {
    type: T.GraphState["type"];
    dataId: string;
    style: T.GraphState["style"];
    indicator?: T.IndicatorModel<T.IndicatorFnType> | undefined;
}) => T.YaxisState | null;
export declare const createChartGraphModel: (params: {
    dataId: string;
    style: T.ChartGraphState["style"];
}) => T.ChartGraphState;
export declare const createIndicatorGraphModel: (params: {
    dataId: string;
    style: T.IndicatorGraphState["style"];
}) => T.IndicatorGraphState;
export declare const swapSubcharts: (current: T.ChartState, params: T.ReducerAction<"swapSubcharts">["params"]) => T.ChartState;
export declare const resizeSubcharts: (params: {
    subchartsHeight: number;
    subcharts: T.ChartState["subcharts"];
    addSubchart?: {
        data: T.Data;
        darkMode: boolean;
    } | undefined;
    removeSubchartIdx?: number | undefined;
}) => T.SubchartState[];
export declare const modifyToolProp: (current: T.ChartState, params: T.ReducerAction<"setToolProp">["params"]) => any;
export declare const modifyGraphProp: (current: T.ChartState, params: T.ReducerAction<"setGraphProp">["params"]) => any;
export declare const removeTool: (current: T.ChartState, params: T.ReducerAction<"removeTool">["params"]) => any;
