import { jsx as _jsx } from "react/jsx-runtime";
import useTheme from "@mui/material/styles/useTheme";
import { CIcon } from "../../Components/CIcon";
import { Colorpicker } from "../../Components/Colorpicker";
import { CTreeItem } from "../../Components/CTreeItem";
export var CMColorPropTreeItem = function (props) {
    var nodeId = props.nodeId, onColorSelected = props.onColorSelected, color = props.color, iconPath = props.iconPath, text = props.text, fullscreen = props.fullscreen;
    var theme = useTheme();
    return (_jsx(CTreeItem, { nodeId: nodeId, labelText: text, typographyVariant: "body1", labelIcon: _jsx(CIcon, { path: iconPath, size: "24px", color: theme.palette.text.primary, border: theme.palette.mode === "dark" ? undefined : "1px solid #bbb" }, void 0), labelInfo: _jsx(Colorpicker, { color: typeof color === "string" ? color : color[0], onColorSelected: onColorSelected, fullscreen: fullscreen }, void 0) }, nodeId));
};
//# sourceMappingURL=CMColorPropTreeItem.js.map