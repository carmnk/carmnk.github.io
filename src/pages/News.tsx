import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const News = () => {
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
        <Box sx={{ overflow: "hidden" }}></Box>

        <Container>
          <Typography variant="h2" color="text.primary">
            ...Coming soon
          </Typography>

          {/* <Typography variant="h2" color="text.primary">
            Projects
          </Typography> */}
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
