import React from "react";
import * as T from "../Types";
export declare type MarkerProps = {
    rtTicks?: T.RealtimeDataTick[];
    xaxis: T.ChartState["calc"]["xaxis"];
    containerSize: T.ChartState["containerSize"];
    theme: T.ChartState["theme"];
    indSeriesIdx?: number;
};
export declare const Marker: React.MemoExoticComponent<(props: MarkerProps) => JSX.Element | null>;
