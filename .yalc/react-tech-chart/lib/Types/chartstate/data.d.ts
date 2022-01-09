import { IndicatorModel } from "../IndicatorModel";
import { ChartPeriod, NumericDate } from "../utils/periods";
import { ChartDataSeries, IndicatorDataSeries } from "../utils/dataseries";
export declare type Data = ChartData | IndicatorData;
export declare type ChartData = {
    id: string;
    name: string;
    type: "chart";
    data: ChartDataSeries;
    decimals: number;
    dateStat: ChartDateStat | null;
    meta: {
        chartPeriod: ChartPeriod | null;
        dataPeriod: number;
        dataPeriodConfidence: number;
        type: "candlechart" | "linechart";
    };
};
export declare type IndicatorData = {
    id: string;
    name: string;
    fullName: string;
    type: "indicator";
    data: IndicatorDataSeries;
    decimals: number;
    indicator: IndicatorModel;
    indSrcId: string;
};
export declare type ChartDateStat = {
    years: {
        year: number;
        months: {
            month: number;
            weeks: {
                week: number;
                days: {
                    day: number;
                    hours: {
                        hour: number;
                        minutes: {
                            minute: number;
                        }[];
                    }[];
                }[];
            }[];
        }[];
    }[];
    accAmt: {
        years: number;
        months: number;
        weeks: number;
        days: number;
        hours: number;
        minutes: number;
        lastData: Partial<NumericDate> | null;
    };
};
export declare type MinuteStat = {
    minute: number;
}[];
export declare type HourStat = {
    hour: number;
    minutes: MinuteStat;
}[];
export declare type DayStat = {
    day: number;
    hours: HourStat;
}[];
export declare type WeekStat = {
    week: number;
    days: DayStat;
}[];
export declare type MonthStat = {
    month: number;
    weeks: WeekStat;
}[];
export declare type YearStat = {
    year: number;
    months: MonthStat;
}[];
export declare type PeriodStat = YearStat | MonthStat | WeekStat | DayStat | HourStat | MinuteStat;
