import React from "react";
import * as T from "../Types";
export declare type YaxisProps = {
    subcharts: T.ChartState["subcharts"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    theme: T.ChartState["theme"];
    containerSize: T.ChartState["containerSize"];
};
export declare const YaxisComponent: (props: YaxisProps) => JSX.Element;
export declare const Yaxis: React.MemoExoticComponent<(props: YaxisProps) => JSX.Element>;
