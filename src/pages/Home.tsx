import { Box, Container, Typography } from "@mui/material";
import { BackgroundAnimation } from "../components/animation/BackgroundAnimation";
import { Button } from "../components/buttons/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { SWIPEABLE_ROUTES } from "./_Routes";
import { useCallback } from "react";

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const routeIndex = SWIPEABLE_ROUTES.findIndex(
    (route) => route.path === location.pathname
  );
  // const prevLink =
  //   routeIndex > 0 ? SWIPEABLE_ROUTES[routeIndex - 1].path : null;
  const nextLink =
    routeIndex < SWIPEABLE_ROUTES.length - 1
      ? SWIPEABLE_ROUTES[routeIndex + 1].path
      : null;

  const handlleContinue = useCallback(() => {
    if (nextLink) {
      navigate(nextLink);
    }
  }, [navigate, nextLink]);

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
        <Box sx={{ overflow: "hidden" }} pt={6} pb={4}>
          <BackgroundAnimation />
        </Box>

        <Container>
          <Typography variant="h1" color="text.primary" textAlign="center">
            Welcome I'm Carsten Menk,
          </Typography>
          <Typography variant="h2" color="text.primary" textAlign="center">
            Systematic Software Engineering
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Button type="text" onClick={handlleContinue}>
              <Typography
                variant="body1"
                color="text.primary"
                textAlign="center"
              >
                Click or Swipe to continue
              </Typography>
            </Button>
          </Box>
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
