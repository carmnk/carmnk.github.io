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
import dequal from "lodash/isEqual";
import { Circle, Line } from "react-konva";
import { mdiSetLeft } from "@mdi/js";
export var CTrendlineComponent = function (props) {
    var style = props.style, mode = props.mode, subcharts = props.subcharts, subchartIdx = props.subchartIdx, calcXaxis = props.calcXaxis, toolXy = props.xy, drawPixXy = props.drawPixXy, yToPixGen = props.yToPix;
    // const { xaxis } = calc;
    var _a = subcharts[subchartIdx], subchartBottom = _a.bottom, subchartTop = _a.top;
    if ((toolXy.length !== 2 && (drawPixXy === null || drawPixXy === void 0 ? void 0 : drawPixXy.length) !== 2) || !yToPixGen || !calcXaxis.xToPix)
        return null;
    var xToPix = calcXaxis.xToPix;
    var yToPix = function (y) { return yToPixGen(y, subchartIdx, 0); };
    var PixXy = toolXy.length === 2
        ? toolXy.map(function (xy) { return [xToPix(xy[0]), yToPix(xy[1])]; })
        : (drawPixXy === null || drawPixXy === void 0 ? void 0 : drawPixXy.length) === 2
            ? drawPixXy
            : null;
    if (!PixXy || PixXy.length !== 2)
        return null;
    var strokeColor = (style === null || style === void 0 ? void 0 : style.strokeColor) ? style.strokeColor : "red";
    var anchorColor = (style === null || style === void 0 ? void 0 : style.anchorColor) ? style.anchorColor : "#333";
    var modeInt = ["line", "trendline", "infiniteLine"].includes(mode !== null && mode !== void 0 ? mode : "") ? mode : "trendline";
    var sortedPixXy = PixXy[0][0] > PixXy[1][0] ? [PixXy[1], PixXy[0]] : PixXy;
    var adjustedPixXy = [__spreadArray([], sortedPixXy[0], true), __spreadArray([], sortedPixXy[1], true)];
    if ((modeInt === "trendline" || mode === "infiniteLine") && !dequal(adjustedPixXy[0], adjustedPixXy[1])) {
        var dx = adjustedPixXy[1][0] - adjustedPixXy[0][0];
        var dy = adjustedPixXy[1][1] - adjustedPixXy[0][1];
        var slope = dy / dx;
        var pixYTarget = dy < 0 ? subchartTop : subchartBottom;
        var b = adjustedPixXy[0][1] - slope * adjustedPixXy[0][0];
        var pixXTarget = (pixYTarget - b) / slope;
        adjustedPixXy[1][0] = pixXTarget;
        adjustedPixXy[1][1] = pixYTarget;
        if (mode === "infiniteLine") {
            var pixYSrc = dy < 0 ? subchartBottom : subchartTop;
            var pixXSrc = (pixYSrc - b) / slope;
            adjustedPixXy[0][0] = pixXSrc;
            adjustedPixXy[0][1] = pixYSrc;
        }
    }
    return (_jsxs(React.Fragment, { children: [_jsx(Line, { listening: false, draggable: false, x: 0, y: 0, points: adjustedPixXy.flat(), stroke: strokeColor, strokeWidth: 1 }, void 0), _jsx(Circle, { x: sortedPixXy[0][0], y: sortedPixXy[0][1], radius: 5, fill: anchorColor }, void 0), _jsx(Circle, { x: sortedPixXy[1][0], y: sortedPixXy[1][1], radius: 5, fill: anchorColor }, void 0)] }, void 0));
};
export var CTrendline = React.memo(CTrendlineComponent);
export var TrendLine = {
    name: "Trendline",
    type: "trendline",
    nPoints: 2,
    category: "lines",
    params: [{ name: "mode", val: "trendline", vals: ["line", "trendline", "infiniteLine"], type: "select" }],
    default: { params: [{ icon: mdiSetLeft }] },
    component: CTrendline,
};
export default TrendLine;
//# sourceMappingURL=Trendline.js.map