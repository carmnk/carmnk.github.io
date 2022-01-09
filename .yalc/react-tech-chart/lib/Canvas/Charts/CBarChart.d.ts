import React from "react";
import * as T from "../../Types";
export declare type CBarChartProps = {
    subcharts: T.ChartState["subcharts"];
    calcXaxis: T.ChartState["calc"]["xaxis"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    subchartIdx: number;
    yaxisIdx: number;
    graphIdx: number;
    indSeriesIdx?: number;
    rtTicks?: T.PixDataset[];
};
export declare const CBarChartComponent: (props: CBarChartProps) => JSX.Element | null;
export declare const CBarChart: React.MemoExoticComponent<(props: CBarChartProps) => JSX.Element | null>;
