/// <reference types="react" />
import { CChartMenuStateType } from "../ChartMenu";
import * as T from "../../Types";
export declare const Home: (props: {
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    events: T.UseChartControllerProps["events"] | undefined;
}) => JSX.Element;
