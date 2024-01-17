import { ReactNode } from "react";
import { CheckboxProps, FormControlLabel, Switch } from "@mui/material";

export type CCheckboxProps = CheckboxProps & {
  label: ReactNode;
  formControlLabelProps?: any;
};

const styles = {
  fontSize: "14px",
};

export const CSwitch = (props: CCheckboxProps) => {
  const {
    value,
    onChange,
    name,
    label,
    formControlLabelProps,
    ...restCheckBoxProps
  } = props;
  return (
    <FormControlLabel
      slotProps={{ typography: { sx: { fontSize: "14px" } } }}
      control={
        <Switch
          name={name}
          value={value}
          checked={!!value}
          onChange={onChange}
          {...restCheckBoxProps}
        />
      }
      label={label}
      {...formControlLabelProps}
    />
  );
};
