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
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import { Icon } from "@mdi/react";
import { mdiDiameterVariant, mdiChartBellCurve, mdiArrowExpandVertical } from "@mdi/js";
import { mdiPoll, mdiSortAlphabeticalAscending, mdiFilter } from "@mdi/js";
import { CTreeItem } from "../../Components/CTreeItem";
import { CTreeView } from "../../Components/CTreeView";
import { IndicatorsSubMenu } from "./IndicatorsSubMenu";
import uniqid from "uniqid";
import { defaultIndicators } from "../../Indicators/DefaultIndicators";
var categorys = [
    { name: "Average", icon: mdiDiameterVariant },
    { name: "Oszillator", icon: mdiChartBellCurve },
    { name: "Volatility", icon: mdiArrowExpandVertical },
    { name: "Volume", icon: mdiPoll },
];
export var IndicatorsAdd = function (props) {
    var subcharts = props.subcharts, onNavigate = props.onNavigate, location = props.location, Dispatch = props.Dispatch, settings = props.settings, data = props.data, fullscreen = props.fullscreen;
    var _a = React.useState(false), DisableGrouping = _a[0], setDisableGrouping = _a[1];
    var _b = React.useState(0), SelectedGraph = _b[0], setSelectedGraph = _b[1];
    var amtIndicators = data.filter(function (val) { return val.type === "indicator"; }).length;
    var theme = useTheme();
    var indicators = React.useMemo(function () {
        return (settings === null || settings === void 0 ? void 0 : settings.additionalIndicators) ? __spreadArray(__spreadArray([], defaultIndicators, true), settings.additionalIndicators, true) : defaultIndicators;
    }, [settings === null || settings === void 0 ? void 0 : settings.additionalIndicators]);
    var srcGraphs = subcharts
        .map(function (subchart, subchartIdx) {
        return subchart.yaxis
            .map(function (yaxi, yaxisIdx) {
            return yaxi.graphs
                .map(function (graph, graphIdx) {
                var dataGraph = data.find(function (val) { return val.id === graph.dataId; });
                var subGraphs = (dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.type) === "indicator" ? dataGraph.indicator.graphTypes : null;
                var amtLines = subGraphs ? subGraphs.length : 1;
                return Array(amtLines)
                    .fill(0)
                    .map(function (x, xIdx) {
                    var _a;
                    var subGraph = subGraphs === null || subGraphs === void 0 ? void 0 : subGraphs[xIdx];
                    var subGraphNameSuffix = (subGraph === null || subGraph === void 0 ? void 0 : subGraph.name) ? " - " + subGraph.name : "";
                    return {
                        name: (_a = dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.name) !== null && _a !== void 0 ? _a : "Graph No." + graphIdx,
                        subchartIdx: subchartIdx,
                        yaxisIdx: yaxisIdx,
                        graphIdx: graphIdx,
                        graphLineIdx: xIdx,
                        fullName: (dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.type) === "indicator" ? dataGraph.fullName + subGraphNameSuffix + "" : null,
                        type: graph.type,
                        dataId: graph.dataId,
                    };
                })
                    .flat();
            })
                .flat();
        })
            .flat();
    })
        .flat();
    var filteredIndicators = indicators.filter(function (indi) {
        var _a, _b;
        return (((_a = srcGraphs === null || srcGraphs === void 0 ? void 0 : srcGraphs[SelectedGraph]) === null || _a === void 0 ? void 0 : _a.type) === "indicator" && indi.indicatorFnType === "dataSeries") ||
            ((_b = srcGraphs === null || srcGraphs === void 0 ? void 0 : srcGraphs[SelectedGraph]) === null || _b === void 0 ? void 0 : _b.type) === "chart";
    });
    return (_jsxs(React.Fragment, { children: [amtIndicators > 0 && (_jsx(IndicatorsSubMenu, { location: location, onNavigate: onNavigate, theme: theme, amtIndicators: amtIndicators, submenuContent: _jsxs(React.Fragment, { children: [_jsx(TextField, __assign({ select: true, SelectProps: {
                                SelectDisplayProps: {
                                    style: { padding: 8, paddingRight: 32, paddingLeft: 16 },
                                },
                                MenuProps: { disablePortal: fullscreen },
                            }, variant: "outlined", InputProps: { sx: { borderRadius: "18px" } }, label: _jsx(Typography, __assign({ color: "text.secondary" }, { children: "Source Graph" }), void 0), value: SelectedGraph, onChange: function (e) {
                                var val = typeof e.target.value === "number" ? e.target.value : parseInt(e.target.value, 10);
                                if (isNaN(val))
                                    return;
                                setSelectedGraph(val);
                            } }, { children: srcGraphs.map(function (srcGraph, gIdx) {
                                var _a;
                                return (_jsx(MenuItem, __assign({ value: gIdx }, { children: (_a = srcGraph === null || srcGraph === void 0 ? void 0 : srcGraph.fullName) !== null && _a !== void 0 ? _a : srcGraph.name }), "srcGraph-" + gIdx));
                            }) }), void 0), _jsx(IconButton, __assign({ size: "small", sx: { border: "1px solid #fff", margin: "0px 5px 0px 0px" }, onClick: function () { return setDisableGrouping(function (current) { return !current; }); } }, { children: _jsx(Icon, { path: !DisableGrouping ? mdiSortAlphabeticalAscending : mdiFilter, size: 1, color: theme.palette.primary.contrastText }, void 0) }), void 0)] }, void 0) }, void 0)), _jsx(CTreeView, { children: !DisableGrouping
                    ? categorys.map(function (cat, catIdx) {
                        var indicatorsPerCat = filteredIndicators.filter(function (indi) { return indi.category === cat.name; });
                        return (indicatorsPerCat.length > 0 && (_jsx(CTreeItem, __assign({ nodeId: catIdx.toString(), labelText: cat.name, bgColorSelected: theme.palette.primary.light, color: "#ff0000", labelIcon: _jsx("div", __assign({ style: {
                                    border: "1px solid #666",
                                    borderRadius: 5,
                                    marginRight: 10,
                                    background: theme.palette.secondary.main,
                                    minWidth: 32,
                                    height: 32,
                                } }, { children: _jsx(Icon, { path: cat.icon, size: "32px", color: theme.palette.secondary.contrastText }, void 0) }), void 0) }, { children: indicatorsPerCat
                                .sort(function (a, b) { return (a.name > b.name ? 1 : -1); })
                                .map(function (indi, indiIdx) { return (_jsx(CTreeItem, { nodeId: ((catIdx + 1) * 100 + (indiIdx + 1)).toString(), labelText: indi.name, typographyVariant: "body1", onClick: function () {
                                    var _a, _b;
                                    var dataGraph = data.find(function (val) { var _a; return val.id === ((_a = srcGraphs[SelectedGraph]) === null || _a === void 0 ? void 0 : _a.dataId); });
                                    if (!dataGraph)
                                        return;
                                    var dataSeries = (_a = dataGraph.data) !== null && _a !== void 0 ? _a : [];
                                    var graphName = (_b = dataGraph.name) !== null && _b !== void 0 ? _b : "Graph No." + (srcGraphs === null || srcGraphs === void 0 ? void 0 : srcGraphs[SelectedGraph].graphIdx);
                                    if (indi === null || indi === void 0 ? void 0 : indi.default.newSubchart) {
                                        Dispatch({
                                            task: "addSubchart",
                                            params: {
                                                dataSeries: dataSeries,
                                                graphName: graphName,
                                                indicator: indi,
                                                indSrcId: dataGraph.id,
                                                id: uniqid(),
                                            },
                                        });
                                    }
                                    else {
                                        Dispatch({
                                            task: "addGraph",
                                            params: {
                                                dataSeries: dataSeries,
                                                graphName: graphName,
                                                id: uniqid(),
                                                indicator: indi,
                                                subchartIdx: srcGraphs === null || srcGraphs === void 0 ? void 0 : srcGraphs[SelectedGraph].subchartIdx,
                                                indSrcId: dataGraph.id,
                                                indSrcLineIdx: srcGraphs === null || srcGraphs === void 0 ? void 0 : srcGraphs[SelectedGraph].graphLineIdx,
                                            },
                                        });
                                    }
                                } }, "cat-".concat(catIdx, "-indi-").concat(indiIdx))); }) }), "cat-".concat(catIdx))));
                    })
                    : filteredIndicators
                        .sort(function (a, b) { return (a.name > b.name ? 1 : -1); })
                        .map(function (indi, indiIdx) { return (_jsx(CTreeItem, { nodeId: (indiIdx + 1).toString(), labelText: indi.name, typographyVariant: "body1", onClick: function () {
                            var _a, _b;
                            var dataGraph = data.find(function (val) { var _a; return val.id === ((_a = srcGraphs[SelectedGraph]) === null || _a === void 0 ? void 0 : _a.dataId); });
                            if (!dataGraph)
                                return;
                            var dataSeries = (_a = dataGraph.data) !== null && _a !== void 0 ? _a : [];
                            var graphName = (_b = dataGraph.name) !== null && _b !== void 0 ? _b : "Graph No." + (srcGraphs === null || srcGraphs === void 0 ? void 0 : srcGraphs[SelectedGraph].graphIdx);
                            if (indi === null || indi === void 0 ? void 0 : indi.default.newSubchart) {
                                Dispatch({
                                    task: "addSubchart",
                                    params: {
                                        dataSeries: dataSeries,
                                        graphName: graphName,
                                        indicator: indi,
                                        indSrcId: dataGraph.id,
                                        id: uniqid(),
                                    },
                                });
                            }
                            else {
                                Dispatch({
                                    task: "addGraph",
                                    params: {
                                        dataSeries: dataSeries,
                                        graphName: graphName,
                                        id: uniqid(),
                                        indicator: indi,
                                        subchartIdx: srcGraphs === null || srcGraphs === void 0 ? void 0 : srcGraphs[SelectedGraph].subchartIdx,
                                        indSrcId: dataGraph.id,
                                        indSrcLineIdx: srcGraphs === null || srcGraphs === void 0 ? void 0 : srcGraphs[SelectedGraph].graphLineIdx,
                                    },
                                });
                            }
                        } }, "cat-indi-".concat(indiIdx))); }) }, void 0)] }, void 0));
};
//# sourceMappingURL=IndicatorsAdd.js.map