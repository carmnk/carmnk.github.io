import React from "react";
import * as T from "../../Types";
export declare type SubchartTreeItemProps = {
    subchartIdx: number;
    subcharts: T.ChartState["subcharts"];
    data: T.ChartState["data"];
    Dispatch: T.ChartController["Dispatch"];
    onSettingsExpand: (id: string) => void;
    additionalLabelInfo?: JSX.Element | null;
    fullscreen: boolean;
};
export declare const SubchartTreeItem: React.ForwardRefExoticComponent<SubchartTreeItemProps & React.RefAttributes<unknown>>;
