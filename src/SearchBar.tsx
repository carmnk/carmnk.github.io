import React from "react";
import { createStyles, makeStyles, Paper, TextField, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import CTextField from "./CTextField";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.grey[500],
    },
  })
);

export const SearchBar = (props: any) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Paper
      elevation={8}
      style={{
        // opacity: 0.95,
        height: 65,
        borderRadius: "55px",
        boxSizing: "border-box",
        margin: 10,
        background: theme.palette.grey[200],
      }}
    >
      <div
        style={{
          padding: "0 25px",
          display: "grid",
          gridTemplateColumns: "35px auto",
          justifyItems: "center",
          alignItems: "center",
          height: 60,
        }}
      >
        <div style={{ marginTop: 15}}>
          <Icon path={mdiMagnify} size={"24px"} color="#333" />
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
        />
      </div>
    </Paper>
  );
};
export default SearchBar;
