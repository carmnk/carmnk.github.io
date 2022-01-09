import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ChartMenuToolTreeItem } from "../Subelements/ToolTreeItem";
import { CTreeView } from "../../Components/CTreeView";
import useTheme from "@mui/material/styles/useTheme";
import { ToolsSubMenu } from "./ToolsSubMenu";
export var ToolsEdit = function (props) {
    var subcharts = props.subcharts, Dispatch = props.Dispatch, onNavigate = props.onNavigate, fullscreen = props.fullscreen;
    var theme = useTheme();
    return (_jsxs(React.Fragment, { children: [_jsx(ToolsSubMenu, { subcharts: subcharts, location: "editTool", onNavigate: onNavigate, theme: theme }, void 0), _jsx(CTreeView, { children: subcharts.map(function (subchart, subchartIdx) {
                    return subchart.yaxis.map(function (yaxis, yaxisIdx) {
                        return yaxis.tools.map(function (tool, toolIdx) { return (_jsx(ChartMenuToolTreeItem, { subcharts: subcharts, Dispatch: Dispatch, subchartIdx: subchartIdx, yaxisIdx: yaxisIdx, toolIdx: toolIdx, fullscreen: fullscreen }, "editIndicator-sub-".concat(subchartIdx, "-yaxis-").concat(yaxisIdx, "-graph-").concat(toolIdx))); });
                    });
                }) }, void 0)] }, void 0));
};
//# sourceMappingURL=ToolsEdit.js.map