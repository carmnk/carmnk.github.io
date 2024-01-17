/*  eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Paper,
  Button,
  Typography,
  styled,
  Box,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiThemeLightDark } from "@mdi/js";
import { ROUTES } from "../pages/_Routes";

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  // forcing scrollbar to appear
  (outer.style as unknown as { msOverflowStyle: string }).msOverflowStyle =
    "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer?.parentNode?.removeChild?.(outer);

  return scrollbarWidth;
}
const scrollbarWidth = getScrollbarWidth();

export type MenuProps = {
  onToggleTheme?: () => void;
  onOpenDrawer: () => void;
};

export const Navbar = (props: MenuProps) => {
  const { onOpenDrawer, onToggleTheme } = props;
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const isDevBlog = location?.pathname === "/devblog";

  const route = ROUTES.find((route) => route.path === location.pathname);

  return (
    <>
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          zIndex: 1000,
          paddingRight: 16,
        }}
      >
        {/** ContentMenu without squre styles **/}
        <ContentMenuContainer
          square
          id="menu-bar" // bookmark to page's top
          elevation={0}
        >
          {/* div-Container allowing overfloating in square styles  */}
          <ContentMenuTitle>
            {/* Home Link */}
            <LinkUndecorated to="/">
              <Typography
                variant="h1"
                fontWeight={800}
                fontFamily="'Work Sans'"
                lineHeight={"48px"}
              >{`<C/>`}</Typography>
            </LinkUndecorated>

            {/* Link  to Devblog if current location is /devblog*/}
          </ContentMenuTitle>
          <Stack
            direction="row"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            {location.pathname === "/" ? null : isDesktop ? (
              <Container>
                <Typography
                  variant="h2"
                  fontWeight={800}
                  fontFamily="'Work Sans'"
                  lineHeight={"48px"}
                >
                  {location.pathname === "/dashboard"
                    ? "Profile"
                    : location.pathname === "/news"
                    ? "News"
                    : null}
                </Typography>
              </Container>
            ) : (
              <Typography
                variant="h2"
                fontWeight={800}
                fontFamily="'Work Sans'"
                lineHeight={"48px"}
              >
                {location.pathname === "/dashboard"
                  ? "Profile"
                  : location.pathname === "/references"
                  ? "Own Projects"
                  : null}
              </Typography>
            )}
          </Stack>
          {/* Action Buttons */}
          <ContentMenuActionContainer>
            <Box color={"#fff"}>
              <MenuButton
                variant="contained"
                onClick={onToggleTheme}
                color="inherit"
              >
                <Icon path={mdiThemeLightDark} size={1.5} />
              </MenuButton>
            </Box>
            {/* <MenuButton variant="contained" onClick={onOpenDrawer}>
              <Icon path={mdiMenu} size={1.5} />
            </MenuButton> */}
          </ContentMenuActionContainer>
        </ContentMenuContainer>
        {/* DesignDivider (rect styles) */}
        {/* <DesignDivider /> */}
      </div>

      {/* <HiddenContentMenuContainer
        square
        elevation={8}
        id="hidden-menu-bar" // bookmark to page's top
        // sx={{ mr: 8 }}
      
      >
        <Stack direction="row" width="calc(100% - 32px)" gap="8px">
          <ContentMenuTitle>
            <LinkUndecorated to="/">
              <img src="/logo_noborder.png" alt="Logo" width="48px" height="48px" />
            </LinkUndecorated>

            {isDevBlog && (
              <LinkUndecorated to="/devblog">
                <Typography component="div" variant="h3" color="#333333" lineHeight="56px">
                  's Devblog
                </Typography>
              </LinkUndecorated>
            )}
          </ContentMenuTitle>

          <div>
            <HiddenMenuButton variant="contained" onClick={onToggleTheme}>
              <Icon path={mdiThemeLightDark} size={'48px'} />
            </HiddenMenuButton>
            <HiddenMenuButton variant="contained" onClick={onOpenDrawer}>
              <Icon path={mdiMenu} size={1.5} />
            </HiddenMenuButton>
          </div>
        </Stack>
      </HiddenContentMenuContainer> */}
    </>
  );
};

/** styled Subelements */

const ContentMenuContainer = styled(Paper)(({ theme }) => ({
  background: "transparent",
  padding: "8px",
  display: "flex",
  gap: "8px",
  position: "relative",
  top: 0,
  left: 0,
}));

const ContentMenuTitle = styled("div")({
  flexGrow: 1,
  // height: 44,
  overflowY: "visible",
  zIndex: 1,
  display: "flex",
});
const ContentMenuActionContainer = styled("div")({
  height: 44,
  overflowY: "visible",
  zIndex: 1,
  display: "flex",
});

const MenuButton = styled(Button)(({ theme }) => ({
  width: 44,
  height: 44,
  padding: "4px",
  marginLeft: "8px",
  marginTop: "6px",
  minWidth: 0,
  borderRadius: "4px",
  backgroundColor: theme.palette.mode === "light" ? '#333 !important' : "#424242 !important",
  "@media (min-width: 780px)": {
    "&:hover": { bgcolor: theme.palette.primary.dark },
  },
  "&:active": { bgcolor: "#424242 !important" },
}));

const LinkUndecorated = styled(Link)({ textDecoration: "none" });

// const HiddenContentMenuContainer = styled(Paper)(({ theme }) => ({
//   background: theme.palette.background.paper,
//   padding: "8px",
//   paddingTop: "4px",
//   paddingBottom: "4px",
//   // paddingRight: '64px',
//   boxSizing: "border-box",
//   position: "fixed",
//   top: 0,
//   left: 0,
//   // width: `calc(100% - ${32}px)`,
//   zIndex: 1000,
//   // overflow: 'hidden',
//   // background: "#333",
// }));
// const HiddenMenuButton = styled(Button)(({ theme }) => ({
//   width: 44,
//   height: 44,
//   padding: "4px",
//   marginLeft: "8px",
//   // marginTop: '6px',
//   minWidth: 0,
//   borderRadius: "4px",
//   backgroundColor: "#424242",
//   "&:hover": { bgcolor: theme.palette.primary.dark },
// }));
