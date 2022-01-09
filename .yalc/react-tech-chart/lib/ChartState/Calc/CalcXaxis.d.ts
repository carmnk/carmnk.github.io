import * as T from "../../Types";
export declare const calculateXaxis: (ChartState: T.ChartState, PreState: T.ChartInteractions, action: T.Action) => T.CalcXaxisState;
export declare const jumpToXaxisEnd: (xaxis: T.CalcXaxisState, mainGraphData: T.ChartDataSeries, containerWidth: number) => T.CalcXaxisState;
