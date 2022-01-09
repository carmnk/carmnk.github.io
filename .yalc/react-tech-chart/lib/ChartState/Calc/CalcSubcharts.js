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
import { getDataSeriesMaxY, getDataSeriesMinY, purePixToY, pureYToPix } from "../utils/Utils";
import * as T from "../../Types";
export var calculateSubcharts = function (ChartState, xaxis, rtData) {
    var _a, _b, _c, _d, _e;
    if (!ChartState || !xaxis)
        return [];
    var subcharts = ChartState.subcharts, data = ChartState.data;
    if (subcharts.length === 0 || data.length === 0)
        return [];
    var maingraphId = (_e = (_d = (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[0]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.graphs) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.dataId;
    return subcharts.map(function (subchart, sIdx) {
        var bottom = subchart.bottom;
        var top = subchart.top;
        var intervalsTarget = Math.max(Math.round((bottom - top) / 75), 3);
        return {
            yaxis: subchart.yaxis.map(function (oneYaxis, yIdx) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                var calculatedGraphs = calculateGraphs(data, subcharts, sIdx, yIdx, xaxis);
                var yMaxExact = (_d = Math.max.apply(Math, __spreadArray(__spreadArray([], calculatedGraphs.map(function (g) { var _a; return (_a = g === null || g === void 0 ? void 0 : g.yMaxExact) !== null && _a !== void 0 ? _a : null; }).filter(function (g) { return g !== null; }), false), ((_c = (_b = (_a = [{ data: rtData, dataId: maingraphId }]) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b.call(_a, function (val) { return oneYaxis.graphs.map(function (g) { return g.dataId; }).includes(val.dataId); }).map(function (rtDat) {
                    return ((rtDat === null || rtDat === void 0 ? void 0 : rtDat.data) || []).map(function (dat) { var _a; return (T.isCandleChartDataset(dat) ? (_a = dat.high) !== null && _a !== void 0 ? _a : dat.close : dat.close); });
                }).flat()) !== null && _c !== void 0 ? _c : []), false))) !== null && _d !== void 0 ? _d : 0;
                var yMinExact = (_h = Math.min.apply(Math, __spreadArray(__spreadArray([], calculatedGraphs.map(function (g) { var _a; return (_a = g === null || g === void 0 ? void 0 : g.yMinExact) !== null && _a !== void 0 ? _a : null; }).filter(function (g) { return g !== null; }), false), ((_g = (_f = (_e = [{ data: rtData, dataId: maingraphId }]) === null || _e === void 0 ? void 0 : _e.filter) === null || _f === void 0 ? void 0 : _f.call(_e, function (val) { return oneYaxis.graphs.map(function (g) { return g.dataId; }).includes(val.dataId); }).map(function (rtDat) {
                    return ((rtDat === null || rtDat === void 0 ? void 0 : rtDat.data) || []).map(function (dat) { var _a; return (T.isCandleChartDataset(dat) ? (_a = dat.low) !== null && _a !== void 0 ? _a : dat.close : dat.close); });
                }).flat()) !== null && _g !== void 0 ? _g : []), false))) !== null && _h !== void 0 ? _h : 0;
                var decimals = (_j = Math.max.apply(Math, oneYaxis.graphs.map(function (g) { var _a, _b; return (_b = (_a = data.find(function (val) { return val.id === g.dataId; })) === null || _a === void 0 ? void 0 : _a.decimals) !== null && _b !== void 0 ? _b : 0; }))) !== null && _j !== void 0 ? _j : 0;
                var optIntervalY = GetMetricYintervalStep(yMaxExact, yMinExact, decimals, intervalsTarget);
                // optIntervalY cant be fetched by graphs since max and min may concern different graphs
                var yMax = Math.ceil(yMaxExact / optIntervalY) * optIntervalY;
                var yMin = Math.floor(yMinExact / optIntervalY) * optIntervalY;
                var heightPerPt = (bottom - top) / ((yMax || 0) - (yMin || 0)) / Math.pow(10, decimals);
                var translatedY = -pureYToPix(yMin || 0, bottom, decimals, 0, heightPerPt) + bottom;
                var yToPix = function (price) { return pureYToPix(price, bottom, decimals, translatedY, heightPerPt); };
                var yBottom = purePixToY(bottom, bottom, decimals, translatedY, heightPerPt);
                var pixYBottomCeiled = yToPix(Math.ceil(yBottom / optIntervalY) * optIntervalY);
                var intervalStep = (heightPerPt * optIntervalY) / Math.pow(10, -decimals);
                var nintervalSteps = Math.floor((pixYBottomCeiled - 10 - top - 10) / intervalStep);
                var drawTicks = !nintervalSteps || nintervalSteps < 0
                    ? []
                    : Array(nintervalSteps)
                        .fill(0)
                        .map(function (x, idx) {
                        var pixY = pixYBottomCeiled - (idx + 1) * intervalStep;
                        var yi = purePixToY(pixY, bottom, decimals, translatedY, heightPerPt);
                        var label = (Math.round(yi * Math.pow(10, decimals)) / Math.pow(10, decimals)).toString();
                        return { pixY: pixY, label: label };
                    });
                var finalGraphs = calculatedGraphs &&
                    calculatedGraphs.map(function (graph, gIdx) {
                        if (!(graph === null || graph === void 0 ? void 0 : graph.curData))
                            return graph;
                        var curTicks = graph.curData.map(function (dataset, dIdx) {
                            var _a, _b;
                            var graphTypes = (_b = (_a = data.find(function (dat) { var _a; return dat.id === ((_a = oneYaxis.graphs) === null || _a === void 0 ? void 0 : _a[gIdx].dataId) && dat.type === "indicator"; })) === null || _a === void 0 ? void 0 : _a.indicator) === null || _b === void 0 ? void 0 : _b.graphTypes;
                            var pixY = T.isIndicatorDataset(dataset)
                                ? {
                                    pixPrices: dataset.prices.map(function (price, pIdx) { var _a, _b; return price && ["line", "bars"].includes((_b = (_a = graphTypes === null || graphTypes === void 0 ? void 0 : graphTypes[pIdx]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : "") ? yToPix(price) : null; }),
                                }
                                : T.isCandleChartDataset(dataset)
                                    ? {
                                        pixOpen: yToPix(dataset.open),
                                        pixHigh: yToPix(dataset.high),
                                        pixLow: yToPix(dataset.low),
                                        pixClose: yToPix(dataset.close),
                                    }
                                    : T.isLineChartDataset(dataset)
                                        ? { pixClose: yToPix(dataset.close) }
                                        : null;
                            return { pixX: xaxis.scaledWidthPerTick * dIdx, pixY: pixY };
                        });
                        return __assign(__assign({}, graph), { curTicks: curTicks });
                    });
                return {
                    pixY0: yToPix(0),
                    yMaxExact: yMaxExact,
                    yMinExact: yMinExact,
                    yMax: yMax,
                    yMin: yMin,
                    heightPerPt: heightPerPt,
                    decimals: decimals,
                    optIntervalY: optIntervalY,
                    translatedY: translatedY,
                    graphs: finalGraphs,
                    drawTicks: drawTicks,
                };
            }),
        };
    });
};
export var getYaxisMethods = function (subcharts, calcSubcharts) {
    return {
        yToPix: function (y, subchartIdx, yaxisIdx, translatedY) {
            var _a, _b;
            if (!((_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[yaxisIdx]))
                return 0;
            var _c = calcSubcharts[subchartIdx].yaxis[yaxisIdx], heightPerPt = _c.heightPerPt, decimals = _c.decimals, stateTranslatedY = _c.translatedY;
            var translatedYint = translatedY !== undefined ? translatedY : stateTranslatedY;
            return subcharts[subchartIdx].bottom - y * Math.pow(10, decimals) * heightPerPt + translatedYint;
        },
        pixToY: function (pixY, subchartIdx, yaxisIdx, translatedY) {
            var _a, _b;
            if (!((_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[yaxisIdx]))
                return 0;
            var _c = calcSubcharts[subchartIdx].yaxis[yaxisIdx], heightPerPt = _c.heightPerPt, decimals = _c.decimals, stateTranslatedY = _c.translatedY;
            var translatedYint = translatedY !== undefined ? translatedY : stateTranslatedY;
            return ((subcharts[subchartIdx].bottom + translatedYint - pixY) / heightPerPt) * Math.pow(10, -decimals);
        },
    };
};
var GetMetricYintervalStep = function (yMax, yMin, decimals, targetSteps) {
    var minIntervalStep = 1 / Math.pow(10, decimals); //smallest possible number acc. to decimals
    var optIntervalStepPts = (yMax - yMin) / minIntervalStep / targetSteps; // in Pts -> in minInterval-steps
    var startExponent = Math.floor(Math.log10(optIntervalStepPts)) || 0;
    var nIterations = 2;
    var minimizationFunction = function (steps) { return Math.abs((yMax - yMin) / steps - targetSteps); };
    return parseFloat(Array(nIterations * 3)
        .fill(0)
        .map(function (x, idx) {
        var intervalStep = minIntervalStep *
            Math.pow(10, startExponent + Math.floor(idx / 3)) *
            (idx % 3 === 0 ? 1.0 : idx % 3 === 1 ? 2.5 : idx % 3 === 2 ? 5.0 : 0);
        var optimum = minimizationFunction(intervalStep);
        return {
            intervalStep: intervalStep,
            optimum: optimum,
        };
    })
        .reduce(function (prev, cur) {
        if (cur.optimum < (prev === null || prev === void 0 ? void 0 : prev.optimum))
            return cur;
        else
            return prev;
    })
        .intervalStep.toFixed(decimals));
};
var calculateGraphs = function (data, subcharts, subchartIdx, yaxisIdx, xaxis) {
    var xStart = xaxis.xStart, xEnd = xaxis.xEnd, pixXEnd = xaxis.pixXEnd;
    var _a = subcharts[subchartIdx], top = _a.top, bottom = _a.bottom;
    var intervalsTarget = Math.max(Math.round((bottom - top) / 75), 3);
    return subcharts[subchartIdx].yaxis[yaxisIdx].graphs.map(function (graph) {
        var _a, _b, _c, _d, _e;
        var graphData = data.find(function (val) { return val.id === graph.dataId; });
        if (!(graphData === null || graphData === void 0 ? void 0 : graphData.data))
            return null;
        var graphDataSeries = (_a = graphData === null || graphData === void 0 ? void 0 : graphData.data) !== null && _a !== void 0 ? _a : [];
        var graphIndicator = (_b = graphData) === null || _b === void 0 ? void 0 : _b.indicator;
        var curData = graphDataSeries.slice(xStart, xEnd + 1);
        var yMaxExact = getDataSeriesMaxY(curData, (_c = graphIndicator === null || graphIndicator === void 0 ? void 0 : graphIndicator.default) === null || _c === void 0 ? void 0 : _c.fixedYScale, graphIndicator === null || graphIndicator === void 0 ? void 0 : graphIndicator.graphTypes);
        var yMinExact = getDataSeriesMinY(curData, (_d = graphIndicator === null || graphIndicator === void 0 ? void 0 : graphIndicator.default) === null || _d === void 0 ? void 0 : _d.fixedYScale, graphIndicator === null || graphIndicator === void 0 ? void 0 : graphIndicator.graphTypes);
        var gDecimals = (_e = graphData === null || graphData === void 0 ? void 0 : graphData.decimals) !== null && _e !== void 0 ? _e : 0;
        var gOptIntervalY = GetMetricYintervalStep(yMaxExact, yMinExact, gDecimals, intervalsTarget);
        return {
            lastDataset: {
                data: graphDataSeries[xEnd],
                x: xEnd,
                pixX: pixXEnd,
                dateString: "",
            },
            curData: curData,
            yMaxExact: yMaxExact,
            yMax: Math.ceil(yMaxExact / gOptIntervalY) * gOptIntervalY,
            yMinExact: yMinExact,
            yMin: Math.floor(yMinExact / gOptIntervalY) * gOptIntervalY,
        };
    });
};
//# sourceMappingURL=CalcSubcharts.js.map