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
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
export var IndicatorsSubMenu = function (props) {
    var location = props.location, submenuContent = props.submenuContent, theme = props.theme, onNavigate = props.onNavigate, amtIndicators = props.amtIndicators;
    return (_jsxs(Stack // menu
    , __assign({ direction: "row", alignItems: "center", justifyContent: "flex-end", sx: { pt: 0.5 } }, { children: [submenuContent, amtIndicators > 0 ? (_jsxs(ToggleButtonGroup, __assign({ value: "indicatorModifyMode", exclusive: true, size: "small" }, { children: [_jsx(ToggleButton, __assign({ value: "addIndicator", sx: {
                            "&:hover": {
                                background: location === "indicators"
                                    ? theme.palette.secondary.light
                                    : theme.palette.background.paper,
                                boxShadow: 3,
                                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
                            },
                            borderBottomLeftRadius: 50,
                            textTransform: "none",
                            borderTopLeftRadius: 50,
                            background: location === "indicators"
                                ? theme.palette.secondary.light
                                : theme.palette.background.paper,
                            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
                        }, onClick: function () {
                            onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate("indicators");
                        } }, { children: _jsx(Typography, { children: " Add" }, void 0) }), void 0), _jsx(ToggleButton, __assign({ value: "editIndicator", sx: {
                            "&:hover": {
                                background: location === "editIndicator"
                                    ? theme.palette.secondary.light
                                    : theme.palette.background.paper,
                                boxShadow: 3,
                                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
                            },
                            borderBottomRightRadius: 50,
                            borderTopRightRadius: 50,
                            background: location === "editIndicator"
                                ? theme.palette.secondary.light
                                : theme.palette.background.paper,
                            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))",
                        }, onClick: function () {
                            onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate("editIndicator");
                        } }, { children: "Edit" }), void 0)] }), void 0)) : null] }), void 0));
};
//# sourceMappingURL=IndicatorsSubMenu.js.map