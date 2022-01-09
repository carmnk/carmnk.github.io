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
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import useTheme from "@mui/material/styles/useTheme";
import { mdiHome, mdiFullscreenExit, mdiFullscreen, mdiClose, mdiBroom, mdiThemeLightDark } from "@mdi/js";
import { defaultLightTheme, defaultDarkTheme } from "../ChartState/Defaults";
import Icon from "@mdi/react";
export var ChartMenuLayout = function (props) {
    var isDesktop = props.isDesktop, onClose = props.onClose, location = props.location, fullscreen = props.fullscreen, headerText = props.headerText, onNavigate = props.onNavigate, Dispatch = props.Dispatch, settings = props.settings, content = props.content, events = props.events;
    var theme = useTheme();
    var _a = React.useState(null), ThemeAnchorEl = _a[0], setThemeAnchorEl = _a[1];
    var _b = React.useState(null), ClearAnchorEl = _b[0], setClearAnchorEl = _b[1];
    var themes = React.useMemo(function () {
        var _a;
        return (_a = settings === null || settings === void 0 ? void 0 : settings.themes) !== null && _a !== void 0 ? _a : [
            __assign(__assign({}, defaultLightTheme), { name: "light" }),
            __assign(__assign({}, defaultDarkTheme), { name: "dark" }),
        ];
    }, 
    // settings are frozen
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    var goHome = React.useCallback(function () {
        onNavigate("menu");
    }, [onNavigate]);
    var toggleFullscreen = React.useCallback(function () {
        var _a, _b;
        if (!fullscreen)
            (_a = events === null || events === void 0 ? void 0 : events.onFullscreen) === null || _a === void 0 ? void 0 : _a.call(events);
        else
            (_b = events === null || events === void 0 ? void 0 : events.onFullscreenExit) === null || _b === void 0 ? void 0 : _b.call(events);
        Dispatch({
            task: "setGeneralProp",
            params: { prop: "toggleFullscreen" },
        });
    }, [Dispatch, fullscreen, events]);
    var openFooterMenu = React.useCallback(function (event, menuName) {
        if (menuName === "theme")
            setThemeAnchorEl(event.currentTarget);
        if (menuName === "clear")
            setClearAnchorEl(event.currentTarget);
    }, []);
    var closeFooterMenu = React.useCallback(function () {
        setThemeAnchorEl(null);
        setClearAnchorEl(null);
    }, []);
    var selectTheme = React.useCallback(function (themeName) {
        var _a;
        setThemeAnchorEl(null);
        var selectedTheme = (_a = themes) === null || _a === void 0 ? void 0 : _a.find(function (theme) { return theme.name === themeName; });
        // console.log("Theme selected", selectedTheme);
        if (!selectedTheme)
            return;
        Dispatch({ task: "setTheme", params: { theme: selectedTheme } });
    }, [Dispatch, themes]);
    // const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (_jsx(Drawer
    // disableBackdropTransition={!iOS}
    // disableDiscovery={iOS}
    , __assign({ 
        // disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        anchor: isDesktop ? "left" : "bottom", open: !!location, disablePortal: fullscreen, onBackdropClick: onClose, onClose: onClose, PaperProps: {
            sx: isDesktop
                ? {
                    border: "1px solid #666",
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    minWidth: 300,
                    height: "100%",
                }
                : {
                    border: "1px solid #666",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    maxHeight: "75%",
                    minHeight: "33%",
                },
        } }, { children: _jsxs(Box, __assign({ sx: { position: "relative", top: 0, height: "100%" } }, { children: [_jsx(Box, __assign({ sx: {
                        position: "sticky",
                        top: 0,
                        height: 48,
                        width: "100%",
                        bgcolor: "primary.main",
                        p: 1,
                        boxSizing: "border-box",
                        zIndex: 1,
                    } }, { children: _jsxs(Stack, __assign({ direction: "row", sx: {
                            height: 32,
                            justifyItems: "center",
                            justifyContent: "center",
                            verticalAlign: "middle",
                        } }, { children: [_jsx(Typography, __assign({ component: "div", variant: "h5", color: theme.palette.primary.contrastText, sx: { flexGrow: 1, pr: 1 } }, { children: headerText || "" }), void 0), _jsxs(Box, __assign({ sx: { margin: "-5px" } }, { children: [!!location && location !== "menu" && (_jsx(IconButton, __assign({ size: "small", onClick: goHome }, { children: _jsx(Icon, { path: mdiHome, size: "32px", color: theme.palette.primary.contrastText }, void 0) }), void 0)), !window.navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && (_jsx(IconButton, __assign({ size: "small", onClick: toggleFullscreen }, { children: _jsx(Icon, { path: fullscreen ? mdiFullscreenExit : mdiFullscreen, size: "32px", color: theme.palette.primary.contrastText }, void 0) }), void 0)), _jsx(IconButton, __assign({ size: "small", onClick: onClose }, { children: _jsx(Icon, { path: mdiClose, size: "32px", color: theme.palette.primary.contrastText }, void 0) }), void 0)] }), void 0)] }), void 0) }), void 0), _jsx(Box, __assign({ sx: {
                        position: "relative",
                        top: 0,
                        mb: isDesktop ? "48px" : "96px",
                        height: isDesktop ? "calc(100% - 96px)" : "auto",
                        overflowY: "auto",
                        p: 1,
                    } }, { children: content }), void 0), _jsx(Box, __assign({ sx: {
                        position: isDesktop ? "absolute" : "fixed",
                        bottom: 0,
                        height: 48,
                        width: "100%",
                        bgcolor: "primary.main",
                    } }, { children: _jsxs(Stack, __assign({ direction: "row", sx: { alignItems: "center", alignContent: "center", pt: 0.5 } }, { children: [_jsx(Box, { sx: { flexGrow: 1 } }, void 0), _jsx(IconButton, __assign({ id: "clearMenuButton", size: "small", onClick: function (e) {
                                    openFooterMenu === null || openFooterMenu === void 0 ? void 0 : openFooterMenu(e, "clear");
                                } }, { children: _jsx(Icon, { path: mdiBroom, size: "32px", color: theme.palette.primary.contrastText }, void 0) }), void 0), _jsxs(Menu, __assign({ id: "clear-menu", anchorEl: ClearAnchorEl, disablePortal: fullscreen, anchorOrigin: { horizontal: "center", vertical: "top" }, transformOrigin: {
                                    vertical: "bottom",
                                    horizontal: "center",
                                }, open: Boolean(ClearAnchorEl), onClose: closeFooterMenu, MenuListProps: {
                                    "aria-labelledby": "clearMenuButton",
                                } }, { children: [_jsx(Typography, __assign({ variant: "h6", component: "div", sx: {
                                            textAlign: "center",
                                            pb: 1,
                                            pl: 1,
                                            pr: 1,
                                            color: "primary.main",
                                        } }, { children: "Clear Chart" }), void 0), _jsx(Divider, {}, void 0), ["all", "indicators", "tools"].map(function (mode, mIdx) { return (_jsx(MenuItem, __assign({ onClick: function () {
                                            Dispatch({
                                                task: "clearChart",
                                                params: { mode: mode },
                                            });
                                        } }, { children: mode }), "clearMenuItem-".concat(mIdx))); })] }), void 0), _jsx(IconButton, __assign({ id: "themeMenuButton", size: "small", onClick: function (e) {
                                    openFooterMenu === null || openFooterMenu === void 0 ? void 0 : openFooterMenu(e, "theme");
                                } }, { children: _jsx(Icon, { path: mdiThemeLightDark, size: "32px", color: theme.palette.primary.contrastText }, void 0) }), void 0), _jsxs(Menu, __assign({ id: "theme-menu", disablePortal: fullscreen, anchorEl: ThemeAnchorEl, anchorOrigin: { horizontal: "center", vertical: "top" }, transformOrigin: {
                                    vertical: "bottom",
                                    horizontal: "center",
                                }, open: Boolean(ThemeAnchorEl), onClose: closeFooterMenu, MenuListProps: {
                                    "aria-labelledby": "themeMenuButton",
                                } }, { children: [_jsx(Typography, __assign({ variant: "h6", component: "div", sx: {
                                            textAlign: "center",
                                            pb: 1,
                                            pl: 1,
                                            pr: 1,
                                            color: "primary.main",
                                        } }, { children: "Set Theme" }), void 0), _jsx(Divider, {}, void 0), themes.map(function (themeItem, tIdx) { return (_jsx(MenuItem, __assign({ onClick: function () {
                                            selectTheme(themeItem.name);
                                        } }, { children: themeItem.name }), "themeMenuItem-".concat(tIdx))); })] }), void 0), _jsx(IconButton, __assign({ size: "small", onClick: function () {
                                    onClose === null || onClose === void 0 ? void 0 : onClose();
                                } }, { children: _jsx(Icon, { path: mdiClose, size: "32px", color: theme.palette.primary.contrastText }, void 0) }), void 0)] }), void 0) }), void 0)] }), void 0) }), void 0));
};
//# sourceMappingURL=ChartMenuLayout.js.map