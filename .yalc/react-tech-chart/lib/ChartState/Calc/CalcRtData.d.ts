import * as T from "../../Types";
export declare const getRtTicks: (rtData: T.UseChartControllerProps["rtData"] | undefined, data: T.ChartState["data"], subcharts: T.ChartState["subcharts"], calc: T.ChartState["calc"]) => T.RealtimeDataTick[];
export declare const isRtDataOutOfRange: (rtData: T.UseChartControllerProps["rtData"], subcharts: T.ChartState["subcharts"], calc: T.ChartState["calc"]) => boolean;
export declare const calculatePixYDataset: (dataset: T.Dataset, dataId: string, data: T.ChartState["data"], subcharts: T.ChartState["subcharts"], yToPix: T.ChartState["calc"]["yToPix"]) => T.PixYDataset | null;
