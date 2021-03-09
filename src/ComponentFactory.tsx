import { mdiCurrencyEur } from "@mdi/js";
import { Icon } from "@mdi/react";
import React from "react";
import DiscountTag from "./Components/Specific/DiscountTag";
import CCard from "./Components/CCard";
import CSwiper from "./Components/CSwiper";
import { Chip, Theme, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

export const createDiscountTagsSlides = (discounts: any) => {
  const result = [];
  for (let discount of discounts) {
    result.push({
      divContent: <DiscountTag time={discount.time} discount={discount.discount} size={65} />,
      style: { width: 85 },
    });
  }
  return result;
};

export const createPriceIcons = (price: number, color: string) => {
  const priceElements = [];
  for (let i = 0; i < price; i++) {
    priceElements.push(
      <Icon
        key={i}
        path={mdiCurrencyEur}
        size={"13px"}
        color="#fff"
        style={{ border: `4px solid ${color}`, borderRadius: "50%", background: color }}
      />
    );
  }
  return priceElements;
};

export const createProviderCard = (providerData: any, theme: Theme, routeTo?: () => void) => {
  return (
    <div style={{ padding: "20px 10px", boxSizing: "border-box" }}>
      <CCard
        useHeader={false}
        useFooter={false}
        mediaHeight={192}
        cardMaxWidth={256}
        elevation={2}
        imageSrc={providerData.img}
        imageToolTip={providerData.name}
        onActionAreaClick={(e) => {
          routeTo?.();
          console.log(routeTo);
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
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
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
        }
        content={
          <React.Fragment>
            <Typography gutterBottom variant="h5" component="h2">
              {providerData.name}
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
          </React.Fragment>
        }
      />
    </div>
  );
};

export const createSkillChipSlide = (title: string, style?: any, onClick?: () => void) => {
  return {
    style: {
      width: "max-content",
    },
    divContent: (
      <Chip
        label={<Typography>{title}</Typography>}
        clickable={true}
        variant="outlined"
        size="medium"
        style={style}
        onClick={onClick}
      />
    ),
  };
};
