/// <reference types="react" />
import { ChartState } from "./chartstate/chartstate";
import { ToolState } from "./chartstate/subcharts";
export declare type ToolModel = {
    name: string;
    type: string;
    nPoints: number;
    category: string;
    params: {
        name: string;
        val: any;
        vals: any[];
        type: "select" | "number";
    }[];
    default?: {
        params?: {
            icon: string;
        }[];
    };
    component: (props: {
        subcharts: ChartState["subcharts"];
        subchartIdx: number;
        xy: [number, number][];
        drawPixXy?: [number, number][];
        containerSize: ChartState["containerSize"];
        style: ToolState["style"];
        calcXaxis: ChartState["calc"]["xaxis"];
        calcSubcharts: ChartState["calc"]["subcharts"];
        yToPix?: (y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
        pixToY?: (pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number) => number;
        [key: string]: any;
    }) => JSX.Element | null;
};
