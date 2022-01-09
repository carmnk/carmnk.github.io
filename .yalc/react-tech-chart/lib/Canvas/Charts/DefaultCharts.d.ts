/// <reference types="react" />
import * as T from "../../Types";
export declare type CanvasChart = {
    name: string;
    type: string;
    component: (props: {
        subcharts: T.ChartState["subcharts"];
        calcXaxis: T.ChartState["calc"]["xaxis"];
        calcSubcharts: T.ChartState["calc"]["subcharts"];
        yToPix?: (y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
        pixToY?: (pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
        subchartIdx: number;
        yaxisIdx: number;
        graphIdx: number;
        indSeriesIdx?: number;
        [key: string]: any;
    }) => JSX.Element | null;
};
export declare const defaultCanvasCharts: CanvasChart["component"][];
