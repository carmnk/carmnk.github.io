import React from "react";
import logo from "./logo.svg";
import { muiDarkSiteTheme } from "./Layout/MuiTheme";
import {
  Box,
  Container,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import Icon from "@mdi/react";
import {
  mdiAirplane,
  mdiBicycle,
  mdiBike,
  mdiGithub,
  mdiGoogleController,
  mdiLanguageTypescript,
  mdiLinkedin,
  mdiMapMarker,
  mdiMarker,
  mdiTrendingUp,
} from "@mdi/js";
// import { CChart, useChartController, Types as T, iKAMA, createIRSI, defaultDarkTheme, iEMA } from "react-tech-chart";
import { DesignDivider } from "./Layout/DesignDivider";
import { Title } from "./Layout/Title";
import { References } from "./Layout/References";
import { Profile } from "./Layout/Profile";
import { fbExampleData } from "./fbDataset";
import { Footer } from "./Layout/Footer";

const rectColorCss = {
  background: "#009688",
  display: "inline-block",
};
const rectSecColorCss = {
  background: "rgba(0,150,136,0.5)",
  display: "inline-block",
};

// const initIndicators = [
//   {
//     id: "kama_01",
//     type: "indicator" as const,
//     indicator: iKAMA,
//     graphProps: {
//       style: {
//         strokeColor: ["#0693E3"],
//       },
//     },
//   },

//   { type: "indicator" as const, indicator: createIRSI({ period: 5 }), id: "rsi_01" },
//   {
//     id: "ema_rsi_01",
//     type: "indicator" as const,
//     indSrcId: "rsi_01",
//     indicator: iEMA,
//     graphProps: {
//       style: {
//         strokeColor: ["#0693E3"],
//       },
//     },
//   },
// ];

// const settings: T.UseChartControllerProps["settings"] = {
//   disableTheme: true,
//   initialTheme: defaultDarkTheme,
//   initWidthPerTick: 8,
//   initialIndicators: initIndicators,
//   // maxUpdatesPerSec: 40
// };

function App() {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const theme = muiDarkSiteTheme;
  const [Data] = React.useState<any>(fbExampleData.map((dat: any) => ({ ...dat, date: new Date(dat.date) })));
  // const Controller = useChartController({
  //   data: { data: Data, name: "Meta Platforms", type: "chart", id: "mainchart" },
  //   rtData: undefined,
  //   settings,
  // });
  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "fixed", width: "100%", height: "100%", background: "#333333", overflowY: "auto" }}>
        <Title />
        <References />
        <Profile />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
