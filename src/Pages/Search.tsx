import { IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from "@material-ui/core";
import { mdiFire, mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import SearchBar from "../SearchBar";
import { mdiTune } from "@mdi/js";

export const Search = (props: any) => {
  const now = new Date();
  const hour = now.getHours();
  let inTwoHours = hour + 2;
  let day = "today";
  if (hour + 2 > 24) {
    inTwoHours = hour + 2 - 24;
    day = "tomrrow";
  }

  const theme = useTheme();

  return (
    <div style={{ margin: 10, padding: 10 }}>
      <div style={{ display: "grid", gridTemplateColumns: "48px auto max-content", alignItems: "center" }}>
        <IconButton color="primary" size="medium">
          <Icon path={mdiTune} size={"24px"} color={theme.palette.primary.main} />
        </IconButton>
        <Typography component="span">
          2 guests, {day}, {inTwoHours}:00{" "}
        </Typography>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "48px auto max-content", alignItems: "center" }}>
        <div style={{ padding: 12, boxSizing: "border-box" }}>
          <Icon path={mdiFire} color={theme.palette.primary.main} size={"32px"} />
        </div>
        <div>
          <Typography component="span">Trending, Near me</Typography>
        </div>
        <div>
          <Typography component="span" color="primary">
            view all
          </Typography>
        </div>
      </div>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <div
              style={{
                backgroundImage: "url(https://github.com/carmnk/resources/blob/main/images/restaurant.jpg?raw=true)",
                width: 48,
                height: 48,
                backgroundSize: "cover",
              }}
            />
          </ListItemIcon>
          <ListItemText >Restaurant 1</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <div
              style={{
                backgroundImage: "url(https://github.com/carmnk/resources/blob/main/images/restaurant.jpg?raw=true)",
                width: 48,
                height: 48,
                backgroundSize: "cover",
              }}
            />
          </ListItemIcon>
          <ListItemText >Restaurant 2</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <div
              style={{
                backgroundImage: "url(https://github.com/carmnk/resources/blob/main/images/restaurant.jpg?raw=true)",
                width: 48,
                height: 48,
                backgroundSize: "cover",
              }}
            />
          </ListItemIcon>
          <ListItemText >Restaurant 3</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};
export default Search;
