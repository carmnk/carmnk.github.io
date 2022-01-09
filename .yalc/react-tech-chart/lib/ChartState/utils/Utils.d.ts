import * as T from "../../Types";
export declare const pureXToPix: (x: number, translated: number, widthPerTick: number) => number;
export declare const purePixToX: (pixX: number, translated: number, widthPerTick: number) => number;
export declare const pureYToPix: (y: number, pixYBottom: number, decimals: number, translatedY: number, pixPerPt: number) => number;
export declare const purePixToY: (pixY: number, pixYBottom: number, decimals: number, translatedY: number, pixPerPt: number) => number;
export declare const getDataSeriesMaxY: (dataSeries: T.DataSeries, fixedYScale?: [number, number] | undefined, graphTypes?: {
    type: "line" | "bars";
    name?: string | undefined;
}[] | undefined) => number;
export declare const getDataSeriesMinY: (dataSeries: T.DataSeries, fixedYScale?: [number, number] | undefined, graphTypes?: {
    type: "line" | "bars";
    name?: string | undefined;
}[] | undefined) => number;
export declare const snapPixYToDataset: (pixY: number, dataset: T.Dataset | undefined, subcharts: T.ChartState["subcharts"] | null, subchartIdx: number, yaxisIdx: number, calcSubcharts: T.ChartState["calc"]["subcharts"], snapTolerance?: number | undefined) => {
    y: string;
    pixY: number;
}[] | null;
export declare const getSubchartIdxByPixXy: (pixXy: [number, number] | undefined, subcharts: T.ChartState["subcharts"]) => number | null;
export declare const snapToolsByXy: (pixXy: [number, number] | undefined, subcharts: T.ChartState["subcharts"], xaxis: T.CalcXaxisState, calc: T.ChartState["calc"]) => {
    subchartIdx: number;
    yaxisIdx: number;
    toolIdx: number;
    toolPtIdx: number;
}[];
export declare const getMaxDataSeriesDecimals: (dataSeries: T.DataSeries) => number;
