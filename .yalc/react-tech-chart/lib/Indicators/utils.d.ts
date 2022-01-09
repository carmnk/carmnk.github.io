import * as T from "../Types";
export declare const getAppliedPriceKeys: (applyOn?: number | "high" | "low" | "open" | "close" | undefined) => {
    chartPriceKey: "high" | "low" | "open" | "close" | null;
    indPriceIdx: number | null;
};
export declare const getPriceToApply: (dataset: T.Dataset, chartPriceKey: keyof Omit<T.CandleChartDataset, "date" | "volume"> | null, indPriceIdx: number | null) => number;
