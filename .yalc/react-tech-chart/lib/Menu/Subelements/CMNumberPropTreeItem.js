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
import { mdiCheck } from "@mdi/js";
import Icon from "@mdi/react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";
import { CTreeItem } from "../../Components/CTreeItem";
export var CMNumberPropTreeItem = function (props) {
    var nodeId = props.nodeId, labelIcon = props.labelIcon, labelText = props.labelText, onChangeConfirmed = props.onChangeConfirmed, value = props.value;
    var _a = React.useState(value), TempParam = _a[0], setTempParam = _a[1];
    return (_jsx(CTreeItem, { nodeId: nodeId, labelIcon: labelIcon, labelText: labelText, typographyVariant: "body1", labelInfo: _jsxs(Stack, __assign({ direction: "row" }, { children: [_jsx(TextField, { variant: "outlined", margin: "none", size: "small", inputProps: { style: { padding: 5, width: 50 } }, value: TempParam || "", onChange: function (e) {
                        var val = e.target.value;
                        var num = parseFloat(e.target.value);
                        if (isNaN(num) && e.target.value !== "")
                            return;
                        setTempParam(num || val || "");
                    }, onKeyUp: function (e) {
                        if (e.code === "Enter") {
                            var val = TempParam;
                            var num = typeof val === "string" ? parseInt(val) : val;
                            if (typeof num === "number" && isNaN(num))
                                return;
                            onChangeConfirmed === null || onChangeConfirmed === void 0 ? void 0 : onChangeConfirmed(num);
                        }
                    } }, void 0), typeof TempParam === "number" && value !== TempParam && (_jsx(IconButton, __assign({ size: "small", onClick: function () {
                        var val = TempParam;
                        var num = typeof val === "string" ? parseInt(val) : val;
                        if (typeof num === "number" && isNaN(num))
                            return;
                        onChangeConfirmed === null || onChangeConfirmed === void 0 ? void 0 : onChangeConfirmed(num);
                    } }, { children: _jsx(Icon, { path: mdiCheck, size: 1 }, void 0) }), void 0))] }), void 0) }, nodeId));
};
//# sourceMappingURL=CMNumberPropTreeItem.js.map