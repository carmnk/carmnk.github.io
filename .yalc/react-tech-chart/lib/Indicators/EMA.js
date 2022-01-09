import { getAppliedPriceKeys, getPriceToApply } from "./utils";
export var iEMA = {
    name: "EMA",
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
        var _a, _b, _c, _d, _e, _f, _g;
        var srcChartData = params.dataseries, prev = params.prev, _h = params.period, period = _h === void 0 ? 20 : _h, applyOn = params.applyOn;
        var _j = getAppliedPriceKeys(applyOn), chartPriceKey = _j.chartPriceKey, indPriceIdx = _j.indPriceIdx;
        var indicatorData = prev ? prev : [];
        for (var i = (_a = indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData.length) !== null && _a !== void 0 ? _a : 0; i < srcChartData.length; i++) {
            if (i < period - 1) {
                indicatorData.push({ prices: [null], date: srcChartData[i].date });
                continue;
            }
            else if (i === period - 1) {
                var initSMA = 0;
                for (var j = 0; j < period; j++) {
                    var dataset = srcChartData[j];
                    var price = getPriceToApply(dataset, chartPriceKey, indPriceIdx);
                    initSMA += price;
                }
                initSMA /= period;
                indicatorData.push({ prices: [initSMA], date: srcChartData[i].date });
            }
            else {
                var multiplier = 2 / (period + 1);
                var dataset = srcChartData[i];
                var price = getPriceToApply(dataset, chartPriceKey, indPriceIdx);
                var ema = (price - ((_d = (_c = (_b = indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData[i - 1]) === null || _b === void 0 ? void 0 : _b.prices) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : 0)) * multiplier +
                    ((_g = (_f = (_e = indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData[i - 1]) === null || _e === void 0 ? void 0 : _e.prices) === null || _f === void 0 ? void 0 : _f[0]) !== null && _g !== void 0 ? _g : 0);
                indicatorData.push({ prices: [ema], date: srcChartData[i].date });
            }
        }
        return indicatorData;
    },
};
//# sourceMappingURL=EMA.js.map