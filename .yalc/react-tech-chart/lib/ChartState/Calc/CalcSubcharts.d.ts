import * as T from "../../Types";
export declare const calculateSubcharts: (ChartState: T.ChartState | undefined, xaxis: T.CalcXaxisState | undefined, rtData?: T.UseChartControllerProps["rtData"]) => T.CalcSubchartState[];
export declare const getYaxisMethods: (subcharts: T.ChartState["subcharts"], calcSubcharts: T.CalcSubchartState[]) => {
    yToPix: (y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number | undefined) => number;
    pixToY: (pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number | undefined) => number;
};
