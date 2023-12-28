import React, { ChangeEvent } from "react";
import {
  Autocomplete,
  TextField,
  FormControl,
  useTheme,
  FormHelperText,
  styled,
  Paper,
  CircularProgress,
  FormControlProps,
  AutocompleteProps,
} from "@mui/material";

import { Label } from "../basics/Typography";
const requiredFieldText = "This field is required";

const StyledPaper = styled(Paper)(() => ({
  fontSize: "14px !important",
  lineHeight: "16px !important",
  color: "#212529 !important",
}));

export type CAutoComplete2Props = Omit<
  AutocompleteProps<string, false, false, boolean>,
  "options" | "renderInput" | "onChange" | "onInputChange"
> & {
  required?: boolean;
  label?: React.ReactNode;
  onChange?: (newValue: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange?: (
    newValue: string,
    e: React.SyntheticEvent<Element, Event>
  ) => void;
  isError?: boolean;
  loading?: boolean;
  freeSolo?: boolean;
  disableHelperText?: boolean;
  disableLabel?: boolean;
  ContainerProps?: FormControlProps;
  helperText?: React.ReactNode;
  name: string;
  options: { value: string; label: string }[];
  onKeyUp?: (e?: any) => void;
  value: string;
  placeholder?: string;
  renderInput?: AutocompleteProps<string, false, false, boolean>["renderInput"];
};

const injectFieldNameToEvent = (e: any, name: string) => ({
  ...(e ?? {}),
  target: { ...(e?.target ?? {}), name },
});

export const CAutoComplete2 = (props: CAutoComplete2Props) => {
  const {
    label,
    onChange,
    onInputChange,
    isError,
    required,
    loading,
    freeSolo,
    disableHelperText,
    disableLabel,
    ContainerProps,
    helperText,
    name,
    options,
    onKeyUp,
    value,
    ...restProps
  } = props;

  const freeSoloInt = freeSolo ?? true;
  const initValue = options?.find?.((opt) => opt?.value === value)?.label || "";
  const [inputValue, setInputValue] = React.useState(initValue ?? "");
  const theme = useTheme();
  const isFocussed = React.useRef(false);
  // const [changing, setChanging] = React.useState(false)
  const isChanging = React.useRef(false);

  const injectedOnChange = React.useCallback(
    (
      e: any,
      newValue:
        | string
        | {
            value: string;
            label: React.ReactNode;
          }
        | null
    ) => {
      const value =
        ["string", "number", "boolean"].includes(typeof newValue) ||
        typeof newValue === "string"
          ? (newValue as string)
          : newValue
          ? newValue?.value
          : "";
      isChanging.current = true;
      onChange?.(value, injectFieldNameToEvent(e, name));
    },
    [onChange, name]
  );
  const injectedOnInputChange = React.useCallback(
    (e: React.SyntheticEvent<Element, Event>, newValue: string) => {
      if (e?.type === "keydown" || e?.type !== "change") return;
      setInputValue(newValue);
      onInputChange?.(newValue ?? "", e);
    },
    [onInputChange]
  );

  const handleEnter = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e?.key === "Enter" && !isChanging.current) {
        const option = options?.find((opt) => opt?.label === inputValue)?.value;
        const valueAdj = option ?? (freeSoloInt ? inputValue : "");
        onChange?.(valueAdj, injectFieldNameToEvent(e, name));
      }
    },
    [inputValue, onChange, options, name, freeSoloInt]
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      isFocussed.current = false;
      // if (!freeSoloInt) return
      const option = options?.find((opt) => opt?.label === inputValue)?.value;
      const valueAdj = option ?? (freeSoloInt ? inputValue : "");
      onChange?.(valueAdj, injectFieldNameToEvent(e, name));
      if (!freeSoloInt && !option) setInputValue("");
    },
    [inputValue, onChange, freeSoloInt, options, name]
  );

  const themeErrorText = {
    color: theme.palette.error.main,
    fontWeight: 700,
  };

  // update inner inputValue when outer value is changed
  React.useEffect(() => {
    // try to map with options

    const initValue =
      options?.find?.((opt) => opt?.value === value)?.label ||
      (freeSoloInt ? value : "");
    setInputValue(initValue);
    // setChanging(true)
    isChanging.current = true;
    console.log("UPDATE VALUE");
    // isChanging.current = false
  }, [value]);
  React.useEffect(() => {
    // try to map with options
    console.log("TRY UPDATE OPTIONS");
    if (!options?.length || isFocussed.current) return;
    const initValue =
      options?.find((opt) => opt?.value === value)?.label ||
      (freeSoloInt ? value : "");
    setInputValue(initValue);
  }, [options]);

  React.useEffect(() => {
    // if (!changing) return
    isChanging.current = false;
    // setChanging(false)
  }, [inputValue]);
  // React.useEffect(() => {
  //   // setInputValue(value)
  // }, [inputValue])

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      // execInit.current = false
      isFocussed.current = true;
    },
    []
  );

  return (
    <FormControl className="flex flex-col w-full" {...ContainerProps}>
      {!disableLabel && (
        <Label
          className="pb-2 pl-0.5"
          style={isError ? { color: theme.palette.error.main } : {}}
        >
          {label}
          {required && <strong style={themeErrorText}> *</strong>}
        </Label>
      )}
      <Autocomplete
        options={options as any}
        noOptionsText={
          "Keine Optionen gefunden" + (inputValue ? ` für "${inputValue}"` : "")
        }
        // disable={disable}
        {...restProps}
        freeSolo={freeSoloInt}
        renderInput={(params: any) => (
          <TextField
            {...params}
            // disable={disable}
            name={name}
            error={!!isError}
            InputProps={{
              ...(params?.InputProps ?? {}),
              sx: {
                ...(params?.InputProps?.sx ?? {}),
                height: 42,
                fontSize: 14,
                lineHeight: "16px",
                color: "#212529",
              },
              inputProps: {
                ...(params?.inputProps ?? {}),
                title: name,
              },
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
        onFocus={handleFocus}
        onChange={injectedOnChange}
        inputValue={inputValue}
        value={inputValue}
        onInputChange={injectedOnInputChange}
        onBlur={handleBlur}
        onKeyUp={onKeyUp || handleEnter}
        // variant="outlined"
        loading={loading}
        // error={!!isError}
        size="small"
        sx={{
          height: 42,
          p: 0,
          background: "white",
          width: "100%",
          ...((restProps as any)?.sx ?? {}),
          fontSize: 14,
          lineHeight: "16px",
          color: "#212529",
        }}
        PaperComponent={StyledPaper}

        // renderOption={(props, option, { selected }) => (
        //   <li {...props}>
        //     <SecondaryText>
        //       ABC {option} {selected}
        //     </SecondaryText>
        //   </li>
        // )}
      />
      {!disableHelperText && (
        <FormHelperText sx={{ ml: "2px", height: 23, color: "error.main" }}>
          {helperText ? helperText : isError ? requiredFieldText : " "}
        </FormHelperText>
      )}
    </FormControl>
  );
};
