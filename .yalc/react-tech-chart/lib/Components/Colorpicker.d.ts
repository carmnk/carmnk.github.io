import { type BoxProps } from "@mui/material/Box";
import React from "react";
export declare const ColorRect: (props: {
    color: React.CSSProperties["background"];
    width?: number | undefined;
    height?: number | undefined;
    BoxProps?: BoxProps<"div", {}> | undefined;
}) => JSX.Element;
export declare type ColorpickerProps = {
    color: React.CSSProperties["background"];
    onColorSelected: (color: string) => void;
    fullscreen: boolean;
};
export declare const Colorpicker: (props: ColorpickerProps) => JSX.Element;
