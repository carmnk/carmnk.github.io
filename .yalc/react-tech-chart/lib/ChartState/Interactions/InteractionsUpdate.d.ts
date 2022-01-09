import * as T from "../../Types";
export declare const interactionsUpdate: (current: T.ChartState, params: T.ReducerAction<"updateInteractionState">["params"]) => {
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
    calc: {
        action: T.Action;
        xaxis: T.CalcXaxisState;
        subcharts: T.CalcSubchartState[];
        pointer: T.CalcPointerState;
        yToPix?: ((y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number | undefined) => number) | undefined;
        pixToY?: ((pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number | undefined) => number) | undefined;
    };
    containerSize: T.ContainerSizeState;
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
    fullscreen: boolean;
    data: (T.ChartData | T.IndicatorData)[];
    pointer: T.PointerState;
    menu: {
        location: null;
        expandedSetting: [];
        disablePointerEvents: boolean;
    };
} | {
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
    calc: {
        action: T.Action;
        xaxis: T.CalcXaxisState;
        subcharts: T.CalcSubchartState[];
        pointer: T.CalcPointerState;
        yToPix?: ((y: number, subchartIdx: number, yaxisIdx: number, translatedY?: number | undefined) => number) | undefined;
        pixToY?: ((pixY: number, subchartIdx: number, yaxisIdx: number, translatedY?: number | undefined) => number) | undefined;
    };
    containerSize: T.ContainerSizeState;
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
    fullscreen: boolean;
    data: (T.ChartData | T.IndicatorData)[];
    pointer: T.PointerState;
    menu: {
        location: null;
        expandedSetting: [];
        disablePointerEvents: boolean;
    };
};
