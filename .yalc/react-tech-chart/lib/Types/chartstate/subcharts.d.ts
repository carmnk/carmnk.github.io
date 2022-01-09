import { ToolModel } from "../ToolModel";
export declare type SubchartState = {
    yaxis: YaxisState[];
    top: number;
    bottom: number;
};
export declare type YaxisState = {
    graphs: GraphState[];
    tools: ToolState[];
};
export declare type GraphState = ChartGraphState | IndicatorGraphState;
export declare type ChartGraphState = GenericGraphState & {
    type: "chart";
    chartType: "line" | "candles";
    style: {
        candleWickStrokeColor: string;
        candleStrokeColor: string;
        candleDownColor: string;
        candleUpColor: string;
        strokeColor: string;
    };
};
export declare type IndicatorGraphState = GenericGraphState & {
    type: "indicator";
    style: {
        strokeColor: string[];
    };
};
declare type GenericGraphState = {
    dataId: string;
};
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
export {};
