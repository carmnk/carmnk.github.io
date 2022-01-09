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
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import Icon from "@mdi/react";
export var ChartMenuListItemIcon = styled(ListItemIcon)(function (_a) {
    var theme = _a.theme;
    return ({
        border: "1px solid #666",
        borderRadius: 5,
        marginRight: 10,
        background: theme.palette.secondary.main,
        minWidth: 32,
        height: 32,
        position: "relative",
        top: 0,
    });
});
export var ChartMenuListItemComponent = function (props) {
    var text = props.text, id = props.id, iconPath = props.iconPath, onClick = props.onClick, iconColor = props.iconColor, textColor = props.textColor, addIcons = props.addIcons, iconBgColor = props.iconBgColor;
    var addIconsInt = addIcons !== null && addIcons !== void 0 ? addIcons : [];
    return (_jsxs(ListItem, __assign({ button: true, onClick: onClick }, { children: [_jsxs(ChartMenuListItemIcon, __assign({ sx: {
                    background: iconBgColor !== null && iconBgColor !== void 0 ? iconBgColor : "secondary.main",
                } }, { children: [_jsx(Icon, { path: iconPath, size: "32px", color: iconColor !== null && iconColor !== void 0 ? iconColor : "#fff" }, void 0), addIconsInt] }), void 0), _jsx(Typography, __assign({ variant: "h6", component: "div", color: textColor !== null && textColor !== void 0 ? textColor : "text.primary" }, { children: text }), void 0)] }), id + "_listitem"));
};
export var ChartMenuListItem = React.memo(ChartMenuListItemComponent);
//# sourceMappingURL=ChartMenuListItem.js.map