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
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import { Icon } from "@mdi/react";
import { mdiFileChartOutline, mdiWater, mdiBorderColor, mdiFormatText, mdiGrid } from "@mdi/js";
import { mdiArrowUpDownBold, mdiCrosshairs, mdiArrowExpandRight, mdiArrowExpandUp } from "@mdi/js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { SubchartTreeItem } from "../Subelements/SubchartTreeItem";
import { CTreeItem } from "../../Components/CTreeItem";
import { Colorpicker } from "../../Components/Colorpicker";
import { CTreeView } from "../../Components/CTreeView";
import { CIcon } from "../../Components/CIcon";
export var SettingsIcon = function (props) { return (_jsx(CIcon, { path: props.iconPath, size: "24px", color: props.theme.palette.text.primary, style: { marginLeft: props.theme.spacing(1) }, border: props.theme.palette.mode === "light" ? "1px solid #bbb" : undefined }, void 0)); };
var generalSettingsCategorys = [
    { category: undefined },
    { category: "xaxis", icon: mdiArrowExpandRight },
    { category: "yaxis", icon: mdiArrowExpandUp },
    { category: "grid", icon: mdiGrid },
    { category: "crosshair", icon: mdiCrosshairs },
];
export var CMSettings = function (props) {
    var subcharts = props.subcharts, onNavigate = props.onNavigate, Dispatch = props.Dispatch, onSettingsExpand = props.onSettingsExpand, ChartMenuState = props.ChartMenuState, theme = props.theme, data = props.data, fullscreen = props.fullscreen;
    var muiTheme = useTheme();
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function (target) {
        setAnchorEl(null);
        if (target)
            onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate(target);
    };
    var generalSettings = [
        {
            nodeId: "bgcolor",
            labelText: "background color",
            iconPath: mdiWater,
            labelInfo: (_jsx(Colorpicker, { color: theme.backgroundColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "backgroundColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "xaxis",
            nodeId: "xaxisFillColor",
            labelText: "fill color",
            iconPath: mdiWater,
            labelInfo: (_jsx(Colorpicker, { color: theme.xaxis.fillColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "xAxisFillColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "xaxis",
            nodeId: "xaxisStrokeColor",
            labelText: "stroke color",
            iconPath: mdiBorderColor,
            labelInfo: (_jsx(Colorpicker, { color: theme.xaxis.strokeColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "xAxisStrokeColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "xaxis",
            nodeId: "xaxisTextColor",
            labelText: "text color",
            iconPath: mdiFormatText,
            labelInfo: (_jsx(Colorpicker, { color: theme.xaxis.fontColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "xAxisTextColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "yaxis",
            nodeId: "yaxisStrokeColor",
            labelText: "stroke color",
            iconPath: mdiBorderColor,
            labelInfo: (_jsx(Colorpicker, { color: theme.yaxis.strokeColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "yAxisStrokeColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "yaxis",
            nodeId: "yaxisTextColor",
            labelText: "text color",
            iconPath: mdiFormatText,
            labelInfo: (_jsx(Colorpicker, { color: theme.yaxis.fontColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "yAxisTextColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "grid",
            nodeId: "useXGrid",
            labelText: "use x-axis grid",
            iconPath: mdiGrid,
            labelInfo: (_jsx(Checkbox, { checked: theme.grid.useGridX, size: "small", style: { padding: 0, width: 24, height: 24 }, onChange: function () {
                    Dispatch({ task: "setGeneralProp", params: { prop: "toggleGridX" } });
                } }, void 0)),
        },
        {
            category: "grid",
            nodeId: "useYGrid",
            labelText: "use y-axis grid",
            iconPath: mdiGrid,
            labelInfo: (_jsx(Checkbox, { checked: theme.grid.useGridY, size: "small", style: { padding: 0, width: 24, height: 24 }, onChange: function () {
                    Dispatch({ task: "setGeneralProp", params: { prop: "toggleGridY" } });
                } }, void 0)),
        },
        {
            category: "grid",
            nodeId: "gridStrokeColor",
            labelText: "stroke color",
            iconPath: mdiBorderColor,
            labelInfo: (_jsx(Colorpicker, { color: theme.grid.strokeColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "gridStrokeColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "crosshair",
            nodeId: "useCrosshair",
            labelText: "use crosshair",
            iconPath: mdiCrosshairs,
            labelInfo: (_jsx(Checkbox, { checked: theme.crosshair.useCrosshair, size: "small", style: { padding: 0, width: 24, height: 24 }, onChange: function () {
                    Dispatch({ task: "setGeneralProp", params: { prop: "toggleCrosshair" } });
                } }, void 0)),
        },
        {
            category: "crosshair",
            nodeId: "crosshairStrokeColor",
            labelText: "stroke color",
            iconPath: mdiBorderColor,
            labelInfo: (_jsx(Colorpicker, { color: theme.crosshair.strokeColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "crosshairStrokeColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "crosshair",
            nodeId: "crosshairXMarkerBackground",
            labelText: "x-marker background",
            iconPath: mdiWater,
            labelInfo: (_jsx(Colorpicker, { color: theme.crosshair.xMarkerBackgroundColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "crosshairXmarkerBackgroundColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "crosshair",
            nodeId: "crosshairXMarkerStrokeColor",
            labelText: "x-marker stroke color",
            iconPath: mdiBorderColor,
            labelInfo: (_jsx(Colorpicker, { color: theme.crosshair.xMarkerStrokeColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "crosshairXmarkerStrokeColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "crosshair",
            nodeId: "crosshairXMarkerTextColor",
            labelText: "x-marker text color",
            iconPath: mdiFormatText,
            labelInfo: (_jsx(Colorpicker, { color: theme.crosshair.xMarkerTextColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "crosshairXmarkerTextColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "crosshair",
            nodeId: "crosshairYMarkerBackground",
            labelText: "y-marker background",
            iconPath: mdiWater,
            labelInfo: (_jsx(Colorpicker, { color: theme.crosshair.yMarkerBackgroundColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "crosshairYmarkerBackgroundColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "crosshair",
            nodeId: "crosshairYMarkerStrokeColor",
            labelText: "y-marker stroke color",
            iconPath: mdiBorderColor,
            labelInfo: (_jsx(Colorpicker, { color: theme.crosshair.yMarkerStrokeColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "crosshairYmarkerStrokeColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
        {
            category: "crosshair",
            nodeId: "crosshairYMarkerTextColor",
            labelText: "y-marker text color",
            iconPath: mdiFormatText,
            labelInfo: (_jsx(Colorpicker, { color: theme.crosshair.yMarkerTextColor, onColorSelected: function (color) {
                    Dispatch({ task: "setGeneralProp", params: { prop: "crosshairYmarkerTextColor", newValue: color } });
                }, fullscreen: fullscreen }, void 0)),
        },
    ];
    return (_jsxs(React.Fragment, { children: [_jsxs(Stack // menu
            , __assign({ direction: "row", alignItems: "center", justifyContent: "flex-end", sx: { pt: 0.5 } }, { children: [_jsx(Button, __assign({ style: {
                            border: "1px solid #666",
                            borderRadius: 50,
                            padding: 5,
                            textTransform: "none",
                            background: muiTheme.palette.secondary.light,
                            color: muiTheme.palette.secondary.contrastText,
                        }, onClick: handleClick }, { children: _jsx(Typography, { children: " Add..." }, void 0) }), void 0), _jsxs(Menu, __assign({ id: "quick-add", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: function () { return handleClose(undefined); }, anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right",
                        }, transformOrigin: {
                            vertical: "top",
                            horizontal: "right",
                        }, disablePortal: fullscreen }, { children: [_jsx(MenuItem, __assign({ onClick: function () { return handleClose("indicators"); } }, { children: "Indicator" }), void 0), _jsx(MenuItem, __assign({ onClick: function () { return handleClose("tools"); } }, { children: "Tool" }), void 0)] }), void 0)] }), void 0), _jsxs(CTreeView, __assign({ expanded: ChartMenuState.expandedSetting }, { children: [_jsx(CTreeItem, __assign({ nodeId: "1", labelText: "General", labelIcon: _jsx(CIcon, { path: mdiFileChartOutline, size: "32px", color: muiTheme.palette.secondary.contrastText, background: muiTheme.palette.secondary.main }, void 0), bgColorSelected: muiTheme.palette.primary.light, typographyVariant: "h6", onClick: function () {
                            var id = "1";
                            onSettingsExpand === null || onSettingsExpand === void 0 ? void 0 : onSettingsExpand(id);
                        } }, { children: generalSettingsCategorys.map(function (cat, cIdx) {
                            var _a;
                            return !cat.category ? (generalSettings
                                .filter(function (setting) { return setting.category === cat.category; })
                                .map(function (setting) { return (_jsx(CTreeItem, { nodeId: "settings-treeitem-general-cat-".concat(cIdx, "-").concat(setting.nodeId), labelText: setting.labelText, typographyVariant: "body1", labelInfo: setting.labelInfo, labelIcon: _jsx(SettingsIcon, { iconPath: setting.iconPath, theme: muiTheme }, void 0) }, "settings-treeitem-general-cat-".concat(cIdx, "-").concat(setting.nodeId))); })) : (_jsx(CTreeItem, __assign({ nodeId: "settings-treeitem-general-cat-".concat(cIdx), labelText: (_a = cat.category) !== null && _a !== void 0 ? _a : "", labelIcon: _jsx(CIcon, { path: cat.icon, size: "32px", color: muiTheme.palette.secondary.contrastText, background: muiTheme.palette.primary.main }, void 0), onClick: function () {
                                    onSettingsExpand === null || onSettingsExpand === void 0 ? void 0 : onSettingsExpand("settings-treeitem-general-cat-".concat(cIdx));
                                } }, { children: generalSettings
                                    .filter(function (setting) { return setting.category === cat.category; })
                                    .map(function (setting) { return (_jsx(CTreeItem, { nodeId: "settings-treeitem-general-cat-".concat(cIdx, "-").concat(setting.nodeId), labelText: setting.labelText, typographyVariant: "body1", labelInfo: setting.labelInfo, labelIcon: _jsx(SettingsIcon, { iconPath: setting.iconPath, theme: muiTheme }, void 0) }, "settings-treeitem-general-cat-".concat(cIdx, "-").concat(setting.nodeId))); }) }), "settings-treeitem-general-cat-".concat(cIdx)));
                        }) }), void 0), _jsx(SubchartTreeItem, { subcharts: subcharts, data: data, subchartIdx: 0, Dispatch: Dispatch, onSettingsExpand: onSettingsExpand, fullscreen: fullscreen }, void 0), _jsx(DragDropContext, __assign({ onDragEnd: function (res) {
                            var _a;
                            if (!((_a = res.destination) === null || _a === void 0 ? void 0 : _a.index))
                                return;
                            Dispatch({
                                task: "swapSubcharts",
                                params: {
                                    subchartIdx1: res.source.index,
                                    subchartIdx2: res.destination.index,
                                },
                            });
                        } }, { children: _jsx(Droppable, __assign({ droppableId: "droppable" }, { children: function (provided, snapshot) { return (_jsxs(Box, __assign({}, provided.droppableProps, { ref: provided.innerRef, sx: {
                                    background: snapshot.isDraggingOver ? muiTheme.palette.primary.light : "transparent",
                                    borderTopRightRadius: muiTheme.spacing(2),
                                    borderBottomRightRadius: muiTheme.spacing(2),
                                } }, { children: [subcharts.slice(1).map(function (subchart, subchartIdxShifted) {
                                        var subchartIdx = subchartIdxShifted + 1;
                                        return (_jsx(Draggable, __assign({ draggableId: "sub-".concat(subchartIdx), index: subchartIdx }, { children: function (provided, snapshot) {
                                                return (_jsx(SubchartTreeItem, __assign({ subcharts: subcharts, data: data, subchartIdx: subchartIdx, Dispatch: Dispatch, onSettingsExpand: onSettingsExpand, ref: provided.innerRef, fullscreen: fullscreen }, provided.draggableProps, { additionalLabelInfo: _jsx(IconButton, __assign({ size: "small" }, provided.dragHandleProps, { children: _jsx(Icon, { path: mdiArrowUpDownBold, size: 1, color: muiTheme.palette.mode === "light" ? "#333" : "#fff" }, void 0) }), void 0) }), void 0));
                                            } }), "sub-".concat(subchartIdx)));
                                    }), provided.placeholder] }), void 0)); } }), void 0) }), void 0)] }), void 0)] }, void 0));
};
//# sourceMappingURL=Settings.js.map