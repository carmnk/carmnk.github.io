import React, { ChangeEvent } from "react";
import {
  Select,
  MenuItem,
  useTheme,
  FormHelperText,
  FormControl,
  SelectProps,
  FormControlProps,
} from "@mui/material";

import { Label } from "../basics/CTypography";
import { BoxProps } from "@mui/system";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const requiredFieldText = "This field is required";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export type CSelectProps = Omit<SelectProps, "onChange" | "defaultValue"> & {
  disableTopPadding?: boolean;
  value?: (string | number | boolean)[] | null;
  options?: {
    value: string | number | boolean;
    label: React.ReactNode;
    textLabel: string;
  }[];
  isError?: boolean;
  isDisabled?: boolean;
  required?: boolean;
  label?: React.ReactNode;
  disableHelperText?: boolean;
  disableLabel?: boolean;
  labelSx?: BoxProps["sx"];
  ContainerProps?: FormControlProps;
  onChange?:
    | ((newValue: string[], e: ChangeEvent<HTMLInputElement>) => void)
    | ((newValue: number[], e: ChangeEvent<HTMLInputElement>) => void)
    | ((newValue: boolean[], e: ChangeEvent<HTMLInputElement>) => void);
  defaultValue?: (string | number | boolean)[];
  helperText?: string;
};

export const CMultiSelect = (props: CSelectProps) => {
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
    placeholder,
    helperText,
    name,
    ...rest
  } = props;

  const theme = useTheme();
  const handleChange = React.useCallback(
    (e: any) => {
      const value = e?.target?.value;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      onChange?.(value as never, e);
    },
    [onChange]
  );

  const themeErrorText = {
    color: theme.palette.error.main,
    fontWeight: 700,
  };

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
        multiple
        value={value ?? ""}
        onChange={handleChange}
        error={!!isError}
        size="small"
        disabled={isDisabled}
        sx={{
          height: 42,
          pt: !disableTopPadding ? 1 : 0,
          width: "100%",
          background: "white",
          fontSize: 14,
          lineHeight: "16px",
          color: value?.length ? "#212529" : "#21252999",
          ...(props?.sx ?? {}),
        }}
        inputProps={{
          title: name,
          name: name,
          placeholder: props?.placeholder,
        }}
        // input={<OutlinedInput label="Tag" />}
        renderValue={(selectedIds: any[]) => {
          const selectedOptions =
            options
              ?.filter((opt) => selectedIds.includes(opt.value))
              ?.map((opt) => opt.textLabel) ?? [];
          return selectedOptions?.length
            ? selectedOptions.join(", ")
            : (placeholder as any);
        }}
        displayEmpty={true}
        MenuProps={MenuProps}
      >
        {options?.map((opt, oIdx) => (
          <MenuItem
            value={opt?.value as any}
            key={oIdx}
            sx={{
              minHeight: { xs: 28 },
              fontSize: 14,
              lineHeight: "16px",
              color: "#212529",
              pl: 0.5,
            }}
          >
            <Checkbox
              checked={(value || []).indexOf(opt.value) > -1}
              size={"small"}
            />
            <ListItemText
              disableTypography
              sx={{ fontSize: 14, lineHeight: "16px", color: "#212529" }}
              primary={opt.label}
            />
          </MenuItem>
        ))}
      </Select>
      {(!disableHelperText || helperText) && (
        <FormHelperText
          sx={{
            ml: "2px",
            height: 23,
            color: helperText ? "text.primary" : "error.main",
          }}
        >
          {helperText ?? (isError ? requiredFieldText : " ")}
        </FormHelperText>
      )}
    </FormControl>
  );
};
