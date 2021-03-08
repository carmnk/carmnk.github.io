import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { mdiCalendar } from "@mdi/js";
import Icon from "@mdi/react";

const CDateTextField = (props: any) => {
  return (
    <TextField
      id="input-date"
      variant="outlined"
      //defaultValue="today"
          {...props}
          helperText={null}
      InputProps={{
        readOnly: true,
        startAdornment: (
          <InputAdornment position="start">
            <Icon path={mdiCalendar} size={1} />
          </InputAdornment>
        ),
      }}
      value={props.value}
      label="date"
    />
  );
};
export default CDateTextField;
