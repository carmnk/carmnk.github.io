import * as T from "../Types";
import { isNullish } from "../utils/Basics";
export var getAppliedPriceKeys = function (applyOn) {
    var chartPriceKey = typeof applyOn === "string" && ["open", "high", "low", "close"].includes(applyOn)
        ? applyOn
        : typeof applyOn === "undefined" || applyOn === 0
            ? "close"
            : null;
    var parseddataSeriesKey = typeof applyOn === "string" ? parseFloat(applyOn) : applyOn;
    var indPriceIdx = typeof parseddataSeriesKey === "number" && !isNaN(parseddataSeriesKey)
        ? parseddataSeriesKey
        : typeof applyOn === "undefined"
            ? 0
            : null;
    return { chartPriceKey: chartPriceKey, indPriceIdx: indPriceIdx }; // better to infer datasrc type ("chart" | "indicator") for each dataset
};
export var getPriceToApply = function (dataset, chartPriceKey, indPriceIdx) {
    var _a;
    return T.isLineChartDataset(dataset) && chartPriceKey
        ? chartPriceKey in dataset
            ? dataset[chartPriceKey]
            : dataset["close"]
        : T.isIndicatorDataset(dataset) && !isNullish(indPriceIdx)
            ? ((_a = dataset.prices) === null || _a === void 0 ? void 0 : _a[indPriceIdx]) || 0
            : 0;
};
//# sourceMappingURL=utils.js.map