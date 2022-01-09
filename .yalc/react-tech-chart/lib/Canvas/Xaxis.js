import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Line } from "react-konva";
import { CText } from "./CText";
export var XaxisComponent = function (props) {
    var calcXaxis = props.calcXaxis, theme = props.theme, containerSize = props.containerSize;
    var _a = theme.xaxis, heightXAxis = _a.heightXAxis, heightTickMarkLines = _a.heightTickMarkLines;
    // console.log("Xaxis renders");
    return (_jsx(React.Fragment, { children: calcXaxis.curTicks.map(function (xaxisTick, xaxisTickIdx) {
            return (_jsxs(React.Fragment, { children: [_jsx(Line, { name: "x-tickmark-".concat(xaxisTickIdx), listening: false, x: xaxisTick.x, y: containerSize.height - 1 - heightXAxis + 0.5, points: [0, 0, 0, heightTickMarkLines], stroke: theme.xaxis.strokeColor, strokeWidth: 1 }, void 0), theme.grid.useGridX ? (_jsx(Line, { name: "x-gridline-".concat(xaxisTickIdx), listening: false, x: xaxisTick.x, y: 0 + 0.5, points: [0, 0, 0, containerSize.height - 1 - heightXAxis + 0.5], stroke: theme.grid.strokeColor, strokeWidth: 1 }, void 0)) : null, _jsx(CText, { text: xaxisTick.dateString, halign: "center", valign: "top", fontColor: theme.xaxis.fontColor, fontName: theme.xaxis.fontName, fontSize: theme.xaxis.fontSize, x: xaxisTick.x + 0.5, y: containerSize.height - 1 - heightXAxis + heightTickMarkLines + 0.5 + 8 }, void 0)] }, "xaxis-ticks-".concat(xaxisTickIdx)));
        }) }, void 0));
};
export var Xaxis = React.memo(XaxisComponent);
//# sourceMappingURL=Xaxis.js.map