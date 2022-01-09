import React from "react";
export declare type CTextProps = {
    text: string;
    x: number;
    y: number;
    name?: string;
    listening?: boolean;
    fontSize?: number;
    fontName?: string;
    fontColor?: string;
    halign?: "right" | "left" | "center";
    valign?: "middle" | "top" | "bottom";
};
export declare const CTextComponent: (props: CTextProps) => JSX.Element;
export declare const CText: React.MemoExoticComponent<(props: CTextProps) => JSX.Element>;
