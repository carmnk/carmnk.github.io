import React from "react";
import * as T from "../Types";
export declare type CChartMenuStateType = {
    location: "menu" | "chart" | "indicators" | "tools" | "settings" | "quickys" | "editIndicator" | "editTool" | null;
    expandedSetting: string[];
};
export declare const CChartMenuComponent: (props: {
    ChartMenuState: CChartMenuStateType;
    onClose: () => void;
    subcharts: T.ChartState["subcharts"];
    xaxis: T.ChartState["calc"]["xaxis"];
    fullscreen: T.ChartState["fullscreen"];
    theme: T.ChartState["theme"];
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    Dispatch: T.ChartController["Dispatch"];
    onSettingsExpand: (id: string) => void;
    settings: T.UseChartControllerProps["settings"];
    data: T.ChartState["data"];
    events: T.UseChartControllerProps["events"] | undefined;
}) => JSX.Element | null;
export declare const CChartMenu: React.MemoExoticComponent<(props: {
    ChartMenuState: CChartMenuStateType;
    onClose: () => void;
    subcharts: T.ChartState["subcharts"];
    xaxis: T.ChartState["calc"]["xaxis"];
    fullscreen: T.ChartState["fullscreen"];
    theme: T.ChartState["theme"];
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    Dispatch: T.ChartController["Dispatch"];
    onSettingsExpand: (id: string) => void;
    settings: T.UseChartControllerProps["settings"];
    data: T.ChartState["data"];
    events: T.UseChartControllerProps["events"] | undefined;
}) => JSX.Element | null>;
