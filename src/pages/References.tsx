import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React, { useCallback } from "react";
import { CImg } from "../components/basics/CImg";
import { DashboardCard } from "./Dashboard/DashboardCard";

const OverlayBox = styled(Box)({
  "&:hover": {
    opacity: "0.75",
    background: "rgba(0,0,0,0.75)",
  },
  opacity: 0,
  background: "#000",
  zIndex: 1,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  transition: "opacity 0.6s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export type ReferenceProps = {
  projectTitle: string;
  projectTitleHref?: string;
  description: React.ReactNode;
  imageSrc?: string;
  overlayButtonLabel?: string;
  overlayButtonOnClick?: () => any;
  furtherDescription?: React.ReactNode;
};

export const Reference = (props: ReferenceProps) => {
  const {
    projectTitle,
    projectTitleHref,
    description,
    imageSrc,
    overlayButtonLabel,
    overlayButtonOnClick,
    furtherDescription,
  } = props;

  const theme = useTheme();
  const headerColor = theme.palette.mode === "dark" ? "#333" : "#fafafa";
  const defaultColor = theme.palette.mode === "dark" ? "#000" : "#fff";

  return (
    <>
      <Stack gap={2}>
        <Typography variant="h6" component="div">
          <Link
            color={headerColor}
            href={projectTitleHref ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            component={projectTitleHref ? "a" : "div"}
          >
            {projectTitle}
          </Link>
        </Typography>

        <Box>
          <Typography variant="body1" component="div" color={defaultColor}>
            {description}
          </Typography>
        </Box>
      </Stack>
      {imageSrc && (
        <Stack direction="row" justifyContent="center" mt={2}>
          <Box p={2} maxWidth="800px">
            <Box position="relative">
              <CImg
                src={imageSrc}
                alt={projectTitle}
                width="100%"
                height="auto"
              />
              {overlayButtonLabel && (
                <OverlayBox>
                  <Box>
                    <Button variant="contained" onClick={overlayButtonOnClick}>
                      <Box p={2}>{overlayButtonLabel}</Box>
                    </Button>
                  </Box>
                </OverlayBox>
              )}
            </Box>
          </Box>
        </Stack>
      )}
      {furtherDescription}
    </>
  );
};

// const parseStringNewLines = (str: string) => str;

export const News = () => {
  const handleNavTechchartRef = useCallback(() => {
    window?.open?.(
      "https://carmnk.github.io/react-techchart/",
      "_blank",
      "noopener"
    );
  }, []);
  const handleNavHtmlEditorRef = useCallback(() => {
    window?.open?.(
      "https://carmnk.github.io/html_editor/",
      "_blank",
      "noopener"
    );
  }, []);
  const handleNavGenericDashboardRef = useCallback(() => {
    window?.open?.(
      "http://h2972909.stratoserver.net:3000",
      "_blank",
      "noopener"
    );
  }, []);

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
          <Box mt={8}>
            <DashboardCard>
              <Typography variant="h5">HTML Editor</Typography>
              <Typography
                component="div"
                color={"text.primary"}
                marginBottom="8px"
              >
                A simple HTML editor with a live preview. Currently it support
                most features needed to build a pure HTML website with CSS,
                images and internal page routing. It could be further developed
                to support (limited) javascript and (react) components among
                others. Even a backend integration using a data relationship
                model like the one from the Gereric Dashboard could could be a
                future feature.
              </Typography>
              <Box maxWidth="100%" width={800} mx="auto">
                <Box position="relative" mt={2}>
                  <CImg
                    src="/htmlEditor.jpg"
                    alt="Generic Dashboard"
                    width="100%"
                  />
                  <OverlayBox>
                    <Box>
                      <Button
                        variant="contained"
                        onClick={handleNavHtmlEditorRef}
                      >
                        <Box p={2} onClick={handleNavHtmlEditorRef}>
                          Visit live demo
                        </Box>
                      </Button>
                    </Box>
                  </OverlayBox>
                </Box>
                <Typography
                  variant="caption"
                  color="text.primary"
                  textAlign="center"
                  component="div"
                >
                  Live demo (MVP with limited functionality) using FE and BE
                  (only EP to compile HTML)
                </Typography>
              </Box>
            </DashboardCard>
          </Box>
          <Box mt={8}>
            <DashboardCard>
              <Typography variant="h5" id="refs_generic_dashboard">
                Generic Dashboard
              </Typography>
              <Typography
                component="div"
                color={"text.primary"}
                marginBottom="8px"
              >
                A generic dashboard for table or tree-structured data. It is
                based on a data relationship model inspired by a projet
                developping an ERP software system. Frontend and backend are
                efficiently and flexibly coordinated with each other. Admin
                users can modify/extend most features directly in a GUI. Further
                customization can be done via code injections (e.g. formatting
                of values, custom calculations, etc.) or by creating new
                model-independent code/endpoints.
              </Typography>
              <Box maxWidth="100%" width={800} mx="auto">
                <Box position="relative" mt={2}>
                  <CImg
                    src="/genericDashboard.jpg"
                    alt="Generic Dashboard"
                    width="100%"
                  />

                  <OverlayBox>
                    <Box>
                      <Button
                        variant="contained"
                        onClick={handleNavGenericDashboardRef}
                      >
                        <Box p={2}>Visit experimental live demo</Box>
                      </Button>
                    </Box>
                  </OverlayBox>
                </Box>
                <Typography
                  variant="caption"
                  color="text.primary"
                  textAlign="center"
                  component="div"
                >
                  Experimental live demo with FE, BE and Postgres-DB, Currently, optimized for tablet and desktop only 
                </Typography>
              </Box>
            </DashboardCard>
          </Box>

          <Box mt={4}>
            <DashboardCard>
              <Typography variant="h5">React Tech Chart</Typography>
              <Typography
                component="div"
                color={"text.primary"}
                marginBottom="8px"
              >
                An interactive charting tool (npm) library. Time series data is
                displayed in a chart and can be manipulated by the user. The
                library is designed to be used in React/Typescript projects. It
                is published under MIT license. The library is suitable for use
                on mobile devices up to desktop computers. This was one of my
                first projects in React and I learned a lot about the render
                logic and performance optimization.
              </Typography>
              <Box maxWidth="100%" width={800} mx="auto">
                <Box position="relative" mt={2}>
                  <CImg
                    src="/techchart.png"
                    alt="Generic Dashboard"
                    width="100%"
                  />
                  <OverlayBox>
                    <Box>
                      <Button
                        variant="contained"
                        onClick={handleNavTechchartRef}
                      >
                        <Box p={2}>Visit live demo, docs and npm</Box>
                      </Button>
                    </Box>
                  </OverlayBox>
                </Box>
                <Typography
                  variant="caption"
                  color="text.primary"
                  textAlign="center"
                  component="div"
                >
                  Chart Live demo, Download library and docs
                </Typography>
              </Box>
            </DashboardCard>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
