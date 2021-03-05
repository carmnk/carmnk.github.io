import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCoverflow,
  EffectCube,
  EffectFlip,
} from "swiper";
//import {SwiperOptions} from "@types/swiper/"
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperProps, SwiperOptions } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectFade, EffectCube, EffectFlip]);

export interface CSwiperPropTypes extends SwiperOptions {
  han?: string;
}

export const CSwiper: React.FunctionComponent<CSwiperPropTypes> = (props) => {
  const { children } = props;

  const renderChildren = (swiperChildren: React.ReactNode) => {
    let slideWidth = { width: "100%" };
    if (!swiperChildren || swiperChildren === true) return null;
    if (typeof swiperChildren === "string" || typeof swiperChildren === "number") return swiperChildren;
    if (typeof swiperChildren === "object")
      return React.Children.map(swiperChildren, (child, childIdx) => {
        const childTyped = child as React.ReactElement;
        console.log(props.children, child);

        if ("props" in childTyped)
          if ("style" in childTyped.props)
            if ("width" in childTyped.props.style) slideWidth = { width: childTyped.props.style.width };
        return (
          <SwiperSlide style={{ ...slideWidth, maxWidth: 320, overflow: "hidden" }} key={childIdx}>
            {React.cloneElement(childTyped, { style: { maxWidth: 320 } })}
          </SwiperSlide>
        );
      });
    return null;
  };

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView="auto"
      centeredSlides={true}
      //onSlideChange={() => }
      //onSwiper={(swiper) => }
      navigation
      pagination={{ clickable: true }}
      style={{
        visibility: "visible",
        height: 200,
        width: 320,
      }}
    //   effect="fade"
    >
      {/* {!children
        ? null
        : React.Children.map(children, (child, childIdx) => {
            console.log(props.children, child);

            if ("props" in (child as any))
              if ("style" in child.props)
                if ("width" in child.props.style) slideWidth = { width: child.props.style.width };
            return (
              <SwiperSlide style={{ ...slideWidth, maxWidth: 320, overflow: "hidden" }} key={childIdx}>
                {React.cloneElement(child, { style: { maxWidth: 320 } })}
              </SwiperSlide>
            );
          })} */}
      {renderChildren(children)}
    </Swiper>
  );
};
export default CSwiper;
