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
    subCharts: T.ChartState["subCharts"];
    options: T.ChartState["options"];
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    Dispatch: T.ChartStateHook["Dispatch"];
    onSettingsExpand: (id: string) => void;
    data: T.ChartState["data"];
}) => JSX.Element;
