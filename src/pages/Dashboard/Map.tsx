import { Grid, Box, Typography, Stack } from "@mui/material";
import { DashboardCard } from "./DashboardCard";

export const DashboardMap = () => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <DashboardCard>
        <Box>
          <Typography
            variant="h5"
            component="div"
            color={"primary.main"}
            marginBottom="8px"
          >
            Location
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: "url('/europe.svg')",
            height: "calc(100% - 64px)",
            minHeight: 200,
            // width: 300,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <Box justifyContent="flex-end" display="flex" alignItems="flex-start">
            <Stack direction="row" pr={1} alignItems="center">
              <Typography variant="h4" lineHeight={"24px"} marginTop="4px">
                🇲🇹🇪🇺
              </Typography>
            </Stack>
          </Box>
        </Box>
      </DashboardCard>
    </Grid>
  );
};
