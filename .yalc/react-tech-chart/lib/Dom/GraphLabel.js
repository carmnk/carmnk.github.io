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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { mdiChartBellCurve, mdiChartLine } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import * as T from "../Types";
export var GraphLabel = function (props) {
    var dataset = props.dataset, name = props.name, decimals = props.decimals, onClick = props.onClick, subchartIdx = props.subchartIdx, graphIdx = props.graphIdx, graphTypes = props.graphTypes;
    var handleClick = React.useCallback(function (e) {
        onClick === null || onClick === void 0 ? void 0 : onClick(e, subchartIdx, graphIdx);
    }, [onClick, subchartIdx, graphIdx]);
    if (!dataset)
        return null;
    return (_jsx(Button, __assign({ style: { textTransform: "none", textAlign: "left" }, onClick: handleClick, startIcon: _jsx(Icon, { path: T.isIndicatorDataset(dataset) ? mdiChartBellCurve : mdiChartLine, size: 1.0 }, void 0) }, { children: T.isIndicatorDataset(dataset) ? (_jsx(Typography, __assign({ variant: "body2" }, { children: "".concat(name, ":").concat(dataset.prices
                .map(function (price, pIdx) {
                var _a, _b;
                return price &&
                    decimals &&
                    ["line", "bars"].includes((_b = (_a = graphTypes === null || graphTypes === void 0 ? void 0 : graphTypes[pIdx]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : "")
                    ? price === null || price === void 0 ? void 0 : price.toFixed(decimals)
                    : null;
            })
                .filter(function (val) { return val !== null; })
                .join(", ") || "") }), void 0)) : (_jsx(Typography, __assign({ variant: "body2" }, { children: T.isCandleChartDataset(dataset)
                ? "".concat(name, "\n                O:").concat(dataset.open.toFixed(decimals), "\n                H:").concat(dataset.high.toFixed(decimals), "\n                L:").concat(dataset.low.toFixed(decimals), "\n                C:").concat(dataset.close.toFixed(decimals))
                : "".concat(name, "\n                C:").concat(dataset.close.toFixed(decimals)) }), void 0)) }), void 0));
};
//# sourceMappingURL=GraphLabel.js.map