/// <reference types="react" />
import * as T from "../../Types";
export declare const ChartMenuToolTreeItem: (props: {
    subchartIdx: number;
    yaxisIdx: number;
    toolIdx: number;
    subcharts: T.ChartState["subcharts"];
    Dispatch: T.ChartController["Dispatch"];
    handleToggleExpanded?: ((id: string) => void) | undefined;
    fullscreen: boolean;
}) => JSX.Element | null;
