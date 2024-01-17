import { ChangeEvent, useMemo, ReactNode, useCallback } from "react";
import {
  Select,
  MenuItem,
  useTheme,
  FormHelperText,
  FormControl,
  SelectProps,
  FormControlProps,
  SelectChangeEvent,
} from "@mui/material";
import { Label } from "../basics/CTypography";
import { BoxProps } from "@mui/system";

export type CSelectProps = Omit<SelectProps, "onChange"> & {
  disableTopPadding?: boolean;
  value?: string | number | boolean | null;
  options?: { value: string | number | boolean; label: string }[];
  isError?: boolean;
  isDisabled?: boolean;
  required?: boolean;
  label?: ReactNode;
  disableHelperText?: boolean;
  disableLabel?: boolean;
  labelSx?: BoxProps["sx"];
  ContainerProps?: FormControlProps;
  onChange?:
    | ((newValue: string, e: ChangeEvent<HTMLInputElement>) => void)
    | ((newValue: number, e: ChangeEvent<HTMLInputElement>) => void)
    | ((newValue: boolean, e: ChangeEvent<HTMLInputElement>) => void);
  locked?: boolean;
  helperText?: string;
  disableHelperTextTheming?: boolean;
};

const requiredFieldText = "This field is required";

const menuItemStyles = {
  fontSize: 14,
  lineHeight: "16px",
  color: "#212529",
  minHeight: { xs: 28 },
};

export const CSelect = (props: CSelectProps) => {
  const {
    disableTopPadding,
    value,
    onChange,
    options,
    isError,
    isDisabled,
    required,
    label,
    disableHelperText,
    disableLabel,
    labelSx,
    ContainerProps,
    name,
    locked,
    helperText,
    disableHelperTextTheming,
    ...rest
  } = props;
  const isDisabledAdj = isDisabled || locked;

  const theme = useTheme();
  const handleChange = useCallback(
    (e: SelectChangeEvent) => {
      const value = e?.target?.value;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      onChange?.(value as never, e as any);
    },
    [onChange]
  );

  const themeErrorText = useMemo(() => {
    return {
      color: theme.palette.error.main,
      fontWeight: 700,
    };
  }, [theme.palette.error.main]);

  const selectStyles = useMemo(() => {
    return {
      height: 32,
      pt: !disableTopPadding ? 1 : 0,
      width: "100%",
      fontSize: 14,
      lineHeight: "16px",
      ...(props?.sx ?? {}),
    };
  }, [props?.sx, disableTopPadding]);

  const formHelperTextStyles = useMemo(() => {
    return {
      ...(props?.sx ?? {}),
      ...(isError ? themeErrorText : {}),
    };
  }, [props?.sx, isError, themeErrorText]);

  return (
    <FormControl className="flex flex-col w-full" {...ContainerProps}>
      {!disableLabel && (
        <Label
          className="pb-2 pl-0.5"
          style={isError ? { color: theme.palette.error.main } : {}}
          sx={labelSx}
        >
          {label}
          {required && <strong style={themeErrorText}> *</strong>}
        </Label>
      )}
      <Select
        {...rest}
        value={value ?? ""}
        onChange={handleChange as any}
        error={!!isError}
        size="small"
        disabled={isDisabledAdj}
        sx={selectStyles}
        data-testid={name}
        inputProps={{ title: name, name: name }}
      >
        {options?.map((opt, oIdx) => (
          <MenuItem value={opt?.value as any} key={oIdx} sx={menuItemStyles}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      {!disableHelperText && (
        <FormHelperText sx={formHelperTextStyles}>
          {helperText ?? (isError ? requiredFieldText : " ")}
        </FormHelperText>
      )}
    </FormControl>
  );
};
