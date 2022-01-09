import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Line } from "react-konva";
import * as T from "../../Types";
export var CBarChartComponent = function (props) {
    var _a, _b, _c;
    var subcharts = props.subcharts, subchartIdx = props.subchartIdx, yaxisIdx = props.yaxisIdx, graphIdx = props.graphIdx, calcXaxis = props.calcXaxis, calcSubcharts = props.calcSubcharts, indSeriesIdx = props.indSeriesIdx, rtTicks = props.rtTicks;
    var graph = subcharts[subchartIdx].yaxis[yaxisIdx].graphs[graphIdx];
    var calcYaxis = (_b = (_a = calcSubcharts === null || calcSubcharts === void 0 ? void 0 : calcSubcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[yaxisIdx];
    var calcGraph = (_c = calcYaxis === null || calcYaxis === void 0 ? void 0 : calcYaxis.graphs) === null || _c === void 0 ? void 0 : _c[graphIdx];
    var curTicks = React.useMemo(function () { return (rtTicks ? rtTicks : (calcGraph === null || calcGraph === void 0 ? void 0 : calcGraph.curTicks) ? calcGraph.curTicks : []); }, [calcGraph === null || calcGraph === void 0 ? void 0 : calcGraph.curTicks, rtTicks]);
    if (!curTicks || curTicks.length === 0)
        return null;
    // console.log("barchart renders");
    return (_jsx(React.Fragment, { children: curTicks
            .map(function (pixDataset, tIdx) {
            var _a;
            if (!T.isIndicatorPixDataset(pixDataset))
                return null;
            var pixY = pixDataset.pixY;
            var yPix0 = calcYaxis === null || calcYaxis === void 0 ? void 0 : calcYaxis.pixY0;
            var yPix1 = (_a = pixY === null || pixY === void 0 ? void 0 : pixY.pixPrices[indSeriesIdx !== null && indSeriesIdx !== void 0 ? indSeriesIdx : 0]) !== null && _a !== void 0 ? _a : yPix0;
            var xPix = pixDataset.pixX + calcXaxis.pixXStart;
            return (_jsx(Line, { points: [xPix + 0.5, yPix0 + 0.5, xPix + 0.5, yPix1 + 0.5], listening: false, x: 0, y: 0, stroke: T.isIndicatorGraph(graph) ? graph.style.strokeColor[indSeriesIdx !== null && indSeriesIdx !== void 0 ? indSeriesIdx : 0] : graph.style.strokeColor, strokeWidth: 1 }, "barchart-".concat(subchartIdx, "-").concat(yaxisIdx, "-").concat(graphIdx, "-line-").concat(tIdx)));
        })
            .filter(function (val) { return val !== null; }) }, void 0));
};
export var CBarChart = React.memo(CBarChartComponent);
//# sourceMappingURL=CBarChart.js.map