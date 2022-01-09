import { ToolModel } from "./ToolModel";
/** ChartState Subcharts Types */
export declare type GenericGraphState = {
    dataId: string;
};
export declare type ChartGraphStateSpecifics = {
    type: "chart";
    chartType: "line" | "candles" | "area";
    style: {
        candleWickStrokeColor: string;
        candleStrokeColor: string;
        candleDownColor: string;
        candleUpColor: string;
        strokeColor: string;
    };
};
export declare type IndicatorGraphStateSpecifics = {
    type: "indicator";
    style: {
        strokeColor: string[];
    };
};
export declare type GraphState = ChartGraphState | IndicatorGraphState;
export declare type ChartGraphState = GenericGraphState & ChartGraphStateSpecifics;
export declare type IndicatorGraphState = GenericGraphState & IndicatorGraphStateSpecifics;
export declare const isIndicatorGraph: (graph: GraphState) => graph is IndicatorGraphState;
export declare const isChartGraph: (graph: GraphState) => graph is ChartGraphState;
export declare type ToolState = {
    xy: [number, number][];
    type: "hline" | "vline" | "trendline";
    style: {
        strokeColor: string;
        anchorColor: string;
    };
    params?: ToolModel["params"];
};
export declare type YaxisState = {
    graphs: GraphState[];
    tools: ToolState[];
};
export declare type SubchartState = {
    yaxis: YaxisState[];
    top: number;
    bottom: number;
};
