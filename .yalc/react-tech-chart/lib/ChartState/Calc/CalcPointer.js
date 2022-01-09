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
import { getTickPeriod } from "./PeriodUtils";
import { getDateString } from "../utils/DateTime";
import { getSubchartIdxByPixXy, purePixToX, purePixToY, pureXToPix, snapPixYToDataset } from "../utils/Utils";
import * as T from "../../Types";
import { defaultCalcPointer } from "../Defaults";
export var calculatePointer = function (ChartState, pointer, calc) {
    var _a, _b, _c, _d;
    var move = pointer.move, dragEnd = pointer.dragPointerUp, isHovering = pointer.isHovering;
    var xaxis = calc.xaxis;
    if (!ChartState)
        return null;
    var subcharts = ChartState.subcharts, data = ChartState.data;
    var mainGraph = !!((_d = (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[0]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.graphs) === null || _d === void 0 ? void 0 : _d[0]) && T.isChartGraph(subcharts[0].yaxis[0].graphs[0])
        ? subcharts[0].yaxis[0].graphs[0]
        : null;
    var xy = move === null || move === void 0 ? void 0 : move.xy;
    if (!mainGraph || !move || !subcharts || !xy)
        return null;
    var subchartIdx = getSubchartIdxByPixXy(xy, subcharts);
    if (subchartIdx === null)
        return defaultCalcPointer;
    var getDefaultChartPointer = function (xUnlimited, pixXUnlimSnap, subchartIdx) { return ({
        isHovering: isHovering,
        move: {
            pixX: xy[0],
            pixXUnlimSnap: pixXUnlimSnap,
            pixXSnap: 0,
            pixY: xy[1],
            x: null,
            xUnlimited: xUnlimited,
            subchartIdx: subchartIdx,
            snapDatasets: [],
            xDateString: "",
        },
        click: {
            clickedSubchartIdx: null,
        },
    }); };
    var pointerXvals = calculatePointerXvals(xaxis, mainGraph, data, move);
    if (!pointerXvals)
        return null;
    if (!("x" in pointerXvals))
        return getDefaultChartPointer(pointerXvals.xUnlimited, pointerXvals.pixXUnlimSnap, subchartIdx);
    var xUnlimited = pointerXvals.xUnlimited, x = pointerXvals.x, xDateString = pointerXvals.xDateString, pixXSnap = pointerXvals.pixXSnap, pixXUnlimSnap = pointerXvals.pixXUnlimSnap;
    var clickedSubchartIdx = !!dragEnd && !!dragEnd.xy ? getSubchartIdxByPixXy(dragEnd.xy, subcharts) : null;
    var snapDatasets = subcharts[subchartIdx].yaxis
        .map(function (yaxis, yaxisIdx) {
        return yaxis.graphs.map(function (graph, graphIdx) {
            var _a;
            var graphDataSeries = (_a = data.find(function (val) { return val.id === (graph === null || graph === void 0 ? void 0 : graph.dataId); })) === null || _a === void 0 ? void 0 : _a.data;
            var snapPriceRes = graphDataSeries
                ? snapPixYToDataset(xy[1], graphDataSeries[x], subcharts, subchartIdx, yaxisIdx, calc.subcharts)
                : null;
            var pixYSnap = snapPriceRes && snapPriceRes.length > 0 ? snapPriceRes[0].pixY : null;
            var ySnap = snapPriceRes && snapPriceRes.length > 0 ? snapPriceRes[0].y : null;
            var _b = calc.subcharts[subchartIdx].yaxis[yaxisIdx], decimals = _b.decimals, translatedY = _b.translatedY, heightPerPt = _b.heightPerPt;
            return {
                yaxisIdx: yaxisIdx,
                graphIdx: graphIdx,
                data: graphDataSeries === null || graphDataSeries === void 0 ? void 0 : graphDataSeries[x],
                y: purePixToY(xy[1], subcharts[subchartIdx].bottom, decimals, translatedY, heightPerPt),
                ySnap: ySnap,
                pixYSnap: pixYSnap,
                dateString: xDateString,
            };
        });
    })
        .flat()
        .sort(function (a, b) {
        return a.ySnap === null && b.ySnap === null
            ? 0
            : (a.ySnap === null && b.ySnap !== null) ||
                (a.ySnap !== null &&
                    b.ySnap !== null &&
                    Math.abs(parseFloat(a.ySnap) - a.y) > Math.abs(parseFloat(b.ySnap) - b.y))
                ? 1
                : (a.ySnap !== null && b.ySnap === null) ||
                    (a.ySnap !== null &&
                        b.ySnap !== null &&
                        Math.abs(parseFloat(a.ySnap) - a.y) < Math.abs(parseFloat(b.ySnap) - b.y))
                    ? -1
                    : 0;
    });
    return {
        isHovering: isHovering,
        move: {
            pixX: xy[0],
            pixXSnap: pixXSnap,
            pixXUnlimSnap: pixXUnlimSnap,
            pixY: xy[1],
            x: x,
            xUnlimited: xUnlimited,
            subchartIdx: subchartIdx,
            snapDatasets: snapDatasets,
            xDateString: xDateString,
        },
        click: {
            clickedSubchartIdx: clickedSubchartIdx,
        },
    };
};
var calculatePointerXvals = function (xaxis, mainGraph, data, onMove) {
    if ((mainGraph === null || mainGraph === void 0 ? void 0 : mainGraph.type) !== "chart" || !onMove)
        return null;
    var mainData = data.find(function (val) { return val.id === mainGraph.dataId; });
    if ((mainData === null || mainData === void 0 ? void 0 : mainData.type) !== "chart")
        return null;
    var mainGraphMeta = mainData.meta, mainGraphDateStat = mainData.dateStat;
    var widthPerTick = xaxis.scaledWidthPerTick, translatedPixX = xaxis.totalTranslatedX;
    var xUnlimited = Math.round(purePixToX(onMove === null || onMove === void 0 ? void 0 : onMove.xy[0], translatedPixX, widthPerTick));
    var pixXUnlimSnap = pureXToPix(xUnlimited, translatedPixX, widthPerTick);
    if (xUnlimited < 0 || xUnlimited > mainData.data.length - 1 || !mainGraphDateStat)
        return { xUnlimited: xUnlimited, pixXUnlimSnap: pixXUnlimSnap };
    var x = Math.abs(Math.round(xUnlimited));
    var optChartPeriod = xaxis.optChartPeriod;
    if (!optChartPeriod || !mainGraphMeta.chartPeriod || !mainGraphDateStat)
        return { xUnlimited: xUnlimited, pixXUnlimSnap: pixXUnlimSnap };
    var periodToDraw = getTickPeriod(mainData.data[x].date, mainGraphDateStat, mainGraphMeta.chartPeriod, __assign({}, optChartPeriod));
    var pixXSnap = pureXToPix(x, translatedPixX, widthPerTick);
    var xDateString = getDateString(mainData.data[x].date, periodToDraw ? periodToDraw : mainGraphMeta.chartPeriod.name);
    return {
        x: x,
        xDateString: xDateString,
        pixXSnap: pixXSnap,
        xUnlimited: xUnlimited,
        pixXUnlimSnap: pixXUnlimSnap,
    };
};
//# sourceMappingURL=CalcPointer.js.map