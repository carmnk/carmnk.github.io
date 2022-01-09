import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Line } from "react-konva";
import { CText } from "./CText";
export var YaxisComponent = function (props) {
    var subcharts = props.subcharts, calcSubcharts = props.calcSubcharts, theme = props.theme, containerSize = props.containerSize;
    var widthTickmarkLines = theme.yaxis.widthTickmarkLines;
    // console.log("Yaxis renders")
    return (_jsx(React.Fragment, { children: subcharts.map(function (subchart, subchartIdx) {
            return subchart.yaxis.map(function (singleYaxis, yIdx) {
                var _a, _b, _c;
                var calcYaxis = (_b = (_a = calcSubcharts === null || calcSubcharts === void 0 ? void 0 : calcSubcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[yIdx];
                var yAxisTicks = (_c = calcYaxis === null || calcYaxis === void 0 ? void 0 : calcYaxis.drawTicks) !== null && _c !== void 0 ? _c : [];
                return yAxisTicks.map(function (yaxisTick, yaxisTickIdx) {
                    return (_jsxs(React.Fragment, { children: [_jsx(Line, { name: "y-tickmark-".concat(yaxisTickIdx), listening: false, x: containerSize.width - 1 + 0.5 - theme.yaxis.widthTickmarkLines, y: yaxisTick.pixY + 0.5, points: [0, 0, widthTickmarkLines, 0], stroke: theme.yaxis.strokeColor, strokeWidth: 1 }, void 0), theme.grid.useGridY ? (_jsx(Line, { name: "y-gridline-".concat(yaxisTickIdx), listening: false, x: 0 + 0.5, y: yaxisTick.pixY + 0.5, points: [0, 0, containerSize.width - 1 + 0.5, 0], stroke: theme.grid.strokeColor, strokeWidth: 1 }, void 0)) : null, _jsx(CText, { text: yaxisTick.label, halign: "right", valign: "middle", fontColor: theme.yaxis.fontColor, fontName: theme.yaxis.fontName, fontSize: theme.yaxis.fontSize, x: containerSize.width - 1 - theme.yaxis.widthTickmarkLines + 0.5, y: yaxisTick.pixY }, void 0)] }, "yaxis-ticks-".concat(yaxisTickIdx)));
                });
            });
        }) }, void 0));
};
export var Yaxis = React.memo(YaxisComponent);
//# sourceMappingURL=Yaxis.js.map