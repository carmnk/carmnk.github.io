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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled";
var CSTreeItem = styled(TreeItem)(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(treeItemClasses.content)] = (_c = {
                boxSizing: "border-box",
                borderTopRightRadius: theme.spacing(2),
                borderBottomRightRadius: theme.spacing(2),
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                paddingRight: theme.spacing(2),
                "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                },
                "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
                    backgroundColor: "var(--tree-view-bg-color, ".concat(theme.palette.action.selected, ")"),
                    color: "var(--tree-view-color)",
                }
            },
            _c["& .".concat(treeItemClasses.label)] = {
                color: "inherit",
            },
            _c),
        _b["& .".concat(treeItemClasses.group)] = (_d = {
                marginLeft: theme.spacing(1)
            },
            _d["& .".concat(treeItemClasses.content)] = {
                paddingLeft: theme.spacing(1),
            },
            _d),
        _b);
});
export var CTreeItem = React.forwardRef(function (props, ref) {
    var bgColorSelected = props.bgColorSelected, colorSelected = props.colorSelected, LabelIcon = props.labelIcon, labelInfo = props.labelInfo, labelText = props.labelText, typographyVariant = props.typographyVariant, other = __rest(props, ["bgColorSelected", "colorSelected", "labelIcon", "labelInfo", "labelText", "typographyVariant"]);
    return (_jsx(CSTreeItem, __assign({ ref: ref, label: _jsxs(Stack, __assign({ direction: "row", sx: { alignItems: "center", alignContent: "center" } }, { children: [_jsx(Box, __assign({ component: "span", sx: { mr: 1, lineHeight: 0 } }, { children: LabelIcon }), void 0), _jsx(Typography, __assign({ variant: typographyVariant !== null && typographyVariant !== void 0 ? typographyVariant : "h6", component: "div", sx: { flexGrow: 1 } }, { children: labelText }), void 0), _jsx(Typography, __assign({ variant: "caption", component: "div" }, { children: labelInfo }), void 0)] }), void 0), sx: { color: "text.primary" }, style: {
            "--tree-view-color": colorSelected,
            "--tree-view-bg-color": bgColorSelected,
        } }, other), void 0));
});
CTreeItem.displayName = "CTreeItem";
//# sourceMappingURL=CTreeItem.js.map