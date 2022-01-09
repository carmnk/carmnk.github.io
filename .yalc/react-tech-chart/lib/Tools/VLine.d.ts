import React from "react";
import * as T from "../Types";
export declare type CVLineProps = {
    subcharts: T.ChartState["subcharts"];
    subchartIdx: number;
    xy: [number, number][];
    drawPixXy?: [number, number][];
    style: T.ToolState["style"];
    calcXaxis: T.ChartState["calc"]["xaxis"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    yToPix?: (y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    pixToY?: (pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    mode?: "extendUp" | "extendDown" | "extendUpDown" | "*extendToSecondPoint";
};
export declare const CVLineComponent: (props: CVLineProps) => JSX.Element | null;
export declare const CVLine: React.MemoExoticComponent<(props: CVLineProps) => JSX.Element | null>;
export declare const VLine: T.ToolModel;
