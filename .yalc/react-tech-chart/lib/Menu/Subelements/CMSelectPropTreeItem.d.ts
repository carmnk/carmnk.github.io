import React from "react";
import { type CTreeItemProps } from "../../Components/CTreeItem";
export declare type CMSelectPropTreeItemProps = CTreeItemProps & {
    nodeId: string;
    labelIcon: JSX.Element;
    labelText: React.ReactNode;
    value: string | number;
    options: (number | string)[] | {
        text: string;
        value: number | string;
    }[];
    onChangeConfirmed: (val: number | string) => void;
    fullscreen: boolean;
};
export declare const CMSelectPropTreeItem: (props: CMSelectPropTreeItemProps) => JSX.Element;
