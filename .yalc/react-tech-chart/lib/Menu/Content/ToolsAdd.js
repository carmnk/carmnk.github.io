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
import { mdiCrop, mdiFilter, mdiRuler, mdiRulerSquareCompass, mdiSortAlphabeticalAscending } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { CTreeItem } from "../../Components/CTreeItem";
import { ToolsSubMenu } from "./ToolsSubMenu";
import { CTreeView } from "../../Components/CTreeView";
var categorys = [
    { name: "Lines", icon: mdiRuler },
    { name: "Measure", icon: mdiCrop },
    { name: "Upcoming", icon: mdiRulerSquareCompass },
];
var tools = [
    { name: "trendline", type: "trendline", category: "Lines" },
    { name: "horizontal", type: "hline", category: "Lines" },
    { name: "vertical", type: "vline", category: "Lines" },
];
var onToolLabelClick = function (Dispatch, type) {
    var subchartIdx = 0;
    Dispatch({
        task: "startDrawing",
        params: { type: type, subchartIdx: subchartIdx },
    });
};
export var ToolsAdd = function (props) {
    var Dispatch = props.Dispatch, onNavigate = props.onNavigate, subcharts = props.subcharts;
    var _a = React.useState(false), DisableGrouping = _a[0], setDisableGrouping = _a[1];
    var theme = useTheme();
    return (_jsxs(React.Fragment, { children: [_jsx(ToolsSubMenu, { subcharts: subcharts, location: "tools", onNavigate: onNavigate, theme: theme, submenuContent: _jsx(React.Fragment, { children: _jsx(IconButton, __assign({ size: "small", sx: { border: "1px solid #fff", margin: "0px 5px 0px 0px" }, onClick: function () { return setDisableGrouping(function (current) { return !current; }); } }, { children: _jsx(Icon, { path: !DisableGrouping ? mdiSortAlphabeticalAscending : mdiFilter, size: 1, color: theme.palette.primary.contrastText }, void 0) }), void 0) }, void 0) }, void 0), _jsx(CTreeView, { children: !DisableGrouping
                    ? categorys.map(function (cat, catIdx) { return (_jsx(CTreeItem, __assign({ nodeId: catIdx.toString(), labelText: cat.name, labelIcon: _jsx("div", __assign({ style: {
                                border: "1px solid #666",
                                borderRadius: 5,
                                marginRight: 10,
                                background: theme.palette.secondary.main,
                                minWidth: 32,
                                height: 32,
                            } }, { children: _jsx(Icon, { path: cat.icon, size: "32px", color: theme.palette.secondary.contrastText }, void 0) }), void 0), bgColorSelected: theme.palette.primary.light }, { children: tools
                            .filter(function (tool) { return tool.category === cat.name; })
                            .sort(function (a, b) { return (a.name > b.name ? 1 : -1); })
                            .map(function (tool, toolIdx) {
                            return (_jsx(CTreeItem, { nodeId: ((catIdx + 1) * 100 + (toolIdx + 1)).toString(), labelText: tool.name, typographyVariant: "body1", onClick: function () {
                                    onToolLabelClick(Dispatch, tool.type);
                                    onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate(null);
                                } }, "cat-".concat(catIdx, "-tool-").concat(toolIdx)));
                        }) }), "cat-".concat(catIdx))); })
                    : tools
                        .sort(function (a, b) { return (a.name > b.name ? 1 : -1); })
                        .map(function (tool, toolIdx) { return (_jsx(CTreeItem, { nodeId: (toolIdx + 1).toString(), labelText: tool.name, typographyVariant: "body1", onClick: function () {
                            onToolLabelClick(Dispatch, tool.type);
                            onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate(null);
                        } }, "cat-tool-".concat(toolIdx))); }) }, void 0)] }, void 0));
};
//# sourceMappingURL=ToolsAdd.js.map