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
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import { mdiMenuDown, mdiMenuRight } from "@mdi/js";
import Icon from "@mdi/react";
import useTheme from "@mui/material/styles/useTheme";
export var CTreeViewComponent = function (props) {
    var other = __rest(props, []);
    var theme = useTheme();
    return (_jsx(TreeView, __assign({ "aria-label": "treeview", defaultCollapseIcon: _jsx(Icon, { path: mdiMenuDown, size: 1, color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0), defaultExpandIcon: _jsx(Icon, { path: mdiMenuRight, size: 1, color: theme.palette.mode === "light" ? "#333" : "#fff" }, void 0), defaultEndIcon: _jsx("div", { style: { width: 24 } }, void 0), sx: { overflowY: "auto", pt: 1, pb: 1 } }, other, { children: props.children }), void 0));
};
export var CTreeView = React.memo(CTreeViewComponent);
//# sourceMappingURL=CTreeView.js.map