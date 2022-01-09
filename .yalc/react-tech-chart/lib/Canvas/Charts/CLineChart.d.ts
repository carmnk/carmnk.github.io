import React from "react";
import * as T from "../../Types";
export declare type CLineChartProps = {
    subcharts: T.ChartState["subcharts"];
    calcXaxis: T.ChartState["calc"]["xaxis"];
    calcSubcharts: T.ChartState["calc"]["subcharts"];
    yToPix?: (y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    pixToY?: (pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
    subchartIdx: number;
    yaxisIdx: number;
    graphIdx: number;
    indSeriesIdx?: number;
    areaTresholds?: {
        lower: number;
        upper: number;
    };
    rtTicks?: T.PixDataset[];
};
export declare const CLineChartComponent: (props: CLineChartProps) => JSX.Element | null;
export declare const CLineChart: React.MemoExoticComponent<(props: CLineChartProps) => JSX.Element | null>;
