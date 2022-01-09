import { ReactNode } from "react";
import { CChartMenuStateType } from "./ChartMenu";
import * as T from "../Types";
export declare const ChartMenuLayout: (props: {
    isDesktop: boolean;
    onClose: () => void;
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    Dispatch: T.ChartController["Dispatch"];
    fullscreen: boolean;
    location: CChartMenuStateType["location"];
    headerText?: string | undefined;
    settings: T.UseChartControllerProps["settings"];
    content: ReactNode;
    events: T.UseChartControllerProps["events"];
}) => JSX.Element;
