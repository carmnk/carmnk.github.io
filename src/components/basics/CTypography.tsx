import React from "react";
import { Typography, useTheme } from "@mui/material";

export const Label = (props: any) => {
  const { children, ...rest } = props;
  return (
    <Typography
      component="label"
      {...rest}
      sx={{
        fontSize: "14px !important",
        fontWeight: 400,
        lineHeight: "16px",
        color: "text.secondary",
        ...(rest?.sx ?? {}),
      }}
    >
      {children}
    </Typography>
  );
};

export const Header = (props: any) => {
  const { children, ...rest } = props;
  return (
    <Typography
      {...rest}
      sx={{
        fontWeight: 400,
        fontSize: "22px",
        lineHeight: "26px",
        color: "#212529",
        ...(props?.sx ?? []),
      }}
    >
      {children}
    </Typography>
  );
};
export const Text = (props: any) => {
  const { children, ...rest } = props;
  return (
    <Typography
      {...rest}
      sx={{
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "19px",
        color: "#212529",
        ...(props?.sx ?? []),
      }}
    >
      {children}
    </Typography>
  );
};
export const SecondaryText = (props: any) => {
  const { children, ...rest } = props;
  const theme = useTheme();
  const sx = React.useMemo(
    () => ({
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px",
      color: props?.color ?? theme.palette.primary.main,
      ...(props?.sx ?? []),
    }),
    [props?.sx, props?.color, theme.palette.primary.main]
  );

  return (
    <Typography component="div" {...rest} sx={sx}>
      {children}
    </Typography>
  );
};
export const TertiaryText = (props: any) => {
  const { children, ...rest } = props;
  const theme = useTheme();
  const sx = React.useMemo(
    () => ({
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14px",
      color: props?.color ?? theme.palette.primary.main,
      ...(props?.sx ?? []),
    }),
    [props?.sx, props?.color, theme.palette.primary.main]
  );

  return (
    <Typography component="div" {...rest} sx={sx}>
      {children}
    </Typography>
  );
};

export const BoldText = (props: any) => {
  const { children, ...rest } = props;
  return (
    <Typography
      {...rest}
      sx={{
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "19px",
        color: "#212529",
        ...(props?.sx ?? []),
      }}
    >
      {children}
    </Typography>
  );
};
