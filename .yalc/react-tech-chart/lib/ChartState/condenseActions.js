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
import { snapToolsByXy } from "./utils/Utils";
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
var getDragAction = function (PreState, 
// ChartMemo: T.ChartMemo,
ChartState) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var containerSize = PreState.containerSize, stateControl = PreState.stateControl, pointer = PreState.pointer;
    var interactiveUpdates = stateControl.shallUpdate;
    var canvasWidth = containerSize.width, containerHeight = containerSize.height;
    if ((_c = (_b = (_a = ChartState.calc) === null || _a === void 0 ? void 0 : _a.action) === null || _b === void 0 ? void 0 : _b.pointer) === null || _c === void 0 ? void 0 : _c.end)
        return null;
    var prevAction = (_d = ChartState === null || ChartState === void 0 ? void 0 : ChartState.calc) === null || _d === void 0 ? void 0 : _d.action;
    // const { prevAction } = ChartMemo;
    var isDrawing = ChartState.draw.isDrawing;
    var xaxis = ChartState.calc.xaxis;
    var xaxisHeight = ChartState.options.xaxis.heightXAxis;
    var prevDragAction = prevAction === null || prevAction === void 0 ? void 0 : prevAction.pointer;
    var canvasHeight = containerHeight - xaxisHeight;
    var isDragStart = pointer.drag.first;
    var isDragEnd = pointer.drag.last;
    var isDragging = pointer.drag.isDragging;
    // console.log("GET ACTION: State: ", ChartState?.calc?.action?.pointer);
    var shallUpdateDragAction = (!!((_f = (_e = pointer.drag) === null || _e === void 0 ? void 0 : _e.delta) === null || _f === void 0 ? void 0 : _f[0]) || !!((_h = (_g = pointer.drag) === null || _g === void 0 ? void 0 : _g.delta) === null || _h === void 0 ? void 0 : _h[1])) &&
        !((_j = pointer.drag) === null || _j === void 0 ? void 0 : _j.first) &&
        interactiveUpdates.includes("drag");
    var doContinuePrevAction = ["drawTool", "editTool", "resizeSubchart"].includes((_k = prevDragAction === null || prevDragAction === void 0 ? void 0 : prevDragAction.type) !== null && _k !== void 0 ? _k : "") ||
        (["translate", "scale"].includes((_l = prevDragAction === null || prevDragAction === void 0 ? void 0 : prevDragAction.type) !== null && _l !== void 0 ? _l : "") && !pointer.drag.last);
    if (doContinuePrevAction && prevDragAction)
        return __assign(__assign({}, prevDragAction), { shallUpdate: shallUpdateDragAction, start: false, end: isDragEnd });
    if (isDragging && isDrawing)
        return {
            type: "drawTool",
            start: true,
            end: false,
            shallUpdate: true,
        };
    if (isDragging && !isDrawing) {
        var dragInitXy = pointer.drag.initial;
        var resizeSubchartIdx = snapSubchartByBottom(dragInitXy, ChartState.subCharts);
        var isResizeSubchartAction = resizeSubchartIdx !== null && resizeSubchartIdx !== ChartState.subCharts.length - 1;
        if (isResizeSubchartAction)
            return {
                type: "resizeSubchart",
                start: isDragStart,
                end: isDragEnd,
                subchartIdx: resizeSubchartIdx,
                bottomInitY: ChartState.subCharts[resizeSubchartIdx].bottom,
                shallUpdate: true,
            };
        var selTools = snapToolsByXy(dragInitXy, ChartState.subCharts, xaxis, ChartState.calc); //only initially -> tool xy is changed by editing but dragInitXy isnt adjusted!
        if (selTools.length > 0) {
            var _m = selTools[0], subchartIdx = _m.subchartIdx, yaxisIdx = _m.yaxisIdx, toolIdx = _m.toolIdx, toolPtIdx = _m.toolPtIdx;
            var toolInitXy = ChartState.subCharts[subchartIdx].yaxis[yaxisIdx].tools[toolIdx].xy[toolPtIdx];
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
export var getAction = function (PreState, ChartMemo, ChartState, isRtOutOfRange) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var xaxis = ChartState.calc.xaxis;
    var stateControl = PreState.stateControl, pointer = PreState.pointer;
    var interactiveUpdates = stateControl.shallUpdate;
    var wheelDeltaY = (_a = pointer.wheel) === null || _a === void 0 ? void 0 : _a.delta[1];
    var isWheeling = !!((_b = pointer.wheel) === null || _b === void 0 ? void 0 : _b.isWheeling) && interactiveUpdates.includes("wheel") && !!wheelDeltaY;
    var wheel = isWheeling ? { wheelDeltaY: wheelDeltaY, type: "wheelScale" } : null;
    var prevAction = (_c = ChartState.calc) === null || _c === void 0 ? void 0 : _c.action;
    var pinch = ((_d = prevAction === null || prevAction === void 0 ? void 0 : prevAction.pointer) === null || _d === void 0 ? void 0 : _d.type) === "pinchScale" && PreState.pointer.pinch.isPinching
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
        active: interactiveUpdates.includes("containerResize") && ChartState.subCharts.length > 0,
    };
    var deps = interactiveUpdates.includes("deps");
    var shallUpdateCalcSubcharts = (["scale", "translate"].includes((_e = pointerAction === null || pointerAction === void 0 ? void 0 : pointerAction.type) !== null && _e !== void 0 ? _e : "") && ((_f = pointerAction) === null || _f === void 0 ? void 0 : _f.shallUpdate)) ||
        (pointerAction === null || pointerAction === void 0 ? void 0 : pointerAction.type) === "resizeSubchart" ||
        containerResize.active ||
        deps ||
        !!wheel;
    var shallUpdateXaxis = (_h = (!!wheel ||
        deps ||
        !!pinch ||
        (((_g = pointerAction) === null || _g === void 0 ? void 0 : _g.shallUpdate) &&
            (pointerAction.type === "translate" || pointerAction.type === "scale")))) !== null && _h !== void 0 ? _h : false;
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
//# sourceMappingURL=condenseActions.js.map