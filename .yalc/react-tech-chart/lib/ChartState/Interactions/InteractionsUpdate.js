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
import dequal from "lodash/isEqual";
import { calculatePointer } from "../Calc/CalcPointer";
import { calculateSubcharts, getYaxisMethods } from "../Calc/CalcSubcharts";
import { calculateXaxis } from "../Calc/CalcXaxis";
import { resizeContainer, resizeSubchart, editToolPosition, drawTool } from "./CalcInteractions";
import { snapToolsByXy } from "../utils/Utils";
export var interactionsUpdate = function (current, params) {
    var _a, _b, _c, _d, _e;
    var Interactions = params.Interactions, RtData = params.RtData;
    var isRtOutOfRange = RtData.isRtOutOfRange, rtData = RtData.rtData;
    var newState = current;
    var chartAction = getAction(Interactions, newState, isRtOutOfRange).action;
    // pre-calc updates
    if ((_a = chartAction === null || chartAction === void 0 ? void 0 : chartAction.containerResize) === null || _a === void 0 ? void 0 : _a.active)
        newState.subcharts = resizeContainer(Interactions.containerSize.height, newState);
    if (((_b = chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointer) === null || _b === void 0 ? void 0 : _b.type) === "resizeSubchart")
        newState.subcharts = resizeSubchart(chartAction, newState.subcharts, Interactions.pointer.drag);
    // calcs
    var calcXaxis = (chartAction === null || chartAction === void 0 ? void 0 : chartAction.shallUpdateXaxis)
        ? calculateXaxis(newState, Interactions, chartAction)
        : newState.calc.xaxis;
    var calcSubcharts = (chartAction === null || chartAction === void 0 ? void 0 : chartAction.shallUpdateCalcSubcharts) || chartAction.isRtOutOfRange
        ? calculateSubcharts(newState, calcXaxis, rtData)
        : newState.calc.subcharts;
    var yaxisMethods = ((chartAction === null || chartAction === void 0 ? void 0 : chartAction.shallUpdateCalcSubcharts) || chartAction.isRtOutOfRange) && calcSubcharts
        ? getYaxisMethods(newState.subcharts, calcSubcharts)
        : {};
    var calc = __assign(__assign(__assign({}, newState.calc), { xaxis: calcXaxis, subcharts: calcSubcharts }), yaxisMethods);
    var calcPointer = ((chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointerMove) && calculatePointer(newState, Interactions.pointer, calc)) || newState.calc.pointer;
    // post-calc-updates (wheeling is allowed during tool drawing or editing)
    newState.subcharts =
        ((_c = chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointer) === null || _c === void 0 ? void 0 : _c.type) === "editTool" && ((_d = chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointer) === null || _d === void 0 ? void 0 : _d.shallUpdate)
            ? editToolPosition(Interactions, calc, newState.subcharts, chartAction)
            : newState.subcharts;
    var _f = ((_e = chartAction === null || chartAction === void 0 ? void 0 : chartAction.pointer) === null || _e === void 0 ? void 0 : _e.type) === "drawTool"
        ? drawTool(Interactions, calc, newState)
        : { subcharts: newState.subcharts, draw: newState.draw }, finalizedSubcharts = _f.subcharts, draw = _f.draw;
    // only update containerSize if Interactions.containerSize values (ref!) has changed!
    var containerSize = !dequal(current.containerSize, Interactions.containerSize)
        ? { containerSize: Interactions.containerSize }
        : {};
    return __assign(__assign(__assign({}, current), containerSize), { subcharts: finalizedSubcharts, draw: draw, calc: __assign(__assign(__assign(__assign({}, current.calc), { xaxis: calcXaxis, subcharts: calcSubcharts, pointer: calcPointer }), yaxisMethods), { action: chartAction }) });
};
var snapSubchartByBottom = function (pixXy, subcharts, snapTolPix) {
    if (!pixXy)
        return null;
    var snapTolPixInt = snapTolPix !== null && snapTolPix !== void 0 ? snapTolPix : 10;
    var activeSubchart = subcharts.find(function (val) { return pixXy[1] >= val.bottom - snapTolPixInt && pixXy[1] < val.bottom + snapTolPixInt; });
    if (!activeSubchart)
        return null;
    var activeIdx = subcharts.indexOf(activeSubchart);
    if (activeIdx === -1)
        return null;
    return activeIdx;
};
var getDragAction = function (PreState, ChartState) {
    var _a, _b, _c, _d, _e, _f, _g;
    var containerSize = PreState.containerSize, stateControl = PreState.stateControl, pointer = PreState.pointer;
    var interactiveUpdates = stateControl.shallUpdate;
    var canvasWidth = containerSize.width, containerHeight = containerSize.height;
    var isDrawing = ChartState.draw.isDrawing;
    var _h = ChartState.calc, xaxis = _h.xaxis, prevAction = _h.action;
    var xaxisHeight = ChartState.theme.xaxis.heightXAxis;
    var prevDragAction = prevAction === null || prevAction === void 0 ? void 0 : prevAction.pointer;
    if ((prevDragAction === null || prevDragAction === void 0 ? void 0 : prevDragAction.type) === "pinchScale" || (prevDragAction === null || prevDragAction === void 0 ? void 0 : prevDragAction.end))
        return null;
    var canvasHeight = containerHeight - xaxisHeight;
    var _j = pointer.drag, isDragEnd = _j.last, isDragging = _j.isDragging, isDragStart = _j.first;
    var shallUpdateDragAction = (!!((_b = (_a = pointer.drag) === null || _a === void 0 ? void 0 : _a.delta) === null || _b === void 0 ? void 0 : _b[0]) || !!((_d = (_c = pointer.drag) === null || _c === void 0 ? void 0 : _c.delta) === null || _d === void 0 ? void 0 : _d[1])) &&
        !((_e = pointer.drag) === null || _e === void 0 ? void 0 : _e.first) &&
        interactiveUpdates.includes("drag");
    var doContinuePrevAction = ["drawTool", "editTool", "resizeSubchart"].includes((_f = prevDragAction === null || prevDragAction === void 0 ? void 0 : prevDragAction.type) !== null && _f !== void 0 ? _f : "") ||
        (["translate", "scale"].includes((_g = prevDragAction === null || prevDragAction === void 0 ? void 0 : prevDragAction.type) !== null && _g !== void 0 ? _g : "") && !pointer.drag.last);
    if (doContinuePrevAction && prevDragAction)
        return __assign(__assign({}, prevDragAction), { shallUpdate: shallUpdateDragAction, start: false, end: isDragEnd });
    if (isDragging && isDrawing)
        return { type: "drawTool", start: true, end: false, shallUpdate: true };
    if (isDragging && !isDrawing) {
        var dragInitXy = pointer.drag.initial;
        var resizeSubchartIdx = snapSubchartByBottom(dragInitXy, ChartState.subcharts);
        var isResizeSubchartAction = resizeSubchartIdx !== null && resizeSubchartIdx !== ChartState.subcharts.length - 1;
        if (isResizeSubchartAction)
            return {
                type: "resizeSubchart",
                start: isDragStart,
                end: isDragEnd,
                subchartIdx: resizeSubchartIdx,
                bottomInitY: ChartState.subcharts[resizeSubchartIdx].bottom,
                shallUpdate: true,
            };
        var selTools = snapToolsByXy(dragInitXy, ChartState.subcharts, xaxis, ChartState.calc); //only initially -> tool xy is changed by editing but dragInitXy isnt adjusted!
        if (selTools.length > 0) {
            var _k = selTools[0], subchartIdx = _k.subchartIdx, yaxisIdx = _k.yaxisIdx, toolIdx = _k.toolIdx, toolPtIdx = _k.toolPtIdx;
            var toolInitXy = ChartState.subcharts[subchartIdx].yaxis[yaxisIdx].tools[toolIdx].xy[toolPtIdx];
            return {
                type: "editTool",
                start: isDragStart,
                end: isDragEnd,
                subchartIdx: subchartIdx,
                yaxisIdx: yaxisIdx,
                toolIdx: toolIdx,
                toolPtIdx: toolPtIdx,
                toolInitXy: toolInitXy,
                shallUpdate: true,
            };
        }
        var isTranslateAction = dragInitXy[0] >= 0 && dragInitXy[0] < 0 + canvasWidth && dragInitXy[1] >= 0 && dragInitXy[1] < 0 + canvasHeight;
        if (isTranslateAction)
            return {
                type: "translate",
                start: isDragStart,
                end: isDragEnd,
                shallUpdate: true,
            };
        var isPointerScaleAction = dragInitXy[0] >= 0 && dragInitXy[0] < 0 + canvasWidth && dragInitXy[1] >= 0 + canvasHeight;
        if (isPointerScaleAction) {
            return {
                type: "scale",
                start: isDragStart,
                end: isDragEnd,
                initScaledWidthPerTick: xaxis.scaledWidthPerTick,
                initTranslatedX: xaxis.totalTranslatedX,
                shallUpdate: true,
            };
        }
        return null;
    }
    return null;
};
var getAction = function (PreState, ChartState, isRtOutOfRange) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = ChartState.calc, xaxis = _h.xaxis, prevAction = _h.action;
    var stateControl = PreState.stateControl, pointer = PreState.pointer;
    var interactiveUpdates = stateControl.shallUpdate;
    var wheelDeltaY = (_a = pointer.wheel) === null || _a === void 0 ? void 0 : _a.delta[1];
    var isWheeling = !!((_b = pointer.wheel) === null || _b === void 0 ? void 0 : _b.isWheeling) && interactiveUpdates.includes("wheel") && !!wheelDeltaY;
    var wheel = isWheeling ? { wheelDeltaY: wheelDeltaY, type: "wheelScale" } : null;
    var pinch = ((_c = prevAction === null || prevAction === void 0 ? void 0 : prevAction.pointer) === null || _c === void 0 ? void 0 : _c.type) === "pinchScale" && PreState.pointer.pinch.isPinching
        ? prevAction.pointer
        : interactiveUpdates.includes("pinch") && PreState.pointer.pinch.isPinching
            ? {
                type: "pinchScale",
                initScaledWidthPerTick: xaxis.scaledWidthPerTick,
                initTranslatedX: xaxis.totalTranslatedX,
            }
            : null;
    var pointerAction = pinch ? pinch : getDragAction(PreState, ChartState);
    var containerResize = {
        active: interactiveUpdates.includes("containerResize"), //&& ChartState.subcharts.length > 0,
    };
    var deps = interactiveUpdates.includes("deps");
    var shallUpdateCalcSubcharts = (["scale", "translate"].includes((_d = pointerAction === null || pointerAction === void 0 ? void 0 : pointerAction.type) !== null && _d !== void 0 ? _d : "") && ((_e = pointerAction) === null || _e === void 0 ? void 0 : _e.shallUpdate)) ||
        (pointerAction === null || pointerAction === void 0 ? void 0 : pointerAction.type) === "resizeSubchart" ||
        containerResize.active ||
        deps ||
        !!pinch ||
        !!wheel;
    var shallUpdateXaxis = (_g = (!!wheel ||
        deps ||
        !!pinch ||
        (((_f = pointerAction) === null || _f === void 0 ? void 0 : _f.shallUpdate) &&
            ((pointerAction === null || pointerAction === void 0 ? void 0 : pointerAction.type) === "translate" || (pointerAction === null || pointerAction === void 0 ? void 0 : pointerAction.type) === "scale")))) !== null && _g !== void 0 ? _g : false;
    var action = {
        pointer: pointerAction,
        wheel: wheel,
        containerResize: containerResize,
        deps: deps,
        shallUpdateCalcSubcharts: shallUpdateCalcSubcharts,
        shallUpdateXaxis: shallUpdateXaxis,
        pointerMove: stateControl.shallUpdate.includes("pointerMove"),
        isRtOutOfRange: isRtOutOfRange,
    };
    return {
        action: action,
    };
};
//# sourceMappingURL=InteractionsUpdate.js.map