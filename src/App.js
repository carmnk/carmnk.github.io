import React from "react";
//import logo from './logo.svg';
import "./App.css";
import "./special.css";
import CCard from "./CCard";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CBottomNav from "./CBottomNav";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import { mdiDotsVertical, mdiCurrencyEur } from "@mdi/js";
import { mdiAccountCircleOutline, mdiMessageOutline, mdiHeartOutline, mdiMagnify, mdiSilverware } from "@mdi/js";
import SearchBar from "./SearchBar";
import DiscountTag from "./DiscountTag";
import CSwiper from "./CSwiper"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff1744",
    },
    secondary: {
      main: "#ff9800",
    },
    type: "light",
  },
});

function App() {
  const [Toggle, setToggle] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "fixed", width: "100%", height: "calc(100% - 56px)", overflowY: "scroll" }}>
        <div style={{ margin: 50 }}>
          <CCard
            useHeader={false}
            useMedia={true}
            useContent={true}
            useActionArea={true}
            useFooter={true}
            mediaHeight={240}
            cardMaxWidth={320}
            elevation={8}
            headerAvatar={<Avatar>C</Avatar>}
            headerAction={
              <IconButton aria-label="settings">
                <Icon path={mdiDotsVertical} size={1} />
              </IconButton>
            }
            headerTitle="Header_Title"
            headerSubTitle="Header_SubTitle"
            imageSrc="https://github.com/carmnk/resources/raw/main/images/food_small.jpg"
            imageToolTip="My_Picture"
            onActionAreaClick={() => {
              alert("hi!");
            }}
            mediaContent={
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: 75,
                  overflow: "hidden",
                  zIndex: 15021987,
                }}
                title="discount badges are at top of card stack!"
              >
                <DiscountTag time="12:00" discount="50%" size={65} />
              </div>
            }
            content={
              <React.Fragment>
                <Typography gutterBottom variant="h5" component="h2">
                  Content_Header
                </Typography>
                <div style={{ display: "grid", gridTemplateColumns: "auto 50px" }}>
                  <div>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Content_Text
                    </Typography>
                  </div>
                  <div>
                    <Icon
                      path={mdiCurrencyEur}
                      size={"20px"}
                      color={theme.palette.primary.main}
                      style={{ border: "1px solid black", borderRadius: "50%" }}
                    />
                  </div>
                </div>
              </React.Fragment>
            }
            footerContent={
              <React.Fragment>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    alert("button clicked");
                  }}
                >
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </React.Fragment>
            }
            muiCardProps={{}}
          />
        </div>
        <div>
          <SearchBar />
          <CSwiper>
            <img
              src="https://github.com/carmnk/resources/raw/main/images/food_small.jpg"
              alt="donno"
              style={{ width: 320 }}
            />
            <img
              src="https://github.com/carmnk/resources/raw/main/images/food_small.jpg"
              alt="donno"
              style={{ width: 200 }}
            />
            <img src="https://github.com/carmnk/resources/raw/main/images/food_small.jpg" alt="donno" style={{}} />
            <img src="https://github.com/carmnk/resources/raw/main/images/food_small.jpg" alt="donno" style={{width: 320}} />
            <img src="https://raw.githubusercontent.com/carmnk/resources/main/ens/images/discounts.png" alt="some" style={{ width: 256 }}/>
          </CSwiper>
          <button
            onClick={() => {
              setToggle(!Toggle);
            }}
          >
            Toggle
          </button>
        </div>
      </div>
      <CBottomNav
        showLabels={true}
        onChange={(e, val) => {
          console.log("this is NavItem No. " + val);
        }}
        display={true}
        activeNavItem={Toggle ? 1 : 0}
        navItems={[
          { label: "Stöbern", icon: <Icon path={mdiMagnify} size={1} /> },
          { label: "Gespeichert", icon: <Icon path={mdiHeartOutline} size={1} /> },
          { label: "Buchungen", icon: <Icon path={mdiSilverware} size={1} /> },
          { label: "Post", icon: <Icon path={mdiMessageOutline} size={1} /> },
          { label: "Login", icon: <Icon path={mdiAccountCircleOutline} size={1} /> },
        ]}
      />
    </ThemeProvider>
  );
}

export default App;
