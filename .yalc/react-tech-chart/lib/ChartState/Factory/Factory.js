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
import uniq from "lodash/uniq";
import { createIndicatorData, getIndicatorsCalcDepIndicatorDatas } from "./IndicatorDataFactory";
import { createSubChartModel, createChartGraphModel } from "./SubchartFactory";
import { createIndicatorGraphModel, resizeSubcharts } from "./SubchartFactory";
import { getDefaultGraphStyle, getGraphColors, getInitSubchartsState } from "../Defaults";
import { graphColorsDark, graphColorsLight } from "../Defaults";
import { resizeContainer } from "../Interactions/CalcInteractions";
import { setStateProp, removeStateProp } from "../../utils/React";
import { isNullish } from "../../utils/Basics";
import * as T from "../../Types";
import { jumpToXaxisEnd } from "../Calc/CalcXaxis";
import { createChartData } from "./ChartDataFactory";
export var createData = function (chartSeries, chartName, id, indicator, indSrcId, indSrcLineIdx) {
    return !!indicator && !!indSrcId
        ? createIndicatorData(chartSeries, indSrcId, indicator, indSrcLineIdx, id, chartName)
        : T.isChartDataSeries(chartSeries)
            ? createChartData(chartSeries, chartName, id)
            : null;
};
export var addSubchart = function (current, params) {
    var _a, _b, _c;
    var srcData = params.dataSeries, graphName = params.graphName, id = params.id, indicator = params.indicator, reset = params.reset, indSrcId = params.indSrcId;
    // currently all new subcharts are indicators!
    var containerHeight = current.containerSize.height;
    var data = createData(srcData, graphName, id, indicator, indSrcId);
    if (!data)
        return current;
    var indicatorLines = data.type === "indicator" ? data.indicator.graphTypes.length : undefined;
    var style = getDefaultGraphStyle(data.type, current.theme.isDarkMode, undefined, indicatorLines);
    var dataId = data.id;
    if (current.subcharts.length === 0 || !!reset) {
        var top_1 = 0;
        var bottom = containerHeight - current.theme.xaxis.heightXAxis;
        var newSubchart = createSubChartModel({ top: top_1, bottom: bottom, dataId: dataId, style: style, indicator: indicator, type: data.type });
        if (!newSubchart)
            return current;
        var calc = current.calc;
        var mainchartDataseries = (_c = (_b = (_a = [data]) === null || _a === void 0 ? void 0 : _a.find) === null || _b === void 0 ? void 0 : _b.call(_a, function (dat) { return dat.id === dataId && dat.type === "chart"; })) === null || _c === void 0 ? void 0 : _c.data;
        var containerWidth = current.containerSize.width;
        var xaxis = (mainchartDataseries && jumpToXaxisEnd(calc.xaxis, mainchartDataseries, containerWidth)) || current.calc.xaxis;
        return __assign(__assign({}, current), { data: [data], subcharts: [newSubchart], calc: __assign(__assign({}, calc), { xaxis: xaxis }) });
    }
    else {
        var subchartsHeight = containerHeight - current.theme.xaxis.heightXAxis;
        var resizedSubcharts = resizeSubcharts({
            subchartsHeight: subchartsHeight,
            subcharts: current.subcharts,
            addSubchart: { data: data, darkMode: current.theme.isDarkMode },
        });
        return __assign(__assign({}, current), { data: __spreadArray(__spreadArray([], current.data, true), [data], false), subcharts: resizedSubcharts });
    }
};
export var removeSubchart = function (current, params) {
    var delSubIdx = params.subchartIdx;
    var dataIds = current.subcharts[delSubIdx].yaxis.map(function (yaxi) { return yaxi.graphs.map(function (graph) { return graph.dataId; }); }).flat();
    var subchartsHeight = current.containerSize.height - current.theme.xaxis.heightXAxis;
    var subcharts = resizeSubcharts({
        subchartsHeight: subchartsHeight,
        subcharts: current.subcharts,
        removeSubchartIdx: delSubIdx,
    });
    return __assign(__assign({}, current), { data: current.data.filter(function (singleData) { return !dataIds.includes(singleData.id); }), subcharts: subcharts });
};
export var addGraph = function (current, params) {
    var dataSeries = params.dataSeries, graphName = params.graphName, subchartIdx = params.subchartIdx, id = params.id, indSrcId = params.indSrcId, indicator = params.indicator, indSrcLineIdx = params.indSrcLineIdx;
    var newGraphIdx = current.subcharts[subchartIdx].yaxis[0].graphs.length;
    var getStrokeColor = function (idx) {
        return getGraphColors(current.theme.isDarkMode ? graphColorsDark : graphColorsLight, idx);
    };
    if ((!indSrcId && indicator) || (indSrcId && !indicator))
        return current;
    var data = createData(dataSeries, graphName, id, indicator, indSrcId, indSrcLineIdx);
    if (!data)
        return current;
    var dataId = data.id;
    var indicatorLines = data.type === "indicator" ? data.indicator.graphTypes.length : undefined;
    var style = getDefaultGraphStyle(data.type, current.theme.isDarkMode, newGraphIdx, indicatorLines);
    var graph = data.type === "indicator" && !!indicator && !!indSrcId
        ? createIndicatorGraphModel({
            dataId: dataId,
            style: style,
        })
        : createChartGraphModel({ dataId: dataId, style: style });
    if (T.isIndicatorGraph(graph) && data.data[data.data.length - 1].prices.length > 1)
        graph.style.strokeColor = data.data[data.data.length - 1].prices.map(function (x, idx) {
            return getStrokeColor(idx);
        });
    var subchart = current.subcharts[subchartIdx];
    return setStateProp(setStateProp(current, ["data"], __spreadArray(__spreadArray([], current.data, true), [data], false)), ["subcharts", subchartIdx], __assign(__assign({}, subchart), { yaxis: [__assign(__assign({}, subchart.yaxis[0]), { graphs: __spreadArray(__spreadArray([], subchart.yaxis[0].graphs, true), [graph], false) })] }));
};
export var removeGraph = function (current, params) {
    var delSubIdx = params.subchartIdx, delYIdx = params.yaxisIdx, delGraphIdx = params.graphIdx;
    var dataId = current.subcharts[delSubIdx].yaxis[delYIdx].graphs[delGraphIdx].dataId;
    var subchart = current.subcharts[delSubIdx];
    if (delGraphIdx === 0 && subchart.yaxis[delYIdx].graphs.length === 1) {
        return removeSubchart(current, { subchartIdx: delSubIdx });
    }
    else {
        return setStateProp(removeStateProp(current, ["subcharts", delSubIdx, "yaxis", delYIdx, "graphs", delGraphIdx]), ["data"], current.data.filter(function (val) { return val.id !== dataId; }));
    }
};
export var initData = function (current, params) {
    var _a, _b, _c;
    var inputData = params.datas;
    var mainchartId = (_a = inputData === null || inputData === void 0 ? void 0 : inputData[0]) === null || _a === void 0 ? void 0 : _a.id;
    var intInputData = inputData.map(function (inputDat, inputDatIdx) {
        var _a, _b;
        return inputDat.type === "chart"
            ? inputDat
            : __assign(__assign({}, inputDat), { indSrcId: (_a = inputDat.indSrcId) !== null && _a !== void 0 ? _a : mainchartId, id: (_b = inputDat.id) !== null && _b !== void 0 ? _b : "indi_" + inputDatIdx.toString().padStart(2, "0") });
    });
    var sequencedIndiTest = uniq(intInputData
        .map(function (inputDat) {
        return inputDat.type === "indicator" && !isNullish(inputDat === null || inputDat === void 0 ? void 0 : inputDat.id)
            ? getIndicatorsCalcDepIndicatorDatas(intInputData, inputDat.id)
            : null;
    })
        .flat()
        .filter(function (val) { return val !== null; }));
    var chartDatas = intInputData.map(function (dat) {
        return dat.type === "chart" ? createChartData(dat.data, dat.name, dat.id) : null;
    });
    var datasCopy = __spreadArray([], chartDatas, true);
    sequencedIndiTest.forEach(function (dataId) {
        var inputDatIdx = intInputData === null || intInputData === void 0 ? void 0 : intInputData.findIndex(function (dat) { return dat.id === dataId; }); // [dataIdx];
        var inputDat = intInputData === null || intInputData === void 0 ? void 0 : intInputData[inputDatIdx];
        var indInputData = (inputDat === null || inputDat === void 0 ? void 0 : inputDat.type) === "indicator" ? inputDat : null;
        var indDataSrcId = indInputData === null || indInputData === void 0 ? void 0 : indInputData.indSrcId;
        var indSrcData = !isNullish(indDataSrcId) ? datasCopy === null || datasCopy === void 0 ? void 0 : datasCopy.find(function (dat) { return (dat === null || dat === void 0 ? void 0 : dat.id) === indDataSrcId; }) : null;
        if ((inputDat === null || inputDat === void 0 ? void 0 : inputDat.type) === "indicator" && indSrcData && indInputData)
            datasCopy[inputDatIdx] = createIndicatorData(indSrcData === null || indSrcData === void 0 ? void 0 : indSrcData.data, indSrcData === null || indSrcData === void 0 ? void 0 : indSrcData.id, indInputData.indicator, undefined, dataId, indInputData.name);
    });
    var finalDatas = datasCopy.filter(function (val) { return val !== null; });
    if (finalDatas.length !== intInputData.length)
        console.warn("Warning - not all indicators could be initialized.");
    var initSubcharts = inputData ? getInitSubchartsState(current.theme.isDarkMode, inputData) : [];
    var subcharts = resizeContainer(current.containerSize.height, __assign(__assign({}, current), { subcharts: initSubcharts }));
    var calc = current.calc;
    var mainchartDataseries = (_c = (_b = finalDatas === null || finalDatas === void 0 ? void 0 : finalDatas.find) === null || _b === void 0 ? void 0 : _b.call(finalDatas, function (dat) { return dat.id === mainchartId && dat.type === "chart"; })) === null || _c === void 0 ? void 0 : _c.data;
    var containerWidth = current.containerSize.width;
    var xaxis = (mainchartDataseries && jumpToXaxisEnd(calc.xaxis, mainchartDataseries, containerWidth)) || current.calc.xaxis;
    return __assign(__assign({}, current), { subcharts: subcharts, data: finalDatas, calc: __assign(__assign({}, calc), { xaxis: xaxis }) });
};
export var clearChart = function (current, params) {
    var mode = params.mode;
    var clearedSubcharts = current.subcharts
        .map(function (sub, sIdx) {
        return mode === "tools" || sIdx === 0
            ? __assign(__assign({}, sub), { bottom: mode !== "tools" ? current.containerSize.height - 1 - current.theme.xaxis.heightXAxis : sub.bottom, yaxis: sub.yaxis.map(function (yax) {
                    var _a;
                    return (__assign(__assign({}, yax), { graphs: mode !== "tools" ? [(_a = yax.graphs) === null || _a === void 0 ? void 0 : _a[0]] : yax.graphs, tools: mode === "all" || mode === "tools" ? [] : yax.tools }));
                }) }) : null;
    })
        .filter(function (sub) { return sub !== null; });
    return mode === "all" || mode === "indicators"
        ? setStateProp(setStateProp(current, ["subcharts"], clearedSubcharts), ["data"], [current.data.find(function (val) { var _a, _b, _c, _d, _e, _f; return val.id === ((_f = (_e = (_d = (_c = (_b = (_a = current.subcharts) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.yaxis) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.graphs) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.dataId); })])
        : mode === "tools"
            ? setStateProp(current, ["subcharts"], clearedSubcharts)
            : current;
};
//# sourceMappingURL=Factory.js.map