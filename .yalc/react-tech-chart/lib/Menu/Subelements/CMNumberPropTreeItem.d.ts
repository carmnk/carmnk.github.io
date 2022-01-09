import React from "react";
import { type CTreeItemProps } from "../../Components/CTreeItem";
export declare type CMNumberPropTreeItemProps = CTreeItemProps & {
    nodeId: string;
    labelIcon: JSX.Element;
    labelText: React.ReactNode;
    value: number;
    onChangeConfirmed: (val: number) => void;
};
export declare const CMNumberPropTreeItem: (props: CMNumberPropTreeItemProps) => JSX.Element;
