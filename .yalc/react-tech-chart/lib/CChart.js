var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { ConditionalMuiThemeProvider, muiDarkTheme, muiTheme } from "./MuiTheme";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Stage, Layer, Rect } from "react-konva";
import { CCandleChart, CLineChart, CBarChart, Crosshair, Xaxis, Yaxis, Marker } from "./Canvas";
import { CChartMenu } from "./Menu/ChartMenu";
import { ChartMenuButton } from "./Menu/ChartMenuButton";
import { isNullish } from "./utils/Basics";
import { defaultTools } from "./Tools/DefaultTools"; // currently not expandable
import { ChartLabels } from "./Dom/ChartLabels";
import { DrawTool } from "./Tools/DrawTool";
import * as T from "./Types";
import { css, Global } from "@emotion/react";
import dequal from "lodash/isEqual";
import { mergeRefs } from "./utils/React";
import { Box } from "@mui/material";
export var CChart = React.forwardRef(function (props, ref) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var _o = props.Controller, settings = _o.settings, ChartState = _o.ChartState, Dispatch = _o.Dispatch, _p = _o.rtTicks, rtTicks = _p === void 0 ? [] : _p, ContainerRef = _o.ContainerRef, events = _o.events;
    var disableTheme = (settings || {}).disableTheme;
    var Settings = React.useRef(settings);
    var _q = React.useState({
        location: null,
        expandedSetting: [],
    }), ChartMenu2Open = _q[0], setChartMenu2Open = _q[1];
    React.useEffect(function () {
        if (!ContainerRef)
            return;
        mergeRefs([ContainerRef, ref]);
    }, [ContainerRef, ref]);
    var handleRequestMenuOpen = React.useCallback(function () {
        console.log();
        Dispatch({
            task: "setPointerEventsIntern",
            params: { disablePointerEvents: true },
        });
        setChartMenu2Open(function (current) { return (__assign(__assign({}, current), { location: "menu" })); });
    }, [Dispatch]);
    var handleRequestMenuClose = React.useCallback(function () {
        Dispatch({
            task: "setPointerEventsIntern",
            params: { disablePointerEvents: false },
        });
        setChartMenu2Open(function (current) { return (__assign(__assign({}, current), { location: null })); });
    }, [Dispatch]);
    var handleRequestMenuNavigation = React.useCallback(function (target) {
        if (!target)
            Dispatch({
                task: "setPointerEventsIntern",
                params: { disablePointerEvents: false },
            });
        setChartMenu2Open(function (current) { return (__assign(__assign({}, current), { location: target })); });
    }, [Dispatch]);
    var handleToggleExpanded = React.useCallback(function (id) {
        setChartMenu2Open(function (current) {
            return current.expandedSetting.includes(id)
                ? __assign(__assign({}, current), { expandedSetting: current.expandedSetting.filter(function (val) { return val !== id; }) }) : __assign(__assign({}, current), { expandedSetting: __spreadArray(__spreadArray([], current.expandedSetting, true), [id], false) });
        });
    }, []);
    var handleChartLabelClick = React.useCallback(function (event, subchartIdx, graphIdx) {
        if (isNullish(subchartIdx) || isNullish(graphIdx))
            return;
        Dispatch({
            task: "setPointerEventsIntern",
            params: { disablePointerEvents: true },
        });
        setChartMenu2Open({
            location: "settings",
            expandedSetting: ["graph-sub-".concat(subchartIdx, "-y-0-graph-").concat(graphIdx), "sub-".concat(subchartIdx)],
        });
    }, [Dispatch]);
    var darkMode = ChartState.theme.isDarkMode;
    var mainGraph = (_e = (_d = (_c = (_b = (_a = ChartState === null || ChartState === void 0 ? void 0 : ChartState.subcharts) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.yaxis) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.graphs) === null || _e === void 0 ? void 0 : _e[0];
    var MainChart = (mainGraph === null || mainGraph === void 0 ? void 0 : mainGraph.chartType) === "candles" ? CCandleChart : CLineChart;
    var isContainerInit = ChartState.containerSize.init;
    var heightXAxis = ChartState.theme.xaxis.heightXAxis;
    var containerWidth = ChartState.containerSize.width - 1;
    var containerHeight = ChartState.containerSize.height - 1;
    var sizelessSubcharts = ChartState.subcharts.map(function (sub) { return ({ yaxis: sub.yaxis }); });
    var SizelessSubcharts = React.useRef(sizelessSubcharts);
    if (!dequal(SizelessSubcharts.current, sizelessSubcharts))
        SizelessSubcharts.current = sizelessSubcharts;
    return (_jsxs(React.Fragment, { children: [_jsx(Global, { styles: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          .ChartContainer {\n            box-sizing: border-box;\n            position: relative;\n            top: 0;\n            z-index: 1000;\n            width: 100%;\n            height: 100%;\n          }\n          .ChartKonvaStage {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n          }\n        "], ["\n          .ChartContainer {\n            box-sizing: border-box;\n            position: relative;\n            top: 0;\n            z-index: 1000;\n            width: 100%;\n            height: 100%;\n          }\n          .ChartKonvaStage {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n          }\n        "]))) }, void 0), _jsx(ConditionalMuiThemeProvider, __assign({ theme: darkMode ? muiDarkTheme : muiTheme, disableTheme: disableTheme }, { children: _jsx("div", __assign({ ref: ContainerRef, className: "ChartContainer", style: {
                        background: ChartState.theme.backgroundColor,
                        touchAction: "none",
                    } }, { children: !mainGraph || !MainChart || !isContainerInit ? (_jsx("div", __assign({ style: {
                            height: "100%",
                            background: ChartState.theme.backgroundColor,
                        } }, { children: _jsxs(Backdrop, __assign({ sx: { color: "primary.main" }, open: true, invisible: true }, { children: [_jsx(Typography, __assign({ variant: "h6", component: "div" }, { children: "Chart data is loaded.." }), void 0), _jsx(CircularProgress, { color: "inherit" }, void 0)] }), void 0) }), void 0)) : (_jsxs(React.Fragment, { children: [_jsxs(Stage //konva container
                            , __assign({ width: ChartState.containerSize.width, height: ChartState.containerSize.height, className: "ChartKonvaStage", listening: false }, { children: [_jsxs(Layer, __assign({ listening: false }, { children: [_jsx(Rect, { name: "xaxis-rect", listening: false, x: 0 + 0.5, y: containerHeight - heightXAxis + 0.5, width: containerWidth, height: heightXAxis, fill: ChartState.theme.xaxis.fillColor, stroke: ChartState.theme.borderColor, strokeWidth: 1 }, void 0), ChartState.subcharts.map(function (subchart, subchartIdx) { return (_jsx(React.Fragment, { children: _jsx(Rect, { name: "subchart rect " + subchartIdx, listening: false, x: 0 + 0.5, y: subchart.top + 0.5, width: containerWidth, height: subchart.bottom - subchart.top, stroke: ChartState.theme.borderColor, strokeWidth: 1 }, void 0) }, "subchart-border-".concat(subchartIdx))); })] }), void 0), _jsxs(Layer, __assign({ listening: false }, { children: [0 in ChartState.subcharts ? (_jsx(MainChart, { subcharts: ChartState.subcharts, calcXaxis: ChartState.calc.xaxis, calcSubcharts: ChartState.calc.subcharts, yToPix: ChartState.calc.yToPix, pixToY: ChartState.calc.pixToY, subchartIdx: 0, yaxisIdx: 0, graphIdx: 0 }, void 0)) : null, ChartState.subcharts.map(function (subchart, subchartIdx) {
                                                return subchart.yaxis.map(function (singleYaxis) {
                                                    return singleYaxis.graphs.map(function (graph, graphIdx) {
                                                        var _a, _b, _c, _d, _e, _f;
                                                        var dataGraph = ChartState.data.find(function (val) { return val.id === graph.dataId; });
                                                        if (T.isIndicatorGraph(graph) &&
                                                            (dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.type) === "indicator" &&
                                                            ((_b = (_a = dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.data) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
                                                            var indicatorLines = (_f = (_e = dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.data[((_d = (_c = dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.data) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) - 1]) === null || _e === void 0 ? void 0 : _e.prices) !== null && _f !== void 0 ? _f : [];
                                                            return indicatorLines.map(function (indiLine, indiLineIdx) {
                                                                var _a, _b, _c;
                                                                var indicatorType = (_c = (_b = (_a = dataGraph.indicator.graphTypes) === null || _a === void 0 ? void 0 : _a[indiLineIdx]) === null || _b === void 0 ? void 0 : _b.type) !== null && _c !== void 0 ? _c : "line";
                                                                var CanvasChart = indicatorType === "line" ? CLineChart : indicatorType === "bars" ? CBarChart : null;
                                                                if (!CanvasChart)
                                                                    return null;
                                                                // approach to implement areas -> to be reviewed, maybe separate component
                                                                // const areaTresholdPropIdx = dataGraph.indicator.default?.graphProps?.findIndex(
                                                                //   (val) => val.name === "areaTresholds"
                                                                // );
                                                                // const addLineAreaParams =
                                                                //   indicatorType === "line" && !isNullish(areaTresholdPropIdx) && areaTresholdPropIdx !== -1
                                                                //     ? {
                                                                //         areaTresholds: dataGraph.indicator.default?.graphProps?.[areaTresholdPropIdx].val,
                                                                //       }
                                                                //     : {};
                                                                return (_jsx(CanvasChart, { subcharts: ChartState.subcharts, subchartIdx: subchartIdx, yaxisIdx: 0, graphIdx: graphIdx, indSeriesIdx: indiLineIdx, calcXaxis: ChartState.calc.xaxis, calcSubcharts: ChartState.calc.subcharts, yToPix: ChartState.calc.yToPix, pixToY: ChartState.calc.pixToY }, "".concat(indicatorType, "-chart-s").concat(subchartIdx, "-y0-g").concat(graphIdx, "-l").concat(indiLineIdx)));
                                                            });
                                                        }
                                                        return null;
                                                    });
                                                });
                                            }), _jsx(Xaxis, { calcXaxis: ChartState.calc.xaxis, containerSize: ChartState.containerSize, theme: ChartState.theme }, void 0), _jsx(Yaxis, { calcSubcharts: ChartState.calc.subcharts, containerSize: ChartState.containerSize, theme: ChartState.theme, subcharts: ChartState.subcharts }, void 0)] }), void 0), _jsxs(Layer, __assign({ listening: false }, { children: [_jsx(Marker, { rtTicks: rtTicks, theme: ChartState.theme, containerSize: ChartState.containerSize, xaxis: ChartState.calc.xaxis }, void 0), ChartState.subcharts.map(function (subchart, sIdx) {
                                                return subchart.yaxis.map(function (yaxis, yIdx) {
                                                    return yaxis.graphs.map(function (graph, gIdx) {
                                                        var _a, _b, _c, _d, _e;
                                                        if (graph.type === "indicator") {
                                                            var dataGraph_1 = ChartState.data.find(function (val) { return val.id === graph.dataId; });
                                                            var rtIdx_1 = rtTicks.findIndex(function (rtTick) { return rtTick.dataId === (dataGraph_1 === null || dataGraph_1 === void 0 ? void 0 : dataGraph_1.id); });
                                                            if (rtIdx_1 === -1)
                                                                return null;
                                                            if ((dataGraph_1 === null || dataGraph_1 === void 0 ? void 0 : dataGraph_1.type) !== "indicator" || ((_b = (_a = dataGraph_1 === null || dataGraph_1 === void 0 ? void 0 : dataGraph_1.data) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) === 0)
                                                                return null;
                                                            var indicatorLines = (_c = dataGraph_1 === null || dataGraph_1 === void 0 ? void 0 : dataGraph_1.indicator) === null || _c === void 0 ? void 0 : _c.graphTypes;
                                                            return indicatorLines.map(function (line, lIdx) {
                                                                var _a, _b, _c, _d, _e;
                                                                var indicatorType = (_c = (_b = (_a = dataGraph_1.indicator.graphTypes) === null || _a === void 0 ? void 0 : _a[lIdx]) === null || _b === void 0 ? void 0 : _b.type) !== null && _c !== void 0 ? _c : "line";
                                                                var CanvasChart = indicatorType === "line" ? CLineChart : indicatorType === "bars" ? CBarChart : null;
                                                                if (!CanvasChart)
                                                                    return null;
                                                                return (_jsx(CanvasChart, { subcharts: ChartState.subcharts, subchartIdx: sIdx, yaxisIdx: yIdx, graphIdx: gIdx, indSeriesIdx: lIdx, calcXaxis: ChartState.calc.xaxis, calcSubcharts: ChartState.calc.subcharts, yToPix: ChartState.calc.yToPix, pixToY: ChartState.calc.pixToY, rtTicks: (_e = (_d = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[rtIdx_1]) === null || _d === void 0 ? void 0 : _d.ticks) !== null && _e !== void 0 ? _e : undefined }, "rtBars-s".concat(sIdx, "-y").concat(yIdx, "-g").concat(gIdx, "-l").concat(lIdx)));
                                                            });
                                                        }
                                                        else if (graph.type === "chart") {
                                                            var CanvasChart = graph.chartType === "candles"
                                                                ? CCandleChart
                                                                : graph.chartType === "line"
                                                                    ? CLineChart
                                                                    : null;
                                                            if (!CanvasChart)
                                                                return null;
                                                            return (_jsx(CanvasChart, { subcharts: ChartState.subcharts, subchartIdx: sIdx, yaxisIdx: yIdx, graphIdx: gIdx, calcXaxis: ChartState.calc.xaxis, calcSubcharts: ChartState.calc.subcharts, rtTicks: (_e = (_d = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _d === void 0 ? void 0 : _d.ticks) !== null && _e !== void 0 ? _e : undefined }, "rtBars-s".concat(sIdx, "-y").concat(yIdx, "-g").concat(gIdx)));
                                                        }
                                                        return null;
                                                    });
                                                });
                                            })] }), void 0), _jsx(Layer, __assign({ listening: false }, { children: ((_f = ChartState.calc.xaxis) === null || _f === void 0 ? void 0 : _f.xToPix) &&
                                            !!ChartState.calc.yToPix &&
                                            ChartState.subcharts.map(function (subchart, subchartIdx) {
                                                return subchart.yaxis.map(function (yaxis) {
                                                    return yaxis.tools.map(function (tool, toolIdx) {
                                                        var _a;
                                                        var toolModel = defaultTools.find(function (defTool) { return defTool.type === tool.type; });
                                                        var additionalProps = {};
                                                        (_a = tool.params) === null || _a === void 0 ? void 0 : _a.forEach(function (param) {
                                                            additionalProps[param.name] = param.val;
                                                        });
                                                        var Tool = toolModel ? toolModel.component : null;
                                                        return !Tool || !toolModel ? null : (_jsx(Tool, __assign({ 
                                                            // tool={toolState}
                                                            subcharts: ChartState.subcharts, 
                                                            // draw={ChartState.draw}
                                                            subchartIdx: subchartIdx, 
                                                            // yaxisIdx={0}
                                                            // toolIdx={toolIdx}
                                                            xy: tool.xy, containerSize: ChartState.containerSize, calcXaxis: ChartState.calc.xaxis, calcSubcharts: ChartState.calc.subcharts, yToPix: ChartState.calc.yToPix, pixToY: ChartState.calc.pixToY, style: tool.style }, additionalProps), "trendline-sub-0-y-0-tool-".concat(toolIdx)));
                                                    });
                                                });
                                            }) }), void 0), _jsxs(Layer, __assign({ listening: false }, { children: [!!((_h = (_g = ChartState === null || ChartState === void 0 ? void 0 : ChartState.calc) === null || _g === void 0 ? void 0 : _g.pointer) === null || _h === void 0 ? void 0 : _h.isHovering) &&
                                                !(events === null || events === void 0 ? void 0 : events.disablePointerEvents) &&
                                                ChartState.theme.crosshair.useCrosshair ? (_jsx(Crosshair, { subcharts: ChartState.subcharts, data: ChartState.data, containerSize: ChartState.containerSize, calcPointer: ChartState.calc.pointer, calcXaxis: ChartState.calc.xaxis, theme: ChartState.theme, pixToY: ChartState.calc.pixToY, rtTicks: rtTicks, calcSubcharts: ChartState.calc.subcharts }, void 0)) : null, _jsx(DrawTool, { subcharts: ChartState.subcharts, containerSize: ChartState.containerSize, draw: ChartState.draw, calc: ChartState.calc, drawTheme: ChartState.theme.draw }, void 0)] }), void 0)] }), void 0), _jsx(Box, { ref: (_j = props === null || props === void 0 ? void 0 : props.Controller) === null || _j === void 0 ? void 0 : _j.PointerContainerRef, sx: {
                                    width: "100%",
                                    height: "100%",
                                    background: "transparent",
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    touchAction: "none",
                                } }, void 0), _jsx(ChartLabels, { data: ChartState.data, subcharts: ChartState.subcharts, calcPointer: ChartState.calc.pointer, calcSubcharts: ChartState.calc.subcharts, onGraphLabelClick: handleChartLabelClick }, void 0), _jsx(ChartMenuButton, { bottomY: (_m = (_l = (_k = ChartState.subcharts) === null || _k === void 0 ? void 0 : _k[ChartState.subcharts.length - 1]) === null || _l === void 0 ? void 0 : _l.bottom) !== null && _m !== void 0 ? _m : 0, onOpenClick: handleRequestMenuOpen }, void 0), props.children, _jsx(CChartMenu, { ChartMenuState: ChartMenu2Open, onClose: handleRequestMenuClose, onNavigate: handleRequestMenuNavigation, subcharts: SizelessSubcharts.current, xaxis: ChartState.calc.xaxis, theme: ChartState.theme, fullscreen: ChartState.fullscreen, Dispatch: Dispatch, onSettingsExpand: handleToggleExpanded, settings: Settings.current, data: ChartState.data, events: events }, void 0)] }, void 0)) }), void 0) }), void 0)] }, void 0));
});
CChart.displayName = "CChart";
var templateObject_1;
//# sourceMappingURL=CChart.js.map