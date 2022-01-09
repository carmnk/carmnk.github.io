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
import countBy from "lodash/countBy";
import uniqBy from "lodash/uniqBy";
import { chartPeriods, getUnitOfDate } from "../utils/DateTime";
import { getMaxDataSeriesDecimals } from "../utils/Utils";
import { isNullish } from "../../utils/Basics";
import { setStateProp } from "../../utils/React";
import { getIndicatorsDependantIndicatorDatas, recalcIndicatorData } from "./IndicatorDataFactory";
export var createChartData = function (chartData, chartName, id) {
    var _a = getGraphMetaData(chartData), decimals = _a.decimals, isDescending = _a.isDescending, meta = __rest(_a, ["decimals", "isDescending"]);
    if (isDescending)
        chartData.reverse();
    var dateStat = isNullish(meta === null || meta === void 0 ? void 0 : meta.chartPeriod) ? null : getDateStat(chartData, meta === null || meta === void 0 ? void 0 : meta.chartPeriod);
    if (isNullish(dateStat))
        return null;
    return {
        id: id,
        data: chartData,
        meta: meta,
        dateStat: dateStat,
        type: "chart",
        name: chartName,
        decimals: decimals,
    };
};
export var updateChartData = function (chartData, newDataSeries) {
    var chartPeriod = chartData.meta.chartPeriod;
    if (!chartPeriod)
        return chartData;
    return __assign(__assign({}, chartData), { data: __spreadArray(__spreadArray([], chartData.data, true), newDataSeries, true), dateStat: getDateStat(newDataSeries, chartPeriod, chartData.dateStat) });
};
export var updateChartDataAndDeps = function (current, dataId, newDatasets) {
    var data = current.data;
    var datIdx = data.findIndex(function (dat) { return dat.id === dataId; });
    var dataGraph = data === null || data === void 0 ? void 0 : data[datIdx];
    if ((dataGraph === null || dataGraph === void 0 ? void 0 : dataGraph.type) !== "chart" || !newDatasets || newDatasets.length === 0)
        return current;
    var updatedGraph = updateChartData(dataGraph, newDatasets);
    var depIndicators = getIndicatorsDependantIndicatorDatas(data, dataId);
    var dataCopy = __spreadArray([], setStateProp(current.data, [datIdx], updatedGraph), true);
    depIndicators.forEach(function (id) {
        var dataIdx = dataCopy.findIndex(function (dat) { return dat.id === id; });
        var indicatorData = dataCopy === null || dataCopy === void 0 ? void 0 : dataCopy[dataIdx];
        if ((indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData.type) !== "indicator")
            return;
        var updatedIndData = recalcIndicatorData(dataCopy, id, undefined, indicatorData.data);
        if (updatedIndData)
            dataCopy[dataIdx] = updatedIndData;
    });
    return __assign(__assign({}, current), { data: dataCopy });
};
var getChartPeriod = function (dataPeriod) {
    var matchConstPeriod = chartPeriods.find(function (constPeriod) {
        return dataPeriod === constPeriod.period || (dataPeriod >= constPeriod.range[0] && dataPeriod <= constPeriod.range[1]);
    });
    if (!matchConstPeriod)
        return null;
    var scaleMultiplys = matchConstPeriod.scaleMultiplys, range = matchConstPeriod.range, rawChartPeriod = __rest(matchConstPeriod, ["scaleMultiplys", "range"]);
    var multiply = Math.round(dataPeriod / matchConstPeriod.period);
    var chartPeriod = __assign(__assign({}, rawChartPeriod), { multiply: multiply });
    return chartPeriod;
};
var guessChartDataSeriesPeriod = function (dataSeries) {
    var getDeltaT = function (dataPoint1, dataPoint0) {
        return !(dataPoint1 === null || dataPoint1 === void 0 ? void 0 : dataPoint1.date) || !(dataPoint0 === null || dataPoint0 === void 0 ? void 0 : dataPoint0.date) ? 0 : dataPoint1.date.valueOf() - dataPoint0.date.valueOf();
    };
    var deltaPeriods = dataSeries.slice(1).map(function (dataset, dIdx) { return getDeltaT(dataSeries[dIdx + 1], dataSeries[dIdx]); });
    var deltaPeriodOcc = countBy(deltaPeriods);
    var deltaPeriodsStat = Object.entries(deltaPeriodOcc).map(function (_a) {
        var key = _a[0], val = _a[1];
        return ({ dT: parseInt(key, 10), amt: val });
    });
    var deltaPeriodAmts = deltaPeriodsStat.map(function (period) { return period.amt; });
    var periodMaxOccured = deltaPeriodAmts.indexOf(Math.max.apply(Math, deltaPeriodAmts));
    var dataPeriod = Math.abs(deltaPeriodsStat[periodMaxOccured].dT);
    var dataPeriodConfidence = deltaPeriodsStat[periodMaxOccured].amt / dataSeries.length;
    var chartPeriod = getChartPeriod(dataPeriod);
    var isDescending = deltaPeriodsStat[periodMaxOccured].dT < 0;
    return { dataPeriod: dataPeriod, dataPeriodConfidence: dataPeriodConfidence, chartPeriod: chartPeriod, isDescending: isDescending };
};
var getGraphMetaData = function (dataSeries) {
    var _a = guessChartDataSeriesPeriod(dataSeries), dataPeriod = _a.dataPeriod, dataPeriodConfidence = _a.dataPeriodConfidence, chartPeriod = _a.chartPeriod, isDescending = _a.isDescending;
    var decimals = getMaxDataSeriesDecimals(dataSeries);
    return {
        dataPeriod: dataPeriod,
        chartPeriod: chartPeriod,
        dataPeriodConfidence: dataPeriodConfidence,
        type: "candlechart",
        decimals: decimals,
        isDescending: isDescending,
    };
};
export var getDateStat = function (data, chartPeriod, prevDateStat) {
    var _a;
    var periodNames = chartPeriods.map(function (chartPeriod) { return chartPeriod.name; });
    var periodNamesToCheck = periodNames.slice(periodNames.findIndex(function (period) { return period === chartPeriod.name; }));
    var periodsToCheck = periodNamesToCheck.map(function (period) { return period.slice(0, period.length - 1); });
    // relevant periods resp. date units for each dataset
    var dataPeriods = data.map(function (dataset) {
        var onePeriodStat = {};
        periodsToCheck.forEach(function (period, pIdx) {
            onePeriodStat[period] = getUnitOfDate(dataset.date, periodNamesToCheck[pIdx]);
        });
        return onePeriodStat;
    });
    // filter dataPeriods (see context above) by higher periods (resp. date units) to avoid duplicates (e.g. jan-01 might occure multiple times)
    var filterDataPeriods = function (filterDate, periodName) {
        return isNullish(filterDate) || periodName === "years"
            ? dataPeriods
            : dataPeriods.filter(function (datPeriods) {
                return datPeriods.year === (filterDate === null || filterDate === void 0 ? void 0 : filterDate.year) &&
                    (datPeriods.month === (filterDate === null || filterDate === void 0 ? void 0 : filterDate.month) || ["months"].includes(periodName)) &&
                    (datPeriods.week === (filterDate === null || filterDate === void 0 ? void 0 : filterDate.week) || ["months", "weeks"].includes(periodName)) &&
                    (datPeriods.day === (filterDate === null || filterDate === void 0 ? void 0 : filterDate.day) || ["months", "weeks", "days"].includes(periodName)) &&
                    (datPeriods.hour === (filterDate === null || filterDate === void 0 ? void 0 : filterDate.hour) || periodName !== "minutes");
            });
    };
    // get tree-structure of ChartDates acc. to DateStat
    var getDateTree = function (periodName, recursionDate) {
        var date = recursionDate ? recursionDate : null;
        var filteredPeriods = filterDataPeriods(date, periodName);
        return periodName === "minutes"
            ? {
                minutes: uniqBy(filteredPeriods, function (val) { return "".concat(val.minute); }).map(function (periods) { return ({
                    minute: periods.minute,
                }); }),
            }
            : periodName === "hours"
                ? {
                    hours: uniqBy(filteredPeriods, function (val) { return "".concat(val.hour); }).map(function (periods) { return ({
                        hour: periods.hour,
                        minutes: "minute" in periods ? getDateTree("minutes", periods).minutes : [],
                    }); }),
                }
                : periodName === "days"
                    ? {
                        days: uniqBy(filteredPeriods, function (val) { return "".concat((val.year, val.month, val.week, val.day)); }).map(function (periods) { return ({
                            day: periods.day,
                            hours: "hour" in periods ? getDateTree("hours", periods).hours : [],
                        }); }),
                    }
                    : periodName === "weeks"
                        ? {
                            weeks: uniqBy(filteredPeriods, function (val) { return "".concat((val.year, val.month, val.week)); }).map(function (periods) { return ({
                                week: periods.week,
                                days: "day" in periods ? getDateTree("days", periods).days : [],
                            }); }),
                        }
                        : periodName === "months"
                            ? {
                                months: uniqBy(filteredPeriods, function (val) { return "".concat((val.year, val.month)); }).map(function (periods) { return ({
                                    month: periods.month,
                                    weeks: "week" in periods ? getDateTree("weeks", periods).weeks : [],
                                }); }),
                            }
                            : periodName === "years"
                                ? {
                                    years: uniqBy(dataPeriods, "year").map(function (periods) { return ({
                                        year: periods.year,
                                        months: "month" in periods ? getDateTree("months", periods).months : [],
                                    }); }),
                                }
                                : null;
    };
    var dateStat = dataPeriods.reduce(function (acc, cur) { return ({
        years: !acc.lastData ? 1 : acc.lastData.year !== cur.year ? acc.years + 1 : acc.years,
        months: !acc.lastData ? ("month" in cur ? 1 : 0) : acc.lastData.month !== cur.month ? acc.months + 1 : acc.months,
        weeks: !acc.lastData ? ("week" in cur ? 1 : 0) : acc.lastData.week !== cur.week ? acc.weeks + 1 : acc.weeks,
        days: !acc.lastData ? ("day" in cur ? 1 : 0) : acc.lastData.day !== cur.day ? acc.days + 1 : acc.days,
        hours: !acc.lastData ? ("hour" in cur ? 1 : 0) : acc.lastData.hour !== cur.hour ? acc.hours + 1 : acc.hours,
        minutes: !acc.lastData
            ? "minute" in cur
                ? 1
                : 0
            : acc.lastData.minute !== cur.minute
                ? acc.minutes + 1
                : acc.minutes,
        lastData: cur,
    }); }, prevDateStat
        ? prevDateStat.accAmt
        : {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            lastData: null,
        });
    var accAmt = __rest(dateStat, []);
    var dateTree = (_a = getDateTree("years")) === null || _a === void 0 ? void 0 : _a.years;
    function mergeDeep(prev, newStat) {
        var _a, _b;
        var lastPrev = (_a = prev === null || prev === void 0 ? void 0 : prev[prev.length - 1]) !== null && _a !== void 0 ? _a : null;
        var firstNew = (_b = newStat === null || newStat === void 0 ? void 0 : newStat[0]) !== null && _b !== void 0 ? _b : null;
        if (!lastPrev || !firstNew)
            return __spreadArray(__spreadArray([], prev, true), newStat, true);
        var linkProp = "year" in lastPrev
            ? "year"
            : "month" in lastPrev
                ? "month"
                : "week" in lastPrev
                    ? "week"
                    : "day" in lastPrev
                        ? "day"
                        : "hour" in lastPrev
                            ? "hour"
                            : "minute" in lastPrev
                                ? "minute"
                                : null;
        var subProp = "year" in lastPrev && "months" in lastPrev && "months" in firstNew
            ? { year: lastPrev.year, months: mergeDeep(lastPrev.months, firstNew.months) }
            : "month" in lastPrev && "weeks" in lastPrev && "weeks" in firstNew
                ? { month: lastPrev.month, weeks: mergeDeep(lastPrev.weeks, firstNew.weeks) }
                : "week" in lastPrev && "days" in lastPrev && "days" in firstNew
                    ? { week: lastPrev.week, days: mergeDeep(lastPrev.days, firstNew.days) }
                    : "day" in lastPrev && "hours" in lastPrev && "hours" in firstNew
                        ? { day: lastPrev.day, hours: mergeDeep(lastPrev.hours, firstNew.hours) }
                        : "hour" in lastPrev && "minutes" in lastPrev && "minutes" in firstNew
                            ? { hour: lastPrev.hour, minutes: mergeDeep(lastPrev.minutes, firstNew.minutes) }
                            : null;
        var lastPrevVal = linkProp && linkProp in lastPrev ? lastPrev[linkProp] : null;
        var firstNewVal = linkProp && linkProp in firstNew ? firstNew[linkProp] : null;
        return lastPrevVal === firstNewVal && !isNullish(lastPrevVal) && !isNullish(firstNewVal) && linkProp && subProp
            ? __spreadArray(__spreadArray(__spreadArray([], prev.slice(0, prev.length - 1), true), [subProp], false), newStat.slice(1), true) : __spreadArray(__spreadArray([], prev, true), newStat, true);
    }
    return {
        years: prevDateStat ? mergeDeep(prevDateStat.years, dateTree) : dateTree,
        accAmt: accAmt,
    };
};
//# sourceMappingURL=ChartDataFactory.js.map