import * as T from "../Types";
export declare const resizeContainer: (newContainerHeight: number, ChartState: T.ChartState) => T.SubchartState[];
export declare const resizeSubchart: (action: T.Action, subcharts: T.ChartState["subCharts"], drag: T.ChartState["pointer"]["drag"]) => T.ChartState["subCharts"];
export declare const editToolPosition: (Interactions: T.ChartInteractions, calc: T.ChartState["calc"], subcharts: T.ChartState["subCharts"], action: T.Action) => T.ChartState["subCharts"];
export declare const drawTool: (Interactions: T.ChartInteractions, calc: {
    subcharts: T.CalcSubchartState[];
    xaxis: T.CalcXaxisState;
    pointer: T.CalcPointerState;
    yToPix?: (y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    pixToY?: (pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    action?: T.Action;
}, ChartState: T.ChartState) => {
    subcharts: T.SubchartState[];
    draw: {
        isDrawing: boolean;
        xy: [number, number][];
        type?: "hline" | "vline" | "trendline";
        params: {
            name: string;
            val: any;
            vals: any[];
        }[];
    };
};
