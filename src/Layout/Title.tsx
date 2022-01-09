import { mdiLinkedin, mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import { Container, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { DesignDivider } from "./DesignDivider";

export const Title = () => {
    const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <React.Fragment>
      <DesignDivider />
      <Container maxWidth="md" sx={{ pt: 3, pb: 3 }}>
        <Stack alignContent="center" justifyContent="center" justifyItems="center">
          <img
            src="/sceme.svg"
            style={{ width: "100%", height: "100%", maxWidth: "768px" }}
            alt="coding work sceme"
          ></img>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ gap: 2 }}>
          <Stack alignItems="center" sx={{ gap: 1}}>
            <div style={{  width: 96,display: "flex", justifyContent: "center"}}>
              <img
                src="/profile.jpg"
                style={{ borderRadius: "50%", border: "5px solid #009688", display: "block" }}
                alt="Profile"
                width={isDesktop ? "96px" : "64px"}
              ></img>
            </div>
            <div>
              <Icon path={mdiLinkedin} size={"32px"} color="#009688"></Icon>
              <Icon path={mdiGithub} size={"32px"} color="#009688"></Icon>

              <img src="/map-marker.svg" alt="marker icon" style={{ width: "32px", height: "32px", fill: "red" }} />
            </div>
          </Stack>
          <Box>
            <Typography variant={isDesktop ? "h3" : "h5"} component="div" color="primary.main" sx={{}}>
              Hi I’m Carsten Menk, <br />
              Fullstack Developer
            </Typography>
            <Typography variant={isDesktop ? "h6" : "body1"} component="div" color="primary.main" sx={{ pt: 2 }}>
              focussing on typescript and react projects
            </Typography>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};
