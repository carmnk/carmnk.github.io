import React from "react";
import SearchBar from "../SearchBar";
import CSwiper from "../Components/CSwiper";
import { createProviderCard } from "../ComponentFactory";
import { Chip, IconButton, Typography, useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { mdiMapMarker, mdiFire, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { Link, useHistory } from "react-router-dom";
import Search from "./Search";

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

export const Home = (props: any) => {
  const theme = useTheme();
  const [Toggle, setToggle] = React.useState(true);
  const [ActiveLocation, setActiveLocation] = React.useState(0);
  const history = useHistory();

  const [IsSearching, setIsSearching] = React.useState(false);

  const activeLocationStyle = { background: theme.palette.primary.main };
  return (
    <React.Fragment>
      <div
        style={{
          position: "relative",
          top: 0,
          textAlign: "center",
          height: 50,
          display: !IsSearching ? "block" : "none",
        }} 
      >
        <Typography variant="h5" color="primary" component="div">
          Eat'n Save
        </Typography>
        <Typography variant="body1" color="textSecondary" component="div">
          reservations with discounts
        </Typography>
        <div style={{ position: "absolute", top: 0, right: 0, height: 50 }}>
          <Icon path={mdiMapMarker} size={"1em"} color={theme.palette.secondary.main}></Icon>
          <Typography component="span">Düsseldorf</Typography>
        </div>
      </div>
      <div
        style={{
          height: 192,
          opacity: !IsSearching ? 1 : 0,
          position: "relative",
          top: 0,
          backgroundSize: "cover",
          boxSizing: "border-box",
          backgroundImage:
            "url(https://github.com/carmnk/resources/raw/main/ens/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg)",
        }}
      ></div>
      <div
        style={{
          width: !IsSearching ? "100%" : "calc(100% - 50px)",
          paddingTop: !IsSearching ? 100 : 0,
          transition: `padding 0.2s ease, width 0.2s ease`,
          opacity: 1,
          position: "absolute",
          top: 0,
        }}
      >
        <SearchBar
          onFocus={() => { if (!IsSearching)
            setIsSearching(true);
          }}
        />
      </div>

      <div style={{ display: !IsSearching ? "none" : "block", position: "absolute", top: 50, width: "100%" }}>
        <Search />
      </div>
      <div style={{ display: !IsSearching ? "none" : "block", position: "absolute", top: 0, right: 0, width: 48 }}>
        <IconButton color="primary" size="small" style={{ padding: 0 }} onClick={() => {setIsSearching(false);}}>
          <Icon path={mdiClose} size="48px" />
        </IconButton>
      </div>
      <div style={{ margin: 10, padding: 10, display: !IsSearching ? "block" : "none" }}>
        <CSwiper
          spaceBetween={10}
          slidesPerView={"auto"}
          navigation={false}
          pagination={false}
          freeMode={true}
          height={30}
          style={{ marginTop: 20 }}
          slides={[
            {
              style: {
                width: "max-content",
              },
              divContent: (
                <Chip
                  label={<Typography>Alles</Typography>}
                  clickable={true}
                  variant="outlined"
                  size="medium"
                  style={ActiveLocation === 0 ? activeLocationStyle : {}}
                  onClick={() => setActiveLocation(0)}
                />
              ),
            },
            {
              style: { width: "max-content" },
              divContent: (
                <Chip
                  label={<Typography>Altstadt</Typography>}
                  clickable={true}
                  variant="outlined"
                  size="medium"
                  style={ActiveLocation === 1 ? activeLocationStyle : {}}
                  onClick={() => setActiveLocation(1)}
                />
              ),
            },
            {
              style: { width: "max-content" },
              divContent: (
                <Chip
                  label={<Typography>Oberkassel</Typography>}
                  clickable={true}
                  variant="outlined"
                  size="medium"
                  style={ActiveLocation === 2 ? activeLocationStyle : {}}
                  onClick={() => setActiveLocation(2)}
                />
              ),
            },
            {
              style: { width: "max-content" },
              divContent: (
                <Chip
                  label={<Typography>Benrath</Typography>}
                  clickable={true}
                  variant="outlined"
                  size="medium"
                  style={ActiveLocation === 3 ? activeLocationStyle : {}}
                  onClick={() => setActiveLocation(3)}
                />
              ),
            },
            {
              style: { width: "max-content" },
              divContent: (
                <Chip
                  label={<Typography>Eller</Typography>}
                  clickable={true}
                  variant="outlined"
                  size="medium"
                  style={ActiveLocation === 4 ? activeLocationStyle : {}}
                  onClick={() => setActiveLocation(4)}
                />
              ),
            },
          ]}
        />
        <div
          style={{ display: "grid", gridTemplateColumns: "32px auto max-content", marginTop: 20, alignItems: "center" }}
        >
          <div>
            <Icon path={mdiFire} color={theme.palette.primary.main} size={"32px"} />
          </div>
          <div>
            <Typography component="span">Trending</Typography>
          </div>
          <div>
            <Typography component="span" color="primary">
              view all
            </Typography>
          </div>
        </div>
        <CSwiper
          spaceBetween={0}
          slidesPerView={"auto"}
          slidesPerGroup={1}
          accentColor={theme.palette.secondary.main}
          slides={[
            {
              style: { width: 256 },
              divContent: createProviderCard(
                {
                  name: "Restaurant 1",
                  info: "Altstadt, Deutsche Küche...",
                  price: 3,
                  img: "https://github.com/carmnk/resources/raw/main/images/food_small.jpg",
                  discountVals: discountVals,
                },
                theme,
                () => {
                  history.push("/provider");
                }
              ),
            },
            {
              style: { width: 256 },
              divContent: createProviderCard(
                {
                  name: "Restaurant 2",
                  info: "Oberkassel, Fast-Food .............",
                  price: 1,
                  img: "https://github.com/carmnk/resources/raw/main/images/restaurant_small.jpg",
                  discountVals: discountVals,
                },
                theme,
                () => {
                  history.push("/provider");
                }
              ),
            },
            {
              style: { width: 256 },
              divContent: createProviderCard(
                {
                  name: "Restaurant 3",
                  info: "Benrath, Chinesische Küche...",
                  price: 2,
                  img: "https://github.com/carmnk/resources/raw/main/images/lasagne_copyleft_small.jpg",
                  discountVals: discountVals,
                },
                theme,
                () => {
                  history.push("/provider");
                }
              ),
            },
          ]}
        ></CSwiper>

        <div>
          <Button
            color="primary"
            onClick={() => {
              setToggle(!Toggle);
              setIsSearching(!IsSearching);
            }}
          >
            Toggle
          </Button>
          {/* <div style={{ width: "auto", height: 400 }}> */}
          {/* <CSwiper
            slidesPerView={1}
            slidesPerGroup={1}
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
          ></CSwiper> */}
          {/* </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
