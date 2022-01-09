/// <reference types="react" />
import { UseChartControllerProps, ChartTheme, InputData } from "./useChartController";
import { ChartState } from "./chartstate/chartstate";
import { IndicatorData } from "./chartstate/data";
import { ChartInteractions } from "./chartstate/useChartInteractions";
import { DataSeries, IndicatorDataSeries, ChartDataset } from "./utils/dataseries";
import { DeepPartial } from "./utils/utils";
export declare type ChartStateDispatch<Action extends ReducerTask = ReducerTask> = React.Dispatch<ReducerAction<Action>>;
export declare type ReducerTask = "addSubchart" | "swapSubcharts" | "addGraph" | "clearChart" | "startDrawing" | "updateInteractionState" | "removeSubchart" | "removeGraph" | "removeTool" | "setGeneralProp" | "setGraphProp" | "setToolProp" | "initData" | "modifyIndicatorData" | "modifyChartData" | "setTheme" | "setPointerEventsIntern";
export declare type ReducerSetGeneralProps = "backgroundColor" | "xAxisFillColor" | "xAxisStrokeColor" | "xAxisTextColor" | "yAxisStrokeColor" | "yAxisTextColor" | "gridStrokeColor" | "toggleGridX" | "toggleGridY" | "toggleFullscreen" | "toggleCrosshair" | "crosshairStrokeColor" | "crosshairXmarkerStrokeColor" | "crosshairXmarkerBackgroundColor" | "crosshairXmarkerTextColor" | "crosshairYmarkerStrokeColor" | "crosshairYmarkerBackgroundColor" | "crosshairYmarkerTextColor";
export declare type ReducerSetGraphProps = "strokeColor" | "candleChartColor" | "candleUpColor" | "candleDownColor" | "candleStrokeColor" | "candleWickStrokeColor" | "chartType" | "dataId";
export declare type ReducerSetToolProps = "strokeColor" | "anchorColor" | "hLineYlevel" | "toolParam";
export declare type ReducerAction<T extends ReducerTask = ReducerTask> = {
    task: T;
    params: T extends "setGeneralProp" ? {
        prop: ReducerSetGeneralProps;
        newValue?: any;
    } : T extends "initData" ? {
        datas: InputData[];
    } : T extends "setGraphProp" ? {
        prop: ReducerSetGraphProps;
        subchartIdx: number;
        yaxisIdx: number;
        graphIdx: number;
        newValue: any;
    } : T extends "modifyIndicatorData" ? {
        dataId: string;
        newParam?: {
            paramIdx: number;
            newValue: any;
        };
        newIndSrcId?: string;
        prevData?: IndicatorDataSeries;
    } : T extends "modifyChartData" ? {
        dataId: string;
        newDatasets: ChartDataset[];
    } : T extends "setToolProp" ? {
        prop: ReducerSetToolProps;
        subchartIdx: number;
        yaxisIdx: number;
        toolIdx: number;
        toolParamIdx?: number;
        newValue: any;
    } : T extends "addSubchart" ? {
        dataSeries: DataSeries;
        graphName: string;
        id: string;
        indicator?: IndicatorData["indicator"];
        reset?: boolean;
        indSrcId?: string;
    } : T extends "removeSubchart" ? {
        subchartIdx: number;
    } : T extends "addGraph" ? {
        dataSeries: DataSeries;
        graphName: string;
        subchartIdx: number;
        id: string;
        indicator?: IndicatorData["indicator"];
        indSrcId?: string;
        indSrcLineIdx?: number;
    } : T extends "removeGraph" ? {
        subchartIdx: number;
        yaxisIdx: number;
        graphIdx: number;
    } : T extends "swapSubcharts" ? {
        subchartIdx1: number;
        subchartIdx2: number;
    } : T extends "removeTool" ? {
        subchartIdx: number;
        yaxisIdx: number;
        toolIdx: number;
    } : T extends "startDrawing" ? {
        type: ChartState["draw"]["type"];
    } : T extends "updateInteractionState" ? {
        Interactions: ChartInteractions;
        RtData: {
            rtData: UseChartControllerProps["rtData"];
            isRtOutOfRange: boolean;
        };
    } : T extends "clearChart" ? {
        mode: "all" | "indicators" | "tools";
    } : T extends "setTheme" ? {
        theme: DeepPartial<ChartTheme>;
    } : T extends "setPointerEventsIntern" ? {
        disablePointerEvents: boolean;
    } : undefined;
};
export declare const isSetGeneralPropAction: (action: ReducerAction) => action is ReducerAction<"setGeneralProp">;
export declare const isSetGraphPropAction: (action: ReducerAction) => action is ReducerAction<"setGraphProp">;
export declare const isSetToolPropAction: (action: ReducerAction) => action is ReducerAction<"setToolProp">;
export declare const isAddSubchartAction: (action: ReducerAction) => action is ReducerAction<"addSubchart">;
export declare const isAddGraphAction: (action: ReducerAction) => action is ReducerAction<"addGraph">;
export declare const isStartDrawingAction: (action: ReducerAction) => action is ReducerAction<"startDrawing">;
export declare const isRemoveSubchartAction: (action: ReducerAction) => action is ReducerAction<"removeSubchart">;
export declare const isRemoveGraphAction: (action: ReducerAction) => action is ReducerAction<"removeGraph">;
export declare const isRemoveToolAction: (action: ReducerAction) => action is ReducerAction<"removeTool">;
export declare const isUpdateInteractionState: (action: ReducerAction) => action is ReducerAction<"updateInteractionState">;
export declare const isClearChartAction: (action: ReducerAction) => action is ReducerAction<"clearChart">;
export declare const isSwapSubchartsAction: (action: ReducerAction) => action is ReducerAction<"swapSubcharts">;
export declare const isInitDataAction: (action: ReducerAction) => action is ReducerAction<"initData">;
export declare const isModifyChartDataAction: (action: ReducerAction) => action is ReducerAction<"modifyChartData">;
export declare const isModifyIndicatorDataAction: (action: ReducerAction) => action is ReducerAction<"modifyIndicatorData">;
export declare const isSetThemeAction: (action: ReducerAction) => action is ReducerAction<"setTheme">;
export declare const isSetPointerEvents: (action: ReducerAction) => action is ReducerAction<"setPointerEventsIntern">;
