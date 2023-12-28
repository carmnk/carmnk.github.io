import React from "react";
import {
  useTheme,
  Button as MuiButton,
  Box,
  ButtonProps,
  Stack,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

export type CButtonProps = Omit<ButtonProps, "type" | "color"> & {
  icon?: React.ReactNode;
  type?: string;
  label?: React.ReactNode;
  spanSx?: any;
  disableHover?: boolean;
  endIcon?: React.ReactNode;
  dropdown?: "open" | "closed";
  loading?: boolean;
  iconButton?: boolean;
  tooltip?: string;
  color?: string;
  iconColor?: string;
  disableTabstop?: boolean;
  fontColor?: string;
  buttonColor?: string;
};

export const Button = React.forwardRef(
  (props: CButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      icon,
      type,
      label,
      spanSx,
      disableHover,
      children,
      endIcon,
      loading,
      dropdown,
      disabled: disabledIn,
      iconButton,
      color,
      iconColor,
      fontColor,
      disableTabstop,
      buttonColor,
      ...rest
    } = props;
    const theme = useTheme();
    const disabled = disabledIn || loading;
    const disableHoverStyles = disableHover
      ? {
          background: "transparent",
          "&: hover": {
            background: "transparent",
          },
        }
      : {};
    const startIconAdj = loading ? (
      <Stack direction="row" alignItems="center" width="17px">
        <CircularProgress color="inherit" size={17} />
      </Stack>
    ) : typeof icon === "string" ? (
      <Icon
        path={icon}
        size="16px"
        color={
          iconColor ??
          color ??
          (disabled
            ? theme.palette.action.disabled
            : type === "secondary" || type === "text"
            ? theme.palette.text.primary
            : theme.palette.primary.contrastText)
        }
      />
    ) : (
      icon
    );
    const endIconAdj = dropdown ? (
      <Icon
        path={dropdown === "closed" ? mdiChevronDown : mdiChevronUp}
        size="16px"
        color={
          iconColor ??
          color ??
          (disabled
            ? theme.palette.action.disabled
            : type === "secondary" || type === "text"
            ? "#212529"
            : "#fff")
        }
      />
    ) : typeof endIcon === "string" ? (
      <Icon
        path={endIcon}
        size="16px"
        color={
          iconColor ??
          (type === "secondary" || type === "text" ? "#212529" : "#fff")
        }
      />
    ) : (
      endIcon
    );
    const padding = iconButton ? "4px" : "8px 12px";
    const commonStyles = {
      minWidth: 0,
      textTransform: "none",
      display: "flex",
      justifyContent: iconButton ? "center" : "space-between",
      height: iconButton ? 28 : 32,
      padding,
      boxShadow: "none",
      "& .MuiButton-startIcon": {
        ml: 0,
        mr: iconButton ? 0 : "12px",
      },
      width: iconButton && dropdown ? 53 : iconButton ? 28 : "max-content",
    } as any;

    const Button =
      type === "secondary" ? (
        <MuiButton
          color={buttonColor as any}
          ref={ref}
          variant="outlined"
          size="small"
          disableElevation
          startIcon={startIconAdj}
          endIcon={endIconAdj}
          disabled={disabled}
          {...rest}
          tabIndex={disableTabstop ? -1 : 0}
          sx={{
            ...commonStyles,
            border: "0px solid " + theme.palette.primary.main + " !important",
            ...(!disabled
              ? {
                  background: "#E1E1E1",
                }
              : { background: "#F3F3F3" }),
            "&: hover": {
              border: "0px solid " + theme.palette.primary.main,
              background: "#CCCCCC",
            },
            padding,
            ...(rest?.sx ?? {}),
          }}
        >
          {!iconButton && (
            <Box
              component="span"
              sx={{
                fontSize: 14,
                fontWeight: 700,
                lineHeight: "16px",
                color: disabled ? undefined : fontColor ?? "#212529",
              }}
            >
              {label ?? children}
            </Box>
          )}
        </MuiButton>
      ) : type === "text" ? (
        <MuiButton
          color={buttonColor as any}
          ref={ref}
          size="small"
          variant="text"
          startIcon={startIconAdj}
          endIcon={endIconAdj}
          disabled={disabled}
          {...rest}
          tabIndex={disableTabstop ? -1 : 0}
          sx={{
            ...commonStyles,
            ...disableHoverStyles,
            background: "E1E1E1",
            "&: hover": {
              border: "0px solid " + theme.palette.primary.main,
              background: theme.palette.mode === "light" ? "#E1E1E1" : "#999",
            },
            ...(rest?.sx ?? {}),
          }}
        >
          {!iconButton && (
            <Box
              component="span"
              sx={{
                minWidth: 0,
                fontSize: 14,
                fontWeight: 700,
                lineHeight: "16px",
                width: "100%",
                textOverflow: "ellipsis",
                overflow: "hidden",
                color: disabled
                  ? theme.palette.action.disabled
                  : fontColor ?? "#212529",
                ...(spanSx ?? {}),
              }}
            >
              {label ?? children}
            </Box>
          )}
        </MuiButton>
      ) : (
        <MuiButton
          color={buttonColor as any}
          ref={ref}
          variant="contained"
          disableElevation
          startIcon={startIconAdj}
          endIcon={endIconAdj}
          disabled={disabled}
          {...rest}
          tabIndex={disableTabstop ? -1 : 0}
          sx={{
            ...commonStyles,
            "&: hover": {
              boxShadow: "none",
            },
            ...(rest?.sx ?? {}),
          }}
        >
          {!iconButton && (
            <Box
              component="span"
              sx={{
                fontSize: 14,
                fontWeight: 700,
                lineHeight: "16px",
              }}
            >
              {label ?? children}
            </Box>
          )}
        </MuiButton>
      );
    const ButtonWithTooltip = props.tooltip ? (
      <Tooltip arrow={true} placement={"top"} title={props.tooltip}>
        <div>{Button}</div>
      </Tooltip>
    ) : (
      Button
    );
    return ButtonWithTooltip;
  }
);
Button.displayName = "Button";

export const TextButton = (props: any) => {
  const { color, label, ...rest } = props;
  return (
    <Button
      {...rest}
      disableElevation
      disableRipple
      disableTouchRipple
      disableFocusRipple
      type="text"
      label={label ?? ""}
      spanSx={{ overflowWrap: "break-word", overflowX: "hidden" }}
      sx={{
        pl: 0,
        pr: 0,

        color: color ?? "primary.main",
        background: "transparent",
        textAlign: "left",
        "&: hover": {
          background: "transparent",
        },
      }}
    />
  );
};
