/* eslint-disable */
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import type { ChartProps } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement);
ChartJS.register(
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  ChartDataLabels
);
// ChartJS.register(ChartDataLabels)

// ChartJS.overrides.pie.plugins.legend = {
//   display: true,
//   position: 'bottom',
//   align: 'start',
//   // generateLabels: (chart: any) => {

//   //   return  chart.data.label
//   // },
//   // labels: {
//   //   color: '#fff',
//   // },
//   fullSize: true,
//   // maxWidth: 'none' as any,
//   // maxHeight: 'none' as any,
//   // reverse: false,
// } as any

export type PieChartProps = Omit<ChartProps<"pie">, "type">;

export const PieChart = (props: PieChartProps) => (
  <Pie
    {...props}
    options={{
      responsive: true,
      plugins: {
        datalabels: {
          color: "#fff",
          anchor: "end",
          clamp: true,
          align: "start",
          //   right: "14px",
          font: {
            size: 16,
          },
          formatter: (e: any) => {
            return e === 25 ? "Backend" : "Frontend";
          },
        },
        // tooltip: { enabled: true, mode: 'nearest' },
        title: {
          display: false,
          text: "HI",
          color: "#fff",
          // align: 'start',
        },
        // legendCallback: function (chart: any) {
        //   var ul = document.createElement("ul");
        //   chart.data.datasets.forEach(function (
        //     dataset: any,
        //     datasetIndex: number
        //   ) {
        //     let backgroundColor = dataset.backgroundColor;
        //     dataset.labels.forEach(function (
        //       label: string,
        //       labelIndex: number
        //     ) {
        //       ul.innerHTML += `
        //               <li>
        //                  <span style="background-color: ${backgroundColor[labelIndex]}"></span>
        //                   ${label}
        //                </li>
        //             `;
        //     });
        //   });
        //   return ul.outerHTML;
        // },
        legend: {
          display: false,
          position: "bottom",
        } as any,
        // datalabels: {
        //   // formatter: function (value: any, context: any) {
        //   //   return 'context.chart.data.labels[context.dataIndex]'
        //   // },
        //   color: '#FFCE56',
        // },
        ...(props?.options ?? {}),
      } as any,
    }}
  />
);
