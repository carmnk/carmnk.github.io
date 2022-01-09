var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { isNullish } from "../utils/Basics";
export var createIRSI = function (params) { return (__assign(__assign({}, iRSI), { params: iRSI.params.map(function (param) {
        return param.name === "period" && !isNullish(params === null || params === void 0 ? void 0 : params.period) ? __assign(__assign({}, param), { val: params.period }) : param;
    }) })); };
export var iRSI = {
    name: "RSI",
    category: "Oszillator",
    params: [{ name: "period", val: 14 }],
    default: {
        params: [{ name: "period", val: 14, type: "number" }],
        newSubchart: true,
        decimals: 2,
        fixedYScale: [0, 100],
        // graphProps: [{ name: "areaTresholds", val: { lower: 25, upper: 75 } }],
    },
    graphTypes: [{ type: "line" }],
    indicatorFnType: "chartSeries",
    indicatorFn: function (params) {
        var _a, _b, _c, _d;
        var srcChartData = params.dataseries, prev = params.prev, _e = params.period, period = _e === void 0 ? 14 : _e;
        var indicatorData = prev ? prev : [];
        for (var i = prev.length; i < srcChartData.length; i++) {
            if (i === 0) {
                indicatorData.push({ prices: [null, null, null], date: srcChartData[i].date });
                continue;
            }
            var dataset = srcChartData[i];
            var dataset1 = srcChartData[i - 1];
            var dClose = dataset.close - dataset1.close;
            var up = dClose > 0 ? dClose : 0;
            var dwn = dClose < 0 ? -dClose : 0;
            var w = 1 / period;
            var lastUpSmoothed = (_b = (_a = indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData[(indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData.length) - 1]) === null || _a === void 0 ? void 0 : _a.prices) === null || _b === void 0 ? void 0 : _b[1];
            var lastDwnSmoothed = (_d = (_c = indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData[(indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData.length) - 1]) === null || _c === void 0 ? void 0 : _c.prices) === null || _d === void 0 ? void 0 : _d[2];
            if (i < period || isNullish(lastUpSmoothed) || isNullish(lastDwnSmoothed)) {
                indicatorData.push({ prices: [null, up, dwn], date: srcChartData[i].date });
                continue;
            }
            var upSmoothed = up * w + (1 - w) * lastUpSmoothed;
            var dwnSmoothed = dwn * w + (1 - w) * lastDwnSmoothed;
            var rsi = dwnSmoothed === 0 ? 100 : 100 - 100 / (1 + upSmoothed / dwnSmoothed);
            indicatorData.push({ prices: [rsi, upSmoothed, dwnSmoothed], date: srcChartData[i].date });
        }
        return indicatorData;
    },
};
//# sourceMappingURL=RSI.js.map