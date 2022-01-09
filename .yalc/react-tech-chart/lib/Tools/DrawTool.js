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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { isNullish } from "../utils/Basics";
import { defaultTools } from "./DefaultTools";
export var DrawTool = function (props) {
    var _a, _b, _c;
    var subcharts = props.subcharts, draw = props.draw, calc = props.calc, containerSize = props.containerSize, drawTheme = props.drawTheme;
    var calcPointer = calc.pointer, calcSubcharts = calc.subcharts, calcXaxis = calc.xaxis, yToPix = calc.yToPix, pixToY = calc.pixToY;
    var xToPix = calcXaxis.xToPix;
    var drawElementType = (draw.isDrawing && draw.type) || null;
    var drawElementModel = defaultTools.find(function (defTool) { return defTool.type === drawElementType; });
    var DrawTool = drawElementModel === null || drawElementModel === void 0 ? void 0 : drawElementModel.component;
    var additionalDrawToolProps = {};
    (_a = drawElementModel === null || drawElementModel === void 0 ? void 0 : drawElementModel.params) === null || _a === void 0 ? void 0 : _a.forEach(function (param) {
        additionalDrawToolProps[param.name] = param.val;
    });
    //   const calc = ChartState.calc;
    var pixYSnap = (_c = (_b = calcPointer === null || calcPointer === void 0 ? void 0 : calcPointer.move.snapDatasets) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.pixYSnap;
    var subchartIdx = calcPointer.move.subchartIdx;
    var drawPixXy = React.useMemo(function () {
        return !isNullish(subchartIdx)
            ? __spreadArray(__spreadArray([], draw.xy.map(function (xy) {
                return xToPix && yToPix ? [xToPix(xy[0]), yToPix(xy[1], subchartIdx, 0)] : xy;
            }), true), [
                [
                    calcPointer.move.x && xToPix ? xToPix === null || xToPix === void 0 ? void 0 : xToPix(calcPointer.move.x) : calcPointer.move.pixX,
                    pixYSnap ? pixYSnap : calcPointer.move.pixY,
                ],
            ], false) : [];
    }, [calcPointer.move.x, draw.xy, pixYSnap, calcPointer.move.pixX, calcPointer.move.pixY, subchartIdx, xToPix, yToPix]);
    return ((draw.isDrawing && DrawTool && !isNullish(subchartIdx) && (_jsx(DrawTool, __assign({ subcharts: subcharts, subchartIdx: subchartIdx, xy: draw.xy, drawPixXy: drawPixXy, containerSize: containerSize, calcXaxis: calcXaxis, calcSubcharts: calcSubcharts, yToPix: yToPix, pixToY: pixToY, style: drawTheme }, additionalDrawToolProps), void 0))) ||
        null);
};
//# sourceMappingURL=DrawTool.js.map