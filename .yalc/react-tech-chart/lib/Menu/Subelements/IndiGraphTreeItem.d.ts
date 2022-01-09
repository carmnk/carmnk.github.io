import React from "react";
import * as T from "../../Types";
export declare const ChartMenuIndiGraphTreeItemComponent: (props: {
    subchartIdx: number;
    yaxisIdx: number;
    graphIdx: number;
    graphs: T.GraphState[];
    Dispatch: T.ChartController["Dispatch"];
    handleToggleExpanded?: ((id: string) => void) | undefined;
    data: T.ChartState["data"];
    fullscreen: boolean;
}) => JSX.Element | null;
export declare const ChartMenuIndiGraphTreeItem: React.MemoExoticComponent<(props: {
    subchartIdx: number;
    yaxisIdx: number;
    graphIdx: number;
    graphs: T.GraphState[];
    Dispatch: T.ChartController["Dispatch"];
    handleToggleExpanded?: ((id: string) => void) | undefined;
    data: T.ChartState["data"];
    fullscreen: boolean;
}) => JSX.Element | null>;
