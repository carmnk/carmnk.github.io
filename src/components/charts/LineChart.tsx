/* eslint-disable */

import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ChartData,
  Legend,
  Scale,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Theme, alpha, useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  //   PointElement,
  LineElement
  //   Title,
  //   Legend,
  //   Tooltip
);

export const formatGermanNumber = (number: number) =>
  new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 }).format(number);

export const options = (theme: Theme) => ({
  elements: {
    line: {
      //   backgroundColor: "red",
      borderColor: "Turquoise",
    },
    points: {
      radius: 0,
    },
  },
  responsive: true,

  locale: "de-DE",
  plugins: {
    datalabels: {
      display: false,
      font: {
        size: 23,
      },
    },

    legend: {
      //   position: 'bottom' as const,
      //   align: 'start' as const,
      display: false,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },

    tooltip: {
      enabled: true,
      // xAlign: 'right' as const,
      //   callbacks: {
      //     label: (context: any) => {
      //       const label = context.dataset.label || "";
      //       const DescriptionLabel = label ? `${label}: ` : "";
      //       return `${DescriptionLabel}${context.formattedValue}€`;
      //     },
      //   },
    },
  },
  scales: {
    x: {
      grid: {
        // color: 'red',
        // borderColor: 'grey',
        // tickColor: theme.palette.mode === "dark" ? "#fff" : "#000",
        // tickColor: "#ff00ff",

        display: false,
      },
      ticks: {
        color: theme.palette.text.primary,
      },
    },
    y: {
      grid: {
        color: alpha(theme.palette.text.primary, 0.33),
      },
      // ticks: {
      //   // Include a dollar sign in the ticks
      //   callback: (value: any) => `${formatGermanNumber(value)}€`,
      // },
      ticks: {
        color: theme.palette.text.primary,
      },
    },
  },
});

export type LineChartProps = {
  data: ChartData<"line">;
  height?: any;
  title?: string;
};

export const LineChart = (props: LineChartProps) => {
  const { data, height, title } = props;
  const theme = useTheme();

  const [chartData, setChartData] = React.useState({
    data,
    options: options(theme),
  });

  const optionsAdj = React.useMemo(() => {
    const injections = title
      ? {
          text: title,
          display: true,
          color: theme.palette.text.primary,
          font: {
            size: 16,
            weight: "normal",
          },
        }
      : {};
    // const optionsInt = React.useMemo(() => {
    //   return options(theme);
    // }, []);

    const optionsInt = options(theme);

    return {
      ...optionsInt,
      plugins: {
        ...(optionsInt.plugins ?? {}),
        title: {
          ...((optionsInt as any).plugins?.title ?? {}),
          ...injections,
        },
      },
    };
  }, [title, theme]);

  useEffect(() => {
    setChartData({ data, options: optionsAdj });
  }, [data, theme]);

  return <Line {...chartData} height={height} />;
};
ChartJS.defaults.font.size = 10;
ChartJS.defaults.font.family = "'Plus Jakarta Display', sans-serif";
