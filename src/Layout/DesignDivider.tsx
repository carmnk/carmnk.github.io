import React from "react";

const rectColorCss = {
  background: "#009688",
  display: "inline-block",
};
const rectSecColorCss = {
  background: "rgba(0,150,136,0.5)",
  display: "inline-block",
};

export type DesignDividerProps = {
  align?: "top" | "bottom";
};

export const DesignDivider = (props: DesignDividerProps) => {
  const { align } = props;
  return (
    <React.Fragment>
      <div style={{ position: "relative", top: 0, left: 0, width: "100%", height: 70 }}>
        <div style={{ display: "flex", alignItems: align === "bottom" ? "flex-end" : "flex-start" }}>
          <div style={{ ...rectSecColorCss, width: "7%", height: 60 }}></div>
          <div style={{ ...rectSecColorCss, width: "10%", height: 50 }}></div>
          <div style={{ ...rectSecColorCss, width: "6%", height: 50 }}></div>
          <div style={{ ...rectSecColorCss, width: "8%", height: 60 }}></div>
          <div style={{ ...rectSecColorCss, width: "3%", height: 40 }}></div>
          <div style={{ ...rectSecColorCss, width: "8%", height: 50 }}></div>
          <div style={{ ...rectSecColorCss, width: "9%", height: 60 }}></div>
          <div style={{ ...rectSecColorCss, width: "7%", height: 70 }}></div>
          <div style={{ ...rectSecColorCss, width: "5%", height: 50 }}></div>
          <div style={{ ...rectSecColorCss, width: "3%", height: 70 }}></div>
          <div style={{ ...rectSecColorCss, width: "6%", height: 40 }}></div>
          <div style={{ ...rectSecColorCss, width: "7%", height: 60 }}></div>
          <div style={{ ...rectSecColorCss, width: "4%", height: 70 }}></div>
          <div style={{ ...rectSecColorCss, width: "9%", height: 60 }}></div>
          <div style={{ ...rectSecColorCss, width: "4%", height: 50 }}></div>
          <div style={{ ...rectSecColorCss, width: "4%", height: 60 }}></div>
        </div>
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 70 }}>
        <div style={{ display: "flex", alignItems: align === "bottom" ? "flex-end" : "flex-start" }}>
          <div style={{ ...rectColorCss, width: "10%", height: 40 }}></div>
          <div style={{ ...rectColorCss, width: "7%", height: 60 }}></div>
          <div style={{ ...rectColorCss, width: "9%", height: 40 }}></div>
          <div style={{ ...rectColorCss, width: "6%", height: 50 }}></div>
          <div style={{ ...rectColorCss, width: "4%", height: 70 }}></div>
          <div style={{ ...rectColorCss, width: "9%", height: 40 }}></div>
          <div style={{ ...rectColorCss, width: "12%", height: 60 }}></div>
          <div style={{ ...rectColorCss, width: "3%", height: 20 }}></div>
          <div style={{ ...rectColorCss, width: "6%", height: 30 }}></div>
          <div style={{ ...rectColorCss, width: "9%", height: 70 }}></div>
          <div style={{ ...rectColorCss, width: "5%", height: 40 }}></div>
          <div style={{ ...rectColorCss, width: "4%", height: 70 }}></div>
          <div style={{ ...rectColorCss, width: "7%", height: 50 }}></div>
          <div style={{ ...rectColorCss, width: "6%", height: 30 }}></div>
          <div style={{ ...rectColorCss, width: "3%", height: 40 }}></div>
        </div>
      </div>
    </React.Fragment>
  );
};
