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
import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
export var ConditionalMuiThemeProvider = function (props) {
    var disableTheme = props.disableTheme, theme = props.theme;
    return (_jsx(React.Fragment, { children: !disableTheme ? (_jsx(ThemeProvider, __assign({ theme: theme }, { children: props.children }), void 0)) : (props.children) }, void 0));
};
export var muiTheme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: "#009688",
        },
        secondary: {
            main: "#f50057",
        },
        mode: "light",
    },
    typography: {
        body1: {
            lineHeight: 1.75,
            fontSize: "1.1rem",
        },
        body2: {
            lineHeight: 1.75,
        },
        h1: {
            fontWeight: 600,
            fontSize: "3rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.1rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.8rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.44rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        fontFamily: "'Quattrocento Sans',Roboto,Helvetica,Arial,sans-serif",
    },
}));
export var muiDarkTheme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: "#009688",
        },
        secondary: {
            main: "#f50057",
        },
        mode: "dark",
        background: {
            paper: "#424242",
        },
    },
    typography: {
        body1: {
            lineHeight: 1.75,
            fontSize: "1.1rem",
        },
        body2: {
            lineHeight: 1.75,
        },
        h1: {
            fontWeight: 600,
            fontSize: "3rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.1rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.8rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.44rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: 1.75,
            fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        },
        fontFamily: "'Quattrocento Sans',Roboto,Helvetica,Arial,sans-serif",
    },
}));
//# sourceMappingURL=MuiTheme.js.map