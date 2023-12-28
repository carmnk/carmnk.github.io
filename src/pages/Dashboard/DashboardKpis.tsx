import { Box, Grid, Typography } from "@mui/material";
import { CGrid } from "../../components/basics/CGrid";
import { DashboardCard } from "./DashboardCard";

export const DashboardKpis = () => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <DashboardCard>
        <Typography
          variant={"h5"}
          component="div"
          color={"primary.main"}
          marginBottom="8px"
        >
          Selected KPIs
        </Typography>
        <CGrid gridTemplateColumns="70px auto" gap={2}>
          <div>
            <Box component="span" fontSize={"20px"}>
              +5y
            </Box>
          </div>
          <div> in frontend development</div>
          <div>
          <Box component="span" fontSize={"20px"}>+2y</Box>
          </div>
          <div> in backend developmenty</div>
          <div>
          <Box component="span" fontSize={"20px"}>+7y</Box>
          </div>
          <div> in automotive process engineering/ PM</div>
          <div>
          <Box component="span" fontSize={"20px"}>{`+2400`}</Box>
          </div>{" "}
          <div> Gitbub and Gitlab contributions YoY</div>
        </CGrid>
      </DashboardCard>
    </Grid>
  );
};
