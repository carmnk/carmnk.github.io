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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import { mdiWeb, mdiFileDelimitedOutline, mdiArrowRightThick, mdiClose } from "@mdi/js";
import { Icon } from "@mdi/react";
import React from "react";
import { CSnackBar } from "../../Components/CSnackbar";
import { ChartMenuListItem } from "../Subelements/ChartMenuListItem";
import uniqid from "uniqid";
import { parseCsvFileObj } from "../../utils/Csv";
export var CMChart = function (props) {
    var Dispatch = props.Dispatch;
    var theme = useTheme();
    var _a = React.useState([]), IsError = _a[0], setIsError = _a[1];
    var HiddenInputRef = React.useRef(null);
    var _b = React.useState(false), ShowUrlTextfield = _b[0], setShowUrlTextfield = _b[1];
    var _c = React.useState(""), CsvUrl = _c[0], setCsvUrl = _c[1];
    // async function handleInputFileChange(evt: React.ChangeEvent<HTMLInputElement>) {
    //   const files = evt.target.files;
    //   if (!files) return;
    //   if (files.length > 0) {
    //     try {
    //       const dataSeries = await parseCsvFileObj(files[0]);
    //       const graphName = files[0].name.substring(0, files[0].name.lastIndexOf("."));
    //       Dispatch({
    //         task: "addSubchart",
    //         params: { dataSeries, graphName, reset: true, id: uniqid() },
    //       });
    //       setIsError((current) => [...current, { type: "success", text: "Graph successfully loaded" }]);
    //     } catch (err) {
    //       console.error("Error - could not parse provided local file", err);
    //       setIsError((current) => [...current, { type: "error", text: "Error - could not parse provided local file" }]);
    //     }
    //   }
    // }
    var handleInputFileChange = React.useCallback(function (evt) { return __awaiter(void 0, void 0, void 0, function () {
        var files, dataSeries, graphName, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = evt.target.files;
                    if (!files)
                        return [2 /*return*/];
                    if (!(files.length > 0)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, parseCsvFileObj(files[0])];
                case 2:
                    dataSeries = _a.sent();
                    graphName = files[0].name.substring(0, files[0].name.lastIndexOf("."));
                    Dispatch({
                        task: "addSubchart",
                        params: { dataSeries: dataSeries, graphName: graphName, reset: true, id: uniqid() },
                    });
                    setIsError(function (current) { return __spreadArray(__spreadArray([], current, true), [{ type: "success", text: "Graph successfully loaded" }], false); });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error("Error - could not parse provided local file", err_1);
                    setIsError(function (current) { return __spreadArray(__spreadArray([], current, true), [{ type: "error", text: "Error - could not parse provided local file" }], false); });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [Dispatch]);
    // evt handler for KeyUp evt of Input/Textfield -> Callback onEnter
    var fetchCsvFromURL = React.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, file, chartSeries, chartName, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!CsvUrl)
                        throw new Error("url not provided");
                    return [4 /*yield*/, fetch(CsvUrl)];
                case 1:
                    resp = _a.sent();
                    if (!resp)
                        throw new Error("cant download file from url");
                    file = resp;
                    return [4 /*yield*/, parseCsvFileObj(file)];
                case 2:
                    chartSeries = _a.sent();
                    chartName = CsvUrl.substring(CsvUrl.lastIndexOf("/") + 1, CsvUrl.lastIndexOf("."));
                    Dispatch({
                        task: "addSubchart",
                        params: { chartSeries: chartSeries, chartName: chartName, reset: true, id: uniqid() },
                    });
                    setIsError(function (current) { return __spreadArray(__spreadArray([], current, true), [{ type: "success", text: "Graph successfully loaded" }], false); });
                    setShowUrlTextfield(false);
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.error("Error - could not download file from URL or File could not be parsed", err_2);
                    setIsError(function (current) { return __spreadArray(__spreadArray([], current, true), [{ type: "error", text: "Error - " + err_2 }], false); });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [CsvUrl, Dispatch]);
    // async function fetchCsvFromURL() {}
    var HandleOnKeyUp = React.useCallback(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (e.key === "Enter" && e.type === "keyup") {
                fetchCsvFromURL();
            }
            return [2 /*return*/];
        });
    }); }, [fetchCsvFromURL]);
    var handleShowUrlTooltip = React.useCallback(function () {
        setShowUrlTextfield(true);
    }, [setShowUrlTextfield]);
    var handleHideUrlTooltip = React.useCallback(function () {
        setShowUrlTextfield(false);
    }, [setShowUrlTextfield]);
    var handleOpenFile = React.useCallback(function () {
        var _a, _b;
        (_b = (_a = HiddenInputRef === null || HiddenInputRef === void 0 ? void 0 : HiddenInputRef.current) === null || _a === void 0 ? void 0 : _a.click) === null || _b === void 0 ? void 0 : _b.call(_a);
    }, [HiddenInputRef]);
    return (_jsxs(React.Fragment, { children: [IsError.length > 0
                ? IsError.map(function (msg, msgIdx) {
                    var _a;
                    return (_jsx(CSnackBar, { autoHideDuration: 5000, type: (_a = msg.type) !== null && _a !== void 0 ? _a : "error", open: IsError.length > 0, onClose: function () { return setIsError(function (current) { return (current.length === 1 ? [] : current.splice(1)); }); }, content: msg.text, msgIdx: msgIdx }, "msg-".concat(msgIdx)));
                })
                : null, _jsx("input", { type: "file", style: {
                    visibility: "hidden",
                    position: "absolute",
                    top: 0,
                    height: 0,
                    width: 0,
                }, ref: HiddenInputRef, onChange: handleInputFileChange }, void 0), _jsxs(List, __assign({ sx: { pt: 4 } }, { children: [_jsx(ChartMenuListItem, { text: "CSV from device", id: "1", iconPath: mdiFileDelimitedOutline, iconColor: theme.palette.secondary.contrastText, onClick: handleOpenFile }, void 0), _jsx(ChartMenuListItem, { text: "CSV from URL", id: "2", iconPath: mdiWeb, iconColor: theme.palette.secondary.contrastText, onClick: handleShowUrlTooltip }, void 0), ShowUrlTextfield ? (_jsx("div", { children: _jsx(TextField, { helperText: "Enter/Paste URL", fullWidth: true, onKeyUp: HandleOnKeyUp, value: CsvUrl, onChange: function (e) { return setCsvUrl(e.target.value); }, sx: { p: 1, pt: 2, boxSizing: "border-box" }, InputProps: {
                                sx: { boxSizing: "border-box", pr: 0 },
                                endAdornment: (_jsx(InputAdornment, __assign({ position: "end" }, { children: _jsxs(Stack, __assign({ direction: "row" }, { children: [_jsx(IconButton, __assign({ onClick: fetchCsvFromURL, size: "small" }, { children: _jsx(Icon, { path: mdiArrowRightThick, size: 1 }, void 0) }), void 0), _jsx(IconButton, __assign({ onClick: handleHideUrlTooltip }, { children: _jsx(Icon, { path: mdiClose, size: 1 }, void 0) }), void 0)] }), void 0) }), void 0)),
                            } }, void 0) }, void 0)) : null] }), void 0)] }, void 0));
};
//# sourceMappingURL=CMChart.js.map