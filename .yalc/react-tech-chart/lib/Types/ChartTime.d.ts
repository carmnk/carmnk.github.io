export declare type PeriodUnit = "minute" | "hour" | "day" | "week" | "month" | "year";
export declare type PeriodName = "minutes" | "hours" | "days" | "weeks" | "months" | "years";
/** Type of Periods const */
declare type ConstPeriod<T = PeriodName> = {
    name: T;
    period: number;
    scaleMultiplys: number[];
    range: number[];
};
export declare type ConstPeriods = [
    ConstPeriod<"minutes">,
    ConstPeriod<"hours">,
    ConstPeriod<"days">,
    ConstPeriod<"weeks">,
    ConstPeriod<"months">,
    ConstPeriod<"years">
];
/** Chart Period Type */
export declare type ChartPeriod<T = PeriodName> = {
    name: T;
    period: number;
    multiply: number;
};
export declare type NumericDate = {
    minute: number;
    hour: number;
    day: number;
    week: number;
    month: number;
    year: number;
};
export {};
