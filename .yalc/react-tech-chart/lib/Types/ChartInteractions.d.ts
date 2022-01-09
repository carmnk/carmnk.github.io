import { ChartState } from "./ChartState";
import { SubchartState } from "./ChartStateSubchart";
export declare type NEWChartInteractions = {
    pointer: PointerState;
    containerSize: ContainerSizeState;
    action: Action | null;
};
export declare type ChartMemo = {
    customEffectChartState: CustomEffectChartState | null;
};
export declare type ChartInteractions = {
    pointer: PointerState;
    containerSize: ContainerSizeState;
    stateControl: {
        shallUpdate: ("drag" | "pointerMove" | "wheel" | "dragEnd" | "containerResize" | "deps" | "pinch")[];
    };
    action?: Action | null;
};
export declare type ContainerSizeState = {
    top: number;
    left: number;
    width: number;
    height: number;
    init: boolean;
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
export declare type CustomEffectChartState = {
    subcharts: Omit<SubchartState, "top" | "bottom">[];
    draw: Omit<ChartState["draw"], "xy"> & {
        nPixXy: number;
    };
};
export declare type Action = {
    wheel: {
        type: "wheelScale";
        wheelDeltaY: number;
    } | null;
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
    type: "resizeSubchart";
    subchartIdx: number;
    bottomInitY: number;
} : T extends "editTool" ? {
    type: "editTool";
    subchartIdx: number;
    yaxisIdx: number;
    toolIdx: number;
    toolPtIdx: number;
    toolInitXy: [number, number];
} : T extends "scale" ? {
    initScaledWidthPerTick: number;
    initTranslatedX: number;
} : {});
export declare type WheelAction = {
    type: "wheelScale";
    wheelDeltaY: number;
};
export declare type PinchAction = {
    type: "pinchScale";
    initScaledWidthPerTick: number;
    initTranslatedX: number;
};
