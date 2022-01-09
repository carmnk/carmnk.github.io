import { ReactNode } from "react";
import { Theme } from "@mui/material/styles/createTheme";
import { CChartMenuStateType } from "../ChartMenu";
import * as T from "../../Types";
export declare type ToolCategoryType = "Lines" | "Upcoming";
export declare const ToolsSubMenu: (props: {
    subcharts: T.ChartState["subcharts"];
    location: CChartMenuStateType["location"];
    submenuContent?: ReactNode;
    theme: Theme;
    onNavigate: (target: CChartMenuStateType["location"]) => void;
}) => JSX.Element;
