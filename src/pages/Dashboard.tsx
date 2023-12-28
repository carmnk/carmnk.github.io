/*  eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Box,
  Chip,
  Grid,
  IconButton,
  Rating,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  mdiLinkedin,
  mdiGithub,
  mdiFinance,
  mdiCogs,
  mdiCardAccountDetails,
  mdiCar,
  mdiCart,
} from "@mdi/js";
import { CContainer } from "../components/basics/CContainer";
import Icon from "@mdi/react";
import { PieChart } from "../components/charts/PieChart";
import { XingIcon } from "../assets/icons/XingIcon";
import {
  navigateToLinkedIn,
  navigateToXing,
  navigateToGithub,
} from "../utils/navigation";
import { CGrid } from "../components/basics/CGrid";
import { CImg } from "../components/basics/CImg";
import { DashboardCard } from "./Dashboard/DashboardCard";
import { DashboardMap } from "./Dashboard/Map";
import { DashboardLinechart } from "./Dashboard/DashboardLinechart";
import { DashboardProjects } from "./Dashboard/DashboardProjects";
import { DashboardCodingSkills } from "./Dashboard/DashboardCodingSkills";
import { DashboardFields } from "./Dashboard/DashboardFields";
import { DashboardKpis } from "./Dashboard/DashboardKpis";

export const Dashboard = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const defaultColor = "#333";
  const isMinTablet = true;
  const iconButtonSize = 1.5;

  const buttonColor = theme.palette.primary.main;
  const headingColor = "primary.main";
  const textColor = "text.primary"; // theme?.palette?.mode === 'dark' ? 'primary.main' : 'text.primary'

  return (
    <>
      <Box
        height="100%"
        id="home-start"
        sx={{
          overflowY: "auto",
          marginTop: "-64px",
          paddingTop: "64px",
          boxSizing: "border-box",
        }}
      >
        <CContainer paddingTop="64px" paddingBottom="64px" id="portfolio-start">
          <Grid spacing={4} container>
            {/* Profile Card */}
            <Grid item xs={12} md={6} lg={4}>
              <DashboardCard>
                <Stack direction="row" alignItems="center" gap={4}>
                  <Box>
                    <Typography
                      variant={"h5"}
                      component="div"
                      color={"primary.main"}
                      marginBottom="8px"
                    >
                      Carsten Menk
                    </Typography>
                    {/* <Typography fontWeight={800}>Carsten Menk</Typography> */}
                    <Typography lineHeight={"1em"}>
                      Software Engineer
                    </Typography>
                    <Typography lineHeight={"1em"} mt={"4px"}>
                      Diplom-Wirtschaftsingenieur
                    </Typography>
                    <Typography variant="body2" lineHeight={"1em"} mt={"4px"}>
                      (eq. to Master in Industrial Eng)
                    </Typography>
                    <Stack direction="row" marginTop={4}>
                      <Tooltip
                        title={
                          <Typography variant="body2">
                            Visit my profile on LinkedIn
                          </Typography>
                        }
                      >
                        <IconButton size="small" onClick={navigateToLinkedIn}>
                          <Icon
                            path={mdiLinkedin}
                            size={iconButtonSize}
                            color={buttonColor}
                          ></Icon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title={
                          <Typography variant="body2">
                            Visit my profile on Xing
                          </Typography>
                        }
                      >
                        <IconButton size="small" onClick={navigateToXing}>
                          <XingIcon
                            color={buttonColor}
                            width={isMinTablet ? "34px" : "28px"}
                            height={isMinTablet ? "34px" : "28px"}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title={
                          <Typography variant="body2">
                            Visit my profile on Github
                          </Typography>
                        }
                      >
                        <IconButton size="small" onClick={navigateToGithub}>
                          <Icon
                            path={mdiGithub}
                            size={iconButtonSize}
                            color={buttonColor}
                          ></Icon>
                        </IconButton>
                      </Tooltip>
                      {/* <Tooltip
                        title={
                          <Typography variant="body2">
                            Schreiben Sie mir eine E-Mail
                          </Typography>
                        }
                      >
                        <IconButton size="small" onClick={sendMail}>
                          <Icon
                            path={mdiEmail}
                            size={iconButtonSize}
                            color={buttonColor}
                          ></Icon>
                        </IconButton>
                      </Tooltip> */}
                    </Stack>
                  </Box>
                  <Box>
                    <CImg
                      src="/profile2.jpg"
                      borderRadius="50%"
                      border={`5px solid #333`}
                      display="block"
                      alt="Profile"
                      width={isDesktop ? "96px" : "64px"}
                    />
                  </Box>
                </Stack>
              </DashboardCard>
            </Grid>

            {/* KPIs */}
            <DashboardKpis />

            {/* Fields and Industries  */}
            <DashboardFields />

            {/* Empty Space for md layout  */}
            <Grid
              item
              xs={0}
              sm={6}
              md={0}
              sx={{
                display: { xs: "none", sm: "block", md: "block", lg: "none" },
              }}
            />

            {isMd && <DashboardProjects />}

            {/*  Coding Skills */}
            <DashboardCodingSkills />

            {/* Projects/Main */}
            {!isMd && <DashboardProjects />}

            {/* Contributions Linechart */}
            <DashboardLinechart />

            {/* Location */}
            <DashboardMap />
          </Grid>
        </CContainer>
      </Box>
    </>
  );
};
