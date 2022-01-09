import * as T from "../Types";
export var iVolume = {
    name: "Volume",
    category: "Volume",
    params: [],
    default: { params: [], newSubchart: true, decimals: 0 },
    graphTypes: [{ type: "bars" }],
    indicatorFnType: "chartSeries",
    indicatorFn: function (params) {
        var srcChartData = params.dataseries;
        var indicatorData = [];
        for (var i = 0; i < srcChartData.length; i++) {
            var dataset = srcChartData[i];
            if (T.isVolumeDataset(dataset)) {
                indicatorData.push({ prices: [dataset.volume], date: dataset.date });
            }
            else {
                indicatorData.push({ prices: [0], date: dataset.date });
            }
        }
        return indicatorData;
    },
};
//# sourceMappingURL=Volume.js.map