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
import CSwiper from "./CSwiper";

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

const discountVals = [
  { time: "12:00", discount: "50%" },
  { time: "12:30", discount: "40%" },
  { time: "13:00", discount: "30%" },
  { time: "13:30", discount: "20%" },
  { time: "12:00", discount: "50%" },
  { time: "12:30", discount: "40%" },
  { time: "13:00", discount: "30%" },
  { time: "13:30", discount: "20%" },
  { time: "12:00", discount: "50%" },
  { time: "12:30", discount: "40%" },
  { time: "13:00", discount: "30%" },
  { time: "13:30", discount: "20%" },
];

function App() {
  const [Toggle, setToggle] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "fixed", width: "100%", height: "calc(100% - 56px)", overflowY: "scroll" }}>
        <div style={{ margin: 10, padding: 10 }}>
          <SearchBar />
          <CSwiper
            spaceBetween={10}
            slidesPerView={"auto"}
            slidesPerGroup={1}
            centeredSlides={true}
            slides={[
              {
                style:{padding: "10px 0"},
                divContent: (
                  <CCard
                    useHeader={false}
                    mediaHeight={240}
                    cardMaxWidth={300}
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
                        <CSwiper
                          slidesPerView={3}
                          navigation={false}
                          pagination={false}
                          // CssBackgroundSize="cover"
                          // effect="slide"
                          // activeSlide={!!Toggle ? 1 : 0}
                          slides={[
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                          ]}
                        ></CSwiper>
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
                  />
                ),
              },
              {
                divContent: (
                  <CCard
                    useHeader={false}
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
                        <CSwiper
                          slidesPerView={3}
                          //slidesPerGroup={4}
                          navigation={false}
                          pagination={false}
                          // spaceBetween={0}
                          // CssBackgroundSize="cover"
                          // effect="slide"
                          // activeSlide={!!Toggle ? 1 : 0}
                          slides={[
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                          ]}
                        ></CSwiper>
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
                  />
                ),
              },
              {
                divContent: (
                  <CCard
                    useHeader={false}
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
                        <CSwiper
                          slidesPerView={3}
                          navigation={false}
                          pagination={false}
                          // spaceBetween={0}
                          // CssBackgroundSize="cover"
                          // effect="slide"
                          // activeSlide={!!Toggle ? 1 : 0}
                          slides={[
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                            { divContent: <DiscountTag time="12:00" discount="50%" size={65} /> },
                          ]}
                        ></CSwiper>
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
                  />
                ),
              },
            ]}
          ></CSwiper>
        </div>
        <div>
          <Button
            color="primary"
            onClick={() => {
              setToggle(!Toggle);
            }}
          >
            Toggle
          </Button>
          <div style={{ width: "auto", height: 400 }}>
            <CSwiper
              slidesPerView={1}
              slidesPerGroup={1}
              initialSlide={3}
              spaceBetween={0}
              CssBackgroundSize="cover"
              effect="slide"
              activeSlide={!!Toggle ? 1 : 0}
              maxWidth={1000}
              slides={[
                {
                  bgImgSrc: "https://swiperjs.com/demos/images/nature-1.jpg",
                  divContent: "ABC",
                  title: "Ein Tooltip!",
                },
                {
                  bgImgSrc: "https://swiperjs.com/demos/images/nature-2.jpg",
                  divContent: <Button>HI!</Button>,
                  title: "Noch einer Tooltip!",
                },
                { bgImgSrc: "https://swiperjs.com/demos/images/nature-3.jpg" },
                { bgImgSrc: "https://swiperjs.com/demos/images/nature-4.jpg" },
                { bgImgSrc: "https://swiperjs.com/demos/images/nature-5.jpg" },
                { bgImgSrc: "https://swiperjs.com/demos/images/nature-6.jpg" },
                { bgImgSrc: "https://swiperjs.com/demos/images/nature-7.jpg" },
                { bgImgSrc: "https://swiperjs.com/demos/images/nature-8.jpg" },
                { bgImgSrc: "https://swiperjs.com/demos/images/nature-9.jpg" },
                { bgImgSrc: "https://swiperjs.com/demos/images/nature-10.jpg" },
              ]}
            ></CSwiper>
          </div>
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
