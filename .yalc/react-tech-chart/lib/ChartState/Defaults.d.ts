import * as T from "../Types";
import { DeepPartial } from "../Types/utils/utils";
export declare const prefersDarkMode: boolean;
export declare const graphColorsLight: string[];
export declare const graphColorsDark: string[];
export declare const getGraphColors: (colorArr: string[], idx: number) => string;
export declare const defaultCandleChartStyle: {
    candleStrokeColor: string;
    candleWickStrokeColor: string;
    candleDownColor: string;
    candleUpColor: string;
};
export declare const defaultLineChartStyle: {
    strokeColor: string[];
};
export declare const defaultDarkLineChartStyle: {
    strokeColor: string[];
};
export declare const getDefaultGraphStyle: (type: T.GraphState["type"], darkMode?: boolean | undefined, graphIdx?: number | undefined, indicatorLines?: number | undefined) => T.GraphState["style"];
export declare const defaultContainerSizeState: T.ChartState["containerSize"];
export declare const defaultPointerState: T.ChartState["pointer"];
export declare const defaultDrawState: T.ChartState["draw"];
export declare const defaultCalcXaxis: T.ChartState["calc"]["xaxis"];
export declare const defaultCalcPointer: T.ChartState["calc"]["pointer"];
export declare const defaultLightTheme: {
    name: string;
    isDarkMode: boolean;
    borderColor: string;
    backgroundColor: string;
    crosshair: {
        useCrosshair: boolean;
        strokeColor: string;
        xMarkerBackgroundColor: string;
        xMarkerFontName: string;
        xMarkerFontSize: number;
        xMarkerTextColor: string;
        xMarkerStrokeColor: string;
        yMarkerBackgroundColor: string;
        yMarkerStrokeColor: string;
        yMarkerTextColor: string;
        yMarkerFontName: string;
        yMarkerFontSize: number;
    };
    grid: {
        useGridX: boolean;
        useGridY: boolean;
        strokeColor: string;
        strokeStyle: string;
    };
    yaxis: {
        widthYAxis: number;
        widthTickmarkLines: number;
        fillColor: string;
        strokeColor: string;
        fontColor: string;
        fontSize: number;
        fontName: string;
    };
    xaxis: {
        heightXAxis: number;
        heightTickMarkLines: number;
        fillColor: string;
        strokeColor: string;
        fontColor: string;
        fontSize: number;
        fontName: string;
    };
    draw: {
        strokeColor: string;
        anchorColor: string;
    };
};
export declare const defaultDarkTheme: {
    name: string;
    isDarkMode: boolean;
    crosshair: {
        strokeColor: string;
        useCrosshair: boolean;
        xMarkerBackgroundColor: string;
        xMarkerFontName: string;
        xMarkerFontSize: number;
        xMarkerTextColor: string;
        xMarkerStrokeColor: string;
        yMarkerBackgroundColor: string;
        yMarkerStrokeColor: string;
        yMarkerTextColor: string;
        yMarkerFontName: string;
        yMarkerFontSize: number;
    };
    borderColor: string;
    draw: {
        strokeColor: string;
        anchorColor: string;
    };
    grid: {
        strokeColor: string;
        useGridX: boolean;
        useGridY: boolean;
        strokeStyle: string;
    };
    yaxis: {
        fontColor: string;
        strokeColor: string;
        widthYAxis: number;
        widthTickmarkLines: number;
        fillColor: string;
        fontSize: number;
        fontName: string;
    };
    backgroundColor: string;
    xaxis: {
        heightXAxis: number;
        heightTickMarkLines: number;
        fillColor: string;
        strokeColor: string;
        fontColor: string;
        fontSize: number;
        fontName: string;
    };
};
export declare const defaultState: T.ChartState;
export declare const defaultDarkState: T.ChartState;
export declare const getInitSubchartsState: (isDarkMode: boolean, inputData?: T.InputData[] | undefined) => T.ChartState["subcharts"];
export declare const getInitState: (initialTheme?: DeepPartial<{
    name: string;
    isDarkMode: boolean;
    backgroundColor: string;
    borderColor: string;
    crosshair: {
        useCrosshair: boolean;
        strokeColor: string;
        xMarkerFontSize: number;
        xMarkerFontName: string;
        xMarkerTextColor: string;
        xMarkerStrokeColor: string;
        xMarkerBackgroundColor: string;
        yMarkerTextColor: string;
        yMarkerStrokeColor: string;
        yMarkerBackgroundColor: string;
        yMarkerFontSize: number;
        yMarkerFontName: string;
    };
    grid: {
        useGridX: boolean;
        useGridY: boolean;
        strokeColor: string;
        strokeStyle: string;
    };
    yaxis: {
        widthYAxis: number;
        widthTickmarkLines: number;
        fillColor: string;
        strokeColor: string;
        fontColor: string;
        fontSize: number;
        fontName: string;
    };
    xaxis: {
        heightXAxis: number;
        heightTickMarkLines: number;
        fillColor: string;
        strokeColor: string;
        fontColor: string;
        fontSize: number;
        fontName: string;
    };
    draw: {
        strokeColor: string;
        anchorColor: string;
    };
}> | undefined, initWidthPerTick?: number | undefined) => T.ChartState;
export declare const getDefaultChartInteractions: (initialChartState: T.ChartState) => T.ChartInteractions;
