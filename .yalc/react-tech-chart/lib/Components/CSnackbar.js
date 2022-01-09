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
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
var Alert = React.forwardRef(function Alert(props, ref) {
    return _jsx(MuiAlert, __assign({ elevation: 6, ref: ref, variant: "filled" }, props), void 0);
});
export var CSnackBar = function (props) {
    var open = props.open, onClose = props.onClose, content = props.content, type = props.type, _a = props.autoHideDuration, autoHideDuration = _a === void 0 ? 5000 : _a, msgIdx = props.msgIdx;
    var handleClose = function (event, reason) {
        if (reason === "clickaway")
            return;
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    return (_jsx(Snackbar, __assign({ anchorOrigin: { vertical: "bottom", horizontal: "center" }, open: open, autoHideDuration: autoHideDuration, onClose: handleClose, sx: { bottom: "".concat(24 * (msgIdx + 1) + 48 * msgIdx, "px !important"), color: "red" } }, { children: _jsx(Alert, __assign({ severity: type, onClose: handleClose }, { children: content }), void 0) }), void 0));
};
//# sourceMappingURL=CSnackbar.js.map