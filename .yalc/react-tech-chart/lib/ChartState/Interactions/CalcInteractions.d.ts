import * as T from "../../Types";
export declare const resizeContainer: (newContainerHeight: number, ChartState: T.ChartState) => T.SubchartState[];
export declare const resizeSubchart: (action: T.Action, subcharts: T.ChartState["subcharts"], drag: T.ChartState["pointer"]["drag"]) => T.ChartState["subcharts"];
export declare const editToolPosition: (Interactions: T.ChartInteractions, calc: T.ChartState["calc"], subcharts: T.ChartState["subcharts"], action: T.Action) => T.ChartState["subcharts"];
export declare const drawTool: (Interactions: T.ChartInteractions, calc: import("../../Types/chartstate/calc").CalcState, ChartState: T.ChartState) => {
    subcharts: T.SubchartState[];
    draw: {
        isDrawing: boolean;
        xy: [number, number][];
        type?: "hline" | "vline" | "trendline" | undefined;
        params: {
            name: string;
            val: any;
            vals: any[];
        }[];
    };
};
export declare const startDrawing: (current: T.ChartState, params: T.ReducerAction<"startDrawing">["params"]) => {
    draw: {
        isDrawing: boolean;
        xy: [number, number][];
        type?: "hline" | "vline" | "trendline" | undefined;
        params: {
            name: string;
            val: any;
            vals: any[];
        }[];
    };
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
    calc: import("../../Types/chartstate/calc").CalcState;
    fullscreen: boolean;
    subcharts: T.SubchartState[];
    data: (T.ChartData | T.IndicatorData)[];
    pointer: T.PointerState;
    containerSize: T.ContainerSizeState;
    menu: {
        location: null;
        expandedSetting: [];
        disablePointerEvents: boolean;
    };
};
