import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Line } from "react-konva";
import * as T from "../Types";
import { isNullish } from "../utils/Basics";
import { CText } from "./CText";
var MarkerComponent = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var rtTicks = props.rtTicks, containerSize = props.containerSize, theme = props.theme, indSeriesIdx = props.indSeriesIdx, xaxis = props.xaxis;
    var lastRtTick = (_b = (_a = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _a === void 0 ? void 0 : _a.ticks) === null || _b === void 0 ? void 0 : _b[((_d = (_c = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _c === void 0 ? void 0 : _c.ticks) === null || _d === void 0 ? void 0 : _d.length) - 1];
    var lastRtData = (_f = (_e = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f[((_h = (_g = rtTicks === null || rtTicks === void 0 ? void 0 : rtTicks[0]) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.length) - 1];
    if (!rtTicks || !lastRtTick || !lastRtData)
        return null;
    var containerWidth = containerSize.width;
    var widthYAxis = theme.yaxis.widthYAxis;
    var pixYDataset = lastRtTick === null || lastRtTick === void 0 ? void 0 : lastRtTick.pixY;
    var pixX = lastRtTick.pixX;
    var pixY = !!pixYDataset && T.isLineChartPixDataset(lastRtTick)
        ? (_j = lastRtTick === null || lastRtTick === void 0 ? void 0 : lastRtTick.pixY) === null || _j === void 0 ? void 0 : _j.pixClose
        : T.isIndicatorPixDataset(lastRtTick)
            ? (_l = (_k = lastRtTick === null || lastRtTick === void 0 ? void 0 : lastRtTick.pixY) === null || _k === void 0 ? void 0 : _k.pixPrices) === null || _l === void 0 ? void 0 : _l[indSeriesIdx !== null && indSeriesIdx !== void 0 ? indSeriesIdx : 0]
            : null;
    var y = T.isLineChartDataset(lastRtData)
        ? (_m = lastRtData) === null || _m === void 0 ? void 0 : _m.close
        : T.isIndicatorDataset(lastRtData)
            ? (_p = (_o = lastRtData) === null || _o === void 0 ? void 0 : _o.prices) === null || _p === void 0 ? void 0 : _p[indSeriesIdx !== null && indSeriesIdx !== void 0 ? indSeriesIdx : 0]
            : null;
    if (isNullish(pixY) || isNullish(y))
        return null;
    return (_jsxs(React.Fragment, { children: [_jsx(Line // marker line y
            , { name: "graphmarkerLineY", listening: false, x: xaxis.pixXStart, y: 0, points: [
                    Math.round(pixX) + 0.5,
                    Math.round(pixY) + 0.5,
                    containerWidth - widthYAxis + 0.5,
                    Math.round(pixY) + 0.5,
                ], stroke: "rgba(102,102,102,0.5)", strokeWidth: 1 }, void 0), _jsx(Line // yaxis marker polygon
            , { name: "graphMarkerPolygonY", listening: false, draggable: false, x: 0, y: 0, points: [
                    Math.round(containerWidth - widthYAxis) + 0.5,
                    Math.round(pixY) + 0.5,
                    Math.round(containerWidth - widthYAxis + 10) + 0.5,
                    Math.round(pixY + 10) + 0.5,
                    Math.round(containerWidth) + 0.5,
                    Math.round(pixY + 10) + 0.5,
                    Math.round(containerWidth) + 0.5,
                    Math.round(pixY - 10) + 0.5,
                    Math.round(containerWidth - widthYAxis + 10) + 0.5,
                    Math.round(pixY - 10) + 0.5,
                ], stroke: theme.crosshair.yMarkerStrokeColor, fill: theme.crosshair.yMarkerBackgroundColor, strokeWidth: 1, closed: true }, void 0), _jsx(CText, { name: "graphMarkerPolygonYText", listening: false, text: (_q = y.toString()) !== null && _q !== void 0 ? _q : "", halign: "left", valign: "middle", fontColor: theme.crosshair.yMarkerTextColor, fontSize: theme.crosshair.yMarkerFontSize, fontName: theme.crosshair.yMarkerFontName, x: Math.round(containerWidth - widthYAxis + theme.yaxis.widthTickmarkLines + 5) + 0.5, y: Math.round(pixY) + 0.5 }, void 0)] }, void 0));
};
export var Marker = React.memo(MarkerComponent);
//# sourceMappingURL=Marker.js.map