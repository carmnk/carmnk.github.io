import { Box, Grid, Typography } from "@mui/material";
import { DashboardCard } from "./DashboardCard";
import { LineChart } from "../../components/charts/LineChart";

const lineChartBoxStyle = {
  maxHeight: { xs: 200 },
  margin: "0 auto",
  width: "max-content",
};

const chartData = {
  datasets: [
    {
      data: [183, 96, 150, 189, 155, 175, 173, 180, 156, 202, 136, 232],
    },
  ],
  labels: [
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ],
};

export const DashboardLinechart = () => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <DashboardCard>
        <Typography
          variant={"h5"}
          component="div"
          color={"primary.main"}
          marginBottom="8px"
        >
          Github Contributions '23
        </Typography>

        <Box sx={lineChartBoxStyle}>
          <LineChart data={chartData} height={200} />
        </Box>
      </DashboardCard>
    </Grid>
  );
};
