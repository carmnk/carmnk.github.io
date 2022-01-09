/// <reference types="react" />
import { Theme } from "@mui/material/styles/createTheme";
import { CChartMenuStateType } from "../ChartMenu";
import * as T from "../../Types";
export declare type ToolCategoryType = "Lines" | "Upcoming";
export declare const SettingsIcon: (props: {
    iconPath: string;
    theme: Theme;
}) => JSX.Element;
export declare const CMSettings: (props: {
    ChartMenuState: CChartMenuStateType;
    subcharts: T.ChartState["subcharts"];
    theme: T.ChartState["theme"];
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    Dispatch: T.ChartController["Dispatch"];
    onSettingsExpand: (id: string) => void;
    data: T.ChartState["data"];
    fullscreen: boolean;
}) => JSX.Element;
