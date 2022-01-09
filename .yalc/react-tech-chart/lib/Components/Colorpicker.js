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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { colorNameToRGB, hexToRgb } from "../utils/Color";
var rgbaColor = [
    "0, 0, 0",
    "102, 102, 102",
    "187, 187, 187",
    "255, 255, 255",
    "144, 19, 254",
    "189, 16, 224",
    "63, 81, 181",
    "6, 147, 227",
    "142, 209, 252",
    "0, 128, 128",
    "0, 208, 132",
    "123, 220, 181",
    "184, 0, 0",
    "245, 0, 87",
    "247, 141, 167",
    "121, 85, 72",
    "255, 105, 0",
    "252, 185, 0",
];
export var ColorRect = function (props) {
    var color = props.color, _a = props.width, width = _a === void 0 ? 24 : _a, _b = props.height, height = _b === void 0 ? 24 : _b, _c = props.BoxProps, BoxProps = _c === void 0 ? {} : _c;
    return (_jsx(Box, __assign({}, BoxProps, { sx: __assign({ minWidth: width, minHeight: height, boxSizing: "border-box", background: color, borderRadius: 1, border: "2px solid #000" }, BoxProps === null || BoxProps === void 0 ? void 0 : BoxProps.sx) }), void 0));
};
export var Colorpicker = function (props) {
    var color1 = props.color, onColorSelected = props.onColorSelected, fullscreen = props.fullscreen;
    var _a = React.useState(false), Open = _a[0], setOpen = _a[1];
    var _b = React.useState(color1), TempColor = _b[0], setTempColor = _b[1];
    var InputRef = React.useRef(null);
    var isHex = /((^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$))/i.test(TempColor);
    var hexToRgbRes = !!isHex && typeof TempColor === "string" ? hexToRgb(TempColor) : null;
    var isRgb = typeof TempColor === "string"
        ? TempColor.match(/^(rgb)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/)
        : null;
    var isRgba = !!isRgb && 2 in isRgb && isRgb[2] === "a";
    var rgbInternal = !!isRgb && 3 in isRgb && 4 in isRgb && 5 in isRgb
        ? [parseFloat(isRgb[3]), parseFloat(isRgb[4]), parseFloat(isRgb[5])]
        : isHex && !!hexToRgbRes
            ? [hexToRgbRes.r, hexToRgbRes.g, hexToRgbRes.b]
            : [];
    if (rgbInternal.length === 0) {
        var colorNameRes = colorNameToRGB(TempColor);
        if (colorNameRes)
            rgbInternal.push(colorNameRes.r, colorNameRes.g, colorNameRes.b);
    }
    var alphaProp = !!isRgba && !!isRgb && 6 in isRgb ? parseFloat(isRgb[6]) * 100 : 100;
    var _c = React.useState(alphaProp), AlphaVal = _c[0], setAlphaVal = _c[1];
    return (_jsxs(React.Fragment, { children: [_jsx(IconButton, __assign({ color: "primary", style: { padding: 0 }, onClick: function () {
                    setOpen(true);
                }, ref: InputRef }, { children: _jsx(ColorRect, { color: TempColor }, void 0) }), void 0), _jsxs(Popover, __assign({ id: "colorpicker-popover", open: Open, anchorEl: InputRef.current, onClose: function () {
                    setOpen(false);
                }, anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                }, transformOrigin: {
                    vertical: "top",
                    horizontal: "center",
                }, PaperProps: { sx: { width: 300, p: 1 } }, disablePortal: fullscreen }, { children: [_jsxs(Grid, __assign({ container: true, spacing: 1, sx: {
                            alignItems: "center",
                            justifyItems: "center",
                            alignContent: "center",
                            p: 1,
                        } }, { children: [rgbaColor.map(function (clr, clrIdx) { return (_jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(IconButton, __assign({ color: "default", style: { padding: 0 }, 
                                    // onMouseOver={() => {
                                    //   setColorHover(`rgba(${rgbaColor[clrIdx]},${AlphaVal})`);
                                    // }}
                                    // onMouseLeave={() => {
                                    //   setColorHover(null);
                                    // }}
                                    onClick: function () {
                                        // onColorSelected("rgba(" + rgbaColor[clrIdx] + "," + AlphaVal / 100 + ")");
                                        setTempColor("rgba(" + rgbaColor[clrIdx] + "," + AlphaVal / 100 + ")");
                                    } }, { children: _jsx(ColorRect, { color: "rgba(" + clr + ",1)", width: 24, height: 24 }, void 0) }), void 0) }), clrIdx)); }), _jsx(Grid, __assign({ item: true, xs: 3 }, { children: _jsx(Typography, { children: "Alpha" }, void 0) }), void 0), _jsx(Grid, __assign({ item: true, xs: 6, style: { padding: "0px 10px" } }, { children: _jsx(Slider, { value: AlphaVal, onChange: function (e, val) {
                                        setAlphaVal(Array.isArray(val) ? val[0] : val);
                                    } }, void 0) }), void 0), _jsx(Grid, __assign({ item: true, xs: 3 }, { children: _jsx(TextField, { margin: "none", variant: "outlined", size: "small", inputProps: { style: { padding: "5px 5px 5px 10px" } }, value: AlphaVal, onChange: function (e) {
                                        var val = parseInt(e.target.value, 10);
                                        if (isNaN(val))
                                            val = 0;
                                        if (val < 0 || val > 100)
                                            return;
                                        setAlphaVal(val);
                                        onColorSelected("rgba(".concat(rgbInternal[0], ",").concat(rgbInternal[1], ",").concat(rgbInternal[2], ",").concat(val / 100, ")"));
                                    } }, void 0) }), void 0)] }), void 0), _jsxs(Grid, __assign({ container: true, spacing: 1, sx: {
                            alignItems: "center",
                            justifyItems: "center",
                            alignContent: "center",
                            p: 1,
                        } }, { children: [_jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(Typography, __assign({ component: "div", align: "center" }, { children: "R" }), void 0) }), void 0), _jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(Typography, __assign({ component: "div", align: "center" }, { children: "G" }), void 0) }), void 0), _jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(Typography, __assign({ component: "div", align: "center" }, { children: "B" }), void 0) }), void 0), _jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(Typography, __assign({ component: "div", align: "center" }, { children: "A" }), void 0) }), void 0), _jsx(Grid, { item: true, xs: 2 }, void 0), _jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(ColorRect, { color: "rgba(".concat(rgbInternal[0], ",").concat(rgbInternal[1], ",").concat(rgbInternal[2], ",").concat(AlphaVal / 100, ")"), width: 24, height: 24, BoxProps: { maxWidth: 24, maxHeight: 24 } }, void 0) }), void 0)] }), void 0), _jsxs(Grid, __assign({ container: true, spacing: 1, sx: {
                            alignItems: "center",
                            justifyItems: "center",
                            alignContent: "center",
                            p: 1,
                        } }, { children: [_jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(TextField, { onChange: function (e) {
                                        var red = parseInt(e.target.value);
                                        if (typeof red !== "number" || isNaN(red))
                                            return;
                                        var redAdjusted = Math.min(Math.max(red, 0), 255);
                                        setTempColor("rgba(".concat(redAdjusted, ",").concat(rgbInternal[1], ",").concat(rgbInternal[2], ",").concat(AlphaVal / 100, ")"));
                                    }, value: rgbInternal ? rgbInternal[0] : TempColor, margin: "none", variant: "outlined", size: "small", inputProps: {
                                        style: {
                                            padding: 5,
                                            background: "rgba(184, 0, 0, ".concat(rgbInternal ? rgbInternal[0] / 255 : 1, ")"),
                                        },
                                    } }, void 0) }), void 0), _jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(TextField, { onChange: function (e) {
                                        var green = parseInt(e.target.value);
                                        if (typeof green !== "number" || isNaN(green))
                                            return;
                                        var greenAdjusted = Math.min(Math.max(green, 0), 255);
                                        setTempColor("rgba(".concat(rgbInternal[0], ",").concat(greenAdjusted, ",").concat(rgbInternal[2], ",").concat(AlphaVal / 100, ")"));
                                    }, value: rgbInternal ? rgbInternal[1] : TempColor, margin: "none", variant: "outlined", size: "small", inputProps: {
                                        style: {
                                            padding: 5,
                                            background: "rgba(0, 208, 132, ".concat(rgbInternal ? rgbInternal[1] / 255 : 1, ")"),
                                        },
                                    }, fullWidth: true }, void 0) }), void 0), _jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(TextField, { onChange: function (e) {
                                        var blue = parseInt(e.target.value);
                                        if (typeof blue !== "number" || isNaN(blue))
                                            return;
                                        var blueAdjusted = Math.min(Math.max(blue, 0), 255);
                                        setTempColor("rgba(".concat(rgbInternal[0], ",").concat(rgbInternal[1], ",").concat(blueAdjusted, ",").concat(AlphaVal / 100, ")"));
                                    }, value: rgbInternal ? rgbInternal[2] : TempColor, margin: "none", variant: "outlined", size: "small", inputProps: {
                                        style: {
                                            padding: 5,
                                            background: "rgba(6, 147, 227, ".concat(rgbInternal ? rgbInternal[2] / 255 : 1, ")"),
                                        },
                                    } }, void 0) }), void 0), _jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(TextField, { disabled: true, value: AlphaVal, margin: "none", variant: "outlined", size: "small", inputProps: { style: { padding: 5, background: "#bbb" } } }, void 0) }), void 0), _jsx(Grid, { item: true, xs: 2 }, void 0), _jsx(Grid, __assign({ item: true, xs: 2 }, { children: _jsx(Button, __assign({ color: "secondary", variant: "contained", size: "small", style: { minWidth: 0 }, onClick: function () {
                                        setOpen(false);
                                        onColorSelected("rgba(".concat(rgbInternal[0], ",").concat(rgbInternal[1], ",").concat(rgbInternal[2], ",").concat(AlphaVal / 100, ")"));
                                    } }, { children: "OK" }), void 0) }), void 0)] }), void 0)] }), void 0)] }, void 0));
};
//# sourceMappingURL=Colorpicker.js.map