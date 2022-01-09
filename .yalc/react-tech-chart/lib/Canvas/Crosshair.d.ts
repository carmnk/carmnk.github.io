import React from "react";
import * as T from "../Types";
export declare type CrosshairProps = {
    subcharts: T.ChartState["subcharts"];
    data: T.ChartState["data"];
    containerSize: T.ChartState["containerSize"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    calcPointer: T.ChartState["calc"]["pointer"];
    calcXaxis: T.ChartState["calc"]["xaxis"];
    theme: T.ChartState["theme"];
    disableSnapX?: boolean;
    disableSnapGraphs?: boolean;
    pixToY?: T.ChartState["calc"]["pixToY"];
    rtTicks?: T.RealtimeDataTick[];
};
export declare const CrosshairComponent: (props: CrosshairProps) => JSX.Element | null;
export declare const Crosshair: React.MemoExoticComponent<(props: CrosshairProps) => JSX.Element | null>;
