import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Line, Rect } from "react-konva";
import * as T from "../../Types";
export var CCandleChartComponent = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var subcharts = props.subcharts, calcXaxis = props.calcXaxis, calcSubcharts = props.calcSubcharts, _g = props.subchartIdx, subchartIdx = _g === void 0 ? 0 : _g, _h = props.yaxisIdx, yaxisIdx = _h === void 0 ? 0 : _h, _j = props.graphIdx, graphIdx = _j === void 0 ? 0 : _j, rtTicks = props.rtTicks;
    var yaxis = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[yaxisIdx];
    var graph = yaxis === null || yaxis === void 0 ? void 0 : yaxis.graphs[graphIdx];
    var graphCalc = (_f = (_e = (_d = (_c = calcSubcharts === null || calcSubcharts === void 0 ? void 0 : calcSubcharts[subchartIdx]) === null || _c === void 0 ? void 0 : _c.yaxis) === null || _d === void 0 ? void 0 : _d[yaxisIdx]) === null || _e === void 0 ? void 0 : _e.graphs) === null || _f === void 0 ? void 0 : _f[graphIdx];
    var curTicks = React.useMemo(function () { return (rtTicks ? rtTicks.slice(1) : (graphCalc === null || graphCalc === void 0 ? void 0 : graphCalc.curTicks) ? graphCalc.curTicks : []); }, [graphCalc === null || graphCalc === void 0 ? void 0 : graphCalc.curTicks, rtTicks]);
    var dxHalfCandle = React.useMemo(function () { return ((calcXaxis === null || calcXaxis === void 0 ? void 0 : calcXaxis.scaledWidthPerTick) > 2 ? Math.floor(0.35 * (calcXaxis.scaledWidthPerTick - 1)) : 0); }, [calcXaxis.scaledWidthPerTick]);
    if (!graph || !T.isChartGraph(graph) || !curTicks)
        return null;
    return (_jsx(React.Fragment, { children: curTicks.map(function (pixDataset, tIdx) {
            var xPix = pixDataset.pixX + calcXaxis.pixXStart;
            if (!T.isCandleChartPixDataset(pixDataset))
                return null;
            var pixY = pixDataset.pixY;
            var pixOpen = pixY.pixOpen, pixHigh = pixY.pixHigh, pixLow = pixY.pixLow, pixClose = pixY.pixClose;
            var maxWidth = dxHalfCandle * 2;
            return (_jsxs(React.Fragment, { children: [_jsx(Line // candle wick
                    , { listening: false, x: 0, y: 0, points: [xPix + 0.5, pixHigh + 0.5, xPix + 0.5, pixLow + 0.5], stroke: graph.style.candleWickStrokeColor, strokeWidth: 1 }, void 0), pixClose !== pixOpen ? (dxHalfCandle !== 0 ? (_jsx(Rect // candle body
                    , { listening: false, draggable: false, x: xPix + 0.5 - dxHalfCandle, y: pixOpen + 0.5, width: maxWidth, height: pixClose - pixOpen, stroke: graph.style.candleStrokeColor, fill: pixClose < pixOpen ? graph.style.candleUpColor : graph.style.candleDownColor, strokeWidth: 1 }, void 0)) : (_jsx(Line // candle body - if dxHalfcandle === 0, only redraw candle wick from open to close in resp. colors
                    , { listening: false, draggable: false, x: 0, y: 0, points: [xPix + 0.5, pixOpen + 0.5, xPix + 0.5, pixClose + 0.5], stroke: pixClose < pixOpen ? graph.style.candleUpColor : graph.style.candleDownColor, strokeWidth: 1 }, void 0))) : (_jsx(Line // candle body - if open = close -> horizontal line
                    , { listening: false, draggable: false, x: 0, y: 0, points: [xPix + 0.5 - dxHalfCandle, pixClose + 0.5, xPix + 0.5 + dxHalfCandle, pixClose + 0.5], stroke: graph.style.candleStrokeColor, strokeWidth: 1 }, void 0))] }, "candle-".concat(tIdx)));
        }) }, void 0));
};
export var CCandleChart = React.memo(CCandleChartComponent);
//# sourceMappingURL=CCandleChart.js.map