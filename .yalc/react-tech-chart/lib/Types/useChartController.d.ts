/// <reference types="react" />
import { ChartState } from "./chartstate/chartstate";
import { ChartGraphState } from "./chartstate/subcharts";
import { ChartStateDispatch } from "./Reducer";
import { IndicatorModel } from "./IndicatorModel";
import { ChartDataSeries, Dataset, PixDataset } from "./utils/dataseries";
import { DeepPartial } from "./utils/utils";
export declare type UseChartController = (props: UseChartControllerProps) => ChartController;
export declare type ChartController = {
    ChartState: ChartState;
    Dispatch: ChartStateDispatch;
    ContainerRef: React.RefObject<HTMLDivElement>;
    PointerContainerRef: React.RefObject<HTMLDivElement>;
    settings: UseChartControllerProps["settings"] | undefined;
    events: UseChartControllerProps["events"] | undefined;
    rtTicks: RealtimeDataTick[] | undefined;
};
export declare type UseChartControllerProps = {
    data: ChartInputData;
    rtData?: ChartDataSeries;
    width?: number;
    height?: number;
    settings?: {
        initialIndicators?: IndicatorInputData[];
        initialTheme?: ChartTheme;
        themes?: (ChartTheme & {
            name: "string";
        })[];
        containerMode?: "static" | "responsive";
        additionalIndicators?: IndicatorModel[];
        maxUpdatesPerSec?: number;
        initWidthPerTick?: number;
        disableTheme?: boolean;
        disableMenu?: boolean;
        disableCrosshair?: boolean;
        disableLabels?: boolean;
    };
    events?: {
        disablePointerEvents?: boolean;
        onDataChange?: (newData: ChartInputData) => void;
        onFullscreen?: () => void;
        onFullscreenExit?: () => void;
    };
};
export declare type InputData = ChartInputData | IndicatorInputData;
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
        chartType?: ChartGraphState["chartType"];
        style?: DeepPartial<ChartGraphState["style"]>;
    };
};
export declare type IndicatorInputData = GenericInputData & {
    type: "indicator";
    indicator: IndicatorModel;
    name?: string;
    id?: string;
    indSrcId?: string;
    graphProps?: {
        style?: {
            strokeColor: string[];
        };
    };
};
export declare type ChartTheme = DeepPartial<ChartState["theme"]>;
export declare type RealtimeDataTick = {
    data: (Dataset & {
        x: number;
    })[];
    dataId: string;
    ticks: PixDataset[] | null;
};
