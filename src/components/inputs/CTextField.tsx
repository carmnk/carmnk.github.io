import {
  useState,
  useCallback,
  ReactNode,
  forwardRef,
  useMemo,
  ChangeEvent,
} from "react";

import {
  useTheme,
  TextField,
  InputAdornment,
  Box,
  TextFieldProps,
  TypographyProps,
  BoxProps,
} from "@mui/material";
import { Label } from "../basics/CTypography";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

const requiredFieldText = "This field is required";

export type CTextFieldProps = Omit<TextFieldProps, "onChange"> & {
  value?: string | number | null;
  label?: ReactNode;
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
  injectError?: boolean;
  ContainerProps?: BoxProps;
  labelSx?: TypographyProps["sx"];
  injectComponent?: ReactNode;
  onChangeCompleted?: (newValue: string | number) => void;
  maxLength?: number | string; // ??
  locked?: boolean;
  onChange: (
    newValue: string | number,
    e: ChangeEvent<HTMLInputElement>
  ) => void;
};

export const CTextField = forwardRef((props: CTextFieldProps, ref) => {
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
  const [valueStarted, setValueStarted] = useState("");

  const endIconAdj = useMemo(
    () => icon ?? (locked ? <Icon path={mdiLock} /> : null),
    [icon, locked]
  );
  const isError = injectError;
  const injectInputStyles = useMemo(
    () => (inputStyle ? inputStyle : {}),
    [inputStyle]
  );
  const themeErrorText = useMemo(() => {
    return {
      color: theme.palette.error.main,
      fontWeight: 700,
    };
  }, [theme.palette.error.main]);

  const handleChangeCompleted = useCallback(() => {
    //dont trigger if value has not changed
    if (
      typeof value === "undefined" ||
      value === null ||
      value.toString() === valueStarted
    )
      return;
    onChangeCompleted?.(value);
  }, [onChangeCompleted, value, valueStarted]);

  const handleChangeStarted = useCallback(() => {
    if (!value) return;
    setValueStarted?.(value?.toString?.());
  }, [value]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e?.target?.value;
      onChange?.(newValue ?? "", e);
    },
    [onChange]
  );

  const inputProps = useMemo(() => {
    return {
      maxLength,
      title: name,
    };
  }, [maxLength, name]);

  const InputProps = useMemo(() => {
    return {
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
    };
  }, [className, endIconAdj, injectInputStyles, rest, startIcon]);

  const formHelperTextProps = useMemo(() => {
    return {
      sx: {
        ...(rest?.FormHelperTextProps?.sx ?? {}),
        ml: "2px",
        height: disableHelperText ? "0px" : 23,
        mt: disableHelperText ? 0 : 0.5,
        whiteSpace: "nowrap",
      },
    };
  }, [disableHelperText, rest]);

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
        name={name}
        className={mainClass ?? ""}
        onChange={handleChange}
        error={isError}
        required={required}
        helperText={helperText ? helperText : isError ? requiredFieldText : " "}
        onBlur={handleChangeCompleted}
        onFocus={handleChangeStarted}
        {...rest}
        inputProps={inputProps}
        InputProps={InputProps}
        FormHelperTextProps={formHelperTextProps}
      />
      {injectComponent}
    </Box>
  );
});
CTextField.displayName = "CInputField";
export default CTextField;
