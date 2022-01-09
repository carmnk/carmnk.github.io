var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { isNullish } from "../utils/Basics";
import { getAppliedPriceKeys, getPriceToApply } from "./utils";
export var iKAMA = {
    name: "KAMA",
    category: "Average",
    params: [
        { name: "erPeriod", val: 21 },
        { name: "fastEmaPeriod", val: 2 },
        { name: "slowEmaPeriod", val: 30 },
        { name: "applyOn", val: 0 },
    ],
    default: {
        params: [
            { name: "erPeriod", val: 21, type: "number" },
            { name: "fastEmaPeriod", val: 2, type: "number" },
            { name: "slowEmaPeriod", val: 30, type: "number" },
            { name: "applyOn", val: 0, type: "applyOn" },
        ],
        newSubchart: false,
    },
    graphTypes: [{ type: "line" }],
    indicatorFnType: "dataSeries",
    indicatorFn: function (params) {
        var _a;
        var srcChartData = params.dataseries, prev = params.prev, _b = params.erPeriod, erPeriod = _b === void 0 ? 20 : _b, _c = params.fastEmaPeriod, fastEmaPeriod = _c === void 0 ? 2 : _c, _d = params.slowEmaPeriod, slowEmaPeriod = _d === void 0 ? 30 : _d, applyOn = params.applyOn;
        var indicatorData = __spreadArray([], prev, true);
        var _e = getAppliedPriceKeys(applyOn), chartPriceKey = _e.chartPriceKey, indPriceIdx = _e.indPriceIdx;
        srcChartData.slice((_a = prev === null || prev === void 0 ? void 0 : prev.length) !== null && _a !== void 0 ? _a : 0).forEach(function (srcDataset, srcDatasetIdx) {
            var _a, _b, _c, _d, _e;
            var idx = srcDatasetIdx + ((_a = prev === null || prev === void 0 ? void 0 : prev.length) !== null && _a !== void 0 ? _a : 0);
            var defaultDataset = {
                prices: [null],
                date: srcDataset.date,
            };
            if (idx < erPeriod - 1 + 1) {
                indicatorData.push(defaultDataset);
                return;
            }
            var dataset = srcChartData[idx];
            var price = getPriceToApply(dataset, chartPriceKey, indPriceIdx);
            if (!price) {
                indicatorData.push(defaultDataset);
                return;
            }
            var change = Math.abs(price - ((_b = getPriceToApply(srcChartData === null || srcChartData === void 0 ? void 0 : srcChartData[idx - erPeriod + 1], chartPriceKey, indPriceIdx)) !== null && _b !== void 0 ? _b : price));
            var volatility = srcChartData
                .slice(idx - erPeriod, idx + 1)
                .map(function (val, idx, arr) {
                if (idx === 0)
                    return null;
                var price0 = getPriceToApply(val, chartPriceKey, indPriceIdx);
                var price1 = getPriceToApply(arr[idx - 1], chartPriceKey, indPriceIdx);
                return !isNullish(price0) && !isNullish(price1) ? Math.abs(price0 - price1) : null;
            })
                .filter(function (val) { return val !== null; }).reduce(function (acc, cur) { return acc + cur; }, 0);
            var ER = volatility !== 0 ? change / volatility : 0;
            var slowConst = 2.0 / (slowEmaPeriod + 1);
            var fastConst = 2.0 / (fastEmaPeriod + 1);
            var SC = Math.pow(ER * (fastConst - slowConst) + slowConst, 2);
            var lastKama = (_e = (_d = (_c = indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData[idx - 1]) === null || _c === void 0 ? void 0 : _c.prices) === null || _d === void 0 ? void 0 : _d[0]) !== null && _e !== void 0 ? _e : getPriceToApply(srcChartData === null || srcChartData === void 0 ? void 0 : srcChartData[idx - 1], chartPriceKey, indPriceIdx);
            var kama = isNullish(lastKama) ? price : lastKama + SC * (price - lastKama);
            indicatorData.push({ prices: [kama], date: srcDataset.date });
        });
        return indicatorData;
    },
};
//# sourceMappingURL=KAMA.js.map