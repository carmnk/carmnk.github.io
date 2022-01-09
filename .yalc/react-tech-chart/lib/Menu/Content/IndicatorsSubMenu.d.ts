import React from "react";
import { Theme } from "@mui/material/styles/createTheme";
import { CChartMenuStateType } from "../ChartMenu";
export declare type IndicatorCategoryType = "Average" | "Oszillator" | "Volatility" | "Volume";
export declare const IndicatorsSubMenu: (props: {
    location: CChartMenuStateType["location"];
    submenuContent?: React.ReactNode;
    theme: Theme;
    onNavigate: (target: CChartMenuStateType["location"]) => void;
    amtIndicators: number;
}) => JSX.Element;
