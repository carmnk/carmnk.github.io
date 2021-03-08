import React from "react";
import CBottomNav, { CBottomNavPropTypes } from "./Components/CBottomNav";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline, mdiMessageOutline, mdiHeartOutline, mdiMagnify, mdiSilverware } from "@mdi/js";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import ProviderProfile from "./Pages/ProviderProfile";
import Search from "./Pages/Search";

const routes = [
  {
    content: () => {
      return <Home />;
    },
    path: "/",
    exact: true,
  },
  {
    content: () => {
      return <ProviderProfile />;
    },
    path: "/provider",
    exact: true,
  },
  {
    content: () => {
      return <Search />;
    },
    path: "/search",
    exact: true,
  },
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(237, 63, 66)",
    },
    secondary: {
      main: "#007aff",
    },
    type: "light",
  },
});

//test dev build flag
//if ("NODE_ENV" in process.env) console.log(process.env.NODE_ENV);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "fixed", width: "100%", height: "calc(100% - 56px)", overflowY: "scroll" }}>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact={!!route.exact ? route.exact : true}
                key={index}
                path={route.path}
                children={<route.content />}
              />
            ))}
          </Switch>
        </Router>
      </div>
      <CBottomNav
        showLabels={true}
        onChange={(e, val) => {
          console.log("this is NavItem No. " + val);
        }}
        display={true}
        //activeNavItem={Toggle ? 1 : 0}
        navItems={[
          { label: "Stöbern", icon: <Icon path={mdiMagnify} size={1} /> },
          { label: "Gespeichert", icon: <Icon path={mdiHeartOutline} size={1} /> },
          { label: "Buchungen", icon: <Icon path={mdiSilverware} size={1} /> },
          { label: "Post", icon: <Icon path={mdiMessageOutline} size={1} /> },
          { label: "Login", icon: <Icon path={mdiAccountCircleOutline} size={1} /> },
        ]}
      />
    </ThemeProvider>
  );
}

export default App;
