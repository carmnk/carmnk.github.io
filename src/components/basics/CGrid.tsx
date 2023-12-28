import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material";

export type CGridProps = Omit<BoxProps, "display">;

export const CGrid = styled((props: BoxProps) => {
  const {
    /*  eslint-disable @typescript-eslint/no-unused-vars */
    display,
    /*  eslint-enable @typescript-eslint/no-unused-vars */
    children,
    ...restProps
  } = props;
  return <Box {...restProps}>{children}</Box>;
})<CGridProps>({
  display: "grid",
});
