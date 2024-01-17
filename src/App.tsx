import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Theme, ThemeProvider } from "@mui/material";
import { muiDarkSiteTheme, muiLightSiteTheme } from "./theme/muiTheme";
import { Layout } from "./theme/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";

import "swiper/css";
import { ROUTES, SWIPEABLE_ROUTES } from "./pages/_Routes";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [Theme, setTheme] = useState<Theme>(muiDarkSiteTheme);
  const SwiperController = useRef<SwiperClass | null>(null);

  const toggleTheme = () => {
    setTheme((current) =>
      current === muiDarkSiteTheme ? muiLightSiteTheme : muiDarkSiteTheme
    );
  };

  const handleSwiperPage = useCallback(
    (swiper: SwiperClass) => {
      const { activeIndex } = swiper;
      const route = SWIPEABLE_ROUTES[activeIndex];
      if (
        activeIndex < 0 ||
        activeIndex > SWIPEABLE_ROUTES.length - 1 ||
        !route
      ) {
        return;
      }
      navigate(route.path);
    },
    [navigate]
  );

  const allRoutesIndex = ROUTES.findIndex(
    (route) => route.path === location.pathname
  );
  const routeIndex = SWIPEABLE_ROUTES.findIndex(
    (route) => route.path === location.pathname
  );
  useEffect(() => {
    // const routeIndex = SWIPEABLE_ROUTES.findIndex(
    //   (route) => route.path === location.pathname
    // );
    if (routeIndex === -1 || SWIPEABLE_ROUTES[routeIndex].index === -1) {
      return;
    }
    SwiperController.current?.slideTo(routeIndex);
  }, [routeIndex]);

  const OtherRouteComponent = useMemo(
    () =>
      allRoutesIndex !== -1 ? ROUTES[allRoutesIndex].component : () => null,
    [allRoutesIndex]
  );

  return (
    <ThemeProvider theme={Theme}>
      <Layout onToggleTheme={toggleTheme}>
        {routeIndex !== -1 ? (
          <Swiper
            style={{ width: "100%", height: "100%", cursor: "pointer" }}
            slidesPerView={1}
            onSlideChange={handleSwiperPage}
            onSwiper={(swiper) => {
              SwiperController.current = swiper;
            }}
          >
            {SWIPEABLE_ROUTES.map((route) => {
              return (
                <SwiperSlide key={route.index}>
                  <route.component />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : allRoutesIndex !== -1 ? (
          <OtherRouteComponent />
        ) : null}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
