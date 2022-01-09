import React from "react";
import * as T from "../Types";
export declare const ChartLabels: (props: {
    data: T.ChartState["data"];
    subcharts: T.ChartState["subcharts"];
    calcPointer: T.ChartState["calc"]["pointer"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    onGraphLabelClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, subchartIdx: number, graphIdx: number) => void;
}) => JSX.Element;
