/// <reference types="react" />
import { ChartState } from "./chartstate";
import { UseChartControllerProps, ChartController } from "../useChartController";
export declare type UseChartInteractions = (ContainerRef: React.RefObject<HTMLElement>, PointerContainerRef: React.RefObject<HTMLElement>, ChartState: ChartState, Dispatch: ChartController["Dispatch"], stateProps: UseChartControllerProps) => {
    current: ChartInteractions;
};
export declare type ChartInteractions = {
    pointer: PointerState;
    containerSize: ContainerSizeState;
    stateControl: {
        shallUpdate: ("drag" | "pointerMove" | "wheel" | "dragEnd" | "containerResize" | "deps" | "pinch")[];
    };
    action?: Action | null;
};
export declare type PointerState = {
    isHovering: boolean;
    move: {
        isMoving: boolean;
        xy: [number, number];
    };
    drag: {
        isDragging: boolean;
        xy: [number, number];
        initial: [number, number];
        delta: [number, number];
        first: boolean;
        last: boolean;
        movementInitial: [number, number];
        ctrlKey: boolean;
    };
    dragPointerUp: {
        isDragPointerUp: boolean;
        xy: [number, number];
    };
    wheel: {
        isWheeling: boolean;
        delta: [number, number];
    };
    pinch: {
        isPinching: boolean;
        movementInitial: [number, number];
        first: boolean;
        origin: [number, number];
    };
};
export declare type ContainerSizeState = {
    top: number;
    left: number;
    width: number;
    height: number;
    init: boolean;
};
export declare type Action = {
    wheel: WheelAction | null;
    containerResize: {
        active: boolean;
    } | null;
    pointerMove: boolean;
    pointer: DragAction | PinchAction | null;
    deps: boolean;
    shallUpdateCalcSubcharts?: boolean;
    shallUpdateXaxis: boolean;
    isRtOutOfRange: boolean;
};
export declare type DragAction<T = "translate" | "scale" | "resizeSubchart" | "drawTool" | "editTool"> = {
    start: boolean;
    end: boolean;
    shallUpdate: boolean;
    type: T;
} & (T extends "resizeSubchart" ? {
    subchartIdx: number;
    bottomInitY: number;
} : T extends "editTool" ? {
    subchartIdx: number;
    yaxisIdx: number;
    toolIdx: number;
    toolPtIdx: number;
    toolInitXy: [number, number];
} : T extends "scale" ? {
    initScaledWidthPerTick: number;
    initTranslatedX: number;
} : Record<string, never>);
export declare type WheelAction = {
    type: "wheelScale";
    wheelDeltaY: number;
};
export declare type PinchAction = {
    type: "pinchScale";
    initScaledWidthPerTick: number;
    initTranslatedX: number;
};
