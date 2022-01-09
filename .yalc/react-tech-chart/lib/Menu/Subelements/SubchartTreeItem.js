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
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import { Icon } from "@mdi/react";
import { mdiChartAreaspline, mdiClose, mdiPencilRuler } from "@mdi/js";
import React from "react";
import { CIcon } from "../../Components/CIcon";
import { CTreeItem } from "../../Components/CTreeItem";
import { ChartMenuChartGraphTreeItem } from "./ChartGraphTreeItem";
import { ChartMenuIndiGraphTreeItem } from "./IndiGraphTreeItem";
import { ChartMenuToolTreeItem } from "./ToolTreeItem";
import * as T from "../../Types";
export var SubchartTreeItem = React.forwardRef(function (props, ref) {
    var subchartIdx = props.subchartIdx, subcharts = props.subcharts, data = props.data, Dispatch = props.Dispatch, onSettingsExpand = props.onSettingsExpand, additionalLabelInfo = props.additionalLabelInfo, fullscreen = props.fullscreen, other = __rest(props, ["subchartIdx", "subcharts", "data", "Dispatch", "onSettingsExpand", "additionalLabelInfo", "fullscreen"]);
    var theme = useTheme();
    var subchart = subcharts[subchartIdx];
    return (_createElement(CTreeItem, __assign({ ref: ref }, other, { key: "sub-".concat(subchartIdx), nodeId: "sub-".concat(subchartIdx), labelText: subchartIdx === 0 ? "Mainchart" : "Subchart ".concat(subchartIdx), bgColorSelected: theme.palette.primary.light, onClick: function () {
            var id = "sub-".concat(subchartIdx);
            onSettingsExpand === null || onSettingsExpand === void 0 ? void 0 : onSettingsExpand(id);
        }, labelIcon: _jsx(CIcon, { path: mdiChartAreaspline, size: "32px", color: theme.palette.secondary.contrastText, background: theme.palette.secondary.main }, void 0), labelInfo: subchartIdx !== 0 ? (_jsxs(React.Fragment, { children: [additionalLabelInfo, _jsx(IconButton, __assign({ size: "small", onClick: function (e) {
                        e.preventDefault();
                        var action = {
                            task: "removeSubchart",
                            params: { subchartIdx: subchartIdx },
                        };
                        Dispatch(action);
                    } }, { children: _jsx(Icon, { path: mdiClose, size: 1, color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0) }), void 0)] }, void 0)) : undefined }),
        subchart.yaxis[0].graphs.map(function (graph, graphIdx) {
            var _a, _b, _c;
            return T.isIndicatorGraph(graph) ? (_jsx(ChartMenuIndiGraphTreeItem, { graphs: (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.graphs, Dispatch: Dispatch, subchartIdx: subchartIdx, yaxisIdx: 0, graphIdx: graphIdx, handleToggleExpanded: onSettingsExpand, data: data, fullscreen: fullscreen }, "editIndicator-sub-".concat(subchartIdx, "-yaxis-").concat(0, "-graph-").concat(graphIdx))) : T.isChartGraph(graph) ? (_jsx(ChartMenuChartGraphTreeItem, { subcharts: subcharts, Dispatch: Dispatch, subchartIdx: subchartIdx, yaxisIdx: 0, graphIdx: graphIdx, onSettingsExpand: onSettingsExpand, data: data, fullscreen: fullscreen }, "graph-sub-".concat(subchartIdx, "-y-").concat(0, "-graph-").concat(graphIdx, "-frag"))) : null;
        }),
        subchart.yaxis[0].tools.length > 0 ? (_jsx(CTreeItem, __assign({ nodeId: "tools-".concat(subchartIdx, "-y0"), labelIcon: _jsx("div", __assign({ style: {
                    background: theme.palette.primary.main,
                    width: 32,
                    height: 32,
                    border: "1px solid #666",
                    borderRadius: 5,
                    marginRight: 10,
                } }, { children: _jsx(Icon, { path: mdiPencilRuler, size: "32px", color: theme.palette.secondary.contrastText }, void 0) }), void 0), labelText: "Tools", onClick: function () {
                var id = "tools-".concat(subchartIdx, "-y0");
                onSettingsExpand === null || onSettingsExpand === void 0 ? void 0 : onSettingsExpand(id);
            } }, { children: subchart.yaxis[0].tools.map(function (tool, toolIdx) { return (_jsx(ChartMenuToolTreeItem, { subcharts: subcharts, Dispatch: Dispatch, subchartIdx: subchartIdx, yaxisIdx: 0, toolIdx: toolIdx, handleToggleExpanded: onSettingsExpand, fullscreen: fullscreen }, "editTool-sub-".concat(subchartIdx, "-yaxis-").concat(0, "-tool-").concat(toolIdx))); }) }), "tools-".concat(subchartIdx, "-y0"))) : null));
});
SubchartTreeItem.displayName = "SubchartTreeItem";
//# sourceMappingURL=SubchartTreeItem.js.map