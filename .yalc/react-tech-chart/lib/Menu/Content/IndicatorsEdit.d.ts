import React from "react";
import * as T from "../../Types";
import { CChartMenuStateType } from "../ChartMenu";
export declare const IndicatorsEditComponent: (props: {
    subcharts: T.ChartState["subcharts"];
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    location: CChartMenuStateType["location"];
    Dispatch: T.ChartController["Dispatch"];
    settings?: T.UseChartControllerProps["settings"];
    data: T.ChartState["data"];
    fullscreen: boolean;
}) => JSX.Element;
export declare const IndicatorsEdit: React.MemoExoticComponent<(props: {
    subcharts: T.ChartState["subcharts"];
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    location: CChartMenuStateType["location"];
    Dispatch: T.ChartController["Dispatch"];
    settings?: T.UseChartControllerProps["settings"];
    data: T.ChartState["data"];
    fullscreen: boolean;
}) => JSX.Element>;
