import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { BackgroundAnimation } from "../components/animation/BackgroundAnimation";

export const Home = () => {
  return (
    <Box
      height="100%"
      id="home-start"
      //   ref={scrollRef}
      sx={{
        overflowY: "auto",
        marginTop: "-64px",
        paddingTop: "64px",
        boxSizing: "border-box",
      }}
    >
      <Box height="100%">
        <Box sx={{ overflow: "hidden" }} pt={12}>
          <BackgroundAnimation />
        </Box>

        <Container>
          <Typography variant="h1" color="text.primary" textAlign="center">
            Welcome I'm Carsten Menk,
          </Typography>
          <Typography variant="h1" color="text.primary" textAlign="center">
            The systematic Software Engineer
          </Typography>
        </Container>
      </Box>
      {/* 
      <Portfolio />
      <Box>
        <References />
      </Box>

      <Box id="skills-start">
        <Skills />
      </Box> */}
    </Box>
  );
};
