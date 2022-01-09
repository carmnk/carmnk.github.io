export var isSetGeneralPropAction = function (action) {
    return action.task === "setGeneralProp";
};
export var isSetGraphPropAction = function (action) {
    return action.task === "setGraphProp";
};
export var isSetToolPropAction = function (action) {
    return action.task === "setToolProp";
};
export var isAddSubchartAction = function (action) {
    return action.task === "addSubchart";
};
export var isAddGraphAction = function (action) {
    return action.task === "addGraph";
};
export var isStartDrawingAction = function (action) {
    return action.task === "startDrawing";
};
export var isRemoveSubchartAction = function (action) {
    return action.task === "removeSubchart";
};
export var isRemoveGraphAction = function (action) {
    return action.task === "removeGraph";
};
export var isRemoveToolAction = function (action) {
    return action.task === "removeTool";
};
export var isUpdateInteractionState = function (action) {
    return action.task === "updateInteractionState";
};
export var isClearChartAction = function (action) {
    return action.task === "clearChart";
};
export var isSwapSubchartsAction = function (action) {
    return action.task === "swapSubcharts";
};
export var isInitDataAction = function (action) { return action.task === "initData"; };
export var isModifyChartDataAction = function (action) {
    return action.task === "modifyChartData";
};
export var isModifyIndicatorDataAction = function (action) {
    return action.task === "modifyIndicatorData";
};
export var isSetThemeAction = function (action) {
    return action.task === "setTheme";
};
export var isSetPointerEvents = function (action) {
    return action.task === "setPointerEventsIntern";
};
//# sourceMappingURL=Reducer.js.map