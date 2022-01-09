export var isCandleChartPixDataset = function (pixDataset) {
    return !(pixDataset === null || pixDataset === void 0 ? void 0 : pixDataset.pixY)
        ? false
        : "pixOpen" in pixDataset.pixY &&
            "pixHigh" in pixDataset.pixY &&
            "pixLow" in pixDataset.pixY &&
            "pixClose" in pixDataset.pixY
            ? true
            : false;
};
export var isLineChartPixDataset = function (pixDataset) {
    return !(pixDataset === null || pixDataset === void 0 ? void 0 : pixDataset.pixY) ? false : "pixClose" in pixDataset.pixY ? true : false;
};
export var isIndicatorPixDataset = function (pixDataset) {
    return !(pixDataset === null || pixDataset === void 0 ? void 0 : pixDataset.pixY) ? false : "pixPrices" in pixDataset.pixY ? true : false;
};
export var isCandleChartDataset = function (dataset) {
    if ("open" in dataset && "high" in dataset && "low" in dataset && "close" in dataset)
        return true;
    return false;
};
// doesn't exclude datasets with close property (like CandleChartDataset -> e.g. a CandleChartDataset will also return true)
export var isLineChartDataset = function (dataset) {
    if ("close" in dataset)
        return true;
    return false;
};
export var isVolumeDataset = function (dataset) {
    if ("volume" in dataset)
        return true;
    return false;
};
export var isIndicatorDataset = function (dataset) {
    if ("prices" in dataset)
        return true;
    return false;
};
export var isIndicatorDataSeries = function (dataSeries) {
    var iDataSeries = dataSeries[dataSeries.length - 1];
    return !!iDataSeries.prices && iDataSeries.prices.length > 0;
};
export var isChartDataSeries = function (dataSeries) {
    if (!dataSeries)
        return false;
    var iDataSeries = dataSeries[dataSeries.length - 1];
    return !!iDataSeries.close && !!iDataSeries.date;
};
//# sourceMappingURL=dataseries.js.map