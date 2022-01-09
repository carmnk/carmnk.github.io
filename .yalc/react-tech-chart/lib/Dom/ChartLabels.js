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
import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import React from "react";
import * as T from "../Types";
import { GraphLabel } from "./GraphLabel";
export var ChartLabels = function (props) {
    var data = props.data, calcPointer = props.calcPointer, calcSubcharts = props.calcSubcharts, subcharts = props.subcharts, onGraphLabelClick = props.onGraphLabelClick;
    return (_jsx(React.Fragment, { children: subcharts.map(function (subchart, sIdx) { return (_jsx(Box, __assign({ sx: {
                position: "absolute",
                top: subchart.top,
            } }, { children: subchart.yaxis[0].graphs.map(function (graph, gIdx) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                var graphData = data.find(function (val) { return val.id === graph.dataId; });
                var graphDataSeries = (_a = graphData === null || graphData === void 0 ? void 0 : graphData.data) !== null && _a !== void 0 ? _a : [];
                var graphDecimals = (_b = graphData === null || graphData === void 0 ? void 0 : graphData.decimals) !== null && _b !== void 0 ? _b : 0;
                var calcGraph = (_f = (_e = (_d = (_c = calcSubcharts === null || calcSubcharts === void 0 ? void 0 : calcSubcharts[sIdx]) === null || _c === void 0 ? void 0 : _c.yaxis) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.graphs) === null || _f === void 0 ? void 0 : _f[gIdx];
                if (!(calcGraph === null || calcGraph === void 0 ? void 0 : calcGraph.lastDataset) || !graphData)
                    return null;
                var name = T.isIndicatorGraph(graph) && graphData.type === "indicator" && graphData.indicator.params.length > 0
                    ? "".concat(graphData.indicator.name, "(").concat(graphData.indicator.params[0].val, ")")
                    : T.isIndicatorGraph(graph) && graphData.type === "indicator" && graphData.indicator.params.length === 0
                        ? "".concat(graphData.indicator.name)
                        : graphData.name;
                var tmpDataset = (calcPointer.isHovering &&
                    sIdx === (calcPointer === null || calcPointer === void 0 ? void 0 : calcPointer.move.subchartIdx) &&
                    ((_h = (_g = calcPointer === null || calcPointer === void 0 ? void 0 : calcPointer.move.snapDatasets) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.graphIdx) === gIdx
                    ? (_l = (_k = (_j = calcPointer === null || calcPointer === void 0 ? void 0 : calcPointer.move) === null || _j === void 0 ? void 0 : _j.snapDatasets) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.data
                    : calcPointer.isHovering && calcPointer.move.x !== null
                        ? graphDataSeries[calcPointer === null || calcPointer === void 0 ? void 0 : calcPointer.move.x]
                        : calcGraph.lastDataset.data) || calcGraph.lastDataset.data;
                return (_jsx(GraphLabel, { onClick: onGraphLabelClick, subchartIdx: sIdx, graphIdx: gIdx, name: name, dataset: tmpDataset, decimals: T.isIndicatorGraph(graph) &&
                        graphData.type === "indicator" &&
                        graphData.indicator.default.decimals !== undefined
                        ? graphData.indicator.default.decimals
                        : graphDecimals, graphTypes: (graphData === null || graphData === void 0 ? void 0 : graphData.type) === "indicator" ? (_m = graphData === null || graphData === void 0 ? void 0 : graphData.indicator) === null || _m === void 0 ? void 0 : _m.graphTypes : undefined }, "chart-label-".concat(sIdx, "-").concat(gIdx)));
            }) }), "chart-label-subarea-".concat(sIdx))); }) }, void 0));
};
//# sourceMappingURL=ChartLabels.js.map