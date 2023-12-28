import React from "react";

import {
  useTheme,
  TextField,
  InputAdornment,
  Box,
  TextFieldProps,
  TypographyProps,
  BoxProps,
} from "@mui/material";
import { Label } from "../basics/Typography";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

const requiredFieldText = "This field is required";

export type CTextFieldProps = TextFieldProps & {
  value?: string | number | null;
  label?: React.ReactNode;
  name?: string;
  placeholder?: string;
  mainClass?: any;
  required?: any;
  icon?: any;
  inputStyle?: any;
  helperText?: string;
  startIcon?: any;
  disableHelperText?: boolean;
  disableLabel?: boolean;
  // disableAcceptZeroValue?: boolean
  injectError?: boolean;
  ContainerProps?: BoxProps;
  labelSx?: TypographyProps["sx"];
  injectComponent?: React.ReactNode;
  onChangeCompleted?: (newValue: string | number) => void;
  maxLength?: number | string; // ??
  locked?: boolean;
};

export const CTextField = React.forwardRef((props: CTextFieldProps, ref) => {
  const {
    value,
    label,
    name,
    type,
    onChange,
    className,
    mainClass,
    required,
    icon,
    inputStyle,
    helperText,
    startIcon,
    disableHelperText,
    disableLabel,
    // disableAcceptZeroValue,
    injectError,
    ContainerProps,
    labelSx,
    injectComponent,
    onChangeCompleted,
    maxLength,
    locked,
    disabled,
    ...rest
  } = props;

  const theme = useTheme();
  const [valueStarted, setValueStarted] = React.useState("");

  const endIconAdj = icon ?? (locked ? <Icon path={mdiLock} /> : null);
  const isError = injectError; // ||
  const injectInputStyles = inputStyle ? inputStyle : {};
  const themeErrorText = {
    color: theme.palette.error.main,
    fontWeight: 700,
  };

  const handleChangeCompleted = React.useCallback(() => {
    //dont trigger if value has not changed
    if (
      typeof value === "undefined" ||
      value === null ||
      value.toString() === valueStarted
    )
      return;
    onChangeCompleted?.(value);
  }, [onChangeCompleted, value, valueStarted]);

  const handleChangeStarted = React.useCallback(() => {
    if (!value) return;
    setValueStarted?.(value?.toString?.());
  }, [value]);

  return (
    <Box className="relative flex flex-col w-full" {...(ContainerProps ?? {})}>
      {!disableLabel && (
        <Label
          className="pb-2 pl-0.5"
          style={isError ? { color: theme.palette.error.main } : {}}
          sx={labelSx}
        >
          {label} {required && <strong style={themeErrorText}>*</strong>}
        </Label>
      )}
      <TextField
        type={type}
        value={value ?? ""}
        size="small"
        disabled={disabled || locked}
        // label={label}
        name={name}
        className={mainClass ?? ""}
        onChange={onChange}
        error={isError}
        required={required}
        helperText={helperText ? helperText : isError ? requiredFieldText : " "}
        onBlur={handleChangeCompleted}
        onFocus={handleChangeStarted}
        {...rest}
        inputProps={{ ref, maxLength, title: name }}
        InputProps={{
          className: className,
          endAdornment: (
            <InputAdornment position="end">{endIconAdj}</InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          ...(rest?.InputProps ?? {}),
          sx: {
            height: 42,
            ...injectInputStyles,
            background: "white",
            fontSize: 14,
            lineHeight: "16px",
            color: "#212529",
            ...(rest.InputProps?.sx ?? {}),
          },
        }}
        FormHelperTextProps={{
          sx: {
            ml: "2px",
            height: disableHelperText ? "0px" : 23,
            mt: disableHelperText ? 0 : 0.5,
            whiteSpace: "nowrap",
          },
        }}
      />
      {injectComponent}
    </Box>
  );
});
CTextField.displayName = "CInputField";
export default CTextField;
