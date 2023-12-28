import {
  mdiFinance,
  mdiCogs,
  mdiCardAccountDetails,
  mdiCart,
  mdiCar,
} from "@mdi/js";
import { Grid, Stack, Box, Typography, Chip, useTheme } from "@mui/material";
import { PieChart } from "../../components/charts/PieChart";
import { DashboardCard } from "./DashboardCard";
import Icon from "@mdi/react";
import { useMemo } from "react";

export const DashboardFields = () => {
  const theme = useTheme();
  const pieChartData = useMemo(() => {
    return {
      labels: ["Frontend", "BE"],
      datasets: [
        {
          // label: '# of Votes',
          label: "est. workload share",
          labels: ["Frontend", "BE"],
          data: [75, 25],
          backgroundColor: [
            theme.palette.primary.light,
            theme.palette.secondary.light,
          ],
          borderColor: ["#fff", "#fff"],
        },
      ],
    };
  }, [theme.palette]);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <DashboardCard>
        <Stack
          direction="row"
          width="100%"
          height="100%"
          minWidth="320px"
          gap={2}
        >
          <Box>
            <Typography
              variant={"h5"}
              component="div"
              color={"primary.main"}
              marginBottom="8px"
            >
              Fields and Industries
            </Typography>
            <Stack direction="row" gap={2}>
              <Box width="180px" height="180px">
                <PieChart data={pieChartData} />
              </Box>
              <Box>
                <Stack gap={1}>
                  <Box>
                    <Chip
                      label="Finance"
                      icon={<Icon path={mdiFinance} size={1} />}
                    ></Chip>
                  </Box>
                  <Box>
                    <Chip
                      label="Manufacturing"
                      icon={<Icon path={mdiCogs} size={1} />}
                    ></Chip>
                  </Box>
                  <Box>
                    <Chip
                      label="Identity Services"
                      icon={<Icon path={mdiCardAccountDetails} size={1} />}
                    ></Chip>
                  </Box>
                  <Box>
                    <Chip
                      label="E-Commerce"
                      icon={<Icon path={mdiCart} size={1} />}
                    ></Chip>
                  </Box>
                  <Box>
                    <Chip
                      label={
                        <>
                          Automotive <br />
                          (as industr. eng)
                        </>
                      }
                      icon={<Icon path={mdiCar} size={1} />}
                    ></Chip>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </DashboardCard>
    </Grid>
  );
};
