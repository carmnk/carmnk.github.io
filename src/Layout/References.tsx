import React from "react";
import { Box, Container, Stack, Typography, Link as MuiLink, useMediaQuery } from "@mui/material";
import Icon from "@mdi/react";
import { DesignDivider } from "./DesignDivider";

export const References = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <React.Fragment>
      <div style={{ position: "relative", top: 0 }}>
        <DesignDivider align="bottom" />
      </div>
      <Box sx={{ bgcolor: "primary.main" }}>
        <Container sx={{ pt: 2, pb: 2 }}>
          <Typography variant={isDesktop ? "h3" : "h5"} component="div" color="#333">
            References
          </Typography>
          <Stack direction="row" sx={{ gap: 2 }}>
            <Typography variant="h6" component="div" color="#333">
              <MuiLink color="#333" href="https://carmnk.github.io/react-techchart/">
                {" "}
                react-techchart
              </MuiLink>
            </Typography>
            <div style={{ flexGrow: 1, maxWidth: 200 }} />
            <Typography variant="body1" component="div" color="#333">
              an interactive and extensible react charting tool <br />
              designed for technical chart analysis (MIT licensed)
            </Typography>
            <Box>{/* <CChart Controller={Controller}></CChart> */}</Box>
          </Stack>
          <Box sx={{ p: 2 }}>
            <img src="/ref-chart.jpg" style={{ maxWidth: "100%" }}/>
            <br />
            Here will be an interactive example.
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};
