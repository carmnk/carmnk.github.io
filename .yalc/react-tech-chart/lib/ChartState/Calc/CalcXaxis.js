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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { getDateString, chartPeriods } from "../utils/DateTime";
import { getTickPeriod } from "./PeriodUtils";
import { isNullish } from "../../utils/Basics";
import * as T from "../../Types";
import { purePixToX, pureXToPix } from "../utils/Utils";
export var calculateXaxis = function (ChartState, PreState, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    var data = ChartState.data, subcharts = ChartState.subcharts;
    var mainGraph = ((_d = (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[0]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.graphs) === null || _d === void 0 ? void 0 : _d[0]) && T.isChartGraph((_h = (_g = (_f = (_e = subcharts === null || subcharts === void 0 ? void 0 : subcharts[0]) === null || _e === void 0 ? void 0 : _e.yaxis) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.graphs) === null || _h === void 0 ? void 0 : _h[0])
        ? (_m = (_l = (_k = (_j = subcharts === null || subcharts === void 0 ? void 0 : subcharts[0]) === null || _j === void 0 ? void 0 : _j.yaxis) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.graphs) === null || _m === void 0 ? void 0 : _m[0]
        : null;
    var xaxis = ChartState.calc.xaxis;
    var pointer = PreState.pointer;
    var canvasWidth = PreState.containerSize.width - 1;
    var wheelDeltaY = (_o = pointer.wheel) === null || _o === void 0 ? void 0 : _o.delta[1];
    var isWheeling = !!action.wheel;
    // const isPinching = !!action.pinch;
    var isPinching = ((_p = action === null || action === void 0 ? void 0 : action.pointer) === null || _p === void 0 ? void 0 : _p.type) === "pinchScale";
    var initWheelMousePos = (_q = pointer.move) === null || _q === void 0 ? void 0 : _q.xy;
    var doDragAction = ((_r = action === null || action === void 0 ? void 0 : action.pointer) === null || _r === void 0 ? void 0 : _r.type) !== "pinchScale" ? (_s = action === null || action === void 0 ? void 0 : action.pointer) === null || _s === void 0 ? void 0 : _s.shallUpdate : false;
    var doTranslate = ((_t = action === null || action === void 0 ? void 0 : action.pointer) === null || _t === void 0 ? void 0 : _t.type) === "translate" && doDragAction;
    var doScale = ((_u = action === null || action === void 0 ? void 0 : action.pointer) === null || _u === void 0 ? void 0 : _u.type) === "scale" && doDragAction;
    var mainGraphData = data.find(function (val) { return val.id === (mainGraph === null || mainGraph === void 0 ? void 0 : mainGraph.dataId); });
    var dragInit = (_v = pointer.drag) === null || _v === void 0 ? void 0 : _v.initial;
    if (!mainGraphData ||
        (!((_w = action === null || action === void 0 ? void 0 : action.pointer) === null || _w === void 0 ? void 0 : _w.shallUpdate) && !action.wheel && !action.deps && !action.containerResize) ||
        (!dragInit && ((_x = action === null || action === void 0 ? void 0 : action.pointer) === null || _x === void 0 ? void 0 : _x.shallUpdate)))
        return xaxis;
    var nMainData = mainGraphData.data.length;
    if (isPinching) {
        var pinchAction = action.pointer;
        var initScaledWidthPerTick = pinchAction.initScaledWidthPerTick, initTranslatedX = pinchAction.initTranslatedX, type = pinchAction.type;
        if (type !== "pinchScale" || isNullish(initScaledWidthPerTick) || isNullish(initTranslatedX))
            return xaxis;
        var scaledWidthPerTick = scaleFn2((_y = pointer === null || pointer === void 0 ? void 0 : pointer.pinch) === null || _y === void 0 ? void 0 : _y.movementInitial[0], initScaledWidthPerTick, canvasWidth);
        var translatedXonStart = initTranslatedX;
        var initPixX = dragInit[0];
        var initXexact = (dragInit[0] - translatedXonStart) / initScaledWidthPerTick;
        var newPos = initXexact * scaledWidthPerTick + translatedXonStart;
        var totalTranslatedX = initTranslatedX - newPos + initPixX;
        return __assign(__assign(__assign({}, xaxis), { scaledWidthPerTick: scaledWidthPerTick, totalTranslatedX: totalTranslatedX }), calcXaxisVals(scaledWidthPerTick, totalTranslatedX, canvasWidth, mainGraph, data));
    }
    else if (isWheeling) {
        var scaledWidthPerTick = scaleFn2(wheelDeltaY / 2, xaxis.scaledWidthPerTick, canvasWidth);
        var translatedXonStart = xaxis.totalTranslatedX;
        var initPixX = initWheelMousePos ? initWheelMousePos[0] : 0;
        var initXexact = ((initWheelMousePos ? initWheelMousePos[0] : 0) - translatedXonStart) / xaxis.scaledWidthPerTick;
        var newPos = Math.round(initXexact) * scaledWidthPerTick + xaxis.totalTranslatedX;
        var totalTranslatedX = xaxis.totalTranslatedX - newPos + initPixX;
        return __assign(__assign(__assign({}, xaxis), { scaledWidthPerTick: scaledWidthPerTick, totalTranslatedX: totalTranslatedX }), calcXaxisVals(scaledWidthPerTick, totalTranslatedX, canvasWidth, mainGraph, data));
    }
    else if (doTranslate) {
        var totalTranslatedX = Math.max(Math.min(pointer.drag.delta[0] + xaxis.totalTranslatedX, canvasWidth - 2 * xaxis.scaledWidthPerTick), -((nMainData - 3) * xaxis.scaledWidthPerTick));
        return __assign(__assign(__assign({}, xaxis), { totalTranslatedX: totalTranslatedX }), calcXaxisVals(xaxis.scaledWidthPerTick, totalTranslatedX, canvasWidth, mainGraph, data));
    }
    else if (doScale) {
        var dragAction = action.pointer;
        var initTranslatedX = dragAction.initTranslatedX, initScaledWidthPerTick = dragAction.initScaledWidthPerTick;
        if (!initScaledWidthPerTick)
            return xaxis;
        var scaledWidthPerTick = scaleFn2((_z = pointer === null || pointer === void 0 ? void 0 : pointer.drag) === null || _z === void 0 ? void 0 : _z.movementInitial[0], initScaledWidthPerTick, canvasWidth);
        var translatedXonStart = initTranslatedX;
        var initPixX = dragInit[0];
        var initXexact = (dragInit[0] - translatedXonStart) / initScaledWidthPerTick;
        var newPos = initXexact * scaledWidthPerTick + translatedXonStart;
        var totalTranslatedX = initTranslatedX - newPos + initPixX;
        return __assign(__assign(__assign({}, xaxis), { scaledWidthPerTick: scaledWidthPerTick, totalTranslatedX: totalTranslatedX }), calcXaxisVals(scaledWidthPerTick, totalTranslatedX, canvasWidth, mainGraph, data));
    }
    else if (action.deps) {
        return __assign(__assign({}, xaxis), calcXaxisVals(xaxis.scaledWidthPerTick, xaxis.totalTranslatedX, canvasWidth, mainGraph, data));
    }
    return xaxis;
};
export var jumpToXaxisEnd = function (xaxis, mainGraphData, containerWidth) {
    return __assign(__assign({}, xaxis), { totalTranslatedX: -(mainGraphData.length + 10 - containerWidth / xaxis.scaledWidthPerTick) * xaxis.scaledWidthPerTick });
};
// scaledWidthPerTick -> scaledWidthPerTick after scaling
var scaleFn2 = function (deltaPixX, scaleInitWidthPerTick, containerWidth) {
    return deltaPixX >= 0
        ? Math.min(scaleInitWidthPerTick * (1 + Math.abs(deltaPixX) / (containerWidth / 2)), containerWidth / 3)
        : Math.max(scaleInitWidthPerTick / (1 + Math.abs(deltaPixX) / (containerWidth / 2)), 1);
};
var getOptimalPeriod = function (metaData, dateStat, containerWidth, widthPerTick) {
    if (!metaData.chartPeriod || !dateStat)
        return null;
    var _a = metaData.chartPeriod, chartPeriodName = _a.name, chartPeriodMultiply = _a.multiply;
    var periodsConstIdx = chartPeriods.findIndex(function (periodConst) { return periodConst.name === chartPeriodName; });
    if (periodsConstIdx === -1)
        return null;
    var nCurrentBars = purePixToX(containerWidth, 0, widthPerTick);
    var curAccAmts = __assign({}, dateStat.accAmt);
    Object.entries(curAccAmts).forEach(function (_a) {
        var key = _a[0];
        var pKey = key;
        if (key !== chartPeriodName)
            curAccAmts[pKey] = (curAccAmts[pKey] * nCurrentBars) / curAccAmts[chartPeriodName];
        else
            curAccAmts[chartPeriodName] = nCurrentBars;
    });
    var targetIntervals = Math.max(Math.round(containerWidth / 100), 4); //10
    var minimizationFunction = function (amtOfPeriod, multiply) {
        return Math.abs(amtOfPeriod / multiply - targetIntervals);
    };
    var optPeriodRes = chartPeriods
        .slice(periodsConstIdx)
        .map(function (constPeriod, constIdx) {
        var name = constPeriod.name;
        var multiplys = constIdx === 0
            ? __spreadArray([1], constPeriod.scaleMultiplys, true).filter(function (val) { return val >= chartPeriodMultiply; })
                .map(function (val) { return val / chartPeriodMultiply; })
            : __spreadArray([1], constPeriod.scaleMultiplys, true);
        return __spreadArray([1], multiplys, true).map(function (multiply) {
            var amt = curAccAmts[name];
            var period = constPeriod.period;
            return { name: name, multiply: multiply, amt: amt, period: period };
        });
    })
        .flat()
        .reduce(function (acc, cur) {
        return minimizationFunction(cur.amt, cur.multiply) < minimizationFunction(acc.amt, acc.multiply) ? cur : acc;
    });
    var amt = optPeriodRes.amt, result = __rest(optPeriodRes, ["amt"]);
    return result;
};
var calcXaxisVals = function (scaledWidthPerTick, translatedPixX, containerWidth, mainGraph, data) {
    var _a, _b;
    var xStartExaxt = !scaledWidthPerTick ? 0 : -translatedPixX / scaledWidthPerTick;
    var xStart = Math.max(Math.ceil(xStartExaxt), 0);
    var pixXStart = xStart * scaledWidthPerTick + translatedPixX;
    var defaultXaxis = {
        xStart: xStart,
        pixXStart: pixXStart,
        xEnd: 0,
        xLast: 0,
        xUnlimited: 0,
        pixXEnd: 0,
        curTicks: [],
        optChartPeriod: null,
    };
    var mainGraphData = data.find(function (val) { return val.id === (mainGraph === null || mainGraph === void 0 ? void 0 : mainGraph.dataId); });
    if (!containerWidth ||
        !mainGraph ||
        !scaledWidthPerTick ||
        !mainGraphData ||
        !mainGraphData.dateStat ||
        ((_a = mainGraphData === null || mainGraphData === void 0 ? void 0 : mainGraphData.data) === null || _a === void 0 ? void 0 : _a.length) === 0)
        return defaultXaxis;
    var nMainData = (_b = mainGraphData.data.length) !== null && _b !== void 0 ? _b : 0;
    var pixXEnd = Math.min(containerWidth, nMainData * scaledWidthPerTick + translatedPixX);
    var pixXEndUnlimited = containerWidth;
    var xUnlimited = Math.floor((pixXEndUnlimited - translatedPixX) / scaledWidthPerTick);
    var xEnd = Math.min(xUnlimited, nMainData - 1);
    var optChartPeriod = getOptimalPeriod(mainGraphData.meta, mainGraphData.dateStat, containerWidth, scaledWidthPerTick);
    var chartPeriod = mainGraphData.meta.chartPeriod;
    var dateStat = mainGraphData === null || mainGraphData === void 0 ? void 0 : mainGraphData.dateStat;
    var curTicks = !optChartPeriod || !chartPeriod || isNullish(dateStat)
        ? []
        : Array(xEnd - xStart + 1)
            .fill(0)
            .map(function (x, idx) {
            var xi = xStart + idx;
            var periodToDraw = getTickPeriod(mainGraphData.data[xi].date, dateStat, chartPeriod, __assign({}, optChartPeriod));
            if (periodToDraw) {
                var dateString = getDateString(mainGraphData.data[xi].date, periodToDraw);
                return { x: pixXStart + scaledWidthPerTick * idx, dateString: dateString };
            }
            return null;
        })
            .filter(function (val) { return val !== null; });
    var xToPix = function (x, translatedX) {
        var translatedXint = translatedX !== null && translatedX !== void 0 ? translatedX : translatedPixX;
        return pureXToPix(x, translatedXint, scaledWidthPerTick);
    };
    var pixToX = function (pixX, translatedX) {
        var translatedXint = translatedX !== null && translatedX !== void 0 ? translatedX : translatedPixX;
        return purePixToX(pixX, translatedXint, scaledWidthPerTick);
    };
    return {
        xLast: nMainData - 1,
        xStart: xStart,
        pixXStart: pixXStart,
        xEnd: xEnd,
        xUnlimited: xUnlimited,
        pixXEnd: pixXEnd,
        curTicks: curTicks,
        optChartPeriod: optChartPeriod,
        xToPix: xToPix,
        pixToX: pixToX,
    };
};
//# sourceMappingURL=CalcXaxis.js.map