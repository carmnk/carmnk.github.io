import { responsiveFontSizes, createTheme, TypographyProps } from "@mui/material";

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    // title: TypographyStyle;
    // subtitle: TypographyStyle;
    para1: TypographyStyle;
    inlinePara1: TypographyStyle;
    hText: TypographyStyle;
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    // title?: TypographyStyleOptions;
    // subtitle?: TypographyStyleOptions;
    para1?: TypographyStyleOptions;
    inlinePara1?: TypographyStyleOptions;
    hText: TypographyStyleOptions;
  }
}

export const muiLightSiteTheme = responsiveFontSizes(
  createTheme({
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
      para1: { lineHeight: 1.75, fontSize: "1.1rem", paddingTop: 8, paddingBottom: 8 },

      inlinePara1: { lineHeight: 1.75, fontSize: "1.1rem", color: "#fff" },
      hText: {
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
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
  })
);

export const muiDarkSiteTheme = responsiveFontSizes(
  createTheme({
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
      para1: { lineHeight: 1.75, fontSize: "1.1rem", paddingTop: 8, paddingBottom: 8, color: "#fff" },
      inlinePara1: { lineHeight: 1.75, fontSize: "1.1rem", color: "#fff" },
      hText: {
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
      },
      h1: {
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: "#fff",
      },
      h2: {
        fontWeight: 700,
        fontSize: "2.5rem",
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: "#fff",
      },
      h3: {
        fontWeight: 700,
        fontSize: "2.1rem",
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: "#fff",
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.8rem",
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: "#fff",
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.44rem",
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: "#fff",
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.25rem",
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: "#fff",
      },
      fontFamily: "'Quattrocento Sans',Roboto,Helvetica,Arial,sans-serif",
    }, 
  })
);
