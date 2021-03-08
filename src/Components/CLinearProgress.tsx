import { LinearProgress, LinearProgressProps, Typography } from "@material-ui/core";
import React from "react";

export const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "100%" }}>
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div style={{ minWidth: 35 }}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </div>
    </div>
  );
};
export default LinearProgressWithLabel;
