import * as T from "../Types";
export var iOBV = {
    name: "OBV",
    category: "Volume",
    graphTypes: [{ type: "line" }],
    params: [],
    default: { params: [], newSubchart: true, decimals: 0 },
    indicatorFnType: "chartSeries",
    indicatorFn: function (params) {
        var _a, _b;
        var srcChartData = params.dataseries, prev = params.prev;
        var indicatorData = prev ? prev : [];
        for (var i = indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData.length; i < srcChartData.length; i++) {
            var dataset = srcChartData[i];
            if (i === 0 && T.isVolumeDataset(dataset)) {
                indicatorData.push({ prices: [dataset.volume], date: dataset.date });
                continue;
            }
            var dataset1 = srcChartData[i - 1];
            var lastObv = indicatorData === null || indicatorData === void 0 ? void 0 : indicatorData[i - 1];
            if (!T.isVolumeDataset(dataset) || !T.isVolumeDataset(dataset1)) {
                indicatorData.push({ prices: [null], date: srcChartData[i].date });
                continue;
            }
            var lastObvVal = (_b = (_a = lastObv === null || lastObv === void 0 ? void 0 : lastObv.prices) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 0;
            var obv = lastObvVal + Math.sign(dataset.close - dataset1.close) * dataset.volume;
            indicatorData.push({ prices: [obv], date: srcChartData[i].date });
        }
        return indicatorData;
    },
};
//# sourceMappingURL=OBV.js.map