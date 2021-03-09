import React from "react";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";

const routes = [
  {
    content: (props: any) => {
      return <Home {...props} />;
    },
    path: "/",
    exact: true,
  },
];

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#f50057",
    },
    type: "light",
  },
  spacing: (factor) => `${0.5 * factor}rem`,
  overrides: { MuiCssBaseline: { "@global": { body: {boxSizing: "border-box"}}} },
});

theme.typography.h1 = { fontFamily: "'Open Sans', sans-serif, Arial", fontWeight: 600, fontSize: "4rem", lineHeight: 1.167, };
theme.typography.h2 = {
  fontFamily: "'Open Sans', sans-serif, Arial",
  fontWeight: 600,
  fontSize: "2.5rem",
  lineHeight: 1.167,
};
theme.typography.h3 = {
  fontFamily: "'Open Sans', sans-serif, Arial",
  fontWeight: 600,
  fontSize: "2rem",
  lineHeight: 1.167,
};
theme.typography.h4 = {
  fontFamily: "'Open Sans', sans-serif, Arial",
  fontWeight: 600,
  fontSize: "1.88rem",
  lineHeight: 1.167,
};
theme.typography.h5 = {
  fontFamily: "'Open Sans', sans-serif, Arial",
  fontWeight: 600,
  fontSize: "1.44rem",
  lineHeight: 1.167,
};
theme.typography.h6 = {
  fontFamily: "'Open Sans', sans-serif, Arial",
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: 1.167,
};
theme.typography.fontFamily = "'Quattrocento Sans', sans-serif" ;
theme = responsiveFontSizes(theme);
//test dev build flag
//if ("NODE_ENV" in process.env) console.log(process.env.NODE_ENV);

function App() {
  const [MenuOpen, setMenuOpen] = React.useState(false);
  const setMenuState = (newState?: boolean) => {
    if (newState === true || newState === false) setMenuOpen(newState);
    else setMenuOpen(!MenuOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/ens">
        <Switch>
          <Layout menuOpen={MenuOpen} setMenuOpen={setMenuState}>
            {routes.map((route, index) => (
              <Route
                exact={!!route.exact ? route.exact : true}
                key={index}
                path={route.path}
                children={<route.content menuOpen={MenuOpen} setMenuOpen={setMenuState} />}
              />
            ))}
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
