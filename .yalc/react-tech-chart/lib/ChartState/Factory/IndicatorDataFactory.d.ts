import * as T from "../../Types";
export declare const createIndicatorData: (chartSeries: T.DataSeries, indSrcId: string, indicator: T.IndicatorModel, indSrcLineIdx?: number | undefined, id?: string | undefined, name?: string | undefined) => T.IndicatorData;
export declare const recalcIndicatorData: (data: T.ChartState["data"], dataId: string, updates?: {
    newIndSrcId?: string | undefined;
    newParams?: import("../../Types/IndicatorModel").IndicatorParameter[] | undefined;
} | undefined, prevData?: T.IndicatorDataSeries | undefined) => T.IndicatorData | null;
export declare const getIndicatorsCalcDepIndicatorDatas: (data: ({
    id: string;
    type: "chart";
} | {
    id: string;
    type: "indicator";
    indSrcId: string;
})[], dataId: string, recursionResult?: string[] | undefined) => string[];
export declare const getIndicatorsDependantIndicatorDatas: (data: T.ChartState["data"], dataId: string) => string[];
export declare const isCircularIndicatorDependency: (data: T.ChartState["data"], dataId: string, newIndSrcId: string) => boolean;
export declare const updateIndicatorData: (current: T.ChartState, params: {
    dataId: string;
    prevData?: T.IndicatorDataSeries | undefined;
    newParam?: {
        paramIdx: number;
        newValue: any;
    } | undefined;
    newIndSrcId?: string | undefined;
}) => T.ChartState["data"];
