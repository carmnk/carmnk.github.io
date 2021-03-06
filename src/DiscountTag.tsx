import React from "react";

export interface DiscountTagPropTypes {
  time?: string;
  discount?: string;
  size?: number;
  paddingPercentOfSize?: number;
  bgImgUrl?: string;
}

const discountsDefaultProps: DiscountTagPropTypes = {
  time: "",
  discount: "",
  size: 65,
  paddingPercentOfSize: 15,
  bgImgUrl: "https://raw.githubusercontent.com/carmnk/resources/main/ens/images/discounts.png",
};

export const DiscountTag = (props: DiscountTagPropTypes = discountsDefaultProps) => {
  const { time, discount, size = 65, bgImgUrl, paddingPercentOfSize=15 } = props;

  const padding = Math.round(paddingPercentOfSize/100 * size);
  const upperTextHeightPercent = 45;
  const lowerTextHeightPercent = 55;
  const heightUpperText = Math.round((((size - 2 * padding) * upperTextHeightPercent) / 100) * 0.6);
  const heightLowerText = Math.round((((size - 2 * padding) * lowerTextHeightPercent) / 100) * 0.75);

  return (
    <div
      style={{
        height: size,
        width: size,
        maxWidth: size,
        background: `url(${bgImgUrl})`,
        backgroundSize: "cover",
        textAlign: "center",
        padding: padding,
        boxSizing: "border-box",
        color: "#fff",
        display: "grid",
        gridTemplateRows: `${upperTextHeightPercent}% ${lowerTextHeightPercent}%`,
        gridTemplateColumns: "1fr",
        alignItems: "center",
        margin: 0,
      }}
      
    >
      <div>
        <p style={{ fontSize: heightUpperText, margin: 0 }}>{time}</p>
      </div>
      <div>
        <p style={{ fontSize: heightLowerText, margin: 0, fontWeight: 500 }}>{discount}</p>
      </div>
    </div>
  );
};
DiscountTag.defaultProps = discountsDefaultProps;
export default DiscountTag;
