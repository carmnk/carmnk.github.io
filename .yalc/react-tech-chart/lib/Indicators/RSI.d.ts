import * as T from "../Types";
export declare const createIRSI: (params: {
    period: number;
}) => {
    params: import("../Types/IndicatorModel").IndicatorParameter[];
    name: string;
    category: T.IndicatorCategoryType;
    graphTypes: {
        type: "line" | "bars";
        name?: string | undefined;
    }[];
    default: {
        params: ((import("../Types/IndicatorModel").IndicatorParameter & {
            type: "number";
        }) | (import("../Types/IndicatorModel").IndicatorParameter & {
            type: "select";
            options: (string | number)[];
        }) | (import("../Types/IndicatorModel").IndicatorParameter & {
            type: "applyOn";
        }))[];
        newSubchart: boolean;
        fixedYScale?: [number, number] | undefined;
        decimals?: number | undefined;
    };
    indicatorFn: T.ChartSeriesIndicatorFn | T.DataSeriesIndicatorFn;
    indicatorFnType: T.IndicatorFnType;
};
export declare const iRSI: T.IndicatorModel;
