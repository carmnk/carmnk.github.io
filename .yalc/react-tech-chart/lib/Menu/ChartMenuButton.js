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
import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { mdiMenu } from "@mdi/js";
import { Icon } from "@mdi/react";
import React from "react";
export var ChartMenuButtonComponent = function (props) {
    var bottomY = props.bottomY, onOpenClick = props.onOpenClick;
    return (_jsx(Box, __assign({ sx: { position: "absolute", top: bottomY - 48 - 10, left: 10 } }, { children: _jsx(Button, __assign({ color: "primary", variant: "contained", onClick: onOpenClick, sx: {
                width: 48,
                minWidth: 48,
                // background: "primary.main",
                height: 48,
                textTransform: "none",
                borderRadius: 2,
                opacity: 0.8,
                padding: 0,
            } }, { children: _jsx(Icon, { path: mdiMenu, size: "48px", color: "#fff" }, void 0) }), void 0) }), void 0));
};
export var ChartMenuButton = React.memo(ChartMenuButtonComponent);
//# sourceMappingURL=ChartMenuButton.js.map