import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Line, Circle } from "react-konva";
import { mdiSetLeft } from "@mdi/js";
var CHLineComponent = function (props) {
    var style = props.style, subcharts = props.subcharts, subchartIdx = props.subchartIdx, containerSize = props.containerSize, calcXaxis = props.calcXaxis, mode = props.mode, toolXy = props.xy, drawPixXy = props.drawPixXy, yToPix = props.yToPix;
    var startPixX = containerSize.left, width = containerSize.width;
    var endPixX = startPixX + width;
    var _a = subcharts[subchartIdx], bottom = _a.bottom, top = _a.top;
    var isDrawing = !!(drawPixXy === null || drawPixXy === void 0 ? void 0 : drawPixXy[0]);
    if ((toolXy.length !== 1 && !isDrawing) || !yToPix || !calcXaxis.xToPix)
        return null;
    var PixXy = toolXy.length === 1
        ? [calcXaxis.xToPix(toolXy[0][0]), yToPix(toolXy[0][1], subchartIdx, 0)] // multiple yaxis
        : (drawPixXy === null || drawPixXy === void 0 ? void 0 : drawPixXy[0])
            ? drawPixXy[0]
            : null;
    if (!PixXy)
        return null;
    if ((PixXy === null || PixXy === void 0 ? void 0 : PixXy[1]) < top || (PixXy === null || PixXy === void 0 ? void 0 : PixXy[1]) > bottom)
        return null;
    var strokeColor = (style === null || style === void 0 ? void 0 : style.strokeColor) ? style.strokeColor : "red";
    var anchorColor = (style === null || style === void 0 ? void 0 : style.anchorColor) ? style.anchorColor : "#333";
    var modeInt = ["extendRight", "extendLeft", "extendLeftRight", "*extendToSecondPoint"].includes(mode !== null && mode !== void 0 ? mode : "")
        ? mode
        : "extendLeftRight";
    var pixXyAdjusted = [
        [modeInt === "extendRight" ? PixXy[0] : startPixX, PixXy[1]],
        [modeInt === "extendLeft" ? PixXy[0] : endPixX, PixXy[1]],
    ];
    return (_jsxs(React.Fragment, { children: [_jsx(Line, { listening: false, x: 0, y: 0, points: [pixXyAdjusted[0][0], pixXyAdjusted[0][1], pixXyAdjusted[1][0], pixXyAdjusted[1][1]], stroke: strokeColor, strokeWidth: 1 }, void 0), _jsx(Circle, { x: PixXy[0], y: pixXyAdjusted[0][1], radius: 5, fill: anchorColor }, void 0)] }, void 0));
};
export var CHLine = React.memo(CHLineComponent);
export var HLine = {
    name: "Horizontal Line",
    type: "hline",
    nPoints: 1,
    category: "lines",
    params: [
        {
            name: "mode",
            val: "extendLeftRight",
            vals: ["extendRight", "extendLeft", "extendLeftRight"],
            type: "select",
        },
    ],
    default: { params: [{ icon: mdiSetLeft }] },
    component: CHLine,
};
export default HLine;
//# sourceMappingURL=HLine.js.map