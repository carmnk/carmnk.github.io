import React from "react";
import * as T from "../Types";
export declare type CHLineProps = {
    subcharts: T.ChartState["subcharts"];
    subchartIdx: number;
    xy: [number, number][];
    drawPixXy?: [number, number][];
    style: T.ToolState["style"];
    calcXaxis: T.ChartState["calc"]["xaxis"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    yToPix?: (y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    pixToY?: (pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    containerSize: T.ChartState["containerSize"];
    mode?: "extendRight" | "extendLeft" | "extendLeftRight" | "*extendToSecondPoint";
};
export declare const CHLine: React.MemoExoticComponent<(props: CHLineProps) => JSX.Element | null>;
export declare const HLine: T.ToolModel;
export default HLine;
