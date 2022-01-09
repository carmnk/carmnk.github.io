import * as T from "../Types";
export var iATR = {
    name: "ATR",
    category: "Volatility",
    params: [{ name: "period", val: 14 }],
    default: {
        params: [{ name: "period", val: 14, type: "number" }],
        newSubchart: true,
    },
    graphTypes: [{ type: "line" }],
    indicatorFnType: "dataSeries",
    indicatorFn: function (params) {
        var _a, _b, _c;
        var srcChartData = params.dataseries, prev = params.prev, _d = params.period, period = _d === void 0 ? 20 : _d;
        var indicatorData = prev ? prev : [];
        for (var i = (_a = 0 + (prev === null || prev === void 0 ? void 0 : prev.length)) !== null && _a !== void 0 ? _a : 0; i < srcChartData.length; i++) {
            if (i < period) {
                indicatorData.push({ prices: [null], date: srcChartData[i].date });
                continue;
            }
            var singleValAcc = 0;
            for (var j = i - period + 1; j <= i; j++) {
                var dataset = srcChartData[j];
                var dataset1 = srcChartData[j - 1];
                var singleAtr = 0;
                if (T.isCandleChartDataset(dataset) && T.isCandleChartDataset(dataset1)) {
                    var hl = dataset.high - dataset.low;
                    var hc1 = Math.abs(dataset.high - dataset1.close);
                    var lc1 = Math.abs(dataset.low - dataset1.close);
                    singleAtr = Math.max(hl, hc1, lc1);
                }
                else if (T.isLineChartDataset(dataset) && T.isLineChartDataset(dataset1)) {
                    var dc = Math.abs(dataset.close - dataset1.close);
                    singleAtr = dc;
                }
                else if (T.isIndicatorDataset(dataset) && T.isIndicatorDataset(dataset1)) {
                    var price = (_b = dataset.prices) === null || _b === void 0 ? void 0 : _b[0];
                    var price1 = (_c = dataset1.prices) === null || _c === void 0 ? void 0 : _c[0];
                    var dc = price !== null && price1 !== null ? Math.abs(price - price1) : 0;
                    singleAtr = dc;
                }
                singleValAcc += singleAtr;
            }
            indicatorData.push({ prices: [singleValAcc / period], date: srcChartData[i].date });
        }
        return indicatorData;
    },
};
//# sourceMappingURL=ATR.js.map