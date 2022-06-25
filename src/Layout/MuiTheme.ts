import { responsiveFontSizes, createTheme, TypographyProps } from '@mui/material'

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    // title: TypographyStyle;
    // subtitle: TypographyStyle;
    // para1: TypographyStyle;
    // inlinePara1: TypographyStyle;
    // hText: TypographyStyle;
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    // title?: TypographyStyleOptions;
    // subtitle?: TypographyStyleOptions;
    // para1?: TypographyStyleOptions;
    // inlinePara1?: TypographyStyleOptions;
    // hText: TypographyStyleOptions;
  }
}
const mainLightColor = '#008080'
export const muiLightSiteTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: mainLightColor,
        // main: mainColor,
      },
      secondary: {
        main: '#f50057',
      },
      mode: 'light',
    },
    typography: {
      body1: {
        lineHeight: 1.75,
        fontSize: '1.2rem',
        fontWeight: 400,
      },
      body2: {
        lineHeight: 1.75,
      },
      // para1: { lineHeight: 1.75, fontSize: "1.1rem", paddingTop: 8, paddingBottom: 8 },

      // inlinePara1: { lineHeight: 1.75, fontSize: "1.1rem", color: "#fff" },
      // hText: {
      //   lineHeight: 1.75,
      //   fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
      // },
      h1: {
        fontWeight: 600,
        fontSize: '3rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainLightColor,
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.5rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainLightColor,
      },
      h3: {
        fontWeight: 600,
        fontSize: '2.1rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainLightColor,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.8rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainLightColor,
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.44rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainLightColor,
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainLightColor,
      },
      fontFamily: "'Quattrocento Sans',Roboto,Helvetica,Arial,sans-serif",
    },
  }), {factor: 2}
)

const mainDarkColor = '#009688'
export const muiDarkSiteTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: mainDarkColor,
      },
      secondary: {
        main: '#f50057',
      },
      mode: 'dark',
      background: {
        paper: '#424242',
      },
    },
    typography: {
      body1: {
        fontWeight: 400,
        lineHeight: 1.75,
        fontSize: '1.2rem',
        color: '#fff',
      },
      body2: {
        lineHeight: 1.75,
        color: '#ccc',
      },
      // para1: { lineHeight: 1.75, fontSize: "1.1rem", paddingTop: 8, paddingBottom: 8, color: "#fff" },
      // inlinePara1: { lineHeight: 1.75, fontSize: "1.1rem", color: "#fff" },
      // hText: {
      //   lineHeight: 1.75,
      //   fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
      // },
      h1: {
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainDarkColor,
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainDarkColor,
      },
      h3: {
        fontWeight: 700,
        fontSize: '2.1rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainDarkColor,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.8rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainDarkColor,
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.44rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainDarkColor,
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.75,
        fontFamily: "'Work Sans',Roboto,Helvetica,Arial,sans-serif",
        color: mainDarkColor,
      },
      fontFamily: "'Quattrocento Sans',Roboto,Helvetica,Arial,sans-serif",
    },
  }),
  { factor: 2 }
)
