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
                {`Lead Frontend Engineer: complete ERP software system for a SME in the financial industry (mezzanine financing for housing) to organize/automate existing business processes  (2years, maintainance, still ongoing at low workload / approx >50 views, >70 DB tables)`}
              </Box>
              <Stack direction="row" sx={liContentHStackStyle}>
                <InfoIconButton title="Frontend" path={mdiDevices} />
                <InfoIconButton title="Finance" path={mdiFinance} />
              </Stack>
            </Stack>
          </li>
          <li style={liStyle}>
            <Stack direction="row">
              <Box flexGrow={1}>
                {`Frontend Engineer: multi-plattform identity solution for legal persons incl. photo scanner and usage of different third party apis, but excluding the identification of natural persons. (0.5years, team > 5 FE and BE engineers, test-driven-development, code-reviews)`}
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
                Lead Frontend Engineer: Document-Management-System for an
                industry company used for extracting document text/values using
                google OCR api. Afterwards the data is stored and used as input
                for the accounting system (2 Months, Vue.js, Typescript,
                Vuetify)
              </Box>

              <Stack direction="row" sx={liContentHStackStyle}>
                <InfoIconButton title="Frontend" path={mdiDevices} />
                <InfoIconButton title="Manufacturing" path={mdiCogs} />
              </Stack>
            </Stack>
          </li>
          <li style={liStyle}>
            <Stack direction="row">
              <Box flexGrow={1}>
                <Typography>
                  Backend Engineer: upgrade / overhauling a shopify procurement
                  system
                </Typography>
              </Box>

              {isScreenBiggerThanXs && (
                <Stack direction="row" sx={liContentHStackStyle}>
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
                  Frontend Engineer: Responsive Click-Flow-Website providing
                  users information about investment strategies based on data
                  input.
                </Typography>
              </Box>

              <Stack direction="row" sx={liContentHStackStyle}>
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
