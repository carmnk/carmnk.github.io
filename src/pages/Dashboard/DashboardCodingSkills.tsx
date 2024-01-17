import { Grid, Typography, Box, Rating, Stack, useTheme } from "@mui/material";
import { DashboardCard } from "./DashboardCard";
import { useMemo } from "react";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "max-content max-content auto",
  gap: 2,
  alignItems: "center",
  pt: 1,
};

export const DashboardCodingSkills = () => {
  const theme = useTheme();

  const simpleProgressStyle = useMemo(
    () => ({
      border: "1px solid rgba(0,150,136,0.5)",
      borderRadius: "8px",
      padding: "0 8px",
      background: theme.palette.primary.main,
      height: 24,
      textAlign: "right" as const,
      color: "#fff",
    }),
    [theme]
  );

  return (
    <Grid item xs={12} md={6} lg={4}>
      <DashboardCard>
        <Typography
          variant={"h5"}
          component="div"
          color={"primary.main"}
          marginBottom="8px"
        >
          Coding Skills
        </Typography>

        <Box sx={gridStyle}>
          <Typography component="div">TS / JS</Typography>
          <img src="/icons/ts-logo.png" width="32px" alt="Typescript Logo" />
          <Box>
            <Rating name="half-rating" value={5} precision={0.5} readOnly />
          </Box>

          <Typography component="div">React</Typography>
          <img src="/icons/react_logo_new.svg" width="32px" alt="React Logo" />
          <Box>
            <Rating name="half-rating" value={5} precision={0.5} readOnly />
          </Box>
          <Typography component="div">SQL/NoSQL</Typography>
          <img src="/icons/sql-symbol.png" width="32px" alt="NoSQL/SQL icon" />
          <Box>
            <Rating name="half-rating" value={4.5} precision={0.5} readOnly />
          </Box>

          <Typography component="div">Node.js</Typography>
          <img src="/icons/node-logo.png" width="32px" alt="Node.js Logo" />
          <Box>
            <Rating name="half-rating" value={4} precision={0.5} readOnly />
          </Box>
          <Typography component="div">React Native</Typography>
          <img
            src="/icons/react-native_logo.png"
            width="32px"
            alt="React Native Logo"
          />
          <Box>
            <Rating name="half-rating" value={4} precision={0.5} readOnly />
          </Box>

          <Typography component="div">Testing</Typography>
          <img src="/icons/jest.svg" width="32px" alt="React Native Logo" />
          <Box>
            <Rating name="half-rating" value={3.5} precision={0.5} readOnly />
          </Box>
        </Box>
        <Typography
          variant={"h5"}
          component="div"
          color={"primary.main"}
          marginBottom="8px"
          //   sx={{ pt: 2 }}
          paddingTop="16px"
        >
          Languages
        </Typography>

        <Stack pt={1} gap={1} maxWidth={320}>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography component="div" width={74} flexShrink={0}>
              English
            </Typography>
            <div style={{ width: 24 }}>
              <span>🇬🇧</span>
            </div>
            <Box width="100%" pr={2}>
              <div style={simpleProgressStyle}>proficient</div>
            </Box>
          </Stack>
          <Stack direction="row" gap={2} alignItems="center" >
            <Typography component="div" width={74} flexShrink={0}>
              German
            </Typography>
            <div style={{ width: 24 }}>
              <span>🇩🇪</span>
            </div>

            <Box sx={{ width: "100%" }}>
              <div style={simpleProgressStyle}>native</div>
            </Box>
          </Stack>
        </Stack>
      </DashboardCard>
    </Grid>
  );
};
