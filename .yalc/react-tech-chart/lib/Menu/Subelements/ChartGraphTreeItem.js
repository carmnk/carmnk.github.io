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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import { mdiChartLine, mdiClose, mdiBorderColor, mdiSetLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { CIcon } from "../../Components/CIcon";
import { CMColorPropTreeItem } from "./CMColorPropTreeItem";
import { CMSelectPropTreeItem } from "./CMSelectPropTreeItem";
import { CTreeItem } from "../../Components/CTreeItem";
import * as T from "../../Types";
export var ChartMenuChartGraphTreeItem = function (props) {
    var _a, _b, _c, _d, _e;
    var subchartIdx = props.subchartIdx, yaxisIdx = props.yaxisIdx, graphIdx = props.graphIdx, subcharts = props.subcharts, Dispatch = props.Dispatch, onSettingsExpand = props.onSettingsExpand, data = props.data, fullscreen = props.fullscreen;
    var graph = (_d = (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[yaxisIdx]) === null || _c === void 0 ? void 0 : _c.graphs) === null || _d === void 0 ? void 0 : _d[graphIdx];
    var theme = useTheme();
    var dataGraph = data.find(function (val) { return val.id === (graph === null || graph === void 0 ? void 0 : graph.dataId); });
    var graphColorProps = function (graph) {
        return T.isChartGraph(graph) && (dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.type) === "chart"
            ? graph.chartType === "candles"
                ? [
                    {
                        text: "candle up color",
                        icon: mdiBorderColor,
                        color: graph.style.candleUpColor,
                        onColorSelected: function (color) {
                            Dispatch({
                                task: "setGraphProp",
                                params: {
                                    prop: "candleUpColor",
                                    subchartIdx: subchartIdx,
                                    yaxisIdx: yaxisIdx,
                                    graphIdx: graphIdx,
                                    newValue: color,
                                },
                            });
                        },
                    },
                    {
                        text: "candle down color",
                        icon: mdiBorderColor,
                        color: graph.style.candleDownColor,
                        onColorSelected: function (color) {
                            Dispatch({
                                task: "setGraphProp",
                                params: {
                                    prop: "candleDownColor",
                                    subchartIdx: subchartIdx,
                                    yaxisIdx: yaxisIdx,
                                    graphIdx: graphIdx,
                                    newValue: color,
                                },
                            });
                        },
                    },
                    {
                        text: "candle stroke color",
                        icon: mdiBorderColor,
                        color: graph.style.candleStrokeColor,
                        onColorSelected: function (color) {
                            Dispatch({
                                task: "setGraphProp",
                                params: {
                                    prop: "candleStrokeColor",
                                    subchartIdx: subchartIdx,
                                    yaxisIdx: yaxisIdx,
                                    graphIdx: graphIdx,
                                    newValue: color,
                                },
                            });
                        },
                    },
                    {
                        text: "candle wick color",
                        icon: mdiBorderColor,
                        color: graph.style.candleWickStrokeColor,
                        onColorSelected: function (color) {
                            Dispatch({
                                task: "setGraphProp",
                                params: {
                                    prop: "candleWickStrokeColor",
                                    subchartIdx: subchartIdx,
                                    yaxisIdx: yaxisIdx,
                                    graphIdx: graphIdx,
                                    newValue: color,
                                },
                            });
                        },
                    },
                ]
                : [
                    {
                        text: "line stroke color",
                        icon: mdiBorderColor,
                        color: graph.style.strokeColor,
                        onColorSelected: function (color) {
                            Dispatch({
                                task: "setGraphProp",
                                params: {
                                    prop: "strokeColor",
                                    subchartIdx: subchartIdx,
                                    yaxisIdx: yaxisIdx,
                                    graphIdx: graphIdx,
                                    newValue: color,
                                },
                            });
                        },
                    },
                ]
            : [];
    };
    return T.isChartGraph(graph) ? (_jsxs(CTreeItem, __assign({ onClick: function () {
            var id = "graph-sub-".concat(subchartIdx, "-y-").concat(yaxisIdx, "-graph-").concat(graphIdx);
            onSettingsExpand === null || onSettingsExpand === void 0 ? void 0 : onSettingsExpand(id);
        }, nodeId: "graph-sub-".concat(subchartIdx, "-y-").concat(yaxisIdx, "-graph-").concat(graphIdx), labelText: (_e = dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.name) !== null && _e !== void 0 ? _e : "Graph No." + graphIdx, bgColorSelected: theme.palette.primary.light, labelIcon: _jsx(CIcon, { path: mdiChartLine, size: "32px", color: theme.palette.secondary.contrastText, background: theme.palette.primary.main }, void 0), labelInfo: subchartIdx !== 0 || graphIdx !== 0 ? (_jsx(IconButton, __assign({ size: "small", onClick: function (e) {
                e.preventDefault();
                Dispatch({ task: "removeGraph", params: { subchartIdx: subchartIdx, yaxisIdx: yaxisIdx, graphIdx: graphIdx } });
            } }, { children: _jsx(Icon, { path: mdiClose, size: 1, color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0) }), void 0)) : undefined }, { children: [graph.type === "chart" && (dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.meta.type) === "candlechart" ? (_jsx(CMSelectPropTreeItem, { nodeId: "chart-s".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx, "-chartType"), labelIcon: _jsx(CIcon, { path: mdiSetLeft, size: "24px", color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0), labelText: "chart type", value: graph.chartType, options: ["line", "candles"], fullscreen: fullscreen, onChangeConfirmed: function (newValue) {
                    Dispatch({
                        task: "setGraphProp",
                        params: { prop: "chartType", subchartIdx: subchartIdx, yaxisIdx: yaxisIdx, graphIdx: graphIdx, newValue: newValue },
                    });
                } }, "chart-s".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx, "-chartType"))) : null, graphColorProps(graph).map(function (graphColorProp, gcIdx) { return (_jsx(CMColorPropTreeItem, { nodeId: "settings-treeitem-chartGraph-s".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx, "-p").concat(gcIdx), text: graphColorProp.text, color: graphColorProp.color, iconPath: graphColorProp.icon, fullscreen: fullscreen, onColorSelected: graphColorProp.onColorSelected }, "settings-treeitem-chartGraph-s".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx, "-p").concat(gcIdx))); })] }), "graph-sub-".concat(subchartIdx, "-y-").concat(yaxisIdx, "-graph-").concat(graphIdx))) : null;
};
//# sourceMappingURL=ChartGraphTreeItem.js.map