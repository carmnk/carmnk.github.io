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
import { resizeSubcharts } from "./Reducer/SubchartFactory";
import { setStateProp, addStateProp } from "../utils/React";
import { defaultTools } from "../Tools/DefaultTools";
import { getSubchartIdxByPixXy, purePixToX, purePixToY } from "./utils/Utils";
import { defaultDrawState } from "./Defaults";
import { isNullish } from "../utils/Basics";
export var resizeContainer = function (newContainerHeight, ChartState) {
    var subcharts = ChartState.subCharts, options = ChartState.options;
    var newCanvasHeight = newContainerHeight - 1 - options.xaxis.heightXAxis;
    return resizeSubcharts({
        subchartsHeight: newCanvasHeight,
        subCharts: subcharts,
    });
};
export var resizeSubchart = function (action, subcharts, drag) {
    var _a;
    if (((_a = action === null || action === void 0 ? void 0 : action.pointer) === null || _a === void 0 ? void 0 : _a.type) !== "resizeSubchart")
        return subcharts;
    var dragAction = action.pointer;
    var subchartIdx = dragAction.subchartIdx;
    var newBottom = Math.min(Math.max(dragAction.bottomInitY + drag.movementInitial[1], subcharts[subchartIdx].top + 10, subchartIdx === 0 ? 50 : 0), subcharts[subchartIdx + 1].bottom - 10);
    var deltaBottom = newBottom - dragAction.bottomInitY;
    var result = !drag.ctrlKey || subchartIdx === 0
        ? __spreadArray(__spreadArray(__spreadArray([], subcharts.slice(0, subchartIdx), true), [
            __assign(__assign({}, subcharts[subchartIdx]), { bottom: newBottom }),
            __assign(__assign({}, subcharts[subchartIdx + 1]), { top: newBottom })
        ], false), subcharts.slice(subchartIdx + 2), true) : __spreadArray(__spreadArray(__spreadArray([], subcharts
        .slice(0, subchartIdx)
        .map(function (sub, sIdx) { return (__assign(__assign({}, sub), { bottom: sub.bottom + deltaBottom })); })
        .map(function (sub, sIdx, arr) { return (sIdx === 0 ? sub : __assign(__assign({}, sub), { top: arr[sIdx - 1].bottom })); }), true), [
        __assign(__assign({}, subcharts[subchartIdx]), { bottom: newBottom, top: subcharts[subchartIdx].top + deltaBottom }),
        __assign(__assign({}, subcharts[subchartIdx + 1]), { top: newBottom })
    ], false), subcharts.slice(subchartIdx + 2), true);
    return result;
};
export var editToolPosition = function (Interactions, calc, subcharts, action) {
    var _a, _b, _c;
    var pointer = Interactions.pointer;
    if (((_a = action === null || action === void 0 ? void 0 : action.pointer) === null || _a === void 0 ? void 0 : _a.type) !== "editTool")
        return subcharts;
    var actionDrag = action === null || action === void 0 ? void 0 : action.pointer;
    var subchartIdx = actionDrag.subchartIdx, yaxisIdx = actionDrag.yaxisIdx;
    var subchart = subcharts[subchartIdx];
    var calcSubcharts = calc.subcharts, calcPointer = calc.pointer;
    var calcYaxis = calcSubcharts[subchartIdx].yaxis[yaxisIdx];
    var hasSnappedY = calcPointer.move.snapDatasets.length > 0 && !!calcPointer.move.snapDatasets[0].ySnap;
    var newX = (_b = calcPointer.move.x) !== null && _b !== void 0 ? _b : calcPointer.move.xUnlimited;
    var newY = hasSnappedY
        ? parseFloat((_c = calcPointer.move.snapDatasets[0].ySnap) !== null && _c !== void 0 ? _c : "")
        : purePixToY(pointer.drag.xy[1], subchart.bottom, calcYaxis.decimals, calcYaxis.translatedY, calcYaxis.heightPerPt);
    var toolIdx = actionDrag.toolIdx, toolPtIdx = actionDrag.toolPtIdx;
    return setStateProp(subcharts, [subchartIdx, "yaxis", yaxisIdx, "tools", toolIdx, "xy", toolPtIdx], [newX, newY]);
};
var addToolAnchor = function (drawToolType, draw, xy) {
    if (!drawToolType || !draw || !xy)
        return defaultDrawState;
    return __assign(__assign({}, draw), { xy: __spreadArray(__spreadArray([], draw.xy, true), [xy], false) });
};
var addTool = function (subcharts, subchartIdx, draw, style) {
    var _a, _b;
    var xy = draw.xy;
    var params = (_b = (_a = defaultTools.find(function (val) { return val.type === draw.type; })) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : [];
    return addStateProp(subcharts, [subchartIdx, "yaxis", 0, "tools"], {
        xy: xy,
        type: draw.type,
        style: style.draw,
        params: params,
    });
};
export var drawTool = function (Interactions, calc, ChartState) {
    var _a, _b;
    var DragEndState = Interactions.pointer.dragPointerUp;
    var draw = ChartState.draw, options = ChartState.options, subcharts = ChartState.subCharts;
    if (!DragEndState.isDragPointerUp)
        return { subcharts: subcharts, draw: draw };
    var pointer = Interactions.pointer;
    var drawElementType = draw.type;
    var calcSubcharts = calc.subcharts, calcPointer = calc.pointer, xaxis = calc.xaxis;
    var nPoints = (_a = defaultTools.find(function (tool) { return tool.type === drawElementType; })) === null || _a === void 0 ? void 0 : _a.nPoints;
    var subchartIdx = getSubchartIdxByPixXy(pointer.drag.initial, subcharts);
    if (!drawElementType || !nPoints || isNullish(subchartIdx))
        return { draw: defaultDrawState, subcharts: subcharts };
    var subchart = calcSubcharts === null || calcSubcharts === void 0 ? void 0 : calcSubcharts[subchartIdx];
    var yaxis = (_b = subchart === null || subchart === void 0 ? void 0 : subchart.yaxis) === null || _b === void 0 ? void 0 : _b[0];
    if (!subchart || !yaxis)
        return { draw: defaultDrawState, subcharts: subcharts };
    var pixX = calcPointer.move.pixXSnap ? calcPointer.move.pixXSnap : pointer.drag.xy[0];
    var pixY = calcPointer.move.snapDatasets.length > 0 && !!calcPointer.move.snapDatasets[0].pixYSnap
        ? calcPointer.move.snapDatasets[0].pixYSnap
        : pointer.drag.xy[1]; //not better move?
    var x = purePixToX(pixX, xaxis.totalTranslatedX, xaxis.scaledWidthPerTick);
    var decimals = yaxis.decimals, translatedY = yaxis.translatedY, heightPerPt = yaxis.heightPerPt;
    var y = purePixToY(pixY, subcharts[subchartIdx].bottom, decimals, translatedY, heightPerPt);
    var nDrawnPoint = draw.xy.length;
    return nDrawnPoint < nPoints - 1
        ? { draw: addToolAnchor(draw.type, draw, [x, y]), subcharts: subcharts }
        : {
            draw: defaultDrawState,
            subcharts: addTool(subcharts, subchartIdx, addToolAnchor(draw.type, draw, [x, y]), options),
        };
};
//# sourceMappingURL=Interactions.js.map