import React from "react";
import { ListItemIconProps } from "@mui/material/ListItemIcon";
export declare const ChartMenuListItemIcon: React.FC<ListItemIconProps>;
export declare type ChartMenuListItemProps = {
    text: string;
    id: string;
    iconColor?: string;
    iconBgColor?: string;
    textColor?: string;
    iconPath: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    addIcons?: JSX.Element[];
};
export declare const ChartMenuListItemComponent: (props: ChartMenuListItemProps) => JSX.Element;
export declare const ChartMenuListItem: React.MemoExoticComponent<(props: ChartMenuListItemProps) => JSX.Element>;
