/// <reference types="react" />
import * as T from "../Types";
export declare type DrawToolProps = {
    subcharts: T.ChartState["subcharts"];
    containerSize: T.ChartState["containerSize"];
    draw: T.ChartState["draw"];
    calc: T.ChartState["calc"];
    drawTheme: T.ChartState["theme"]["draw"];
};
export declare const DrawTool: (props: DrawToolProps) => JSX.Element | null;
