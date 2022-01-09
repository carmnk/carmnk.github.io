import React from "react";
import * as T from "../Types";
export declare const GraphLabel: (props: {
    name: string;
    dataset: T.Dataset;
    decimals?: number | undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, graphIdx: number, subchartIdx: number) => void;
    subchartIdx: number;
    graphIdx: number;
    graphTypes?: {
        type: "line" | "bars";
        name?: string | undefined;
    }[] | undefined;
}) => JSX.Element | null;
