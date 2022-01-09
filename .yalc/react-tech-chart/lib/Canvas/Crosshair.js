import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Line, Rect } from "react-konva";
import { CText } from ".";
import { isNullish } from "../utils/Basics";
import * as T from "../Types";
import { getDateString } from "../ChartState/utils/DateTime";
import { snapPixYToDataset } from "../ChartState/utils/Utils";
export var CrosshairComponent = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var disableSnapX = props.disableSnapX, disableSnapGraphs = props.disableSnapGraphs, containerSize = props.containerSize, theme = props.theme, subcharts = props.subcharts, data = props.data, calcSubcharts = props.calcSubcharts, calcPointer = props.calcPointer, calcXaxis = props.calcXaxis, pixToY = props.pixToY, rtTicks = props.rtTicks;
    var containerWidth = containerSize.width - 1;
    var containerHeight = containerSize.height - 1;
    var widthYAxis = theme.yaxis.widthYAxis; // 80 default but yaxis currently does not have width -> should be in settings
    var _o = theme.xaxis, heightXAxis = _o.heightXAxis, heightTickMarkLines = _o.heightTickMarkLines;
    var _p = calcPointer.move, pixXSnap = _p.pixXSnap, xUnlimited = _p.xUnlimited, pixXUnlimSnap = _p.pixXUnlimSnap;
    var xEnd = calcXaxis.xEnd, xLast = calcXaxis.xLast;
    var pointedSubchartIdx = calcPointer.move.subchartIdx;
    var snapDataset = (_a = calcPointer.move.snapDatasets) === null || _a === void 0 ? void 0 : _a[0];
    var pointedYaxisIdx = snapDataset ? snapDataset.yaxisIdx : null;
    var pointedGraphIdx = snapDataset ? snapDataset.graphIdx : null;
    var pointedGraph = (!isNullish(pointedYaxisIdx) &&
        !isNullish(pointedGraphIdx) &&
        !isNullish(pointedSubchartIdx) &&
        ((_e = (_d = (_c = (_b = subcharts === null || subcharts === void 0 ? void 0 : subcharts[pointedSubchartIdx]) === null || _b === void 0 ? void 0 : _b.yaxis) === null || _c === void 0 ? void 0 : _c[pointedYaxisIdx]) === null || _d === void 0 ? void 0 : _d.graphs) === null || _e === void 0 ? void 0 : _e[pointedGraphIdx])) ||
        null;
    var graphData = data.find(function (val) { return val.id === (pointedGraph === null || pointedGraph === void 0 ? void 0 : pointedGraph.dataId); });
    var pixX = (!disableSnapX || ((snapDataset === null || snapDataset === void 0 ? void 0 : snapDataset.ySnap) && !disableSnapGraphs)) && pixXSnap ? pixXSnap : pixXUnlimSnap !== null && pixXUnlimSnap !== void 0 ? pixXUnlimSnap : 0;
    var mainGraphData = (data === null || data === void 0 ? void 0 : data[0].type) === "chart" ? data[0] : null;
    var xDateString = snapDataset
        ? snapDataset.dateString
        : xUnlimited > xLast &&
            xUnlimited <= xLast + ((_g = (_f = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _f === void 0 ? void 0 : _f.data.length) !== null && _g !== void 0 ? _g : 1) - 1 &&
            ((_h = mainGraphData === null || mainGraphData === void 0 ? void 0 : mainGraphData.meta) === null || _h === void 0 ? void 0 : _h.chartPeriod)
            ? (function () {
                var _a, _b, _c;
                var date = (_c = (_b = (_a = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[xUnlimited - xEnd]) === null || _c === void 0 ? void 0 : _c.date;
                var chartPeriod = mainGraphData.meta.chartPeriod;
                if (!date || !chartPeriod)
                    return "";
                return getDateString(date, chartPeriod.name);
            })()
            : "";
    var ysnapTest = xUnlimited > xLast &&
        xUnlimited <= xLast + ((_k = (_j = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _j === void 0 ? void 0 : _j.data.length) !== null && _k !== void 0 ? _k : 1) - 1 &&
        !isNullish(pointedSubchartIdx) &&
        !isNullish(calcPointer.move.pixY) &&
        rtTicks
        ? rtTicks
            .map(function (rtTick) {
            var _a, _b, _c;
            return (_c = (_b = snapPixYToDataset(calcPointer.move.pixY, (_a = rtTick === null || rtTick === void 0 ? void 0 : rtTick.data) === null || _a === void 0 ? void 0 : _a[xUnlimited - xEnd], subcharts, pointedSubchartIdx, 0, calcSubcharts)) === null || _b === void 0 ? void 0 : _b.filter(function (val) { return val !== null; })) !== null && _c !== void 0 ? _c : [];
        })
            .flat()
        : null;
    var pixY = !isNullish(snapDataset === null || snapDataset === void 0 ? void 0 : snapDataset.pixYSnap)
        ? snapDataset.pixYSnap
        : !isNullish(ysnapTest) && ysnapTest.length > 0
            ? ysnapTest[0].pixY
            : !isNullish(calcPointer.move.pixY)
                ? calcPointer.move.pixY
                : null;
    var yRaw = !isNullish(snapDataset === null || snapDataset === void 0 ? void 0 : snapDataset.ySnap) && !disableSnapGraphs
        ? snapDataset.ySnap
        : !isNullish(ysnapTest) && ysnapTest.length > 0
            ? ysnapTest[0].y
            : (snapDataset === null || snapDataset === void 0 ? void 0 : snapDataset.y)
                ? snapDataset.y.toString()
                : pixToY && !isNullish(pointedSubchartIdx)
                    ? pixToY(calcPointer.move.pixY, pointedSubchartIdx, 0).toString()
                    : null;
    var y = pointedGraph &&
        !isNullish(yRaw) &&
        T.isIndicatorGraph(pointedGraph) &&
        (graphData === null || graphData === void 0 ? void 0 : graphData.type) === "indicator" &&
        !!graphData.indicator.default.decimals
        ? parseFloat(yRaw).toFixed(graphData.indicator.default.decimals).toString()
        : yRaw;
    // console.log("Crosshair rendered");
    return !!pixY && subcharts.length > 0 ? (_jsxs(React.Fragment, { children: [_jsx(Line // crosshair x
            , { name: "crosshair-x", listening: false, x: 0, y: 0, points: [pixX + 0.5, 0.5, pixX + 0.5, containerHeight - heightXAxis + heightTickMarkLines + 0.5], stroke: theme.crosshair.strokeColor, strokeWidth: 1 }, void 0), calcPointer.move.pixY <= subcharts[subcharts.length - 1].bottom ? (_jsxs(React.Fragment, { children: [_jsx(Line // crosshair y
                    , { name: "crosshair-y", listening: false, x: 0, y: 0, points: [0.5, pixY + 0.5, containerWidth - widthYAxis + 0.5, pixY + 0.5], stroke: theme.crosshair.strokeColor, strokeWidth: 1 }, void 0), _jsx(Line // yaxis marker polygon
                    , { name: "y-marker-polygon", listening: false, draggable: false, x: 0, y: 0, points: [
                            containerWidth - widthYAxis,
                            pixY,
                            containerWidth - widthYAxis + 10,
                            pixY + 10,
                            containerWidth,
                            pixY + 10,
                            containerWidth,
                            pixY - 10,
                            containerWidth - widthYAxis + 10,
                            pixY - 10,
                        ], stroke: theme.crosshair.yMarkerStrokeColor, fill: theme.crosshair.yMarkerBackgroundColor, strokeWidth: 1, closed: true }, void 0), _jsx(CText, { name: "y-marker text", listening: false, text: y !== null && y !== void 0 ? y : "", halign: "left", valign: "middle", fontColor: theme.crosshair.yMarkerTextColor, fontSize: theme.crosshair.yMarkerFontSize, fontName: theme.crosshair.yMarkerFontName, x: containerWidth - widthYAxis + theme.yaxis.widthTickmarkLines + 5, y: pixY }, void 0)] }, void 0)) : null, xUnlimited >= 0 && xUnlimited <= xEnd + ((_m = (_l = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _l === void 0 ? void 0 : _l.data.length) !== null && _m !== void 0 ? _m : 1) - 1 ? (_jsxs(React.Fragment, { children: [_jsx(Rect // xaxis marker rect
                    , { name: "x-marker rect", listening: false, x: pixX - 25, y: containerHeight - heightXAxis + heightTickMarkLines + 0.5, width: 50, height: 25, fill: theme.crosshair.xMarkerBackgroundColor, stroke: theme.crosshair.xMarkerStrokeColor, strokeWidth: 1 }, void 0), _jsx(CText // xaxis marker text
                    , { name: "x-marker text", listening: false, fontSize: theme.crosshair.xMarkerFontSize, fontName: theme.crosshair.xMarkerFontName, fontColor: theme.crosshair.xMarkerTextColor, halign: "center", valign: "top", text: xDateString, x: pixX, y: containerHeight - heightXAxis + heightTickMarkLines + 5 + 0.5 }, void 0)] }, void 0)) : null] }, void 0)) : null;
};
export var Crosshair = React.memo(CrosshairComponent);
//# sourceMappingURL=Crosshair.js.map