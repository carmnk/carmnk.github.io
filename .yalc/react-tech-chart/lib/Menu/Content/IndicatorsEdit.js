import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ChartMenuIndiGraphTreeItem } from "../Subelements/IndiGraphTreeItem";
import { CTreeView } from "../../Components/CTreeView";
import * as T from "../../Types";
import { IndicatorsSubMenu } from "./IndicatorsSubMenu";
import useTheme from "@mui/material/styles/useTheme";
export var IndicatorsEditComponent = function (props) {
    var subcharts = props.subcharts, Dispatch = props.Dispatch, data = props.data, location = props.location, onNavigate = props.onNavigate, fullscreen = props.fullscreen;
    var theme = useTheme();
    var amtIndicators = data.filter(function (val) { return val.type === "indicator"; }).length;
    return (_jsxs(React.Fragment, { children: [_jsx(IndicatorsSubMenu, { location: location, onNavigate: onNavigate, theme: theme, amtIndicators: amtIndicators }, void 0), _jsx(CTreeView, { children: subcharts.map(function (subchart, subchartIdx) {
                    return subchart.yaxis.map(function (yaxis, yaxisIdx) {
                        return yaxis.graphs.map(function (graph, graphIdx) {
                            var _a, _b, _c;
                            return T.isIndicatorGraph(graph) ? (_jsx(ChartMenuIndiGraphTreeItem, { graphs: (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.graphs, Dispatch: Dispatch, subchartIdx: subchartIdx, yaxisIdx: yaxisIdx, graphIdx: graphIdx, data: data, fullscreen: fullscreen }, "editIndicator-sub-".concat(subchartIdx, "-yaxis-").concat(yaxisIdx, "-graph-").concat(graphIdx))) : null;
                        });
                    });
                }) }, void 0)] }, void 0));
};
export var IndicatorsEdit = React.memo(IndicatorsEditComponent);
//# sourceMappingURL=IndicatorsEdit.js.map