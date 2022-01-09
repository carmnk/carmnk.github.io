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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import deepEqual from "lodash/isEqual";
import { defaultTools } from "../../Tools";
import { updateChartDataAndDeps, updateIndicatorData } from "./DataFactory";
import { addSubchart, removeSubchart, addGraph, removeGraph, addInitialData, clearChart } from "./Factory";
import { swapSubcharts } from "./SubchartFactory";
import { getStateProp, removeStateProp, setStateProp } from "../../utils/React";
import { isNullish } from "../../utils/Basics";
import * as defaults from "../Defaults";
import * as T from "../../Types";
import { resizeSubchart, resizeContainer, editToolPosition, drawTool } from "../Interactions";
import { calculateXaxis } from "../Calc/CalcXaxis";
import { calculateSubcharts, getYaxisMethods } from "../Calc/CalcSubcharts";
import { calculateCurrentPointerDataset } from "../Calc/CalcPointer";
import { getAction } from "../condenseActions";
var generalProps = [
    { prop: "backgroundColor", path: ["style", "backgroundColor"] },
    { prop: "crosshairStrokeColor", path: ["style", "crosshair", "strokeColor"] },
    { prop: "crosshairXmarkerBackgroundColor", path: ["style", "crosshair", "xMarkerBackgroundColor"] },
    { prop: "crosshairXmarkerStrokeColor", path: ["style", "crosshair", "xMarkerStrokeColor"] },
    { prop: "crosshairXmarkerTextColor", path: ["style", "crosshair", "xMarkerTextColor"] },
    { prop: "crosshairYmarkerBackgroundColor", path: ["style", "crosshair", "yMarkerBackgroundColor"] },
    { prop: "crosshairYmarkerStrokeColor", path: ["style", "crosshair", "yMarkerStrokeColor"] },
    { prop: "crosshairYmarkerTextColor", path: ["style", "crosshair", "yMarkerTextColor"] },
    { prop: "gridStrokeColor", path: ["style", "grid", "strokeColor"] },
    { prop: "toggleCrosshair", path: ["style", "crosshair", "useCrosshair"], toggle: true },
    { prop: "toggleFullscreen", path: ["fullscreen"], toggle: true },
    { prop: "toggleGridX", path: ["style", "grid", "useGridX"], toggle: true },
    { prop: "toggleGridY", path: ["style", "grid", "useGridY"], toggle: true },
    { prop: "xAxisFillColor", path: ["style", "xaxis", "fillColor"] },
    { prop: "xAxisStrokeColor", path: ["style", "xaxis", "strokeColor"] },
    { prop: "xAxisTextColor", path: ["style", "xaxis", "fontColor"] },
    { prop: "yAxisStrokeColor", path: ["style", "yaxis", "strokeColor"] },
    { prop: "yAxisTextColor", path: ["style", "yaxis", "fontColor"] },
];
export var chartStateReducer = function (current, action) {
    var _a, _b, _c, _d, _e;
    if (T.isModifyIndicatorDataAction(action)) {
        var _f = action.params, dataId_1 = _f.dataId, newIndSrcId = _f.newIndSrcId, newParam_1 = _f.newParam, prevData = _f.prevData;
        var dataGraph = current.data.find(function (dat) { return dat.id === dataId_1; });
        if ((dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.type) !== "indicator")
            return current;
        var newParams = newParam_1 &&
            dataGraph.indicator.params.map(function (param, pIdx) {
                return pIdx !== (newParam_1 === null || newParam_1 === void 0 ? void 0 : newParam_1.paramIdx) ? param : __assign(__assign({}, param), { val: newParam_1.newValue });
            });
        return __assign(__assign({}, current), { data: updateIndicatorData(current, dataId_1, { newParams: newParams, newIndSrcId: newIndSrcId }, prevData) });
    }
    if (T.isModifyChartDataAction(action)) {
        var _g = action.params, dataId = _g.dataId, newDatasets = _g.newDatasets;
        return updateChartDataAndDeps(current, dataId, newDatasets);
    }
    if (T.isSetToolPropAction(action)) {
        var _h = action.params, newValue = _h.newValue, prop = _h.prop, subchartIdx = _h.subchartIdx, yaxisIdx = _h.yaxisIdx, toolIdx = _h.toolIdx, toolParamIdx = _h.toolParamIdx;
        var tool = current.subCharts[subchartIdx].yaxis[yaxisIdx].tools[toolIdx];
        return prop === "strokeColor" || prop === "anchorColor"
            ? setStateProp(current, ["subCharts", subchartIdx, "yaxis", yaxisIdx, "tools", toolIdx, "style", prop], newValue)
            : prop === "hLineYlevel"
                ? setStateProp(current, ["subCharts", subchartIdx, "yaxis", yaxisIdx, "tools", toolIdx, "xy"], [[tool.xy[0][0], newValue]])
                : prop === "toolParam" && !isNullish(toolParamIdx)
                    ? setStateProp(current, ["subCharts", subchartIdx, "yaxis", yaxisIdx, "tools", toolIdx, "params", toolParamIdx, "val"], newValue)
                    : current;
    }
    else if (T.isSetGraphPropAction(action)) {
        var _j = action.params, newValue = _j.newValue, prop = _j.prop, subchartIdx = _j.subchartIdx, yaxisIdx = _j.yaxisIdx, graphIdx = _j.graphIdx;
        return ["strokeColor", "candleDownColor", "candleUpColor", "candleStrokeColor", "candleWickStrokeColor"].includes(prop)
            ? setStateProp(current, ["subCharts", subchartIdx, "yaxis", yaxisIdx, "graphs", graphIdx, "style", prop], newValue)
            : prop === "chartType" && (newValue === "line" || newValue === "candles")
                ? setStateProp(current, ["subCharts", subchartIdx, "yaxis", yaxisIdx, "graphs", graphIdx, "chartType"], newValue)
                : prop === "dataId"
                    ? setStateProp(current, ["subCharts", subchartIdx, "yaxis", yaxisIdx, "graphs", graphIdx, "dataId"], newValue)
                    : current;
    }
    else if (T.isSetGeneralPropAction(action)) {
        var _k = action.params, newValueIn = _k.newValue, prop_1 = _k.prop;
        var gprop = generalProps === null || generalProps === void 0 ? void 0 : generalProps.find(function (gprop) { return gprop.prop === prop_1; });
        if (!gprop)
            return current;
        var path = gprop.path, toggle = gprop.toggle;
        var newValue = toggle ? !getStateProp(current, path) : newValueIn;
        return setStateProp(current, path, newValue);
    }
    else if (T.isAddDataAction(action)) {
        return addInitialData(current, action.params);
    }
    else if (T.isAddSubchartAction(action)) {
        return addSubchart(current, action.params);
    }
    else if (T.isRemoveSubchartAction(action)) {
        return removeSubchart(current, action.params);
    }
    else if (T.isAddGraphAction(action)) {
        return addGraph(current, action.params);
    }
    else if (T.isRemoveGraphAction(action)) {
        return removeGraph(current, action.params);
    }
    else if (T.isSwapSubchartsAction(action)) {
        return swapSubcharts(current, action.params);
    }
    else if (T.isRemoveToolAction(action)) {
        var _l = action.params, subchartIdx = _l.subchartIdx, yaxisIdx = _l.yaxisIdx, toolIdx = _l.toolIdx;
        return removeStateProp(current, ["subCharts", subchartIdx, "yaxis", yaxisIdx, "tools", toolIdx]);
    }
    else if (T.isClearChartAction(action)) {
        return clearChart(current, action.params);
    }
    else if (T.isSetThemeAction(action)) {
        var theme = action.params.theme;
        var name_1 = theme.name, style = __rest(theme, ["name"]);
        var baseTheme = style.isDarkMode ? defaults.defaultDarkTheme : defaults.defaultLightTheme;
        return __assign(__assign({}, current), { options: __assign(__assign(__assign({}, baseTheme), style), { crosshair: __assign(__assign({}, baseTheme.crosshair), style.crosshair), draw: __assign(__assign({}, baseTheme.draw), style.draw), grid: __assign(__assign({}, baseTheme.grid), style.grid), xaxis: __assign(__assign({}, baseTheme.xaxis), style.xaxis), yaxis: __assign(__assign({}, baseTheme.yaxis), style.yaxis) }) });
    }
    else if (T.isDrawAction(action)) {
        var xy = action.params.xy;
        var nPoints = (_a = defaultTools.find(function (tool) { return tool.type === action.params.type; })) === null || _a === void 0 ? void 0 : _a.nPoints;
        if (!nPoints || !action.params.type) {
            return __assign(__assign({}, current), { draw: defaults.defaultDrawState });
        }
        // init draw command -> switch to draw mode
        else if (!xy && !!action.params.type) {
            return __assign(__assign({}, current), { draw: __assign(__assign({}, current.draw), { isDrawing: true, xy: [], type: action.params.type }) });
        }
        return current;
    }
    else if (T.isUpdateInteractionState2(action)) {
        var _m = action.params, Interactions = _m.Interactions, Memo = _m.Memo, RtData = _m.RtData;
        var isRtOutOfRange = RtData.isRtOutOfRange, rtData = RtData.rtData;
        var subcharts = current.subCharts;
        var chartAction = getAction(Interactions, Memo, current, isRtOutOfRange).action;
        // pre-calc updates
        if (chartAction.containerResize.active)
            subcharts = resizeContainer(Interactions.containerSize.height, current);
        if (((_b = chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointer) === null || _b === void 0 ? void 0 : _b.type) === "resizeSubchart")
            subcharts = resizeSubchart(chartAction, subcharts, Interactions.pointer.drag);
        // calcs
        var calcXaxis = (chartAction === null || chartAction === void 0 ? void 0 : chartAction.shallUpdateXaxis)
            ? calculateXaxis(current, Interactions, chartAction)
            : current.calc.xaxis;
        var calcSubcharts = (chartAction === null || chartAction === void 0 ? void 0 : chartAction.shallUpdateCalcSubcharts) || chartAction.isRtOutOfRange
            ? calculateSubcharts(current, calcXaxis, rtData)
            : current.calc.subcharts;
        var yaxisMethods = (chartAction === null || chartAction === void 0 ? void 0 : chartAction.shallUpdateCalcSubcharts) || chartAction.isRtOutOfRange
            ? getYaxisMethods(subcharts, calcSubcharts)
            : {};
        var calc = __assign(__assign(__assign({}, current.calc), { xaxis: calcXaxis, subcharts: calcSubcharts }), yaxisMethods);
        var calcPointer = (chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointerMove)
            ? calculateCurrentPointerDataset(current, Interactions.pointer, calc)
            : current.calc.pointer;
        // post-calc-updates (wheeling is allowed during tool drawing or editing)
        subcharts =
            ((_c = chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointer) === null || _c === void 0 ? void 0 : _c.type) === "editTool" && ((_d = chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointer) === null || _d === void 0 ? void 0 : _d.shallUpdate)
                ? editToolPosition(Interactions, calc, subcharts, chartAction)
                : subcharts;
        var _o = ((_e = chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointer) === null || _e === void 0 ? void 0 : _e.type) === "drawTool"
            ? drawTool(Interactions, calc, current)
            : { subcharts: subcharts, draw: current.draw }, finalizedSubcharts = _o.subcharts, draw = _o.draw;
        // only update containerSize if Interactions.containerSize values (ref!) has changed!
        var containerSize = !deepEqual(current.containerSize, Interactions.containerSize)
            ? { containerSize: Interactions.containerSize }
            : {};
        return __assign(__assign(__assign({}, current), containerSize), { subCharts: finalizedSubcharts, draw: draw, calc: __assign(__assign(__assign(__assign({}, current.calc), { xaxis: calcXaxis, subcharts: calcSubcharts, pointer: calcPointer }), yaxisMethods), { action: chartAction }) });
    }
    return current;
};
//# sourceMappingURL=Reducer.js.map