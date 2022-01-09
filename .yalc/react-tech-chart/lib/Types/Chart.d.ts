/// <reference types="react" />
import { ChartController } from "./useChartController";
export declare type ChartProps = {
    Controller: ChartController;
    children?: React.ReactNode;
};
export declare type Chart = React.ForwardRefExoticComponent<ChartProps & React.RefAttributes<HTMLDivElement>>;
