var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import deepEqual from "lodash/isEqual";
import clone from "lodash/cloneDeep";
import { chartStateReducer } from "./Reducer";
import { getInitState } from "./Defaults";
import { useChartInteractions } from "./useChartInteractions";
import { getRtTicks, isRtDataOutOfRange } from "./Calc/CalcRtData";
export var useChartState = function (params) {
    var data = params.data, rtData = params.rtData, settings = params.settings;
    var maxUpdatesPerSec = settings.maxUpdatesPerSec ? settings.maxUpdatesPerSec : 15;
    var disablePointerEvents = settings.disablePointerEvents;
    var initialState = React.useMemo(function () { return getInitState(settings.initialState, settings.initWidthPerTick); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // not reactive!
    );
    var ContainerRef = React.useRef(null);
    var _a = React.useReducer(chartStateReducer, initialState), ChartState = _a[0], Dispatch = _a[1];
    var ChartInteractionsRef = useChartInteractions(ContainerRef, ChartState, Dispatch, params);
    var ChartMemo = React.useRef({
        customEffectChartState: null,
    });
    var RtDataInjection = React.useRef({
        rtData: rtData,
        isRtOutOfRange: false,
    });
    if (rtData)
        RtDataInjection.current = {
            rtData: rtData,
            isRtOutOfRange: isRtDataOutOfRange(rtData, ChartState.subCharts, ChartState.calc),
        };
    // Custom Effect 
    var _b = ChartState.draw, xy = _b.xy, CustomEffectDrawState = __rest(_b, ["xy"]);
    var CustomEffectChartState = {
        subcharts: ChartState.subCharts.map(function (subchart) { return ({
            yaxis: subchart.yaxis,
        }); }),
        draw: __assign(__assign({}, CustomEffectDrawState), { nPixXy: xy.length }),
    };
    if (!deepEqual(ChartMemo.current.customEffectChartState, CustomEffectChartState)) {
        ChartMemo.current.customEffectChartState = CustomEffectChartState;
    }
    React.useEffect(function () {
        var onTimer = function () {
            var Interactions = clone(ChartInteractionsRef.current);
            var RtData = RtDataInjection.current;
            var stateControl = Interactions.stateControl;
            if (stateControl.shallUpdate.length > 0 || RtData.isRtOutOfRange) {
                if (!stateControl.shallUpdate.includes("dragEnd"))
                    Interactions.pointer.dragPointerUp.isDragPointerUp = false;
                // console.log(stateControl.shallUpdate);
                Dispatch({
                    task: "updateInteractionState",
                    params: {
                        Interactions: Interactions,
                        RtData: RtData,
                    },
                });
                ChartInteractionsRef.current.stateControl.shallUpdate = [];
            }
        };
        ChartInteractionsRef.current.stateControl.shallUpdate.push("deps");
        onTimer(); // exec immmediately
        console.log("updated Timer");
        var handleTimer = window.setInterval(onTimer, Math.round(1000 / maxUpdatesPerSec));
        return function () {
            window.clearInterval(handleTimer);
        };
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ChartMemo.current.customEffectChartState,
        maxUpdatesPerSec,
        disablePointerEvents,
        ChartState.options,
        ChartState.data,
    ]);
    React.useEffect(function () {
        var _a, _b, _c;
        if (!ChartState.containerSize.init)
            return;
        var mainchartIn = data === null || data === void 0 ? void 0 : data[0];
        if ((mainchartIn === null || mainchartIn === void 0 ? void 0 : mainchartIn.type) !== "chart" || !((_a = mainchartIn === null || mainchartIn === void 0 ? void 0 : mainchartIn.data) === null || _a === void 0 ? void 0 : _a.length))
            return;
        var dataMainchart = (_b = ChartState.data) === null || _b === void 0 ? void 0 : _b[0];
        if (ChartState.data.length === 0) {
            console.log("Chart is initialized.");
            Dispatch({ task: "addData", params: { datas: data } });
            return;
        }
        if (dataMainchart.id === mainchartIn.id && dataMainchart.type === "chart") {
            if (mainchartIn.data.length === dataMainchart.data.length) {
                return;
            }
            else if (mainchartIn.data.length > dataMainchart.data.length) {
                console.log("Chart is updated");
                Dispatch({
                    task: "modifyChartData",
                    params: {
                        dataId: dataMainchart.id,
                        newDatasets: (_c = mainchartIn.data) === null || _c === void 0 ? void 0 : _c.slice(dataMainchart.data.length),
                    },
                });
            }
            else if (mainchartIn.data.length < dataMainchart.data.length) {
                console.log("FUTURE -> load new graph");
            }
        }
    }, [data, ChartState.containerSize.init, ChartState.data, ChartState.subCharts]);
    var rtTicks = getRtTicks(rtData, ChartState.data, ChartState.subCharts, ChartState.calc);
    // const depInfo = useReactiveInfo2([ChartState, Dispatch, rtTicks, settings]);
    // console.log(depInfo?.[0]);
    return { ChartState: ChartState, Dispatch: Dispatch, rtTicks: rtTicks, settings: settings, ContainerRef: ContainerRef };
};
//# sourceMappingURL=useChartState.js.map