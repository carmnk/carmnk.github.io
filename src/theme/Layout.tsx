import React, { PropsWithChildren } from "react";
import { Box, Fab, Stack, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight, mdiPencil } from "@mdi/js";
import { Navbar } from "../components/Navbar";
import { SWIPEABLE_ROUTES } from "../pages/_Routes";
import { Button } from "../components/buttons/Button";

export type LayoutProps = {
  onToggleTheme?: () => void;
};

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { onToggleTheme } = props;
  const theme = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [MenuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openDrawer = React.useCallback(() => {
    setMenuOpen(true);
  }, []);

  const routeIndex = SWIPEABLE_ROUTES.findIndex(
    (route) => route.path === location.pathname
  );
  const prevLink =
    routeIndex > 0 ? SWIPEABLE_ROUTES[routeIndex - 1].path : null;
  const nextLink =
    routeIndex < SWIPEABLE_ROUTES.length - 1
      ? SWIPEABLE_ROUTES[routeIndex + 1].path
      : null;

  console.log(prevLink);

  return (
    <Stack
      top="0px"
      left="0px"
      position="fixed"
      width="100%"
      height="100%"
      bgcolor={theme.palette.background.default}
      id="layoutRoot"
      className={
        theme.palette.mode === "dark" ? "dark-scrollbar" : "light-scrollbar"
      }
    >
      <Navbar onOpenDrawer={openDrawer} onToggleTheme={onToggleTheme} />

      {location?.pathname === "/" ? (
        <Box height="100%" position="relative">
          {props.children}
        </Box>
      ) : (
        <Box minHeight="100%" top="0px">
          {props.children}
        </Box>
      )}

      {prevLink && (
        <Box color="#333">
          <Button
            type="secondary"
            iconButton={true}
            sx={{
              width: 48,
              height: 48,
              position: "fixed",
              bottom: "24px",
              left: "24px",
              borderRadius: 99999,
              // opacity: 0,
              // transition: "opacity 1s",
              zIndex: 1000,
            }}
            iconSize="32px"
            onClick={() => {
              if (prevLink) navigate(prevLink);
            }}
            color="#333"
            icon={mdiChevronLeft}
          />
        </Box>
      )}
      {nextLink && (
        <Box color="#333">
          <Button
            type="secondary"
            iconButton={true}
            sx={{
              width: 48,
              height: 48,
              position: "fixed",
              bottom: "24px",
              right: "24px",
              borderRadius: 99999,
              // opacity: 0,
              // transition: "opacity 1s",
              zIndex: 1000,
            }}
            iconSize="32px"
            onClick={() => {
              if (nextLink) navigate(nextLink);
            }}
            color="#333"
            icon={mdiChevronRight}
          />
        </Box>
      )}

      {/* <Footer /> */}
    </Stack>
  );
};
