/// <reference types="react" />
import * as T from "../../Types";
export declare const ChartMenuChartGraphTreeItem: (props: {
    subchartIdx: number;
    yaxisIdx: number;
    graphIdx: number;
    subcharts: T.ChartState["subcharts"];
    Dispatch: T.ChartController["Dispatch"];
    onSettingsExpand: (id: string) => void;
    data: T.ChartState["data"];
    fullscreen: boolean;
}) => JSX.Element | null;
