import * as T from "../../Types";
import { getDecimals, isNullish } from "../../utils/Basics";
export var pureXToPix = function (x, translated, widthPerTick) {
    return x * widthPerTick + translated;
};
export var purePixToX = function (pixX, translated, widthPerTick) {
    return (pixX - translated) / widthPerTick;
};
export var pureYToPix = function (y, pixYBottom, decimals, translatedY, pixPerPt) {
    return pixYBottom - y * Math.pow(10, decimals) * pixPerPt + translatedY;
};
export var purePixToY = function (pixY, pixYBottom, decimals, translatedY, pixPerPt) {
    return ((pixYBottom + translatedY - pixY) / pixPerPt) * Math.pow(10, -decimals);
};
export var getDataSeriesMaxY = function (dataSeries, fixedYScale, graphTypes) {
    return T.isIndicatorDataset(dataSeries[0]) && !!fixedYScale
        ? fixedYScale[1]
        : Math.max.apply(Math, dataSeries.map(function (dataset) {
            if (T.isIndicatorDataset(dataset)) {
                var max = Math.max.apply(Math, dataset.prices.filter(function (price, pIdx) { var _a, _b; return price !== null && ["line", "bars"].includes((_b = (_a = graphTypes === null || graphTypes === void 0 ? void 0 : graphTypes[pIdx]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : ""); }));
                return isNullish(max) ? 0 : max;
            }
            if (T.isCandleChartDataset(dataset))
                return dataset.high;
            return dataset.close;
        }));
};
export var getDataSeriesMinY = function (dataSeries, fixedYScale, graphTypes) {
    return T.isIndicatorDataset(dataSeries[0]) && !!fixedYScale
        ? fixedYScale[0]
        : Math.min.apply(Math, dataSeries.map(function (dataset) {
            if (T.isIndicatorDataset(dataset)) {
                var min = Math.min.apply(Math, dataset.prices.filter(function (price, pIdx) { var _a, _b; return price !== null && ["line", "bars"].includes((_b = (_a = graphTypes === null || graphTypes === void 0 ? void 0 : graphTypes[pIdx]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : ""); }));
                return isNullish(min) ? 0 : min;
            }
            if (T.isCandleChartDataset(dataset))
                return dataset.low;
            return dataset.close;
        }));
};
export var snapPixYToDataset = function (pixY, dataset, subcharts, subchartIdx, yaxisIdx, calcSubcharts, snapTolerance) {
    var snapTol = snapTolerance ? snapTolerance : 10;
    if (isNullish(pixY) ||
        isNullish(subcharts) ||
        isNullish(subchartIdx) ||
        isNullish(yaxisIdx) ||
        isNullish(dataset) ||
        isNullish(dataset))
        return null;
    var prices = T.isIndicatorDataset(dataset)
        ? dataset.prices.filter(function (p) { return p !== null; })
        : T.isCandleChartDataset(dataset)
            ? [dataset.open, dataset.high, dataset.low, dataset.close]
            : T.isLineChartDataset(dataset)
                ? [dataset.close]
                : [];
    if (prices.length === 0)
        return null;
    var calcYaxis = calcSubcharts[subchartIdx].yaxis[yaxisIdx];
    return prices
        .map(function (price) { return ({
        pixY: pureYToPix(price, subcharts[subchartIdx].bottom, calcYaxis.decimals, calcYaxis.translatedY, calcYaxis.heightPerPt),
        y: price.toFixed(getDecimals(price)),
    }); })
        .filter(function (price) { return price.pixY >= pixY - snapTol && price.pixY <= pixY + snapTol; })
        .sort(function (a, b) {
        return Math.abs(a.pixY - pixY) < Math.abs(b.pixY - pixY) ? -1 : Math.abs(a.pixY - pixY) > Math.abs(b.pixY - pixY) ? 1 : 0;
    });
};
export var getSubchartIdxByPixXy = function (pixXy, subcharts) {
    if (!pixXy || !subcharts)
        return null;
    var activeSubchart = subcharts.find(function (val) { return pixXy[1] >= val.top && pixXy[1] < val.bottom; });
    if (!activeSubchart)
        return null;
    var activeIdx = subcharts.indexOf(activeSubchart);
    if (activeIdx === -1)
        return null;
    return activeIdx;
};
export var snapToolsByXy = function (pixXy, subcharts, xaxis, calc) {
    if (!pixXy || !subcharts || !xaxis)
        return [];
    var subchartIdx = getSubchartIdxByPixXy(pixXy, subcharts);
    if (subchartIdx === null)
        return [];
    var translatedX = xaxis.totalTranslatedX;
    var widthPerTick = xaxis.scaledWidthPerTick;
    return subcharts[subchartIdx].yaxis
        .map(function (yaxis, yaxisIdx) {
        var _a, _b, _c;
        var calcYaxis = (_c = (_b = (_a = calc.subcharts) === null || _a === void 0 ? void 0 : _a[subchartIdx]) === null || _b === void 0 ? void 0 : _b.yaxis) === null || _c === void 0 ? void 0 : _c[yaxisIdx];
        if (!calcYaxis)
            return [];
        return yaxis.tools
            .map(function (tool, toolIdx) {
            return tool.xy
                .map(function (anchorXy, toolPtIdx) {
                var anchorPixX = pureXToPix(anchorXy[0], translatedX, widthPerTick);
                var anchorPixY = pureYToPix(anchorXy[1], subcharts[subchartIdx].bottom, calcYaxis.decimals, calcYaxis.translatedY, calcYaxis.heightPerPt);
                return pixXy[0] >= anchorPixX - 10 &&
                    pixXy[0] <= anchorPixX + 10 &&
                    pixXy[1] >= anchorPixY - 10 &&
                    pixXy[1] <= anchorPixY + 10
                    ? { subchartIdx: subchartIdx, yaxisIdx: yaxisIdx, toolIdx: toolIdx, toolPtIdx: toolPtIdx }
                    : null;
            })
                .filter(function (a) { return a !== null; });
        })
            .flat();
    })
        .flat();
};
export var getMaxDataSeriesDecimals = function (dataSeries) {
    var decimalStat = dataSeries.map(function (dataset) {
        return T.isCandleChartDataset(dataset)
            ? Math.max.apply(Math, [
                getDecimals(dataset.close),
                getDecimals(dataset.open),
                getDecimals(dataset.high),
                getDecimals(dataset.low),
            ]) : T.isLineChartDataset(dataset)
            ? getDecimals(dataset.close)
            : T.isIndicatorDataset(dataset)
                ? getDecimals(Math.max.apply(Math, dataset.prices.map(function (price) { return (!isNullish(price) ? getDecimals(price) : 0); })))
                : 0;
    });
    var maxDecimals = Math.max.apply(Math, decimalStat);
    return maxDecimals;
};
//# sourceMappingURL=Utils.js.map