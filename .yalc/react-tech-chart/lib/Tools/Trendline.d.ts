import React from "react";
import * as T from "../Types";
export declare type CTrendlineProps = {
    subcharts: T.ChartState["subcharts"];
    subchartIdx: number;
    xy: [number, number][];
    drawPixXy?: [number, number][];
    calcXaxis: T.ChartState["calc"]["xaxis"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    yToPix?: (y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    pixToY?: (pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    style: T.ToolState["style"];
    mode?: "line" | "trendline" | "infiniteLine";
};
export declare const CTrendlineComponent: (props: CTrendlineProps) => JSX.Element | null;
export declare const CTrendline: React.MemoExoticComponent<(props: CTrendlineProps) => JSX.Element | null>;
export declare const TrendLine: T.ToolModel;
export default TrendLine;
