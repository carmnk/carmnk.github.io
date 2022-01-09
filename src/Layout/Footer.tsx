import { mdiLinkedin, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, Stack, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { DesignDivider } from "./DesignDivider";

export const Footer = () => {
    return (
      <React.Fragment>
        <Box sx={{ position: "relative", top: 0 }}>
          <DesignDivider align="bottom"></DesignDivider>
        </Box>
        <Box sx={{ bgcolor: "primary.main", pb: 2 }}>
          <Container maxWidth="xs">
            <Stack direction="row" alignContent="center" justifyContent="center" sx={{ gap: 1 }}>
              <Icon path={mdiLinkedin} size={"32px"} color="#333"></Icon>
              <Icon path={mdiGithub} size={"32px"} color="#333"></Icon>

              <Divider orientation="vertical" flexItem sx={{ borderColor: "black" }} />
              <Typography component="div">Impressum</Typography>
              <Divider orientation="vertical" flexItem sx={{ borderColor: "black" }} />
              <Typography component="div">Licenses</Typography>
            </Stack>
          </Container>
        </Box>
      </React.Fragment>
    );
}