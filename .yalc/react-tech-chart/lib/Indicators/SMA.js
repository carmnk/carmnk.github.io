var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { getAppliedPriceKeys, getPriceToApply } from "./utils";
export var iSMA = {
    name: "SMA",
    category: "Average",
    params: [
        { name: "period", val: 10 },
        { name: "applyOn", val: 0 },
    ],
    default: {
        params: [
            { name: "period", val: 10, type: "number" },
            { name: "applyOn", val: 0, type: "applyOn" },
        ],
        newSubchart: false,
    },
    graphTypes: [{ type: "line" }],
    indicatorFnType: "dataSeries",
    indicatorFn: function (params) {
        var _a;
        var srcChartData = params.dataseries, prev = params.prev, _b = params.period, period = _b === void 0 ? 20 : _b, applyOn = params.applyOn;
        var _c = getAppliedPriceKeys(applyOn), chartPriceKey = _c.chartPriceKey, indPriceIdx = _c.indPriceIdx;
        var indicatorData = __spreadArray([], prev, true);
        srcChartData.slice((_a = prev === null || prev === void 0 ? void 0 : prev.length) !== null && _a !== void 0 ? _a : 0).forEach(function (srcDataset, srcDatasetIdx) {
            var _a;
            var accumulatedIdx = srcDatasetIdx + ((_a = prev === null || prev === void 0 ? void 0 : prev.length) !== null && _a !== void 0 ? _a : 0);
            if (accumulatedIdx < period - 1) {
                indicatorData.push({ prices: [null], date: srcDataset.date });
                return;
            }
            var singleSmaAcc = 0;
            srcChartData.slice(accumulatedIdx - period + 1, accumulatedIdx + 1).forEach(function (selSrcDataset) {
                var price = getPriceToApply(selSrcDataset, chartPriceKey, indPriceIdx);
                singleSmaAcc += price;
            });
            indicatorData.push({ prices: [singleSmaAcc / period], date: srcDataset.date });
        });
        return indicatorData;
    },
};
//# sourceMappingURL=SMA.js.map