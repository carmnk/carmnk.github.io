/** CChart Prop types */
/// <reference types="react" />
import { ChartState, ChartStateHook } from "./ChartState";
import { ChartDataSeries, Dataset } from "./ChartStateData";
import { IndicatorModel, IndicatorFnType } from "./IndicatorModel";
import { ChartGraphStateSpecifics } from "./ChartStateSubchart";
import { DeepPartial } from "./utils";
import { PixDataset } from ".";
export declare type ChartStateProps = {
    data: InputData[];
    rtData?: {
        data: ChartDataSeries;
        dataId: string;
    }[];
    width?: number;
    height?: number;
    settings: {
        initialState?: DeepPartial<ChartState["options"]>;
        themes?: ChartTheme[];
        containerMode?: "static" | "responsive";
        additionalIndicators?: IndicatorModel[];
        disablePointerEvents?: boolean;
        maxUpdatesPerSec?: number;
        initWidthPerTick?: number;
        disableTheme?: boolean;
        appendElement?: React.ReactNode;
        onFullscreen?: () => void;
        onFullscreenExit?: () => void;
    };
};
export declare type CChartProps = {
    Controller: ChartStateHook;
};
export declare type ChartTheme = DeepPartial<ChartState["options"]> & {
    name: string;
    isDarkMode: boolean;
};
export declare type InputData = GenericInputData & (ChartInputData | IndicatorInputData);
export declare type GenericInputData = {
    graphProps?: {
        subchartIdx?: number;
        yaxisIdx?: number;
        graphIdx?: number;
    };
};
export declare type ChartInputData = {
    data: ChartDataSeries;
    name: string;
    type: "chart";
    id: string;
    graphProps?: {
        chartType?: ChartGraphStateSpecifics["chartType"];
        style?: DeepPartial<ChartGraphStateSpecifics["style"]>;
    };
};
export declare type IndicatorInputData<T extends IndicatorFnType = IndicatorFnType> = {
    name?: string;
    type: "indicator";
    id?: string;
    indSrcId?: string;
    indicator: IndicatorModel<T>;
    graphProps?: {
        style?: {
            strokeColor: string[];
        };
    };
};
export declare type RealtimeDataCalc = {
    pix: PixDataset[] | null;
    data: (Dataset & {
        x: number;
    })[];
    dataId: string;
    subchartIdx: number;
    yaxisIdx: number;
    graphIdx: number;
};
export declare type RealtimeDataTick = {
    data: (Dataset & {
        x: number;
    })[];
    dataId: string;
    ticks: PixDataset[] | null;
};
