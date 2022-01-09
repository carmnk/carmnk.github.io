import { CalcState } from "./calc";
import { ChartData, IndicatorData } from "./data";
import { SubchartState } from "./subcharts";
import { PointerState, ContainerSizeState } from "./useChartInteractions";
export declare type ChartMemo = {
    customEffectChartState: CustomEffectChartState | null;
};
export declare type CustomEffectChartState = {
    subcharts: Omit<SubchartState, "top" | "bottom">[];
    draw: Omit<ChartState["draw"], "xy"> & {
        nPixXy: number;
    };
};
/** ChartState */
export declare type ChartState = {
    theme: {
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
    };
    calc: CalcState;
    fullscreen: boolean;
    subcharts: SubchartState[];
    draw: {
        isDrawing: boolean;
        xy: [number, number][];
        type?: "hline" | "vline" | "trendline";
        params: {
            name: string;
            val: any;
            vals: any[];
        }[];
    };
    data: (ChartData | IndicatorData)[];
    pointer: PointerState;
    containerSize: ContainerSizeState;
    menu: {
        location: null;
        expandedSetting: [];
        disablePointerEvents: boolean;
    };
};
