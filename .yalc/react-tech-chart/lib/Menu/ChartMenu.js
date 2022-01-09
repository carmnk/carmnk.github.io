import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Home } from "./Content/Home";
import { CMSettings } from "./Content/Settings";
import { CMChart } from "./Content/Chart";
import { IndicatorsAdd } from "./Content/IndicatorsAdd";
import { ChartMenuLayout } from "./ChartMenuLayout";
import { IndicatorsEdit } from "./Content/IndicatorsEdit";
import { ToolsAdd } from "./Content/ToolsAdd";
import { ToolsEdit } from "./Content/ToolsEdit";
export var CChartMenuComponent = function (props) {
    var onClose = props.onClose, ChartMenuState = props.ChartMenuState, subcharts = props.subcharts, theme = props.theme, onNavigate = props.onNavigate, Dispatch = props.Dispatch, onSettingsExpand = props.onSettingsExpand, fullscreen = props.fullscreen, settings = props.settings, data = props.data, events = props.events;
    var isDesktop = useMediaQuery("(min-width:600px)");
    var contentPages = [
        {
            location: "menu",
            headerText: "Chart Menu",
            component: function () { return _jsx(Home, { onNavigate: onNavigate, events: events }, void 0); },
        },
        {
            location: "chart",
            headerText: "Chart",
            component: function () { return _jsx(CMChart, { Dispatch: Dispatch, events: events, settings: settings }, void 0); },
        },
        {
            location: "indicators",
            headerText: "Add Indicator",
            component: function () { return (_jsx(IndicatorsAdd, { subcharts: subcharts, onNavigate: onNavigate, location: ChartMenuState.location, Dispatch: Dispatch, settings: settings, data: data, fullscreen: fullscreen }, void 0)); },
        },
        {
            location: "editIndicator",
            headerText: "Edit Indicator",
            component: function () { return (_jsx(IndicatorsEdit, { subcharts: subcharts, onNavigate: onNavigate, location: ChartMenuState.location, Dispatch: Dispatch, settings: settings, data: data, fullscreen: fullscreen }, void 0)); },
        },
        {
            location: "tools",
            headerText: "Add Tool",
            component: function () { return _jsx(ToolsAdd, { subcharts: subcharts, Dispatch: Dispatch, onNavigate: onNavigate }, void 0); },
        },
        {
            location: "editTool",
            headerText: "Edit Tool",
            component: function () { return (_jsx(ToolsEdit, { subcharts: subcharts, Dispatch: Dispatch, onNavigate: onNavigate, fullscreen: fullscreen }, void 0)); },
        },
        {
            location: "settings",
            headerText: "Settings",
            component: function () { return (_jsx(CMSettings, { ChartMenuState: ChartMenuState, subcharts: subcharts, theme: theme, Dispatch: Dispatch, onNavigate: onNavigate, onSettingsExpand: onSettingsExpand, data: data, fullscreen: fullscreen }, "cm-settings")); },
        },
    ];
    var contentPage = contentPages.find(function (page) { return page.location === ChartMenuState.location; });
    if (!ChartMenuState.location || !contentPage)
        return null;
    var ContentPageComponent = contentPage.component;
    var headerText = contentPage.headerText;
    // console.log("Chartmenu renders");
    return (_jsx(ChartMenuLayout, { headerText: headerText, isDesktop: isDesktop, settings: settings, location: ChartMenuState.location, onNavigate: onNavigate, Dispatch: Dispatch, fullscreen: fullscreen, onClose: onClose, content: _jsx(ContentPageComponent, {}, void 0), events: events }, void 0));
};
export var CChartMenu = React.memo(CChartMenuComponent);
//# sourceMappingURL=ChartMenu.js.map