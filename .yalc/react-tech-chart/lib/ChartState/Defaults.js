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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import uniq from "lodash/uniq";
import { setStateProp } from "../utils";
import { isNullish } from "../utils/Basics";
export var prefersDarkMode = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
export var graphColorsLight = ["#666", "#0693E3", "#f50057", "#00D084", "#FF6900", "#bd10e0", "#bbb"];
export var graphColorsDark = ["#bbb", "#0693E3", "#f50057", "#00D084", "#FF6900", "#bd10e0", "#bbb"];
export var getGraphColors = function (colorArr, idx) { return colorArr[idx % colorArr.length]; };
export var defaultCandleChartStyle = {
    candleStrokeColor: "transparent",
    candleWickStrokeColor: "#666",
    candleDownColor: "#c70039",
    candleUpColor: "#009688",
};
export var defaultLineChartStyle = { strokeColor: ["#666"] };
export var defaultDarkLineChartStyle = { strokeColor: ["#bbb"] };
export var getDefaultGraphStyle = function (type, darkMode, graphIdx, indicatorLines) {
    if (type === "indicator") {
        return !indicatorLines || indicatorLines <= 1
            ? { strokeColor: [getGraphColors(darkMode ? graphColorsDark : graphColorsLight, graphIdx !== null && graphIdx !== void 0 ? graphIdx : 0)] }
            : { strokeColor: (darkMode ? graphColorsDark : graphColorsLight).slice(0, indicatorLines) };
    }
    else {
        return __assign(__assign({}, defaultCandleChartStyle), { strokeColor: getGraphColors(darkMode ? graphColorsDark : graphColorsLight, graphIdx !== null && graphIdx !== void 0 ? graphIdx : 0) });
    }
};
export var defaultContainerSizeState = {
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    init: false,
};
export var defaultPointerState = {
    isHovering: false,
    move: { isMoving: false, xy: [0, 0] },
    wheel: { isWheeling: false, delta: [0, 0] },
    dragPointerUp: { isDragPointerUp: false, xy: [0, 0] },
    pinch: { isPinching: false, first: false, movementInitial: [0, 0], origin: [0, 0] },
    drag: {
        isDragging: false,
        xy: [0, 0],
        first: false,
        last: false,
        initial: [0, 0],
        movementInitial: [0, 0],
        delta: [0, 0],
        ctrlKey: false,
    },
};
export var defaultDrawState = {
    isDrawing: false,
    xy: [],
    params: [],
};
export var defaultCalcXaxis = {
    totalTranslatedX: 0,
    scaledWidthPerTick: 10,
    xStart: 0,
    xEnd: 0,
    xLast: 0,
    xUnlimited: 0,
    pixXStart: 0,
    pixXEnd: 0,
    optChartPeriod: null,
    initialWidthPerTick: 10,
    curTicks: [],
};
export var defaultCalcPointer = {
    isHovering: false,
    move: {
        x: 0,
        pixX: 0,
        pixY: 0,
        snapDatasets: [],
        subchartIdx: null,
        xDateString: "",
        pixXSnap: 0,
        pixXUnlimSnap: 0,
        xUnlimited: 0,
    },
    click: { clickedSubchartIdx: null },
};
export var defaultLightTheme = {
    name: "default light",
    isDarkMode: false,
    borderColor: "#000",
    backgroundColor: "#fff",
    crosshair: {
        useCrosshair: true,
        strokeColor: "#000",
        xMarkerBackgroundColor: "#fff",
        xMarkerFontName: "Arial",
        xMarkerFontSize: 14,
        xMarkerTextColor: "#000",
        xMarkerStrokeColor: "#000",
        yMarkerBackgroundColor: "#fff",
        yMarkerStrokeColor: "#000",
        yMarkerTextColor: "#000",
        yMarkerFontName: "Arial",
        yMarkerFontSize: 14,
    },
    grid: {
        useGridX: true,
        useGridY: true,
        strokeColor: "rgba(51,51,51, 0.2)",
        strokeStyle: "FUTURE",
    },
    yaxis: {
        widthYAxis: 80,
        widthTickmarkLines: 5,
        fillColor: "#fff",
        strokeColor: "#000",
        fontColor: "#000",
        fontSize: 14,
        fontName: "Arial",
    },
    xaxis: {
        heightXAxis: 36,
        heightTickMarkLines: 8,
        fillColor: "#fff",
        strokeColor: "#000",
        fontColor: "#000",
        fontSize: 14,
        fontName: "Arial",
    },
    draw: {
        strokeColor: "red",
        anchorColor: "#333",
    },
};
export var defaultDarkTheme = __assign(__assign({}, defaultLightTheme), { name: "default dark", isDarkMode: true, crosshair: __assign(__assign({}, defaultLightTheme.crosshair), { strokeColor: "#bbb" }), borderColor: "#666", draw: { strokeColor: "red", anchorColor: "#ccc" }, grid: __assign(__assign({}, defaultLightTheme.grid), { strokeColor: "rgba(153,153,153, 0.08)" }), yaxis: __assign(__assign({}, defaultLightTheme.yaxis), { fontColor: "#bbb", strokeColor: "#bbb" }), backgroundColor: "#333" });
export var defaultState = {
    data: [],
    subcharts: [],
    fullscreen: false,
    draw: defaultDrawState,
    containerSize: defaultContainerSizeState,
    pointer: defaultPointerState,
    calc: { subcharts: [], xaxis: defaultCalcXaxis, pointer: defaultCalcPointer },
    theme: defaultLightTheme,
    menu: { location: null, expandedSetting: [], disablePointerEvents: false },
};
export var defaultDarkState = __assign(__assign({}, defaultState), { theme: defaultDarkTheme });
export var getInitSubchartsState = function (isDarkMode, inputData) {
    if (!inputData)
        return [];
    var sIdx = -1;
    var gIdx = 0;
    var graphs = inputData
        .map(function (inputDat, inputDatIdx) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (sIdx === -1 ||
            (isNullish((_a = inputDat === null || inputDat === void 0 ? void 0 : inputDat.graphProps) === null || _a === void 0 ? void 0 : _a.subchartIdx) &&
                (inputDat.type === "chart" || (inputDat.type === "indicator" && inputDat.indicator.default.newSubchart)))) {
            sIdx++;
            gIdx = 0;
        }
        else {
            gIdx++;
        }
        if (inputDat.type === "chart") {
            var chartType = (_b = ["line", "candles", "area"].find(function (val) { var _a; return val === ((_a = inputDat === null || inputDat === void 0 ? void 0 : inputDat.graphProps) === null || _a === void 0 ? void 0 : _a.chartType); })) !== null && _b !== void 0 ? _b : "candles";
            return {
                dataId: inputDat.id,
                dataIdx: inputDatIdx,
                type: "chart",
                chartType: chartType,
                style: __assign(__assign(__assign({}, defaultCandleChartStyle), { strokeColor: isDarkMode ? defaultDarkLineChartStyle.strokeColor[0] : defaultLineChartStyle.strokeColor[0] }), (_c = inputDat === null || inputDat === void 0 ? void 0 : inputDat.graphProps) === null || _c === void 0 ? void 0 : _c.style),
                subchartIdx: (_e = (_d = inputDat === null || inputDat === void 0 ? void 0 : inputDat.graphProps) === null || _d === void 0 ? void 0 : _d.subchartIdx) !== null && _e !== void 0 ? _e : sIdx,
                yaxisIdx: 0,
                graphIdx: (_g = (_f = inputDat === null || inputDat === void 0 ? void 0 : inputDat.graphProps) === null || _f === void 0 ? void 0 : _f.graphIdx) !== null && _g !== void 0 ? _g : gIdx,
            };
        }
        else if (inputDat.type === "indicator") {
            return {
                dataId: (_h = inputDat.id) !== null && _h !== void 0 ? _h : "",
                dataIdx: inputDatIdx,
                type: "indicator",
                style: {
                    strokeColor: ((_k = (_j = inputDat === null || inputDat === void 0 ? void 0 : inputDat.graphProps) === null || _j === void 0 ? void 0 : _j.style) === null || _k === void 0 ? void 0 : _k.strokeColor)
                        ? inputDat.graphProps.style.strokeColor
                        : inputDat.indicator.graphTypes.length <= 1
                            ? defaultLineChartStyle.strokeColor
                            : isDarkMode
                                ? graphColorsDark.slice(0, inputDat.indicator.graphTypes.length)
                                : graphColorsLight.slice(0, inputDat.indicator.graphTypes.length),
                },
                subchartIdx: (_m = (_l = inputDat === null || inputDat === void 0 ? void 0 : inputDat.graphProps) === null || _l === void 0 ? void 0 : _l.subchartIdx) !== null && _m !== void 0 ? _m : sIdx,
                yaxisIdx: 0,
                graphIdx: (_p = (_o = inputDat === null || inputDat === void 0 ? void 0 : inputDat.graphProps) === null || _o === void 0 ? void 0 : _o.graphIdx) !== null && _p !== void 0 ? _p : gIdx,
            };
        }
        else
            return null;
    })
        .filter(function (val) { return !!val; }).sort(function (a, b) {
        return a && b && a.subchartIdx !== b.subchartIdx
            ? a.subchartIdx - b.subchartIdx
            : a && b && a.subchartIdx === b.subchartIdx
                ? a.graphIdx - b.graphIdx
                : 0;
    });
    var amtSubcharts = uniq(graphs === null || graphs === void 0 ? void 0 : graphs.map(function (graph) { return graph.subchartIdx; }));
    var subcharts2 = amtSubcharts.map(function (s, sIdx) { return ({
        top: 0,
        bottom: 0,
        yaxis: [0].map(function () { return ({
            tools: [],
            graphs: graphs === null || graphs === void 0 ? void 0 : graphs.filter(function (val) { return val.subchartIdx === sIdx; }).map(function (graph) {
                var subchartIdx = graph.subchartIdx, yaxisIdx = graph.yaxisIdx, graphIdx = graph.graphIdx, graphRest = __rest(graph, ["subchartIdx", "yaxisIdx", "graphIdx"]);
                return graphRest;
            }),
        }); }),
    }); });
    return subcharts2;
};
export var getInitState = function (initialTheme, initWidthPerTick) {
    var isDarkMode = (prefersDarkMode && (initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.isDarkMode) === undefined) || !!(initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.isDarkMode);
    var defaultStateInt = isDarkMode ? defaultDarkState : defaultState;
    var defaultStateProc = !initWidthPerTick
        ? defaultStateInt
        : setStateProp(defaultStateInt, ["calc", "xaxis"], __assign(__assign({}, defaultStateInt.calc.xaxis), { initialWidthPerTick: initWidthPerTick, scaledWidthPerTick: initWidthPerTick }));
    var initState = __assign(__assign({}, defaultStateProc), { subcharts: [], theme: __assign(__assign(__assign({}, initialTheme), defaultStateProc.theme), { grid: __assign(__assign({}, defaultStateProc.theme.grid), initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.grid), yaxis: __assign(__assign({}, defaultStateProc.theme.yaxis), initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.yaxis), xaxis: __assign(__assign({}, defaultStateProc.theme.xaxis), initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.xaxis), crosshair: __assign(__assign({}, defaultStateProc.theme.crosshair), initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.crosshair), draw: __assign(__assign({}, defaultStateProc.theme.draw), initialTheme === null || initialTheme === void 0 ? void 0 : initialTheme.draw) }) });
    return initState;
};
export var getDefaultChartInteractions = function (initialChartState) {
    return {
        containerSize: initialChartState.containerSize,
        pointer: initialChartState.pointer,
        stateControl: {
            shallUpdate: [],
        },
    };
};
//# sourceMappingURL=Defaults.js.map