import { chartPeriods, getDateUnits } from "../utils/DateTime";
import { isNullish } from "../../utils/Basics";
export var getTickPeriod = function (date, dateStat, chartPeriod, optPeriod) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    if (!chartPeriod || !optPeriod || !dateStat)
        return null;
    var optPeriodName = optPeriod.name, optMultiply = optPeriod.multiply;
    var numericDate = getDateUnits(date);
    var minute = numericDate.minute, hour = numericDate.hour, day = numericDate.day, week = numericDate.week, month = numericDate.month, year = numericDate.year;
    var yearIdx = dateStat.years.findIndex(function (val) { return val.year === year; });
    var monthIdx = (_c = (_b = (_a = dateStat.years) === null || _a === void 0 ? void 0 : _a[yearIdx]) === null || _b === void 0 ? void 0 : _b.months) === null || _c === void 0 ? void 0 : _c.findIndex(function (val) { return val.month === month; });
    var weekIdx = (_h = (_g = (_f = (_e = (_d = dateStat.years) === null || _d === void 0 ? void 0 : _d[yearIdx]) === null || _e === void 0 ? void 0 : _e.months) === null || _f === void 0 ? void 0 : _f[monthIdx]) === null || _g === void 0 ? void 0 : _g.weeks) === null || _h === void 0 ? void 0 : _h.findIndex(function (val) { return val.week === week; });
    var dayIdx = (_q = (_p = (_o = (_m = (_l = (_k = (_j = dateStat.years) === null || _j === void 0 ? void 0 : _j[yearIdx]) === null || _k === void 0 ? void 0 : _k.months) === null || _l === void 0 ? void 0 : _l[monthIdx]) === null || _m === void 0 ? void 0 : _m.weeks) === null || _o === void 0 ? void 0 : _o[weekIdx]) === null || _p === void 0 ? void 0 : _p.days) === null || _q === void 0 ? void 0 : _q.findIndex(function (v) { return v.day === day; });
    var dayStat = (_x = (_w = (_v = (_u = (_t = (_s = (_r = dateStat.years) === null || _r === void 0 ? void 0 : _r[yearIdx]) === null || _s === void 0 ? void 0 : _s.months) === null || _t === void 0 ? void 0 : _t[monthIdx]) === null || _u === void 0 ? void 0 : _u.weeks) === null || _v === void 0 ? void 0 : _v[weekIdx]) === null || _w === void 0 ? void 0 : _w.days) === null || _x === void 0 ? void 0 : _x[dayIdx];
    if (yearIdx === -1 || monthIdx === -1 || weekIdx === -1 || dayIdx === -1 || !dayStat)
        return null;
    var isIntradayData = chartPeriod.period < ((_z = (_y = chartPeriods === null || chartPeriods === void 0 ? void 0 : chartPeriods[2]) === null || _y === void 0 ? void 0 : _y.range) === null || _z === void 0 ? void 0 : _z[0]);
    var isIntraHourData = chartPeriod.period < ((_1 = (_0 = chartPeriods === null || chartPeriods === void 0 ? void 0 : chartPeriods[1]) === null || _0 === void 0 ? void 0 : _0.range) === null || _1 === void 0 ? void 0 : _1[0]);
    var hourIdx = isIntradayData ? dayStat === null || dayStat === void 0 ? void 0 : dayStat.hours.findIndex(function (val) { return val.hour === hour; }) : undefined;
    var minuteIdx = isIntradayData &&
        !isNullish(hourIdx) &&
        ((_3 = (_2 = dayStat === null || dayStat === void 0 ? void 0 : dayStat.hours) === null || _2 === void 0 ? void 0 : _2[hourIdx]) === null || _3 === void 0 ? void 0 : _3.minutes.findIndex(function (val) { return val.minute === minute; })) !== -1
        ? (_5 = (_4 = dayStat === null || dayStat === void 0 ? void 0 : dayStat.hours) === null || _4 === void 0 ? void 0 : _4[hourIdx]) === null || _5 === void 0 ? void 0 : _5.minutes.findIndex(function (val) { return val.minute === minute; })
        : undefined;
    if ((isIntradayData && isNullish(hourIdx)) || (isIntraHourData && isNullish(minuteIdx)))
        return null;
    // chartperiod (period of chartdata) is optimal period @multiply=1 -> every tick is a new period on xaxis
    if (chartPeriod.name === optPeriodName && optMultiply === 1)
        return optPeriodName;
    var statIdxs = { yearIdx: yearIdx, monthIdx: monthIdx, weekIdx: weekIdx, dayIdx: dayIdx, hourIdx: hourIdx, minuteIdx: minuteIdx };
    var isNewIntraday = !hourIdx && !minuteIdx; // hourIdx, minuteIdx === 0 or undefined
    var monthMultiplys = optPeriodName === "months" ? optMultiply : 1;
    var weekMultiplys = optPeriodName === "weeks" ? optMultiply : 1;
    var dayMultiplys = optPeriodName === "days" ? optMultiply : 1;
    var hourMultiplys = optPeriodName === "hours" ? optMultiply : 1;
    return isNewYear(numericDate, dateStat, statIdxs) && !hourIdx && !minuteIdx
        ? "years"
        : optPeriodName !== "years" && isNewMonth(numericDate, dateStat, statIdxs, monthMultiplys) && isNewIntraday
            ? "months"
            : !["years", "months"].includes(optPeriodName) &&
                isNewIsoWeek(numericDate, dateStat, statIdxs, weekMultiplys) &&
                isNewIntraday
                ? "weeks"
                : !["years", "months", "weeks"].includes(optPeriodName) &&
                    isNewDay(numericDate, dateStat, statIdxs, dayMultiplys) &&
                    isNewIntraday
                    ? "days"
                    : !["years", "months", "weeks", "days"].includes(optPeriodName) &&
                        isNewHour(numericDate, dateStat, statIdxs, hourMultiplys) &&
                        !minuteIdx
                        ? "hours"
                        : optPeriodName === "minutes" && isNewMinute(numericDate, dateStat, statIdxs, optMultiply)
                            ? "minutes"
                            : null;
};
var isNewYear = function (numericDate, dateStat, statIdxs
//periodMultiply: 1 = 1
) {
    var _a, _b, _c;
    var day = numericDate.day, week = numericDate.week, month = numericDate.month;
    var yearIdx = statIdxs.yearIdx;
    if (!dateStat)
        return false;
    var firstMonthStat = (_c = (_b = (_a = dateStat.years) === null || _a === void 0 ? void 0 : _a[yearIdx]) === null || _b === void 0 ? void 0 : _b.months) === null || _c === void 0 ? void 0 : _c[0];
    if (firstMonthStat.weeks[0].days[0].day === day &&
        firstMonthStat.weeks[0].week === week &&
        firstMonthStat.month === month)
        return true;
    return false;
};
var isNewMonth = function (numericDate, dateStat, statIdxs, periodMultiply) {
    if (periodMultiply === void 0) { periodMultiply = 1; }
    var day = numericDate.day, week = numericDate.week;
    var yearIdx = statIdxs.yearIdx, monthIdx = statIdxs.monthIdx;
    if ((monthIdx + 1) % periodMultiply !== 0 || yearIdx === -1 || monthIdx === -1 || !dateStat)
        return false;
    if (dateStat.years[yearIdx].months[monthIdx].weeks[0].days[0].day === day &&
        dateStat.years[yearIdx].months[monthIdx].weeks[0].week === week)
        return true;
    return false;
};
var isNewIsoWeek = function (numericDate, dateStat, statIdxs, periodMultiply) {
    if (periodMultiply === void 0) { periodMultiply = 1; }
    var day = numericDate.day, week = numericDate.week;
    var yearIdx = statIdxs.yearIdx, monthIdx = statIdxs.monthIdx, weekIdx = statIdxs.weekIdx;
    if (!dateStat)
        return false;
    if (dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].days[0].day === day &&
        dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].week === week) {
        if (periodMultiply === 2) {
            var daysInMonth_1 = 0;
            dateStat.years[yearIdx].months[monthIdx].weeks.forEach(function (val) { return (daysInMonth_1 += val.days.length); });
            var curDays = 0;
            var opt = 0;
            var optWeekIdx = 0;
            var optimalDaysTarget = Math.round(daysInMonth_1 / 2);
            for (var i = 0; i < dateStat.years[yearIdx].months[monthIdx].weeks.length; i++) {
                var weekInMonth = dateStat.years[yearIdx].months[monthIdx].weeks[i];
                if (Math.abs(curDays + weekInMonth.days.length - optimalDaysTarget) < Math.abs(opt - optimalDaysTarget)) {
                    opt = curDays + weekInMonth.days.length;
                    optWeekIdx = i + 1;
                }
                curDays += weekInMonth.days.length;
            }
            if (weekIdx === optWeekIdx)
                return true;
            return false;
        }
        else if (periodMultiply === 1) {
            if (weekIdx === 1 && dateStat.years[yearIdx].months[monthIdx].weeks[0].days.length < 3)
                return false;
            if (weekIdx === dateStat.years[yearIdx].months[monthIdx].weeks.length - 1 &&
                dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].days.length < 3)
                return false;
            return true;
        }
    }
    return false;
};
var isNewDay = function (numericDate, dateStat, statIdxs, periodMultiply) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (periodMultiply === void 0) { periodMultiply = 1; }
    var day = numericDate.day;
    var yearIdx = statIdxs.yearIdx, monthIdx = statIdxs.monthIdx, weekIdx = statIdxs.weekIdx, dayIdx = statIdxs.dayIdx;
    if (!dateStat)
        return false;
    var dayStat = (_g = (_f = (_e = (_d = (_c = (_b = (_a = dateStat.years) === null || _a === void 0 ? void 0 : _a[yearIdx]) === null || _b === void 0 ? void 0 : _b.months) === null || _c === void 0 ? void 0 : _c[monthIdx]) === null || _d === void 0 ? void 0 : _d.weeks) === null || _e === void 0 ? void 0 : _e[weekIdx]) === null || _f === void 0 ? void 0 : _f.days) === null || _g === void 0 ? void 0 : _g[dayIdx];
    if (dayIdx === -1 || weekIdx === -1 || monthIdx === -1 || yearIdx === -1 || !dayStat)
        return false;
    // const { multiply: optPeriodMultiply, name: optPeriodName } = optPeriod;
    if (dayStat.day === day && periodMultiply === 1) {
        return true;
    }
    if (dayStat.day === day && periodMultiply === 2) {
        if (dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].days.length <= 3)
            return false; // weeks with up to 3 days are not diveded
        if ((dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].days.length === 4 && (dayIdx === 0 || dayIdx === 2)) ||
            (dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].days.length === 5 && (dayIdx === 0 || dayIdx === 2)) ||
            (dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].days.length === 6 &&
                (dayIdx === 0 || dayIdx === 2 || dayIdx === 4)) ||
            (dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].days.length === 7 &&
                (dayIdx === 0 || dayIdx === 2 || dayIdx === 5)))
            return true;
    }
    return false;
};
var isNewHour = function (numericDate, dateStat, statIdxs, periodMultiply) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (periodMultiply === void 0) { periodMultiply = 1; }
    var hour = numericDate.hour;
    var yearIdx = statIdxs.yearIdx, monthIdx = statIdxs.monthIdx, weekIdx = statIdxs.weekIdx, dayIdx = statIdxs.dayIdx, hourIdx = statIdxs.hourIdx;
    if (!dateStat)
        return false;
    var dayStat = (_g = (_f = (_e = (_d = (_c = (_b = (_a = dateStat.years) === null || _a === void 0 ? void 0 : _a[yearIdx]) === null || _b === void 0 ? void 0 : _b.months) === null || _c === void 0 ? void 0 : _c[monthIdx]) === null || _d === void 0 ? void 0 : _d.weeks) === null || _e === void 0 ? void 0 : _e[weekIdx]) === null || _f === void 0 ? void 0 : _f.days) === null || _g === void 0 ? void 0 : _g[dayIdx];
    var hourStat = isNullish(hourIdx) ? null : (_h = dayStat === null || dayStat === void 0 ? void 0 : dayStat.hours) === null || _h === void 0 ? void 0 : _h[hourIdx];
    if (dayIdx === -1 ||
        weekIdx === -1 ||
        monthIdx === -1 ||
        yearIdx === -1 ||
        hourIdx === -1 ||
        !hourStat ||
        isNullish(hourIdx))
        return false;
    if (hourIdx % periodMultiply !== 0)
        return false;
    if (hourStat.hour === hour)
        return true; //
    return false;
};
var isNewMinute = function (numericDate, dateStat, statIdxs, periodMultiply) {
    if (periodMultiply === void 0) { periodMultiply = 1; }
    var minute = numericDate.minute;
    var yearIdx = statIdxs.yearIdx, monthIdx = statIdxs.monthIdx, weekIdx = statIdxs.weekIdx, dayIdx = statIdxs.dayIdx, hourIdx = statIdxs.hourIdx, minuteIdx = statIdxs.minuteIdx;
    if (!dateStat)
        return false;
    var dayStat = dateStat.years[yearIdx].months[monthIdx].weeks[weekIdx].days[dayIdx];
    if (yearIdx === -1 || monthIdx === -1 || weekIdx === -1 || dayIdx === -1)
        return false;
    if (isNullish(hourIdx) || hourIdx === -1 || isNullish(minuteIdx) || minuteIdx === -1)
        return false;
    var minuteStat = dayStat.hours[hourIdx].minutes[minuteIdx];
    if (minuteIdx % periodMultiply !== 0)
        return false;
    if (minuteStat.minute === minute)
        return true;
    return false;
};
//# sourceMappingURL=PeriodUtils.js.map