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
import * as T from "../../Types";
import { getIndicatorsDependantIndicatorDatas } from "../Factory/IndicatorDataFactory";
export var getRtTicks = function (rtData, data, subcharts, calc) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    var maingraphId = (_e = (_d = (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[0]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.graphs) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.dataId;
    if (!rtData || !calc.yToPix || !maingraphId)
        return [];
    var lastTick = (_m = (_l = (_k = (_j = (_h = (_g = (_f = calc.subcharts) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.yaxis) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.graphs) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.curTicks) === null || _m === void 0 ? void 0 : _m[((_t = (_s = (_r = (_q = (_p = (_o = calc.subcharts) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p.yaxis) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.graphs) === null || _s === void 0 ? void 0 : _s[0]) === null || _t === void 0 ? void 0 : _t.curTicks.length) - 1];
    var rtChartTicks = (_u = (calc.yToPix &&
        rtData &&
        lastTick &&
        [{ data: rtData, dataId: maingraphId }].reduce(function (acc, cur) {
            var _a;
            var dataIdx = data.findIndex(function (dat) { return dat.id === cur.dataId; });
            return __spreadArray(__spreadArray([], acc, true), [
                {
                    data: (cur === null || cur === void 0 ? void 0 : cur.data)
                        ? cur === null || cur === void 0 ? void 0 : cur.data.map(function (dat, dIdx) { return (__assign(__assign({}, dat), { x: calc.xaxis.xLast + dIdx })); })
                        : [],
                    dataId: (_a = data === null || data === void 0 ? void 0 : data[dataIdx]) === null || _a === void 0 ? void 0 : _a.id,
                    ticks: cur.data.map(function (dat, dIdx) {
                        var _a;
                        return ({
                            pixX: lastTick.pixX + (dIdx + 0) * calc.xaxis.scaledWidthPerTick,
                            pixY: calculatePixYDataset(dat, (_a = data === null || data === void 0 ? void 0 : data[dataIdx]) === null || _a === void 0 ? void 0 : _a.id, data, subcharts, calc.yToPix),
                        });
                    }),
                },
            ], false);
        }, []))) !== null && _u !== void 0 ? _u : [];
    var dependantIndicatorIds = rtChartTicks
        .map(function (rtChart) { return getIndicatorsDependantIndicatorDatas(data, rtChart.dataId); })
        .flat();
    var rtTicks = dependantIndicatorIds.reduce(function (acc, curId) {
        var _a, _b, _c, _d, _e, _f, _g;
        var indicatorData = data.find(function (d) { return d.id === curId && d.type === "indicator"; });
        if (!indicatorData || (indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData.type) !== "indicator")
            return acc;
        var iFn = indicatorData.indicator.indicatorFn;
        var indSrcId = indicatorData.indSrcId;
        var params = indicatorData.indicator.params;
        var complSrcDataseries = __spreadArray(__spreadArray([], ((_b = (_a = data.find(function (dat) { return dat.id === indSrcId; })) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : []), true), ((_f = (_e = (_d = (_c = acc.find) === null || _c === void 0 ? void 0 : _c.call(acc, function (rtTick) { return (rtTick === null || rtTick === void 0 ? void 0 : rtTick.dataId) === indSrcId; })) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.slice(1)) !== null && _f !== void 0 ? _f : []), true);
        var completePrevData = __spreadArray([], ((_g = indicatorData.data) !== null && _g !== void 0 ? _g : []), true);
        if (!iFn || !(complSrcDataseries === null || complSrcDataseries === void 0 ? void 0 : complSrcDataseries.length) || !lastTick)
            return acc;
        var newDataseries = iFn(__assign({ dataseries: complSrcDataseries, prev: completePrevData }, params.reduce(function (accObj, curParam) {
            var _a;
            return (__assign(__assign({}, accObj), (_a = {}, _a[curParam.name] = curParam.val, _a)));
        }, {}))).slice(indicatorData.data.length - 1);
        var newRtDataTick = {
            data: newDataseries.map(function (dataset, dIdx) { return (__assign(__assign({}, dataset), { x: completePrevData.length - 1 + dIdx })); }),
            dataId: curId,
            ticks: newDataseries.map(function (dataset, dIdx) { return ({
                pixX: lastTick.pixX + dIdx * calc.xaxis.scaledWidthPerTick,
                pixY: calculatePixYDataset(dataset, curId, data, subcharts, calc.yToPix),
            }); }),
        };
        return __spreadArray(__spreadArray([], acc, true), [newRtDataTick], false);
    }, rtChartTicks);
    return rtTicks;
};
export var isRtDataOutOfRange = function (rtData, subcharts, calc) {
    var _a, _b, _c, _d, _e;
    var isRtDataOutOfRange = false;
    var maingraphId = (_e = (_d = (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[0]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.graphs) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.dataId;
    rtData &&
        rtData.length > 0 &&
        subcharts.length === calc.subcharts.length &&
        calc.xaxis.xUnlimited > calc.xaxis.xLast && // and not rtData.length
        calc.subcharts.forEach(function (calcSubchart, sIdx) {
            // const subchart = subcharts[sIdx];
            // const filteredRtData =
            //   [rtData]
            //     ?.filter((rtDat) =>
            //       subchart.yaxis
            //         .map((y) => y.graphs.map((g) => g.dataId))
            //         .flat()
            //         .includes(rtDat.dataId)
            //     )
            //     .map((rtDat) => ({
            //       ...rtDat,
            //       data: rtDat.data.slice(1, calc.xaxis.xUnlimited - calc.xaxis.xLast + 1),
            //     })) ?? [];
            var filteredRtData = [
                { data: rtData.slice(1, calc.xaxis.xUnlimited - calc.xaxis.xLast + 1), dataId: maingraphId },
            ];
            if (sIdx !== 0)
                return;
            if (filteredRtData.length === 0)
                return;
            var curMax = Math.max.apply(Math, calcSubchart.yaxis.map(function (cyaxis) { return cyaxis.yMaxExact; }));
            var rtMax = !filteredRtData || filteredRtData.length === 0
                ? 0
                : Math.max.apply(Math, filteredRtData
                    .map(function (rtDat) {
                    return rtDat.data.map(function (dat) { var _a; return (T.isCandleChartDataset(dat) ? (_a = dat.high) !== null && _a !== void 0 ? _a : dat.close : dat.close); });
                })
                    .flat());
            var curMin = Math.min.apply(Math, calcSubchart.yaxis.map(function (cyaxis) { return cyaxis.yMinExact; }));
            var rtMin = !filteredRtData || filteredRtData.length === 0
                ? rtMax
                : Math.min.apply(Math, filteredRtData
                    .map(function (rtDat) {
                    return rtDat.data.map(function (dat) { var _a; return (T.isCandleChartDataset(dat) ? (_a = dat.low) !== null && _a !== void 0 ? _a : dat.close : dat.close); });
                })
                    .flat());
            if (filteredRtData && (rtMax > curMax || rtMin < curMin)) {
                isRtDataOutOfRange = true;
            }
        });
    return isRtDataOutOfRange;
};
// only post calculation !
export var calculatePixYDataset = function (dataset, dataId, data, subcharts, yToPix) {
    var _a, _b;
    var paths = subcharts
        .map(function (subchart, sIdx) {
        return subchart.yaxis
            .map(function (yaxis, yIdx) {
            return yaxis.graphs.map(function (graph, gIdx) {
                return graph.dataId === dataId ? { subchartIdx: sIdx, yaxisIdx: yIdx, graphIdx: gIdx } : null;
            });
        })
            .flat();
    })
        .flat()
        .filter(function (val) { return val !== null; });
    var path = paths === null || paths === void 0 ? void 0 : paths[0];
    if (!path || !yToPix)
        return null;
    var yToPixSpec = function (price) { return yToPix(price, path.subchartIdx, path.yaxisIdx); };
    var graphTypes = (_b = (_a = data.find(function (dat) { return dat.id === dataId && dat.type === "indicator"; })) === null || _a === void 0 ? void 0 : _a.indicator) === null || _b === void 0 ? void 0 : _b.graphTypes;
    var pixY = T.isIndicatorDataset(dataset)
        ? {
            pixPrices: dataset.prices.map(function (price, pIdx) { var _a, _b; return price && ["line", "bars"].includes((_b = (_a = graphTypes === null || graphTypes === void 0 ? void 0 : graphTypes[pIdx]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : "") ? yToPixSpec(price) : null; }),
        }
        : T.isCandleChartDataset(dataset)
            ? {
                pixOpen: yToPixSpec(dataset.open),
                pixHigh: yToPixSpec(dataset.high),
                pixLow: yToPixSpec(dataset.low),
                pixClose: yToPixSpec(dataset.close),
            }
            : T.isLineChartDataset(dataset)
                ? { pixClose: yToPixSpec(dataset.close) }
                : null;
    return pixY;
};
//# sourceMappingURL=CalcRtData.js.map