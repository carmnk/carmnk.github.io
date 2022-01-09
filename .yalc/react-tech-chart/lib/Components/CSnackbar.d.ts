import React from "react";
import { AlertProps } from "@mui/material/Alert";
export declare const CSnackBar: (props: {
    open: boolean;
    onClose: () => void;
    content: React.ReactNode;
    type: AlertProps["severity"];
    autoHideDuration?: number | undefined;
    msgIdx: number;
}) => JSX.Element;
