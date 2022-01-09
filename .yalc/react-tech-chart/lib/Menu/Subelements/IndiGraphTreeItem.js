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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import { mdiChartBellCurve, mdiClose, mdiBorderColor } from "@mdi/js";
import { mdiApplicationVariableOutline, mdiDatabaseExportOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { CIcon } from "../../Components/CIcon";
import { CTreeItem } from "../../Components/CTreeItem";
import * as T from "../../Types";
import { isCircularIndicatorDependency } from "../../ChartState/Factory/IndicatorDataFactory";
import { CMColorPropTreeItem } from "./CMColorPropTreeItem";
import { CMNumberPropTreeItem } from "./CMNumberPropTreeItem";
import { CMSelectPropTreeItem } from "./CMSelectPropTreeItem";
export var ChartMenuIndiGraphTreeItemComponent = function (props) {
    var subchartIdx = props.subchartIdx, yaxisIdx = props.yaxisIdx, graphIdx = props.graphIdx, graphs = props.graphs, Dispatch = props.Dispatch, handleToggleExpanded = props.handleToggleExpanded, data = props.data, fullscreen = props.fullscreen;
    var graph = graphs[graphIdx];
    var theme = useTheme();
    var dataGraph = data.find(function (val) { return val.id === (graph === null || graph === void 0 ? void 0 : graph.dataId); });
    var initParams = dataGraph.indicator.params;
    var initParamVals = initParams.map(function (param) { return param.val; });
    var modifyNumericParam = React.useCallback(function (dataId, paramIdx) { return function (newValue) {
        Dispatch({
            task: "modifyIndicatorData",
            params: { dataId: dataId, newParam: { paramIdx: paramIdx, newValue: newValue } },
        });
    }; }, [Dispatch]);
    if (!T.isIndicatorGraph(graph))
        return null;
    if (!graph || (dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.type) !== "indicator")
        return null;
    return (_jsxs(CTreeItem, __assign({ nodeId: "settings-treeitem-indiGraph-s".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx), bgColorSelected: theme.palette.primary.light, onClick: function () {
            var id = "settings-treeitem-indiGraph-s".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx);
            handleToggleExpanded === null || handleToggleExpanded === void 0 ? void 0 : handleToggleExpanded(id);
        }, labelIcon: _jsx(CIcon, { path: mdiChartBellCurve, size: "32px", color: theme.palette.secondary.contrastText, background: theme.palette.primary.main }, void 0), labelText: dataGraph.fullName, labelInfo: subchartIdx !== 0 || graphIdx !== 0 ? (_jsx(IconButton, __assign({ size: "small", onClick: function (e) {
                e.preventDefault();
                var action = {
                    task: "removeGraph",
                    params: { subchartIdx: subchartIdx, yaxisIdx: 0, graphIdx: graphIdx },
                };
                Dispatch(action);
            } }, { children: _jsx(Icon, { path: mdiClose, size: 1, color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0) }), void 0)) : undefined }, { children: [["dataSeries", "chartSeries"].includes(dataGraph.indicator.indicatorFnType) && (_jsx(CMSelectPropTreeItem, { nodeId: "settings-treeitem-indiGraph-src-s".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx), labelIcon: _jsx(CIcon, { path: mdiDatabaseExportOutline, size: "24px", color: theme.palette.text.primary }, void 0), labelText: "Source", value: dataGraph.indSrcId, fullscreen: fullscreen, options: (!dataGraph.indicator.default.newSubchart
                    ? data.filter(function (dat) { return graphs.map(function (graph) { return graph.dataId; }).includes(dat.id); })
                    : dataGraph.indicator.indicatorFnType === "dataSeries"
                        ? data
                        : dataGraph.indicator.indicatorFnType === "chartSeries"
                            ? data.filter(function (dat) { return dat.type === "chart"; })
                            : [])
                    .filter(function (dat) { return dat.id !== dataGraph.id && !isCircularIndicatorDependency(data, dataGraph.id, dat.id); })
                    .map(function (dat) { return ({ value: dat.id, text: dat.name }); }), onChangeConfirmed: function (newValue) {
                    if (typeof newValue !== "string")
                        return;
                    Dispatch({ task: "modifyIndicatorData", params: { dataId: dataGraph.id, newIndSrcId: newValue } });
                } }, void 0)), dataGraph.indicator.graphTypes.map(function (gType, gtIdx) {
                var _a, _b;
                var colors = graph.style.strokeColor;
                return (_jsx(CMColorPropTreeItem, { nodeId: "settings-treeitem-indiGraph-clrProps-".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx, "-gt").concat(gtIdx), color: (_b = (_a = graphs[graphIdx].style) === null || _a === void 0 ? void 0 : _a.strokeColor) === null || _b === void 0 ? void 0 : _b[gtIdx], iconPath: mdiBorderColor, text: "line stroke color", fullscreen: fullscreen, onColorSelected: function (color) {
                        Dispatch({
                            task: "setGraphProp",
                            params: {
                                subchartIdx: subchartIdx,
                                yaxisIdx: 0,
                                graphIdx: graphIdx,
                                newValue: __spreadArray(__spreadArray(__spreadArray([], colors.slice(0, gtIdx), true), [color], false), colors.slice(gtIdx + 1), true),
                                prop: "strokeColor",
                            },
                        });
                    } }, "settings-treeitem-indiGraph-clrProps-".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx, "-gt").concat(gtIdx)));
            }), initParams.map(function (param, paramIdx) {
                var _a, _b, _c, _d;
                var defParam = (_b = (_a = dataGraph.indicator.default) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.find(function (defParam) { return (defParam === null || defParam === void 0 ? void 0 : defParam.name) === (param === null || param === void 0 ? void 0 : param.name); });
                var srcData = data === null || data === void 0 ? void 0 : data.find(function (dat) { return dat.id === dataGraph.indSrcId; });
                return (defParam === null || defParam === void 0 ? void 0 : defParam.type) === "number" ? (_jsx(CMNumberPropTreeItem, { nodeId: "sub-".concat(subchartIdx, "-yaxis-").concat(yaxisIdx, "-graph-").concat(graphIdx, "-").concat(paramIdx), labelText: param.name, labelIcon: _jsx(CIcon, { path: mdiApplicationVariableOutline, size: "24px", color: theme.palette.text.primary }, void 0), onChangeConfirmed: modifyNumericParam === null || modifyNumericParam === void 0 ? void 0 : modifyNumericParam(dataGraph.id, paramIdx), value: initParamVals === null || initParamVals === void 0 ? void 0 : initParamVals[paramIdx] }, "sub-".concat(subchartIdx, "-yaxis-").concat(yaxisIdx, "-graph-").concat(graphIdx, "-").concat(paramIdx))) : (defParam === null || defParam === void 0 ? void 0 : defParam.type) === "select" || (defParam === null || defParam === void 0 ? void 0 : defParam.type) === "applyOn" ? (_jsx(CMSelectPropTreeItem, { nodeId: "sub-".concat(subchartIdx, "-yaxis-").concat(yaxisIdx, "-graph-").concat(graphIdx, "-").concat(paramIdx), labelText: param.name, labelIcon: _jsx(CIcon, { path: mdiApplicationVariableOutline, size: "24px", color: theme.palette.text.primary }, void 0), fullscreen: fullscreen, value: (defParam === null || defParam === void 0 ? void 0 : defParam.type) === "applyOn" && (srcData === null || srcData === void 0 ? void 0 : srcData.type) === "chart" && typeof (initParamVals === null || initParamVals === void 0 ? void 0 : initParamVals[paramIdx]) === "number"
                        ? "close"
                        : initParamVals === null || initParamVals === void 0 ? void 0 : initParamVals[paramIdx], onChangeConfirmed: modifyNumericParam === null || modifyNumericParam === void 0 ? void 0 : modifyNumericParam(dataGraph.id, paramIdx), options: (defParam === null || defParam === void 0 ? void 0 : defParam.type) === "applyOn" && (srcData === null || srcData === void 0 ? void 0 : srcData.type) === "indicator"
                        ? new Array((_d = (_c = srcData === null || srcData === void 0 ? void 0 : srcData.indicator) === null || _c === void 0 ? void 0 : _c.graphTypes) === null || _d === void 0 ? void 0 : _d.length).fill(0).map(function (v, idx) { return idx.toString(); })
                        : (defParam === null || defParam === void 0 ? void 0 : defParam.type) === "applyOn" && (srcData === null || srcData === void 0 ? void 0 : srcData.type) === "chart"
                            ? ["open", "high", "low", "close"]
                            : (defParam === null || defParam === void 0 ? void 0 : defParam.type) === "select"
                                ? defParam === null || defParam === void 0 ? void 0 : defParam.options
                                : [] }, "sub-".concat(subchartIdx, "-yaxis-").concat(yaxisIdx, "-graph-").concat(graphIdx, "-").concat(paramIdx))) : null;
            })] }), "settings-treeitem-indiGraph-s".concat(subchartIdx, "-y").concat(yaxisIdx, "-g").concat(graphIdx)));
};
export var ChartMenuIndiGraphTreeItem = React.memo(ChartMenuIndiGraphTreeItemComponent);
//# sourceMappingURL=IndiGraphTreeItem.js.map