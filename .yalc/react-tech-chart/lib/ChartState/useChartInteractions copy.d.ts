import React from "react";
import * as T from "../Types";
export declare const useChartInteractions: (HtmlElementRef: React.RefObject<HTMLElement>, initialState: T.ChartState, staticWidth: T.CChartProps["width"], staticHeight: T.CChartProps["height"], viewMode: NonNullable<T.CChartProps["settings"]["containerMode"]>, disablePointerEvents: T.CChartProps["settings"]["disablePointerEvents"], fullscreen: boolean) => React.MutableRefObject<T.ChartInteractions>;
