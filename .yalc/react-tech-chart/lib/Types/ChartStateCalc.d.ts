import { ChartPeriod } from "./ChartTime";
import { DataSeries, ChartDataset, IndicatorDataset, PixDataset } from "./ChartStateData";
export declare type CalcGraphState = {
    curData?: DataSeries;
    curTicks?: PixDataset[];
    yMax: number;
    yMaxExact: number;
    yMin: number;
    yMinExact: number;
    lastDataset: {
        x: number;
        pixX: number;
        data: ChartDataset | IndicatorDataset;
        dateString: string;
    } | null;
};
export declare type CalcYaxisState = {
    graphs: (CalcGraphState | null)[];
    decimals: number;
    yMax: number;
    yMin: number;
    yMaxExact: number;
    yMinExact: number;
    optIntervalY: number;
    heightPerPt: number;
    translatedY: number;
    drawTicks: {
        pixY: number;
        label: string;
    }[];
    pixY0: number;
};
export declare type CalcSubchartState = {
    yaxis: CalcYaxisState[];
};
export declare type CalcPointerState = {
    isHovering: boolean;
    move: {
        pixX: number;
        pixY: number;
        pixXSnap: number;
        pixXUnlimSnap: number;
        x: number | null;
        xUnlimited: number;
        xDateString: string;
        subchartIdx: number | null;
        snapDatasets: {
            yaxisIdx: number;
            graphIdx: number;
            y: number;
            ySnap: string | null;
            pixYSnap: number | null;
            data: ChartDataset | IndicatorDataset;
            dateString: string;
        }[];
    };
    click: {
        clickedSubchartIdx: number | null;
    };
};
export declare type CalcXaxisState = {
    totalTranslatedX: number;
    scaledWidthPerTick: number;
    xStart: number;
    pixXStart: number;
    xEnd: number;
    xLast: number;
    xUnlimited: number;
    pixXEnd: number;
    initialWidthPerTick: number;
    curTicks: {
        x: number;
        dateString: string;
    }[];
    optChartPeriod: ChartPeriod | null;
    xToPix?: (x: number, translatedX?: number) => number;
    pixToX?: (pixX: number, translatedX?: number) => number;
};
