import React from "react";
import {
  Autocomplete,
  TextField,
  FormControl,
  useTheme,
  FormHelperText,
  styled,
  Paper,
  CircularProgress,
} from "@mui/material";
import { Label } from "../basics/Typography";

const StyledPaper = styled(Paper)(() => ({
  fontSize: "14px !important",
  lineHeight: "16px !important",
  color: "#212529 !important",
}));

const requiredFieldText = "This field is required";

export const CAutoComplete = (props) => {
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
    // disable,
    ...restProps
  } = props;

  const freeSoloInt = freeSolo ?? true;
  // dismiss props?.value?.label but check implementations first!
  const [inputValue, setInputValue] = React.useState(
    props?.value?.label || props?.label || ""
  );
  const theme = useTheme();

  const injectedOnChange = React.useCallback(
    (e, newValue) => {
      const valueOut =
        newValue && typeof newValue === "string"
          ? { value: newValue, label: newValue }
          : newValue;
      onChange?.(valueOut ?? "", e);
    },
    [onChange]
  );
  const injectedOnInputChange = React.useCallback(
    (e, newValue) => {
      if (e?.type === "keydown") return;
      setInputValue(newValue);
      onInputChange?.(newValue ?? "", e);
    },
    [onInputChange]
  );

  const handleEnter = React.useCallback(
    (e) => {
      if (e?.key === "Enter") {
        onChange?.({ value: inputValue, label: inputValue } ?? "", e);
      }
    },
    [inputValue, onChange]
  );

  const handleBlur = React.useCallback(
    (e) => {
      if (!freeSoloInt) return;
      const valueAdj = options?.find((opt) => opt?.label === inputValue) ?? {
        value: inputValue,
        label: inputValue,
      };
      onChange?.(valueAdj, e);
    },
    [inputValue, onChange, freeSoloInt, options]
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
        >
          {label}
          {required && <strong style={themeErrorText}> *</strong>}
        </Label>
      )}
      <Autocomplete
        freeSolo={freeSoloInt}
        renderInput={(params) => (
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
        options={options}
        // disable={disable}
        {...restProps}
        onChange={injectedOnChange}
        inputValue={inputValue}
        onInputChange={injectedOnInputChange}
        onBlur={handleBlur}
        onKeyUp={onKeyUp || handleEnter}
        variant="outlined"
        loading={loading}
        // error={!!isError}
        size="small"
        sx={{
          height: 42,
          p: 0,
          background: "white",
          width: "100%",
          ...(restProps?.sx ?? {}),
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
