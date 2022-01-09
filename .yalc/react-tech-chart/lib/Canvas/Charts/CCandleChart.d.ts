import React from "react";
import * as T from "../../Types";
export declare type CCandleChartProps = {
    subcharts: T.ChartState["subcharts"];
    calcXaxis: T.ChartState["calc"]["xaxis"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    subchartIdx?: number;
    yaxisIdx?: number;
    graphIdx?: number;
    rtTicks?: T.PixDataset[];
};
export declare const CCandleChartComponent: (props: CCandleChartProps) => JSX.Element | null;
export declare const CCandleChart: React.MemoExoticComponent<(props: CCandleChartProps) => JSX.Element | null>;
