import React from "react";
import { Container, Fab, IconButton, Paper, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiChevronUp, mdiClose, mdiMenu } from "@mdi/js";
import Menu from "./Pages/Menu";


export const Layout = (props: any) => {
    const { menuOpen, setMenuOpen } = props;
    // const MenuOpenRef = React.useRef(menuOpen);

    // React.useEffect(() => {
    //     if (menuOpen !== MenuOpenRef.current) MenuOpenRef.current = menuOpen;
    // }, [menuOpen])

    const theme = useTheme(); 
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    console.log(menuOpen)
    const imgHeader = !menuOpen ? "Want your coding job done in no time?" : "carmnk - web and app developer";
    return (
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflowY: "scroll" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>{props.children}</div>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2000 }}>
          {/* <Container maxWidth="md" disableGutters> */}
          <div
            style={{
              visibility: !menuOpen ? "hidden" : "visible",
              position: "absolute",
              top: 0,
              width: "100%",
              height: !!matches ? 544 : 448,
              background: "#333",
            }}
          >
            <Container maxWidth="md" style={{ position: "relative", top: 0 }} disableGutters>
              <Menu />
            </Container>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: 544,
            zIndex: 15021987,
            paddingTop: !menuOpen ? 100 : 0,
            transition: `padding 0.1s ease, width 0.1s ease`,
          }}
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <Container maxWidth="md" style={{ position: "relative", top: 0, boxSizing: "border-box" }} disableGutters>
            <Paper
              style={{
                padding: "10px 0",
                borderRadius: 100,
                width: !menuOpen ? "100%" : "calc(100% - 50px)",

                height: 30,
                textAlign: "center",
                transition: `padding 0.1s ease, width 0.1s ease`,
              }}
              onClick={() => {
                setMenuOpen?.(true);
                console.log(setMenuOpen);
              }}
            >
              <Typography variant="h5" color="primary">
                {imgHeader}
              </Typography>
            </Paper>
            <div style={{ display: !menuOpen ? "none" : "block", position: "absolute", top: 0, right: 0, width: 48 }}>
              <IconButton
                color="primary"
                size="small"
                style={{ padding: 0 }}
                onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen?.(false);
                    
                }}
              >
                <Icon path={mdiClose} size="48px" />
              </IconButton>
            </div>
          </Container>
        </div>

        <Fab color="secondary" aria-label="add" style={{ position: "fixed", bottom: 20, right: 70 }}>
          <Icon color="white" path={mdiChevronUp} size="32px" />
        </Fab>
        <Fab color="secondary" aria-label="add" style={{ position: "fixed", bottom: 20, right: 20 }}>
          <Icon color="white" path={mdiMenu} size="32px" />
        </Fab>
      </div>
    );
};
export default Layout;
