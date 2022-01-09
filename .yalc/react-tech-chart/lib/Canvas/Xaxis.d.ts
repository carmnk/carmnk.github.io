import React from "react";
import * as T from "../Types";
export declare type XaxisProps = {
    calcXaxis: T.ChartState["calc"]["xaxis"];
    theme: T.ChartState["theme"];
    containerSize: T.ChartState["containerSize"];
};
export declare const XaxisComponent: (props: XaxisProps) => JSX.Element;
export declare const Xaxis: React.MemoExoticComponent<(props: XaxisProps) => JSX.Element>;
