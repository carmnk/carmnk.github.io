import React, { Fragment, useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib

function InlineDatePickerDemo(props: any) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="inline"
          inputVariant="outlined"
          label="Only calendar"
          helperText="No year selection"
          value={selectedDate}
          onChange={handleDateChange}
          disablePast
          autoOk
          disableToolbar
          
          {...props}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default InlineDatePickerDemo;
