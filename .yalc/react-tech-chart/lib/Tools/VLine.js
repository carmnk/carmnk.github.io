import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Circle, Line } from "react-konva";
import { mdiSetLeft } from "@mdi/js";
export var CVLineComponent = function (props) {
    var _a;
    var style = props.style, subcharts = props.subcharts, subchartIdx = props.subchartIdx, mode = props.mode, calcXaxis = props.calcXaxis, toolXy = props.xy, drawPixXy = props.drawPixXy, yToPix = props.yToPix;
    var subchartTop = subcharts[subchartIdx].top;
    var isDrawing = !!(drawPixXy === null || drawPixXy === void 0 ? void 0 : drawPixXy[0]);
    if ((toolXy.length !== 1 && !isDrawing) || !yToPix || !calcXaxis.xToPix)
        return null;
    var PixXy = toolXy.length === 1
        ? [calcXaxis.xToPix(toolXy[0][0]), yToPix(toolXy[0][1], subchartIdx, 0)]
        : (drawPixXy === null || drawPixXy === void 0 ? void 0 : drawPixXy[0])
            ? drawPixXy[0]
            : null;
    if (!PixXy)
        return null;
    var strokeColor = (style === null || style === void 0 ? void 0 : style.strokeColor) ? style.strokeColor : "red";
    var anchorColor = (style === null || style === void 0 ? void 0 : style.anchorColor) ? style.anchorColor : "#333";
    var modeInt = ["extendUp", "extendDown", "extendUpDown", "*extendToSecondPoint"].includes(mode !== null && mode !== void 0 ? mode : "")
        ? mode
        : "extendUpDown";
    var lowestBottom = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[Math.max(subcharts.length - 1, 0)]) === null || _a === void 0 ? void 0 : _a.bottom;
    // if vline should end at current subchart -> use subchartBottom instead of lowestBottom -> maybe mode?
    var pixXyAdjusted = [
        [PixXy[0], modeInt === "extendDown" ? PixXy[1] : subchartTop],
        [PixXy[0], modeInt === "extendUp" ? PixXy[1] : lowestBottom],
    ];
    return (_jsxs(React.Fragment, { children: [_jsx(Line, { listening: false, x: 0, y: 0, points: pixXyAdjusted.flat(), stroke: strokeColor, strokeWidth: 1 }, void 0), _jsx(Circle, { x: PixXy[0], y: PixXy[1], radius: 5, fill: anchorColor }, void 0)] }, void 0));
};
export var CVLine = React.memo(CVLineComponent);
export var VLine = {
    name: "Vertical Line",
    type: "vline",
    nPoints: 1,
    category: "lines",
    params: [
        {
            name: "mode",
            val: "extendUpDown",
            vals: ["extendUp", "extendDown", "extendUpDown"],
            type: "select",
        },
    ],
    default: { params: [{ icon: mdiSetLeft }] },
    component: CVLine,
};
//# sourceMappingURL=VLine.js.map