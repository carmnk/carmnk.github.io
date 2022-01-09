import { format, getDate, getHours, getISOWeek, getMinutes, getMonth, getYear } from "date-fns";
var minuteMs = 60000;
var hourMs = minuteMs * 60;
var dayMs = hourMs * 24;
var weekMs = dayMs * 7;
var monthMs = dayMs * 31;
var yearMs = dayMs * 365;
export var chartPeriods = [
    { name: "minutes", period: minuteMs, scaleMultiplys: [2, 5, 15, 30], range: [minuteMs, 30 * minuteMs] },
    { name: "hours", period: hourMs, scaleMultiplys: [2, 4, 12], range: [hourMs, 12 * hourMs] },
    { name: "days", period: dayMs, scaleMultiplys: [2], range: [dayMs, dayMs] },
    { name: "weeks", period: weekMs, scaleMultiplys: [2], range: [3 * dayMs, 11 * dayMs] },
    { name: "months", period: monthMs, scaleMultiplys: [2, 3, 6], range: [28 * dayMs, 31 * dayMs] },
    { name: "years", period: yearMs, scaleMultiplys: [], range: [365 * dayMs, 366 * dayMs] },
];
export var getDateString = function (date, period) {
    switch (period) {
        case "minutes":
            return format(date, "HH:mm");
        case "hours":
            return format(date, "HH:00");
        case "days":
            return format(date, "dd");
        case "weeks":
            return format(date, "dd");
        case "months":
            return format(date, "MMM");
        case "years":
            return format(date, "yyyy");
        default:
            return "";
    }
};
export var getUnitOfDate = function (date, period) {
    switch (period) {
        case "minutes":
            return getMinutes(date);
        case "hours":
            return getHours(date);
        case "days":
            return getDate(date);
        case "weeks":
            return getISOWeek(date);
        case "months":
            return getMonth(date);
        case "years":
            return getYear(date);
        default:
            return 0;
    }
};
export var getDateUnits = function (date) { return ({
    minute: getUnitOfDate(date, "minutes"),
    hour: getUnitOfDate(date, "hours"),
    day: getUnitOfDate(date, "days"),
    week: getUnitOfDate(date, "weeks"),
    month: getUnitOfDate(date, "months"),
    year: getUnitOfDate(date, "years"),
}); };
//# sourceMappingURL=DateTime.js.map