import { mdiLinkedin, mdiGithub } from "@mdi/js";
import {
  Grid,
  Stack,
  Box,
  Typography,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { XingIcon } from "../../assets/icons/XingIcon";
import { CImg } from "../../components/basics/CImg";
import {
  navigateToLinkedIn,
  navigateToXing,
  navigateToGithub,
} from "../../utils/navigation";
import { DashboardCard } from "./DashboardCard";
import Icon from "@mdi/react";

export const DashboardProfile = () => {
  const theme = useTheme();
  const isScreenBiggerThanXs = useMediaQuery("(min-width:600px)");
  const isMinTablet = true;
  const iconButtonSize = 1.5;

  const buttonColor = theme.palette.primary.main;

  return (
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
            <Typography lineHeight={"1em"}>Software Engineer</Typography>
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
              width={isScreenBiggerThanXs ? "96px" : "64px"}
            />
          </Box>
        </Stack>
      </DashboardCard>
    </Grid>
  );
};
