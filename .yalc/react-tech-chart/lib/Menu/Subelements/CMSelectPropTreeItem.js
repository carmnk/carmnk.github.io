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
import { CTreeItem } from "../../Components/CTreeItem";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
export var CMSelectPropTreeItem = function (props) {
    var nodeId = props.nodeId, labelIcon = props.labelIcon, labelText = props.labelText, onChangeConfirmed = props.onChangeConfirmed, value = props.value, options = props.options, fullscreen = props.fullscreen;
    return (_jsx(CTreeItem, { nodeId: nodeId, labelText: labelText, typographyVariant: "body1", labelIcon: labelIcon, labelInfo: _jsx(Select, __assign({ size: "small", margin: "none", SelectDisplayProps: {
                style: { paddingTop: 2, paddingBottom: 2 },
            }, MenuProps: { disablePortal: fullscreen }, value: value, onChange: function (e) {
                var newValue = e.target.value;
                onChangeConfirmed === null || onChangeConfirmed === void 0 ? void 0 : onChangeConfirmed(newValue);
            } }, { children: options.map(function (option, oIdx) {
                var txt = typeof option === "object" && "text" in option ? option === null || option === void 0 ? void 0 : option.text : option;
                var val = typeof option === "object" && "value" in option ? option === null || option === void 0 ? void 0 : option.value : option;
                return (_jsx(MenuItem, __assign({ value: val }, { children: txt }), "menu-".concat(nodeId, "-o-").concat(oIdx)));
            }) }), void 0) }, nodeId));
};
//# sourceMappingURL=CMSelectPropTreeItem.js.map