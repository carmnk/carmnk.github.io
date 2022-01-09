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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import { mdiBorderColor, mdiBullseye, mdiHelp, mdiMinus } from "@mdi/js";
import { mdiClose, mdiArrowSplitHorizontal, mdiApplicationVariableOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { CIcon } from "../../Components/CIcon";
import { CMColorPropTreeItem } from "./CMColorPropTreeItem";
import { CTreeItem } from "../../Components/CTreeItem";
import { defaultTools } from "../../Tools/DefaultTools";
import { CMNumberPropTreeItem } from "./CMNumberPropTreeItem";
import { CMSelectPropTreeItem } from "./CMSelectPropTreeItem";
export var ChartMenuToolTreeItem = function (props) {
    var _a, _b, _c, _d;
    var subchartIdx = props.subchartIdx, yaxisIdx = props.yaxisIdx, toolIdx = props.toolIdx, subcharts = props.subcharts, Dispatch = props.Dispatch, handleToggleExpanded = props.handleToggleExpanded, fullscreen = props.fullscreen;
    var toolIn = (_d = (_c = (_b = (_a = subcharts === null || subcharts === void 0 ? void 0 : subcharts[subchartIdx]) === null || _a === void 0 ? void 0 : _a.yaxis) === null || _b === void 0 ? void 0 : _b[yaxisIdx]) === null || _c === void 0 ? void 0 : _c.tools) === null || _d === void 0 ? void 0 : _d[toolIdx];
    var tool = toolIn ? toolIn : null;
    var theme = useTheme();
    if (!tool)
        return null;
    var toolColorProps = function (tool) { return [
        {
            text: "stroke color",
            icon: mdiBorderColor,
            color: tool.style.strokeColor,
            onColorSelected: function (color) {
                Dispatch({
                    task: "setToolProp",
                    params: { prop: "strokeColor", subchartIdx: subchartIdx, yaxisIdx: 0, toolIdx: toolIdx, newValue: color },
                });
            },
        },
        {
            text: "anchor color",
            icon: mdiBullseye,
            color: tool.style.anchorColor,
            onColorSelected: function (color) {
                Dispatch({
                    task: "setToolProp",
                    params: { prop: "anchorColor", subchartIdx: subchartIdx, yaxisIdx: 0, toolIdx: toolIdx, newValue: color },
                });
            },
        },
    ]; };
    return (_jsxs(CTreeItem, __assign({ nodeId: "tool-".concat(subchartIdx, "-").concat(toolIdx), labelText: tool.type === "hline"
            ? "horizontal line"
            : tool.type === "vline"
                ? "vertical line"
                : tool.type === "trendline"
                    ? "Trendline"
                    : "Tool", typographyVariant: "body1", labelIcon: _jsx("div", __assign({ style: {
                border: "1px solid ".concat(theme.palette.mode === "light" ? "#333" : "#fff"),
                borderRadius: 5,
            } }, { children: _jsx(Icon, { path: tool.type === "hline" || tool.type === "vline" || tool.type === "trendline" ? mdiMinus : mdiHelp, size: "24px", color: theme.palette.mode === "light" ? "#333" : "#fff", rotate: tool.type === "trendline" ? -45 : tool.type === "vline" ? 90 : 0 }, void 0) }), void 0), onClick: function () {
            var id = "tool-".concat(subchartIdx, "-").concat(toolIdx);
            handleToggleExpanded === null || handleToggleExpanded === void 0 ? void 0 : handleToggleExpanded(id);
        }, bgColorSelected: theme.palette.primary.light, labelInfo: _jsx(IconButton, __assign({ size: "small", onClick: function (e) {
                e.preventDefault();
                var action = {
                    task: "removeTool",
                    params: { subchartIdx: subchartIdx, yaxisIdx: 0, toolIdx: toolIdx },
                };
                Dispatch(action);
            } }, { children: _jsx(Icon, { path: mdiClose, size: 1, color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0) }), void 0) }, { children: [tool.type === "hline" ? (_jsx(CMNumberPropTreeItem, { nodeId: "tool-".concat(subchartIdx, "-y0-").concat(toolIdx, "-hlinelevel"), labelText: "Y-Level", value: tool.xy[0][1], labelIcon: _jsx(CIcon, { path: mdiArrowSplitHorizontal, size: "24px", color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0), onChangeConfirmed: function (val) {
                    Dispatch({
                        task: "setToolProp",
                        params: { prop: "hLineYlevel", subchartIdx: subchartIdx, yaxisIdx: 0, toolIdx: toolIdx, newValue: val },
                    });
                } }, "tool-".concat(subchartIdx, "-y0-").concat(toolIdx, "-hlinelevel"))) : null, tool.params &&
                tool.params.map(function (param, paramIdx) {
                    var _a, _b;
                    var toolParamDefaults = (_b = (_a = defaultTools.find(function (defTool) { return defTool.type === tool.type; })) === null || _a === void 0 ? void 0 : _a.default) === null || _b === void 0 ? void 0 : _b.params;
                    var icon = toolParamDefaults ? toolParamDefaults[paramIdx].icon : mdiApplicationVariableOutline;
                    return param.type === "number" ? (_jsx(CMNumberPropTreeItem, { nodeId: "tool-s".concat(subchartIdx, "-y0-t").concat(toolIdx, "-p").concat(paramIdx), labelText: param.name, labelIcon: _jsx(CIcon, { path: icon, size: "24px", color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0), value: param.val, onChangeConfirmed: function (newValue) {
                            Dispatch({
                                task: "setToolProp",
                                params: { prop: "toolParam", subchartIdx: subchartIdx, yaxisIdx: yaxisIdx, toolIdx: toolIdx, toolParamIdx: paramIdx, newValue: newValue },
                            });
                        } }, "tool-s".concat(subchartIdx, "-y0-t").concat(toolIdx, "-p").concat(paramIdx))) : param.type === "select" ? (_jsx(CMSelectPropTreeItem, { nodeId: "tool-s".concat(subchartIdx, "-y0-t").concat(toolIdx, "-p").concat(paramIdx), labelText: param.name, labelIcon: _jsx(CIcon, { path: icon, size: "24px", color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0), value: param.val, fullscreen: fullscreen, options: param.vals, onChangeConfirmed: function (newValue) {
                            Dispatch({
                                task: "setToolProp",
                                params: { prop: "toolParam", subchartIdx: subchartIdx, yaxisIdx: yaxisIdx, toolIdx: toolIdx, toolParamIdx: paramIdx, newValue: newValue },
                            });
                        } }, "tool-s".concat(subchartIdx, "-y0-t").concat(toolIdx, "-p").concat(paramIdx))) : null;
                }), toolColorProps(tool).map(function (toolColorProps, tcIdx) { return (_jsx(CMColorPropTreeItem, { nodeId: "settings-treeitem-tool-clrProp-".concat(subchartIdx, "-y").concat(yaxisIdx, "-t").concat(toolIdx, "-p").concat(tcIdx), color: toolColorProps.color, iconPath: toolColorProps.icon, text: toolColorProps.text, fullscreen: fullscreen, onColorSelected: toolColorProps.onColorSelected }, "settings-treeitem-tool-clrProp-".concat(subchartIdx, "-y").concat(yaxisIdx, "-t").concat(toolIdx, "-p").concat(tcIdx))); })] }), "tool-".concat(toolIdx)));
};
//# sourceMappingURL=ToolTreeItem.js.map