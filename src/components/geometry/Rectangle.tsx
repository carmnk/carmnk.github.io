import React from "react";
import { lighten, styled } from "@mui/material";

const darkBoxShadowRgb = `204, 204, 204,`;
const lightBoxShadowRgb = `0, 0, 0,`;

const boxShadowOuter = (
  shadowColorBaseRgb: string
) => `2.8px -2.8px 2.2px rgba(${shadowColorBaseRgb} 0.034),
6.7px -6.7px 5.3px rgba(${shadowColorBaseRgb} 0.048),
12.5px -12.5px 10px rgba(${shadowColorBaseRgb} 0.06),
22.3px -22.3px 17.9px rgba(${shadowColorBaseRgb} 0.072),
41.8px -41.8px 33.4px rgba(${shadowColorBaseRgb} 0.086),
100px -100px 80px rgba(${shadowColorBaseRgb} 0.12)`;

export const RectangleComp = () => {
  return <div></div>;
};

export const Rectangle = styled("div")<{ size?: number }>(
  ({ theme, size = 64 }) => ({
    boxShadow:
      theme.palette.mode === "dark"
        ? boxShadowOuter(darkBoxShadowRgb)
        : boxShadowOuter(lightBoxShadowRgb),
    //   backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    //   borderRadius: size ? size / 10 : 0,
    borderRadius: "50%",
    background: `radial-gradient(circle at  10px 10px, ${lighten(
      theme.palette.primary.light,
      0.5
    )}, ${theme.palette.primary.dark} )`,

    width: size,
    //   width: size * 0.645,
    height: size,
  })
);
