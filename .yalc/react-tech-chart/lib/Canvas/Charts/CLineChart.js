import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Line } from "react-konva";
import { isNullish } from "../../utils/Basics";
import * as T from "../../Types";
export var CLineChartComponent = function (props) {
    var _a, _b, _c, _d;
    var subcharts = props.subcharts, subchartIdx = props.subchartIdx, yaxisIdx = props.yaxisIdx, graphIdx = props.graphIdx, _e = props.indSeriesIdx, indSeriesIdx = _e === void 0 ? 0 : _e, calcXaxis = props.calcXaxis, calcSubcharts = props.calcSubcharts, rtTicks = props.rtTicks;
    var graph = subcharts[subchartIdx].yaxis[yaxisIdx].graphs[graphIdx];
    var calcGraph = (_d = (_c = (_b = (_a = calcSubcharts === null || calcSubcharts === void 0 ? void 0 : calcSubcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[yaxisIdx]) === null || _c === void 0 ? void 0 : _c.graphs) === null || _d === void 0 ? void 0 : _d[graphIdx];
    var curTicks = rtTicks ? rtTicks : calcGraph === null || calcGraph === void 0 ? void 0 : calcGraph.curTicks;
    var graphVals = curTicks
        ? curTicks
            .map(function (pixDataset) {
            var _a;
            if (!pixDataset.pixY)
                return null;
            var pixPrice = T.isIndicatorPixDataset(pixDataset)
                ? (_a = pixDataset.pixY.pixPrices) === null || _a === void 0 ? void 0 : _a[indSeriesIdx]
                : T.isLineChartPixDataset(pixDataset)
                    ? pixDataset.pixY.pixClose
                    : null;
            if (isNullish(pixPrice))
                return null;
            return [pixDataset.pixX, pixPrice];
        })
            .flat()
            .filter(function (val) { return val !== null; })
        : [];
    // apprach to use areas -> to be reviewed, maybe separate component ?
    // const pixUpperTresh = areaTresholds && yToPix && yToPix(areaTresholds.upper, subchartIdx, yaxisIdx);
    // const pixLwrTresh = areaTresholds && yToPix && yToPix(areaTresholds.lower, subchartIdx, yaxisIdx);
    // const getAreaVals = (tresh: number, isUpper: boolean) => {
    //   const sgn = isUpper ? 1 : -1;
    //   return calcGraph?.curData
    //     ? [
    //         0,
    //         yToPix?.(tresh, subchartIdx, yaxisIdx) ?? 0,
    //         ...(calcGraph.curData
    //           .map((dataset, dIdx) => {
    //             const tick = calcGraph?.curTicks?.[dIdx];
    //             const tickPixY = tick?.pixY;
    //             if (!tick || !tickPixY) return null;
    //             const lastDataset = calcGraph?.curData?.[dIdx - 1];
    //             return T.isLineChartDataset(dataset) && dataset.close > 0 && "pixClose" in tickPixY
    //               ? [tick.pixX, tickPixY.pixClose]
    //               : T.isIndicatorDataset(dataset) && "pixPrices" in tickPixY
    //               ? (() => {
    //                   const price = dataset.prices?.[indSeriesIdx];
    //                   const pixYPrice = tickPixY.pixPrices?.[indSeriesIdx];
    //                   if (isNullish(price) || isNullish(pixYPrice)) return null;
    //                   const y0 =
    //                     lastDataset && T.isIndicatorDataset(lastDataset) ? lastDataset?.prices?.[indSeriesIdx] : null;
    //                   const y1 = dataset.prices?.[indSeriesIdx];
    //                   if (
    //                     price * sgn > tresh * sgn &&
    //                     (!lastDataset ||
    //                       (lastDataset && T.isIndicatorDataset(lastDataset) && y0 && y0 * sgn > tresh * sgn))
    //                   ) {
    //                     return [tick.pixX, pixYPrice];
    //                   }
    //                   if (lastDataset && T.isIndicatorDataset(lastDataset)) {
    //                     if (isNullish(y0) || isNullish(y1)) return null;
    //                     const a = y1 - y0;
    //                     const b = y0;
    //                     const x1ex = (tresh - b) / a;
    //                     const price = dataset.prices?.[indSeriesIdx];
    //                     if (!price || !x1ex || isNaN(x1ex) || !isFinite(x1ex)) return null;
    //                     if (Math.abs(x1ex) > 1) return null;
    //                     return price * sgn <= tresh * sgn && y0 * sgn > tresh * sgn
    //                       ? [
    //                           tick.pixX + (x1ex - 1) * calcXaxis.scaledWidthPerTick,
    //                           yToPix?.(tresh, subchartIdx, yaxisIdx),
    //                           tick.pixX,
    //                           yToPix?.(tresh, subchartIdx, yaxisIdx), //pixYPrice,
    //                         ]
    //                       : price * sgn > tresh * sgn && y0 * sgn <= tresh * sgn
    //                       ? [
    //                           tick.pixX + (x1ex - 1) * calcXaxis.scaledWidthPerTick,
    //                           yToPix?.(tresh, subchartIdx, yaxisIdx),
    //                           tick.pixX,
    //                           pixYPrice,
    //                         ]
    //                       : price * sgn <= tresh * sgn && y0 * sgn <= tresh * sgn
    //                       ? [
    //                           tick.pixX + (x1ex - 1) * calcXaxis.scaledWidthPerTick,
    //                           yToPix?.(tresh, subchartIdx, yaxisIdx),
    //                         ]
    //                       : null;
    //                   }
    //                   return null;
    //                 })()
    //               : null;
    //           })
    //           .flat()
    //           .filter((val) => val !== null) as number[]),
    //         calcGraph?.curTicks?.[calcGraph?.curTicks?.length - 1 ?? 0].pixX ?? 0,
    //         yToPix?.(tresh, subchartIdx, yaxisIdx) ?? 0,
    //       ]
    //     : [];
    // };
    // const lowerAreaVals = areaTresholds?.lower ? getAreaVals(areaTresholds.lower, false) : null;
    // const upperAreaVals = areaTresholds?.upper ? getAreaVals(areaTresholds.upper, true) : null;
    // const info = useReactiveInfo2([subcharts, calcXaxis, calcSubcharts, subchartIdx, yaxisIdx, graphIdx]);
    // console.log("linechart renders", info);
    return (graphVals === null || graphVals === void 0 ? void 0 : graphVals.length) > 0 ? (_jsx(React.Fragment, { children: _jsx(Line, { listening: false, x: calcXaxis.pixXStart, y: 0, points: graphVals, stroke: T.isIndicatorGraph(graph) ? graph.style.strokeColor[indSeriesIdx] : graph.style.strokeColor, strokeWidth: 1 }, "sub".concat(subchartIdx, "_graph").concat(graphIdx, "-").concat(indSeriesIdx)) }, void 0)) : null;
};
export var CLineChart = React.memo(CLineChartComponent);
//# sourceMappingURL=CLineChart.js.map