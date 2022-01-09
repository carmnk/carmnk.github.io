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
import { updateIndicatorData } from "./Factory/IndicatorDataFactory";
import { addSubchart, removeSubchart, addGraph, removeGraph, initData, clearChart } from "./Factory/Factory";
import { modifyGraphProp, modifyToolProp, removeTool, swapSubcharts } from "./Factory/SubchartFactory";
import { updateChartDataAndDeps } from "./Factory/ChartDataFactory";
import { startDrawing } from "./Interactions/CalcInteractions";
import { interactionsUpdate } from "./Interactions/InteractionsUpdate";
import { getStateProp, setStateProp } from "../utils/React";
import * as defaults from "./Defaults";
import * as T from "../Types";
var generalProps = [
    { prop: "backgroundColor", path: ["theme", "backgroundColor"] },
    { prop: "crosshairStrokeColor", path: ["theme", "crosshair", "strokeColor"] },
    { prop: "crosshairXmarkerBackgroundColor", path: ["theme", "crosshair", "xMarkerBackgroundColor"] },
    { prop: "crosshairXmarkerStrokeColor", path: ["theme", "crosshair", "xMarkerStrokeColor"] },
    { prop: "crosshairXmarkerTextColor", path: ["theme", "crosshair", "xMarkerTextColor"] },
    { prop: "crosshairYmarkerBackgroundColor", path: ["theme", "crosshair", "yMarkerBackgroundColor"] },
    { prop: "crosshairYmarkerStrokeColor", path: ["theme", "crosshair", "yMarkerStrokeColor"] },
    { prop: "crosshairYmarkerTextColor", path: ["theme", "crosshair", "yMarkerTextColor"] },
    { prop: "gridStrokeColor", path: ["theme", "grid", "strokeColor"] },
    { prop: "toggleCrosshair", path: ["theme", "crosshair", "useCrosshair"], toggle: true },
    { prop: "toggleFullscreen", path: ["fullscreen"], toggle: true },
    { prop: "toggleGridX", path: ["theme", "grid", "useGridX"], toggle: true },
    { prop: "toggleGridY", path: ["theme", "grid", "useGridY"], toggle: true },
    { prop: "xAxisFillColor", path: ["theme", "xaxis", "fillColor"] },
    { prop: "xAxisStrokeColor", path: ["theme", "xaxis", "strokeColor"] },
    { prop: "xAxisTextColor", path: ["theme", "xaxis", "fontColor"] },
    { prop: "yAxisStrokeColor", path: ["theme", "yaxis", "strokeColor"] },
    { prop: "yAxisTextColor", path: ["theme", "yaxis", "fontColor"] },
];
var setGeneralProp = function (current, params) {
    var newValueIn = params.newValue, prop = params.prop;
    var gprop = generalProps === null || generalProps === void 0 ? void 0 : generalProps.find(function (gprop) { return gprop.prop === prop; });
    if (!gprop)
        return current;
    var path = gprop.path, toggle = gprop.toggle;
    var newValue = toggle ? !getStateProp(current, path) : newValueIn;
    return setStateProp(current, path, newValue);
};
var setTheme = function (current, params) {
    var theme = params.theme;
    var name = theme.name, namelessTheme = __rest(theme, ["name"]);
    var baseTheme = namelessTheme.isDarkMode ? defaults.defaultDarkTheme : defaults.defaultLightTheme;
    return __assign(__assign({}, current), { theme: __assign(__assign(__assign({}, baseTheme), namelessTheme), { crosshair: __assign(__assign({}, baseTheme.crosshair), namelessTheme.crosshair), draw: __assign(__assign({}, baseTheme.draw), namelessTheme.draw), grid: __assign(__assign({}, baseTheme.grid), namelessTheme.grid), xaxis: __assign(__assign({}, baseTheme.xaxis), namelessTheme.xaxis), yaxis: __assign(__assign({}, baseTheme.yaxis), namelessTheme.yaxis) }) });
};
var setPointerEventsIntern = function (current, disablePointerEvents) {
    return __assign(__assign({}, current), { menu: __assign(__assign({}, current.menu), { disablePointerEvents: disablePointerEvents }) });
};
export var chartStateReducer = function (current, action) {
    // general
    if (T.isSetGeneralPropAction(action)) {
        return setGeneralProp(current, action.params);
    }
    else if (T.isClearChartAction(action)) {
        return clearChart(current, action.params);
    }
    else if (T.isSetThemeAction(action)) {
        return setTheme(current, action.params);
    }
    // data
    else if (T.isModifyIndicatorDataAction(action)) {
        return __assign(__assign({}, current), { data: updateIndicatorData(current, action.params) });
    }
    else if (T.isModifyChartDataAction(action)) {
        return updateChartDataAndDeps(current, action.params.dataId, action.params.newDatasets);
    }
    else if (T.isInitDataAction(action)) {
        return initData(current, action.params);
    }
    // subcharts
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
    else if (T.isSetToolPropAction(action)) {
        return modifyToolProp(current, action.params);
    }
    else if (T.isSetGraphPropAction(action)) {
        return modifyGraphProp(current, action.params);
    }
    else if (T.isSwapSubchartsAction(action)) {
        return swapSubcharts(current, action.params);
    }
    else if (T.isRemoveToolAction(action)) {
        return removeTool(current, action.params);
    }
    // interactions
    else if (T.isStartDrawingAction(action)) {
        return startDrawing(current, action.params);
    }
    else if (T.isUpdateInteractionState(action)) {
        return interactionsUpdate(current, action.params);
    }
    else if (T.isSetPointerEvents(action)) {
        return setPointerEventsIntern(current, action.params.disablePointerEvents);
    }
    return current;
};
//# sourceMappingURL=Reducer.js.map