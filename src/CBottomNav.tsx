import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline, mdiMessageOutline, mdiHeartOutline, mdiMagnify, mdiSilverware } from "@mdi/js";

const useStyles = makeStyles({
  root: {
    maxWidth: "100vw",
    alignItems: "center",
    position: "fixed",
    bottom: 0, 
    left: 0, 
    right: 0,
  },
  actionRoot: {
    minWidth: "min-content",
    padding: 0,
  },
});

export const CBottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const navItems = [
    <BottomNavigationAction
      className={classes.actionRoot}
      label="Stöbern"
      icon={<Icon path={mdiMagnify} size={1} />}
    />,
    <BottomNavigationAction
      className={classes.actionRoot}
      label="Gespeichert"
      icon={<Icon path={mdiHeartOutline} size={1} />}
    />,
    <BottomNavigationAction
      className={classes.actionRoot}
      label="Buchungen"
      icon={<Icon path={mdiSilverware} size={1} />}
    />,
    <BottomNavigationAction
      className={classes.actionRoot}
      label="Post"
      icon={<Icon path={mdiMessageOutline} size={1} />}
    />,
    <BottomNavigationAction
      className={classes.actionRoot}
      label="Login"
      icon={<Icon path={mdiAccountCircleOutline} size={1} />}
    />,
  ];

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {navItems.map((item, itemIdx) => item)}
    </BottomNavigation>
  );
};
export default CBottomNav;
