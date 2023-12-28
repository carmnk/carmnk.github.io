import React from "react";
import { Card } from "@mui/material";
import { PropsWithChildren } from "react";

type DashboardCardProps = PropsWithChildren;

const cardStyles = {
  width: "100%",
  height: "100%",
  p: 2,
  boxSizing: "border-box",
};

export const DashboardCard = (props: DashboardCardProps) => {
  const { children } = props;
  return (
    <Card sx={cardStyles} elevation={8}>
      {children}
    </Card>
  );
};
