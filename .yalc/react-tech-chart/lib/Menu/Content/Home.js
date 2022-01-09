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
import List from "@mui/material/List";
import useTheme from "@mui/material/styles/useTheme";
import { mdiChartLine, mdiChartBellCurve, mdiPencilRuler, mdiTune } from "@mdi/js";
import { ChartMenuListItem } from "../Subelements/CMListItem";
export var Home = function (props) {
    var onNavigate = props.onNavigate, events = props.events;
    var theme = useTheme();
    var handleNavChart = React.useCallback(function () {
        onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate("chart");
    }, [onNavigate]);
    var handleNavIndicators = React.useCallback(function () {
        onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate("indicators");
    }, [onNavigate]);
    var handleNavTools = React.useCallback(function () {
        onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate("tools");
    }, [onNavigate]);
    var handleNavSettings = React.useCallback(function () {
        onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate("settings");
    }, [onNavigate]);
    return (_jsxs(List, __assign({ sx: { pt: 4 } }, { children: [_jsx(ChartMenuListItem, { id: "0", text: "Chart", iconPath: mdiChartLine, textColor: "text.primary", iconColor: theme.palette.secondary.contrastText, onClick: handleNavChart }, void 0), _jsx(ChartMenuListItem, { text: "Indicators", id: "1", iconPath: mdiChartBellCurve, textColor: "text.primary", iconColor: theme.palette.secondary.contrastText, onClick: handleNavIndicators }, void 0), _jsx(ChartMenuListItem, { id: "2", text: "Tools", iconPath: mdiPencilRuler, textColor: "text.primary", iconColor: theme.palette.secondary.contrastText, onClick: handleNavTools }, void 0), _jsx(ChartMenuListItem, { id: "3", text: "Settings", iconPath: mdiTune, textColor: "text.primary", iconColor: theme.palette.secondary.contrastText, onClick: handleNavSettings }, void 0)] }), void 0));
};
//# sourceMappingURL=Home.js.map