import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  //   A11y,
  EffectFade,
  EffectCoverflow,
  EffectCube,
  EffectFlip,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObj, SwiperOptions } from "swiper";
import CSwiperHelmetCSS from "./CSwiperHelmet/CSwiper";

// install Swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  EffectFade,
  EffectCube,
  EffectFlip,
  Autoplay,
  //   A11y,
]);

export interface CSwiperSlidePropTypes extends React.FunctionComponent<SwiperSlide>, React.HTMLProps<HTMLDivElement> {
  bgImgSrc?: "string";
  divContent: React.ReactNode;
}
export interface CSwiperPropTypes extends Omit<SwiperOptions, "height" | "initialSlide"> {
  activeSlide?: number;
  accentColor?: string;
  CssBackgroundSize?: React.CSSProperties["backgroundSize"];
  height?: React.CSSProperties["height"];
  maxWidth?: React.CSSProperties["maxWidth"];
  slides?: CSwiperSlidePropTypes[];
  onSlideChange?: ((swiper: SwiperObj) => void) | undefined;
}

const cswiperDefaultProps: CSwiperPropTypes = {
  // wrapped props - swiper.js doesnt seem to accept explicit "undefined" for some props
  autoHeight: false,
  autoplay: false,
  centeredSlides: false, // centered slide, not content (if slide's width is smaller than swiper container)
  effect: "slide",
  freeMode: false,
  loop: false,
  loopFillGroupWithBlank: false,
  navigation: true, // deviate from swiper.js default
  pagination: { clickable: true }, // deviate from swiper.js default
  preloadImages: true,
  slideToClickedSlide: false,
  slidesOffsetAfter: 0,
  slidesOffsetBefore: 0,
  slidesPerGroup: 1,
  slidesPerView: 1, // if "auto" will disable SlidesPerGroup
  spaceBetween: 0,
  speed: 300,
  // additional props used to faciliate usage
  accentColor: "#007aff",
  activeSlide: 0, //replaces initialSlide, becoming reactive
  CssBackgroundSize: "cover",
  height: "100%",
  maxWidth: "100%",
};

export const CSwiper: React.FunctionComponent<CSwiperPropTypes> = (props) => {
  const {
    // wrapped props
    autoHeight,
    autoplay,
    breakpoints,
    centeredSlides,
    effect,
    freeMode,
    loop,
    loopFillGroupWithBlank,
    navigation,
    pagination,
    preloadImages,
    slideToClickedSlide,
    slidesOffsetAfter,
    slidesOffsetBefore,
    slidesPerGroup,
    slidesPerView,
    spaceBetween,
    speed,
    // additional props used to faciliate usage
    accentColor,
    activeSlide,
    CssBackgroundSize,
    height,
    maxWidth,
    slides,
    onSlideChange,
    ...other
  } = props;

  const ActiveSlideRef = React.useRef<number>(!!activeSlide ? activeSlide : 0);
  const SwiperInst = React.useRef<SwiperObj | null>(null);

  // prop activeSlide has changes
  React.useEffect(() => {
    if (!!SwiperInst.current && activeSlide !== undefined) {
      if (activeSlide >= 0 && activeSlide < SwiperInst.current.slides.length) {
        if (activeSlide !== ActiveSlideRef.current) {
          SwiperInst.current.slideTo(activeSlide);
        }
      }
    }
  }, [activeSlide]);

  return (
    <React.Fragment>
      <CSwiperHelmetCSS
        color={!!accentColor ? accentColor : "#000"}
        black="#000"
        white="#fff"
        backgroundSize={CssBackgroundSize}
      />
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        slidesPerGroup={slidesPerGroup}
        initialSlide={activeSlide}
        speed={speed}
        effect={effect}
        autoplay={autoplay}
        autoHeight={autoHeight}
        slideToClickedSlide={slideToClickedSlide}
        freeMode={freeMode}
        breakpoints={breakpoints}
        loop={loop}
        loopFillGroupWithBlank={loopFillGroupWithBlank}
        preloadImages={preloadImages}
        slidesOffsetBefore={slidesOffsetBefore}
        slidesOffsetAfter={slidesOffsetAfter}
        navigation={navigation}
        pagination={pagination}
        onSwiper={(swiper) => {
          SwiperInst.current = swiper;
        }}
        onSlideChange={(swiper) => {
          ActiveSlideRef.current = swiper.activeIndex;
          onSlideChange?.(swiper);
        }}
        // 
        style={{
          height: height,
          maxWidth: maxWidth,
        }}
        {...other}
      >
        {!!slides
          ? slides.map((slide, slideIdx) => {
              const { bgImgSrc, divContent, style: slideStyle, ...slideOtherProps } = slide;
              return (
                <SwiperSlide
                  key={slideIdx}
                  style={{ ...slideStyle, boxSizing: "border-box", backgroundImage: `url(${bgImgSrc})` }}
                  {...slideOtherProps}
                >
                  {divContent}
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </React.Fragment>
  );
};
CSwiper.defaultProps = cswiperDefaultProps;
export default CSwiper;
