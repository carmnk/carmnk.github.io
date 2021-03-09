import React from "react";
import { createStyles, makeStyles, Paper, TextField, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import CTextField from "./Components/CTextField";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.grey[400],
    },
  })
);

export const SearchBar = (props: any) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Paper
      elevation={0}
      style={{
        // opacity: 0.95,
        height: 50,
        borderRadius: "55px",
        boxSizing: "border-box",
        background: theme.palette.grey[100],
      }}
    >
      <div
        style={{
          padding: "0 25px",
          display: "grid",
          gridTemplateColumns: "35px auto",
          justifyItems: "center",
          alignItems: "center",
          height: 50,
        }}
      >
        <div style={{ marginTop: 15}}>
          <Icon path={mdiMagnify} size={"24px"} color="#ccc" />
        </div>
        <TextField
          id="search"
          label="What are you looking for?"
          //   color="secondary"
          style={{ width: "100%" }}
          fullWidth
          InputProps={{
            disableUnderline: true,
            //startAdornment: ,
          }}
          InputLabelProps={{ classes: { root: classes.root } }}
          onFocus={() => { props?.onFocus();}}
          
        />
      </div>
    </Paper>
  );
};
export default SearchBar;
