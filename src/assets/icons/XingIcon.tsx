import React from "react";

export type IconProps = {
  color?: string;
  height?: string;
  width?: string;
};
export const XingIcon = (props: IconProps) => {
  const { color = "#333", width = "28px", height = "28px" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path
        fill={color}
        d="M 6.222656 2 C 3.917969 2 2 3.917969 2 6.222656 L 2 43.785156 C 2 46.082031 3.917969 48 6.222656 48 L 43.785156 48 C 46.082031 48 48 46.082031 48 43.785156 L 48 6.222656 C 48 3.917969 46.082031 2 43.785156 2 Z M 6.203125 4 L 43.796875 4 C 45.011719 4 46 4.988281 46 6.203125 L 46 43.796875 C 46 45.011719 45.011719 46 43.796875 46 L 6.203125 46 C 4.988281 46 4 45.011719 4 43.796875 L 4 6.203125 C 4 4.988281 4.988281 4 6.203125 4 Z M 34 8 C 33.804688 8 33.25 8.222656 33 9 L 22.015625 28 C 21.820313 28.195313 21.820313 28.382813 22.015625 28.578125 L 29 41 C 29.382813 41.730469 29.613281 41.988281 30 42 L 35 42 C 35.570313 42 36.371094 41.738281 36 41 L 28.914063 28.578125 C 28.726563 28.382813 28.726563 28.195313 28.914063 28 L 39.652344 9 C 39.847656 8.617188 39.382813 8 39 8 Z M 12.636719 13 C 12.050781 13 11.832031 13.28125 12.433594 14.457031 L 15.886719 20.78125 C 16.074219 20.980469 16.074219 21.167969 15.886719 21.355469 L 10.050781 31.742188 C 9.6875 32.378906 9.988281 32.984375 11 33 L 16 33 C 16.421875 32.972656 16.792969 32.515625 17 32 L 23 21.550781 C 23.1875 21.355469 23.1875 21.167969 23 20.980469 L 19 14 C 18.734375 13.421875 18.601563 13.019531 18 13 Z"
      ></path>
    </svg>
  );
};