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
import cloneDeep from "lodash/cloneDeep";
import uniqid from "uniqid";
import { isNullish } from "../../utils/Basics";
export var createIndicatorData = function (chartSeries, indSrcId, indicator, indSrcLineIdx, id, name) {
    var _a;
    var indicatorCopy = cloneDeep(indicator);
    var seriesKeyParam = indicatorCopy.params.findIndex(function (param) { return param.name === "applyOn"; });
    if (seriesKeyParam !== -1 && !isNullish(indSrcLineIdx))
        indicatorCopy.params[seriesKeyParam].val = indSrcLineIdx;
    var indicatorData = (_a = indicator.indicatorFn) === null || _a === void 0 ? void 0 : _a(__assign({ dataseries: chartSeries, prev: [] }, indicatorCopy.params.reduce(function (accObj, curParam) {
        var _a;
        return (__assign(__assign({}, accObj), (_a = {}, _a[curParam.name] = curParam.val, _a)));
    }, {})));
    var decimals = indicatorCopy.default.decimals ? indicatorCopy.default.decimals : 2; // 2 decimals if not otherwise provided
    var intId = id ? id : uniqid();
    var nameInt = name !== null && name !== void 0 ? name : indicatorCopy.name;
    return {
        data: indicatorData,
        name: nameInt,
        fullName: nameInt +
            "(" +
            indicatorCopy.params
                .map(function (param) { return (param.name !== "applyOn" ? param.val : null); })
                .filter(function (val) { return val !== null; })
                .join(",") +
            ")",
        type: "indicator",
        decimals: decimals,
        indicator: indicatorCopy,
        indSrcId: indSrcId,
        id: intId,
    };
};
// recalc single! indicator dataseries and update indSrcId and params if changed
export var recalcIndicatorData = function (data, dataId, updates, prevData) {
    var _a, _b;
    var _c = updates !== null && updates !== void 0 ? updates : {}, newIndSrcId = _c.newIndSrcId, newParams = _c.newParams;
    var indicatorData = data.find(function (d) { return d.id === dataId && d.type === "indicator"; });
    if ((indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData.type) !== "indicator")
        return null;
    var iFn = (_a = indicatorData.indicator) === null || _a === void 0 ? void 0 : _a.indicatorFn;
    var indSrcId = newIndSrcId ? newIndSrcId : indicatorData.indSrcId;
    var srcDataseries = (_b = data.find(function (dat) { return dat.id === indSrcId; })) === null || _b === void 0 ? void 0 : _b.data;
    if (!iFn || !srcDataseries)
        return null;
    var params = newParams ? newParams : indicatorData.indicator.params;
    return __assign(__assign({}, indicatorData), { data: iFn(__assign({ dataseries: srcDataseries, prev: prevData !== null && prevData !== void 0 ? prevData : [] }, params.reduce(function (accObj, curParam) {
            var _a;
            return (__assign(__assign({}, accObj), (_a = {}, _a[curParam.name] = curParam.val, _a)));
        }, {}))), fullName: !newParams
            ? indicatorData.fullName
            : indicatorData.name + "(" + newParams.map(function (param) { return param.val; }).join(",") + ")", indSrcId: indSrcId, indicator: __assign(__assign({}, indicatorData.indicator), { params: params }) });
};
// indicator data state itself may depend on other indicator data 
export var getIndicatorsCalcDepIndicatorDatas = function (data, dataId, recursionResult) {
    var recResult = recursionResult !== null && recursionResult !== void 0 ? recursionResult : [];
    if (recResult.includes(dataId))
        return [];
    var indicatorData = data.find(function (d) { return (d === null || d === void 0 ? void 0 : d.id) === dataId && (d === null || d === void 0 ? void 0 : d.type) === "indicator"; });
    if ((indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData.type) !== "indicator")
        return [];
    var child = data.find(function (d) { return d.id === indicatorData.indSrcId; });
    return (child === null || child === void 0 ? void 0 : child.type) === "chart"
        ? [indicatorData.id]
        : (child === null || child === void 0 ? void 0 : child.type) === "indicator"
            ? __spreadArray(__spreadArray([], getIndicatorsCalcDepIndicatorDatas(data, child.id, __spreadArray(__spreadArray([], recResult, true), [indicatorData.id], false)), true), [indicatorData.id], false) : [];
};
// when changing indicator data other indicator data(s) may be affected and to be updated, too
export var getIndicatorsDependantIndicatorDatas = function (data, dataId) {
    return data.filter(function (dat) { return dat.type === "indicator" && dat.indSrcId === dataId; })
        .map(function (dat) { return __spreadArray([dat.id], getIndicatorsDependantIndicatorDatas(data, dat.id), true); })
        .flat();
};
export var isCircularIndicatorDependency = function (data, dataId, newIndSrcId) {
    return getIndicatorsCalcDepIndicatorDatas(data, newIndSrcId).includes(dataId);
};
export var updateIndicatorData = function (current, params) {
    var dataId = params.dataId, prevData = params.prevData, newParam = params.newParam, newIndSrcId = params.newIndSrcId;
    var dataGraph = current.data.find(function (dat) { return dat.id === dataId; });
    if ((dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.type) !== "indicator")
        return current.data;
    var newParams = newParam &&
        dataGraph.indicator.params.map(function (param, pIdx) {
            return pIdx !== (newParam === null || newParam === void 0 ? void 0 : newParam.paramIdx) ? param : __assign(__assign({}, param), { val: newParam.newValue });
        });
    var data = current.data;
    // dismiss circular dependencies
    if (!!newIndSrcId && isCircularIndicatorDependency(data, dataId, newIndSrcId))
        return data;
    var dependingDataIndicatorsIds = uniq(__spreadArray([dataId], getIndicatorsDependantIndicatorDatas(data, dataId), true));
    var dataCopy = __spreadArray([], data, true);
    dependingDataIndicatorsIds.forEach(function (id) {
        var dataIdx = dataCopy.findIndex(function (dat) { return dat.id === id; });
        var updatedIndData = recalcIndicatorData(dataCopy, id, id === dataId ? { newIndSrcId: newIndSrcId, newParams: newParams } : undefined, prevData !== null && prevData !== void 0 ? prevData : []);
        if (updatedIndData)
            dataCopy[dataIdx] = updatedIndData;
    });
    return dataCopy;
};
//# sourceMappingURL=IndicatorDataFactory.js.map