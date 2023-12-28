import {
  mdiDevices,
  mdiFinance,
  mdiCardAccountDetails,
  mdiCogs,
  mdiServerNetwork,
  mdiCart,
} from "@mdi/js";
import Icon from "@mdi/react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  useMediaQuery,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { DashboardCard } from "./DashboardCard";

const heightStyle = { height: "42px" };
const liStyle = { paddingBottom: 8 };

const liContentHStackStyle = { display: { xs: "none", sm: "flex" } };

const InfoIconButton = (props: { path: string; title: string }) => {
  const { path, title } = props;
  const theme = useTheme();
  return (
    <Tooltip title={title} arrow placement="top">
      <div>
        <IconButton size="small" sx={heightStyle}>
          <Box width="32px" height="32px">
            <Icon
              path={path}
              size={"32px"}
              color={theme.palette.primary.main}
            />
          </Box>
        </IconButton>
      </div>
    </Tooltip>
  );
};

export const DashboardProjects = () => {
  const isScreenBiggerThanXs = useMediaQuery("(min-width:600px)");

  return (
    <Grid item xs={12} md={6} lg={8}>
      <DashboardCard>
        <Typography
          variant={"h5"}
          component="div"
          color={"primary.main"}
          marginBottom="8px"
        >
          Projects
        </Typography>
        <ul>
          <li style={liStyle}>
            <Stack direction="row">
              <Box flexGrow={1}>
                Frontend: Webapp to manage business processes in a SME in the
                financial industry from development till maintainance
              </Box>
              <Stack
                direction="row"
                sx={liContentHStackStyle}
              >
                <InfoIconButton title="Frontend" path={mdiDevices} />
                <InfoIconButton title="Finance" path={mdiFinance} />
              </Stack>
            </Stack>
          </li>
          <li style={liStyle}>
            <Stack direction="row">
              <Box flexGrow={1}>
                Frontend: multi-plattform identity solution for legal persons
                incl. photo scanner and usage of different apis but excluding
                the natural person part.
              </Box>
              <Stack direction="row" sx={liContentHStackStyle}>
                <InfoIconButton title="Frontend" path={mdiDevices} />
                <InfoIconButton
                  title="Identity Services"
                  path={mdiCardAccountDetails}
                />
              </Stack>
            </Stack>
          </li>
          <li style={liStyle}>
            <Stack direction="row">
              <Box flexGrow={1}>
                Frontend: Document-Management-System for for industry company
                used for storing and as interface for accounting software
              </Box>

              <Stack
                direction="row"
                sx={liContentHStackStyle}
              >
                <InfoIconButton title="Frontend" path={mdiDevices} />
                <InfoIconButton title="Manufacturing" path={mdiCogs} />
              </Stack>
            </Stack>
          </li>
          <li style={liStyle}>
            <Stack direction="row">
              <Box flexGrow={1}>
                <Typography>
                  Backend/node.js: upgrade / overhauling a shopify procurement
                  system
                </Typography>
              </Box>

              {isScreenBiggerThanXs && (
                <Stack
                  direction="row"
                  sx={liContentHStackStyle}
                >
                  <InfoIconButton title="Backend" path={mdiServerNetwork} />
                  <InfoIconButton title="E-Commerce" path={mdiCart} />
                </Stack>
              )}
            </Stack>
          </li>
          <li style={liStyle}>
            <Stack direction="row">
              <Box flexGrow={1}>
                <Typography>
                  Frontend/Serverless: Responsive Click-Flow-Website providing
                  users informations about investment strategies based on data
                  input
                </Typography>
              </Box>

              <Stack
                direction="row"
                sx={liContentHStackStyle}
              >
                <InfoIconButton title="Frontend" path={mdiDevices} />
                <InfoIconButton title="Finance" path={mdiFinance} />
              </Stack>
            </Stack>
          </li>
        </ul>
      </DashboardCard>
    </Grid>
  );
};
