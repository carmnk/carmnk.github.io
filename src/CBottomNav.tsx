import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationProps,
  BottomNavigationActionProps,
} from "@material-ui/core";

const useStyles = makeStyles({
  actionRoot: {
    minWidth: "min-content",
    padding: 0,
  },
});

/** CBottomNavPropTypes */
export interface CBottomNavPropTypes extends Omit<BottomNavigationProps, "value"> {
  /** navitems provided via array of Objects of Type [BottomNavigationActionProps](https://material-ui.com/api/bottom-navigation-action/) */
  navItems?: [BottomNavigationActionProps];
  /** index of active navItem (reactive)  */
  activeNavItem?: number;
  /** determines if CBottomNav is shown */
  display?: boolean;
}

const cbottomnavDefaultProps: CBottomNavPropTypes = {
  activeNavItem: 0,
  display: true,
  style: { maxWidth: "100vw", alignItems: "center", position: "fixed", bottom: 0, left: 0, right: 0 },
};

/** CBottomNav Component
 * @remark A bottom navigation using Material UI's BottomNavigation component
 * @docu
 */
export const CBottomNav = (props: CBottomNavPropTypes) => {
  const { classes, style, showLabels, onChange, activeNavItem, navItems, display, ...other } = props;

  //const initNavItem = !!activeNavItem ? activeNavItem : 0;
  const [ActiveNavIdx, setActiveNavIdx] = React.useState(activeNavItem);
  const classesInt = useStyles();
  const classesBottomNav = !!classes ? classes : undefined;
  const styleBottomNav = !!display ? style : { ...style, display: "none" };

  React.useEffect(() => {
    if (activeNavItem !== undefined) setActiveNavIdx(activeNavItem);
  }, [activeNavItem]);

  return (
    <BottomNavigation
      value={ActiveNavIdx}
      onChange={(e, newNavIdx) => {
        setActiveNavIdx(newNavIdx);
        onChange?.(e, newNavIdx);
      }}
      showLabels={showLabels}
      style={styleBottomNav}
      classes={{ ...classesBottomNav }}
      {...other}
    >
      {!!navItems
        ? navItems.map((item, itemIdx) => (
            <BottomNavigationAction key={itemIdx} className={classesInt.actionRoot} {...item} />
          ))
        : null}
    </BottomNavigation>
  );
};
CBottomNav.defaultProps = cbottomnavDefaultProps;
export default CBottomNav;
