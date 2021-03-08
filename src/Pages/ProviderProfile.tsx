import { Container, IconButton, Paper, Tab, Tabs, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { createDiscountTagsSlides, createPriceIcons, createProviderCard } from "../ComponentFactory";
import CSwiper from "../Components/CSwiper";
import Rating from "@material-ui/lab/Rating";
import LinearProgressWithLabel from "../Components/CLinearProgress";
import CTextFieldIntPopOver from "../Components/CTextFieldIntPopOver";
import CDatePicker from "../Components/CDatePicker";
import CDateTextField from "../Components/CTextFieldDate";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";
import { useHistory } from "react-router-dom";


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

const providerData = {
  name: "Restaurant 1",
  info: "Altstadt, Deutsche Küche...",
  price: 3,
  img: "https://github.com/carmnk/resources/raw/main/images/food_small.jpg",
  discountVals: discountVals,
  menu: `KLASSIK die Mutter aller Burger <br /> HEUMILCH Heumilchkäse <br />
          KÄSE & SPECK Heumilchkäse & Speck <br /> WILDER WESTEN Heumilchkäse, Grillsoße & Röstzwiebeln <br /> AVOCADO
          Heumilchkäse & Avocadocreme <br /> BIRKENWALD Champignons & Schnittlauchsoße <br /> FEURIGER Ziegenkäse &
          scharfe Chilischotensoße <br />
          ELSÄSSER Camembert & Preiselbeeren <br />
          HELDENTAT milder Gorgonzola, Früchtekompott & Walnüsse
          <br />
          KRÄUTERGLÜCK Camembert & Kräutersoße
          <br />
          GEISSBOCK Ziegenkäse, Speck & Feigenmarmelade
          <br />
          HANS IM GLÜCK Hartkäse, Parmaschinken, Rauke & Balsamessig
          <br />
          PFEFFERSACK Champignons, 3-Pfeffer-Soße & Kräutersalat
          <br />
          VOLLMUNDIG Speck, karamellisierte Zwiebeln & Champignons`,
  about:
    "cozy little appartment restaurant close to Benrath Palace.<br/>cozy little appartment restaurant close to Benrath Palace.<br/>cozy little appartment restaurant close to Benrath Palace.<br/>cozy little appartment restaurant close to Benrath Palace.",
  openingHours: {
    monday: "24/7",
    tuesday: "24/7",
    wednesday: "24/7",
    thursday: "24/7",
    friday: "24/7",
    saturday: "24/7",
    sunday: "closed",
  },
  rating: 4.25,
  reviews: [
    {
      name: "meteorite",
      date: "2021-01-01",
      ratingTotal: 4.0,
      comment: "Very good food indeed!",
    },
    {
      name: "jochen",
      date: "2021-01-01",
      ratingTotal: 5.0,
      comment: "Yes indeed!",
    },
  ],
};

const nReviewsTotal = providerData.reviews.length;
let nReviews0 = 0,
  nReviews1 = 0,
  nReviews2 = 0,
  nReviews3 = 0,
  nReviews4 = 0,
  nReviews5 = 0;
for (let i = 0; i < nReviewsTotal; i++) {
  if (providerData.reviews[i].ratingTotal >= 0 && providerData.reviews[i].ratingTotal < 1) nReviews0++;
  if (providerData.reviews[i].ratingTotal >= 1 && providerData.reviews[i].ratingTotal < 2) nReviews1++;
  if (providerData.reviews[i].ratingTotal >= 2 && providerData.reviews[i].ratingTotal < 3) nReviews2++;
  if (providerData.reviews[i].ratingTotal >= 3 && providerData.reviews[i].ratingTotal < 4) nReviews3++;
  if (providerData.reviews[i].ratingTotal >= 4 && providerData.reviews[i].ratingTotal < 5) nReviews4++;
  if (providerData.reviews[i].ratingTotal >= 5) nReviews5++;
}

export const ProviderProfile = (props: any) => {
  //const { providerData } = props;
  const [ActiveTab, setActiveTab] = React.useState(0);
  const [AmountGuests, setAmountGuests] = React.useState(2);
  const theme = useTheme();
  const history = useHistory();

  const onTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <div style={{ position: "absolute", top: 10, left: 0, zIndex: 15 }}>
        <IconButton color="primary" onClick={() => {history.push("/")}}>
          <Icon path={mdiChevronLeft} size={2} color={theme.palette.primary.main} style={{background: "rgba(99, 99, 99, 0.5)", borderRadius: "50%" }} />
        </IconButton>
      </div>
      <CSwiper
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        height={200}
        navigation={false}
        accentColor={theme.palette.secondary.main}
        slides={[
          {
            bgImgSrc: "https://github.com/carmnk/resources/raw/main/images/eating_woman.jpg",
          },
          {
            bgImgSrc: "https://github.com/carmnk/resources/raw/main/images/lasagne_copyleft_small.jpg",
          },
          {
            bgImgSrc: "https://github.com/carmnk/resources/raw/main/images/restaurant_small.jpg",
          },
        ]}
      ></CSwiper>
      <Container style={{ marginTop: 20 }}>
        <Typography variant="h6" style={{ fontWeight: 700 }}>
          Restaurant 1 @ Altstadt
        </Typography>
        <div style={{ display: "grid", gridTemplateColumns: "auto 66px" }}>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              {providerData.info}
            </Typography>
          </div>
          <div>
            {createPriceIcons(providerData.price, theme.palette.primary.main).map((priceEl, priceElIdx) => priceEl)}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "50% 50%", marginTop: 20 }}>
          <CTextFieldIntPopOver
            id="input-guests"
            label="Guests"
            valueStringTransform={(val) => `${val} guests`}
            variant="outlined"
            value={AmountGuests}
            onChange={(val) => setAmountGuests(val)}
          />
          <CDatePicker TextFieldComponent={CDateTextField} />
        </div>
        <div style={{ margin: "20px 0" }}>
          <CSwiper
            onClick={(swiper) => {
              alert(
                "slide No." +
                  swiper.clickedIndex +
                  " clicked, value is: " +
                  providerData.discountVals[swiper.clickedIndex].time +
                  " @ " +
                  providerData.discountVals[swiper.clickedIndex].discount
              );
            }}
            slidesPerView={"auto"}
            navigation={false}
            pagination={false}
            slides={createDiscountTagsSlides(providerData.discountVals)}
          ></CSwiper>
        </div>

        <Tabs
          value={ActiveTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={onTabChange}
          //aria-label="disabled tabs example"
          variant="fullWidth"
        >
          <Tab label={<Typography variant="body1">Menu</Typography>} />
          <Tab label={<Typography variant="body1">About</Typography>} />
          <Tab label={<Typography variant="body1">Reviews</Typography>} />
        </Tabs>
        {ActiveTab === 0 ? (
          <Paper style={{ width: "100%", padding: 10, marginBottom: 20, boxSizing: "border-box" }} elevation={1}>
            <Typography component="div" dangerouslySetInnerHTML={{ __html: providerData.menu }}></Typography>
          </Paper>
        ) : ActiveTab === 1 ? (
          <div style={{ marginTop: 20, paddingBottom: 10 }}>
            {/* <Typography variant="h5">About</Typography> */}
            <Typography component="div" dangerouslySetInnerHTML={{ __html: providerData.about }}></Typography>

            <div style={{ marginTop: 20, paddingBottom: 10 }}>
              <Typography variant="h5">Opening hours</Typography>
              <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "150px max-content" }}>
                <Typography component="div">
                  Monday <br />
                  Tuesday <br />
                  Wednesday <br />
                  Thursday <br />
                  Friday <br />
                  Saturday <br />
                  Sunday <br />
                </Typography>

                <Typography component="div">
                  {providerData.openingHours.monday} <br />
                  {providerData.openingHours.tuesday} <br />
                  {providerData.openingHours.wednesday} <br />
                  {providerData.openingHours.thursday} <br />
                  {providerData.openingHours.friday} <br />
                  {providerData.openingHours.saturday} <br />
                  {providerData.openingHours.sunday} <br />
                </Typography>
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "150px auto",
                marginTop: 20,
                paddingBottom: 10,
              }}
            >
              <div>
                <div style={{ margin: "0px auto", width: 50 }}>
                  <Typography variant="h5">{providerData.rating}</Typography>
                </div>
                <div style={{ margin: "0px auto", width: "max-content" }}>
                  <Rating
                    name="simple-controlled"
                    value={providerData.rating}
                    precision={0.25}

                    // onChange={(event, newValue) => {
                    //   setActiveTab(newValue);
                    // }}
                  />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "max-content auto" }}>
                <div>
                  <Rating name="simple-controlled" value={5} size="small" />
                </div>
                <div>
                  <LinearProgressWithLabel value={(nReviews5 / nReviewsTotal) * 100} color="secondary" />
                </div>
                <div>
                  <Rating name="simple-controlled" value={4} size="small" />
                </div>
                <div>
                  <LinearProgressWithLabel value={(nReviews4 / nReviewsTotal) * 100} color="secondary" />
                </div>
                <div>
                  <Rating name="simple-controlled" value={3} size="small" />
                </div>
                <div>
                  <LinearProgressWithLabel value={(nReviews3 / nReviewsTotal) * 100} color="secondary" />
                </div>
                <div>
                  <Rating name="simple-controlled" value={2} size="small" />
                </div>
                <div>
                  <LinearProgressWithLabel value={(nReviews2 / nReviewsTotal) * 100} color="secondary" />
                </div>
                <div>
                  <Rating name="simple-controlled" value={1} size="small" />
                </div>
                <div>
                  <LinearProgressWithLabel value={(nReviews1 / nReviewsTotal) * 100} color="secondary" />
                </div>
                <div>
                  <Rating name="simple-controlled" value={0} size="small" />
                </div>
                <div>
                  <LinearProgressWithLabel value={(nReviews0 / nReviewsTotal) * 100} color="secondary" />
                </div>
              </div>
            </div>

            {providerData.reviews.map((reviewObj, reviewIdx) => (
              <div
                key={reviewIdx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto max-content",
                  marginTop: 20,
                  paddingBottom: 10,
                }}
              >
                <div>
                  <Typography variant="h6">{reviewObj.name}</Typography>
                  <Rating name="simple-controlled" value={reviewObj.ratingTotal} precision={0.25} size="small" />
                </div>
                <div>
                  <Typography>{reviewObj.date}</Typography>
                </div>
                <div style={{ gridColumn: "1 / 3" }}>
                  <Typography>{reviewObj.comment}</Typography>
                </div>
              </div>
            ))}
          </React.Fragment>
        )}
      </Container>
      {/* <div
          style={{
            backgroundImage: "url(https://github.com/carmnk/resources/raw/main/images/eating_woman.jpg)",
            backgroundSize: "cover",
            width: "100%",
            height: 200,
          }}
        />{" "}
        <h1> Hi!</h1> */}
    </div>
  );
};
export default ProviderProfile;
