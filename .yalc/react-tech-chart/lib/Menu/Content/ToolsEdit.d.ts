/// <reference types="react" />
import * as T from "../../Types";
import { CChartMenuStateType } from "../ChartMenu";
export declare const ToolsEdit: (props: {
    subcharts: T.ChartState["subcharts"];
    Dispatch: T.ChartController["Dispatch"];
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    fullscreen: boolean;
}) => JSX.Element;
