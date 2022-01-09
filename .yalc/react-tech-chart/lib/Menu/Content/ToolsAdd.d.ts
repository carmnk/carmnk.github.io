/// <reference types="react" />
import { CChartMenuStateType } from "../ChartMenu";
import * as T from "../../Types";
export declare type ToolCategoryType = "Lines" | "Upcoming" | "Measure";
export declare const ToolsAdd: (props: {
    subcharts: T.ChartState["subcharts"];
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    Dispatch: T.ChartController["Dispatch"];
}) => JSX.Element;
