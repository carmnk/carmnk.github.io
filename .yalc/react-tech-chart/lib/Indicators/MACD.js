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
import { iEMA } from "./EMA";
export var iMACD = {
    name: "MACD",
    category: "Oszillator",
    params: [
        { name: "period short", val: 12 },
        { name: "period long", val: 26 },
        { name: "signal period", val: 9 },
    ],
    default: {
        params: [
            { name: "period short", val: 12, type: "number" },
            { name: "period long", val: 26, type: "number" },
            { name: "signal period", val: 9, type: "number" },
        ],
        newSubchart: true,
    },
    graphTypes: [
        { type: "line", name: "MACD" },
        { type: "line", name: "Signal" },
        { type: "bars", name: "Histogram" },
    ],
    indicatorFnType: "chartSeries",
    indicatorFn: function (params) {
        var _a, _b, _c, _d, _e, _f, _g;
        var srcChartData = params.dataseries, prev = params.prev, _h = params.periodEmaShort, periodEmaShort = _h === void 0 ? 12 : _h, _j = params.periodEmaLong, periodEmaLong = _j === void 0 ? 26 : _j, _k = params.periodSignal, periodSignal = _k === void 0 ? 9 : _k;
        var emaFn = iEMA.indicatorFn;
        var prevCalcData = prev
            ? {
                macd: prev.map(function (indDataset) { var _a; return (__assign(__assign({}, indDataset), { prices: [(_a = indDataset === null || indDataset === void 0 ? void 0 : indDataset.prices) === null || _a === void 0 ? void 0 : _a[0]] })); }),
                signal: prev.map(function (indDataset) { var _a; return (__assign(__assign({}, indDataset), { prices: [(_a = indDataset === null || indDataset === void 0 ? void 0 : indDataset.prices) === null || _a === void 0 ? void 0 : _a[1]] })); }),
                emaShort: prev.map(function (indDataset) { var _a; return (__assign(__assign({}, indDataset), { prices: [(_a = indDataset === null || indDataset === void 0 ? void 0 : indDataset.prices) === null || _a === void 0 ? void 0 : _a[3]] })); }),
                emaLong: prev.map(function (indDataset) { var _a; return (__assign(__assign({}, indDataset), { prices: [(_a = indDataset === null || indDataset === void 0 ? void 0 : indDataset.prices) === null || _a === void 0 ? void 0 : _a[4]] })); }),
            }
            : null;
        var emaShort = emaFn({ dataseries: srcChartData, prev: (_a = prevCalcData === null || prevCalcData === void 0 ? void 0 : prevCalcData.emaShort) !== null && _a !== void 0 ? _a : [], period: periodEmaShort });
        var emaLong = emaFn({ dataseries: srcChartData, prev: (_b = prevCalcData === null || prevCalcData === void 0 ? void 0 : prevCalcData.emaLong) !== null && _b !== void 0 ? _b : [], period: periodEmaLong });
        var macd = __spreadArray(__spreadArray([], ((_c = prevCalcData === null || prevCalcData === void 0 ? void 0 : prevCalcData.macd) !== null && _c !== void 0 ? _c : []), true), emaShort.slice((_e = (_d = prevCalcData === null || prevCalcData === void 0 ? void 0 : prevCalcData.macd) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0).map(function (emaShortDataset, newIdx) {
            var _a, _b;
            var idx = newIdx + ((_b = (_a = prevCalcData === null || prevCalcData === void 0 ? void 0 : prevCalcData.macd) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
            var emaLongVal = emaLong[idx].prices[0];
            var emaShortVal = emaShortDataset.prices[0];
            var macdVal = isNullish(emaShortVal) || isNullish(emaLongVal) ? null : emaShortVal - emaLongVal;
            return { prices: [macdVal], date: srcChartData[idx].date, priceLabels: ["MACD"] };
        }), true);
        var signal = emaFn({ dataseries: macd, prev: (_f = prevCalcData === null || prevCalcData === void 0 ? void 0 : prevCalcData.signal) !== null && _f !== void 0 ? _f : [], period: periodSignal });
        var macdComplete = __spreadArray(__spreadArray([], prev, true), macd.slice((_g = prev === null || prev === void 0 ? void 0 : prev.length) !== null && _g !== void 0 ? _g : 0).map(function (macdVal, newIdx) {
            var _a;
            var idx = (_a = newIdx + (prev === null || prev === void 0 ? void 0 : prev.length)) !== null && _a !== void 0 ? _a : 0;
            var macdValPrice = macdVal.prices[0];
            var signalVal = signal[idx].prices[0];
            var macdHistogramm = macdValPrice === null || signalVal === null ? null : macdValPrice - signalVal;
            var emaShortVal = emaShort[idx].prices[0];
            var emaLongVal = emaLong[idx].prices[0];
            return __assign(__assign({}, macdVal), { prices: [macdValPrice, signalVal, macdHistogramm, emaShortVal, emaLongVal] });
        }), true);
        return macdComplete;
    },
};
//# sourceMappingURL=MACD.js.map