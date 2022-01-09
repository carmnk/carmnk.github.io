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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { isNullish } from "../../utils/Basics";
import { getDefaultGraphStyle } from "../Defaults";
export var createSubChartModel = function (params) {
    var top = params.top, bottom = params.bottom, yaxisParams = __rest(params, ["top", "bottom"]);
    var yaxis = createYaxisModel(yaxisParams);
    if (!yaxis)
        return null;
    return {
        yaxis: [yaxis],
        top: top,
        bottom: bottom,
    };
};
export var createYaxisModel = function (params) {
    var dataId = params.dataId, style = params.style, indicator = params.indicator, type = params.type;
    if (type === "indicator" && !indicator /*|| !indSrcId*/)
        return null;
    var graph = type === "indicator" && !!indicator //&& !!indSrcId
        ? createIndicatorGraphModel({
            dataId: dataId,
            style: style,
        })
        : createChartGraphModel({ dataId: dataId, style: style });
    return {
        graphs: [graph],
        tools: [],
    };
};
export var createChartGraphModel = function (params) {
    var dataId = params.dataId, style = params.style;
    return {
        style: style,
        type: "chart",
        chartType: "candles",
        dataId: dataId,
    };
};
export var createIndicatorGraphModel = function (params) {
    var dataId = params.dataId, style = params.style;
    return {
        // name: indicator.name,
        type: "indicator",
        dataId: dataId,
        style: style,
    };
};
export var swapSubcharts = function (current, params) {
    var subchartIdx1 = params.subchartIdx1, subchartIdx2 = params.subchartIdx2;
    var lowerIdx = subchartIdx1 <= subchartIdx2 ? subchartIdx1 : subchartIdx2;
    var higherIdx = subchartIdx1 > subchartIdx2 ? subchartIdx1 : subchartIdx2;
    var subchart1 = current.subCharts[lowerIdx];
    var subchart2 = current.subCharts[higherIdx];
    var height1 = subchart1.bottom - subchart1.top;
    var height2 = subchart2.bottom - subchart2.top;
    var dHeight21 = height2 - height1;
    return lowerIdx === higherIdx || isNullish(lowerIdx) || isNullish(higherIdx) || higherIdx >= current.subCharts.length
        ? current
        : __assign(__assign({}, current), { subCharts: __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], current.subCharts.slice(0, lowerIdx), true), [
                __assign(__assign({}, subchart2), { bottom: subchart1.top + height2, top: subchart1.top })
            ], false), current.subCharts
                .slice(lowerIdx + 1, higherIdx)
                .map(function (sub, sIdx) { return (__assign(__assign({}, sub), { top: sub.top + dHeight21, bottom: sub.bottom + dHeight21 })); }), true), [
                __assign(__assign({}, subchart1), { top: subchart2.top + dHeight21, bottom: subchart2.bottom })
            ], false), current.subCharts.slice(higherIdx + 1), true) });
};
export var resizeSubcharts = function (params) {
    var subCharts = params.subCharts, removeSubchartIdx = params.removeSubchartIdx, addSubchart = params.addSubchart, subchartsHeight = params.subchartsHeight;
    var defaultMainHeight = 250;
    var defaultSubHeight = 150;
    var newData = addSubchart === null || addSubchart === void 0 ? void 0 : addSubchart.data;
    var subchartsDeleted = isNullish(removeSubchartIdx)
        ? subCharts
        : __spreadArray(__spreadArray([], subCharts.slice(0, removeSubchartIdx), true), subCharts.slice(removeSubchartIdx + 1), true);
    var amtNewSubcharts = subchartsDeleted.length + (addSubchart ? 1 : 0);
    var initFullfillFactor = subchartsHeight / (defaultMainHeight + (amtNewSubcharts - 1) * defaultSubHeight);
    var currentSubchartHeights = subchartsDeleted.map(function (subchart, sIdx) {
        return subchart.bottom - subchart.top > 0
            ? subchart.bottom - subchart.top
            : initFullfillFactor >= 1
                ? sIdx === 0
                    ? subchartsHeight - (amtNewSubcharts - 1) * defaultSubHeight
                    : defaultSubHeight
                : sIdx === 0
                    ? subchartsHeight - (amtNewSubcharts - 1) * Math.floor(defaultSubHeight * initFullfillFactor)
                    : Math.floor(defaultSubHeight * initFullfillFactor);
    });
    var curComplSubchartHeights = addSubchart ? __spreadArray(__spreadArray([], currentSubchartHeights, true), [defaultSubHeight], false) : currentSubchartHeights;
    var curSecondarySubHeight = curComplSubchartHeights.slice(1).reduce(function (acc, cur) { return acc + cur; }, 0);
    var optHeight = defaultMainHeight + curSecondarySubHeight;
    if (subchartsHeight >= optHeight) {
        var distributable = subchartsHeight - curComplSubchartHeights[0] - curSecondarySubHeight;
        var refillables_1 = curComplSubchartHeights.map(function (h, hIdx) {
            return Math.max((hIdx === 0 ? defaultMainHeight : defaultSubHeight) - h, 0);
        });
        var refillableHeight = refillables_1.reduce(function (acc, cur) { return acc + cur; }, 0);
        var fulfillFactor_1 = refillableHeight === 0 ? 0 : distributable >= refillableHeight ? 1 : distributable / refillableHeight;
        var refilledHeights_1 = curComplSubchartHeights.map(function (h, hIdx) { return h + Math.floor(fulfillFactor_1 * refillables_1[hIdx]); });
        var sumRefilledSecondaryHeights_1 = refilledHeights_1.slice(1).reduce(function (acc, cur) { return acc + cur; }, 0);
        var resizedSubcharts = subchartsDeleted.reduce(function (acc, cur, idx) {
            return idx === 0
                ? [__assign(__assign({}, cur), { top: 0, bottom: subchartsHeight - sumRefilledSecondaryHeights_1 })]
                : __spreadArray(__spreadArray([], acc, true), [
                    __assign(__assign({}, cur), { top: acc[acc.length - 1].bottom, bottom: acc[acc.length - 1].bottom + refilledHeights_1[idx] }),
                ], false);
        }, []);
        var indicatorLines = !!newData && newData.type === "indicator" ? newData.indicator.graphTypes.length : undefined;
        var newSubchart = (!newData || resizedSubcharts.length === 0
            ? []
            : [
                createSubChartModel({
                    top: resizedSubcharts[resizedSubcharts.length - 1].bottom,
                    bottom: subchartsHeight,
                    dataId: newData.id,
                    style: getDefaultGraphStyle(newData.type, addSubchart.darkMode, undefined, indicatorLines),
                    indicator: newData.type === "indicator" ? newData.indicator : undefined,
                    type: newData.type,
                }),
            ]).filter(function (val) { return val !== null; });
        return __spreadArray(__spreadArray([], resizedSubcharts, true), newSubchart, true);
    }
    else {
        var shrink_1 = subchartsHeight / (curComplSubchartHeights[0] + curSecondarySubHeight); // /optHeight;
        var shrinkedSecondarySubHeights_1 = curComplSubchartHeights
            .slice(1)
            .map(function (height) { return Math.min(Math.floor(height * shrink_1), 150); });
        var sumShrinkedSecSubHeights_1 = shrinkedSecondarySubHeights_1.reduce(function (acc, cur) { return acc + cur; });
        var resizedSubcharts = subchartsDeleted.reduce(function (acc, cur, idx) {
            return idx === 0
                ? [
                    __assign(__assign({}, cur), { top: 0, bottom: subchartsHeight - sumShrinkedSecSubHeights_1 }),
                ]
                : __spreadArray(__spreadArray([], acc, true), [
                    __assign(__assign({}, cur), { top: acc[acc.length - 1].bottom, bottom: acc[acc.length - 1].bottom + shrinkedSecondarySubHeights_1[idx - 1] }),
                ], false);
        }, []);
        var indicatorLines = !!newData && newData.type === "indicator" ? newData.indicator.graphTypes.length : undefined;
        var newSubchart = (!newData || resizedSubcharts.length === 0
            ? []
            : [
                createSubChartModel({
                    top: resizedSubcharts[resizedSubcharts.length - 1].bottom,
                    bottom: subchartsHeight,
                    dataId: newData.id,
                    style: getDefaultGraphStyle(newData.type, addSubchart.darkMode, undefined, indicatorLines),
                    indicator: newData.type === "indicator" ? newData.indicator : undefined,
                    type: newData.type,
                }),
            ]).filter(function (val) { return val !== null; });
        return __spreadArray(__spreadArray([], resizedSubcharts, true), newSubchart, true);
    }
};
//# sourceMappingURL=SubchartFactory.js.map