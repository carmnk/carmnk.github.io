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
import Icon from "@mdi/react";
export var CIcon = function (props) {
    var path = props.path, size = props.size, style = props.style, background = props.background, border = props.border, other = __rest(props, ["path", "size", "style", "background", "border"]);
    return (_jsx(Icon, __assign({ path: path, size: size }, other, { style: __assign({ background: background, border: border !== null && border !== void 0 ? border : "1px solid #666", borderRadius: 5, marginRight: 10, boxSizing: "border-box" }, style) }), void 0));
};
//# sourceMappingURL=CIcon.js.map