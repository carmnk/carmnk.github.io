var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
import { useResizeDetector } from "react-resize-detector";
import useFullscreen from "react-use/lib/useFullscreen";
import { useGesture } from "@use-gesture/react";
import { isNullish } from "../utils/Basics";
import { getDefaultChartInteractions } from "./Defaults";
export var useChartInteractions = function (ContainerRef, PointerContainerRef, ChartState, Dispatch, stateProps) {
    var _a, _b, _c, _d, _e;
    var settings = stateProps.settings, staticWidth = stateProps.width, staticHeight = stateProps.height, events = stateProps.events;
    var containerModeIn = (settings || {}).containerMode;
    var disablePointerEvents = (events || {}).disablePointerEvents;
    var fullscreen = ChartState.fullscreen;
    var containerMode = containerModeIn === "static" && staticHeight && staticWidth ? "static" : "responsive";
    var InteractionsRef = React.useRef(getDefaultChartInteractions(ChartState));
    useFullscreen(ContainerRef, fullscreen, {
        onClose: function () {
            return Dispatch({
                task: "setGeneralProp",
                params: { prop: "toggleFullscreen" },
            });
        },
    });
    /* update static container size if not in fullscreen */
    var _f = (_b = (_a = ContainerRef === null || ContainerRef === void 0 ? void 0 : ContainerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {}, clientTop = _f.top, clientLeft = _f.left;
    React.useEffect(function () {
        var ref = ContainerRef;
        if (!(ref === null || ref === void 0 ? void 0 : ref.current) || fullscreen || containerMode !== "static")
            return;
        if (isNullish(clientTop) || isNullish(clientLeft) || isNullish(staticWidth) || isNullish(staticHeight))
            return;
        var containerSize = {
            top: clientTop,
            left: clientLeft,
            width: staticWidth,
            height: staticHeight,
            init: true,
        };
        ref.current.style.position = "relative";
        ref.current.style.width = containerMode === "static" && staticWidth !== undefined ? staticWidth + "px" : "100%";
        ref.current.style.height = containerMode === "static" && staticHeight !== undefined ? staticHeight + "px" : "100%";
        ref.current.style.top = "0px";
        ref.current.style.left = "0px";
        InteractionsRef.current = __assign(__assign({}, InteractionsRef.current), { stateControl: __assign(__assign({}, InteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate, true), ["containerResize"], false) }), containerSize: containerSize });
    }, [containerMode, ContainerRef, fullscreen, staticWidth, staticHeight, clientLeft, clientTop]);
    /** init and update container size if in fullscreen */
    React.useEffect(function () {
        var ref = ContainerRef;
        if (!(ref === null || ref === void 0 ? void 0 : ref.current))
            return;
        if (!fullscreen)
            return;
        var handleWindowResize = function () {
            if (!ref || !ref.current)
                return;
            var width = window.innerWidth, height = window.innerHeight;
            InteractionsRef.current = __assign(__assign({}, InteractionsRef.current), { stateControl: __assign(__assign({}, InteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate, true), ["containerResize"], false) }), containerSize: { top: 0, left: 0, width: width, height: height, init: true } });
        };
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("orientationchange", handleWindowResize);
        return function () {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("orientationchange", handleWindowResize);
        };
    }, [ContainerRef, fullscreen, disablePointerEvents]);
    /* init and update container size if in responsive containerMode and not fullscreen */
    var handleResizeDetected = React.useCallback(function (width, height) {
        var _a;
        if (containerMode !== "responsive" || isNullish(width) || isNullish(height) || fullscreen)
            return;
        if (!((_a = ContainerRef === null || ContainerRef === void 0 ? void 0 : ContainerRef.current) === null || _a === void 0 ? void 0 : _a.parentElement))
            return;
        var _b = ContainerRef.current.parentElement.getBoundingClientRect(), top = _b.top, left = _b.left;
        InteractionsRef.current = __assign(__assign({}, InteractionsRef.current), { stateControl: __assign(__assign({}, InteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate, true), ["containerResize"], false) }), containerSize: { top: top, left: left, width: width, height: height, init: true } });
    }, [fullscreen, containerMode, ContainerRef]);
    useResizeDetector({
        targetRef: (_d = { current: (_c = ContainerRef.current) === null || _c === void 0 ? void 0 : _c.parentElement }) !== null && _d !== void 0 ? _d : undefined,
        onResize: handleResizeDetected,
    });
    /* pointer event handlers  */
    var transformVector = function (xy) { return [
        xy[0] - (clientLeft !== null && clientLeft !== void 0 ? clientLeft : 0),
        xy[1] - (clientTop !== null && clientTop !== void 0 ? clientTop : 0),
    ]; };
    useGesture({
        onPinch: function (pinchState) {
            var isPinching = pinchState.active, origin = pinchState.origin, first = pinchState.first, values = pinchState.values, initial = pinchState.initial;
            InteractionsRef.current.pointer = __assign(__assign({}, InteractionsRef.current.pointer), { pinch: {
                    isPinching: isPinching,
                    origin: transformVector(origin),
                    movementInitial: [values[0] - initial[0], values[1] - initial[1]],
                    first: first,
                } });
            InteractionsRef.current.stateControl.shallUpdate = __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate.filter(function (val) { return val !== "pointerMove"; }), true), [
                "pinch",
            ], false);
        },
        onDrag: function (dragState) {
            var shallAlreadyUpdate = InteractionsRef.current.stateControl.shallUpdate.includes("drag");
            var prevDelta = InteractionsRef.current.pointer.drag.delta;
            var deltaX = shallAlreadyUpdate && !!prevDelta ? prevDelta[0] + dragState.delta[0] : dragState.delta[0];
            var deltaY = shallAlreadyUpdate && !!prevDelta ? prevDelta[1] + dragState.delta[1] : dragState.delta[1];
            var xy = dragState.xy, initial = dragState.initial, movement = dragState.movement, firstIn = dragState.first, lastIn = dragState.last, isDragging = dragState.active, ctrlKey = dragState.ctrlKey;
            var first = shallAlreadyUpdate ? InteractionsRef.current.pointer.drag.first || firstIn : firstIn;
            var last = shallAlreadyUpdate ? InteractionsRef.current.pointer.drag.last || lastIn : lastIn;
            if (isDragging && !first && !dragState.delta[0] && !dragState.delta[1])
                return;
            InteractionsRef.current = __assign(__assign({}, InteractionsRef.current), { pointer: __assign(__assign({}, InteractionsRef.current.pointer), { drag: {
                        isDragging: isDragging,
                        xy: transformVector(xy),
                        initial: transformVector(initial),
                        movementInitial: !disablePointerEvents ? movement : [0, 0],
                        last: last,
                        first: first,
                        delta: !disablePointerEvents ? [deltaX, deltaY] : [0, 0],
                        ctrlKey: ctrlKey,
                    } }), stateControl: __assign(__assign({}, InteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate, true), ["drag"], false) }) });
        },
        onMove: function (moveState) {
            var isMoving = moveState.active;
            if (isMoving && !moveState.first && !moveState.delta[0] && !moveState.delta[1])
                return;
            InteractionsRef.current = __assign(__assign({}, InteractionsRef.current), { pointer: __assign(__assign({}, InteractionsRef.current.pointer), { move: {
                        isMoving: moveState.active,
                        xy: transformVector(moveState.xy),
                    } }), stateControl: __assign(__assign({}, InteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate, true), ["pointerMove"], false) }) });
        },
        onHover: function (hoverState) {
            InteractionsRef.current = __assign(__assign({}, InteractionsRef.current), { pointer: __assign(__assign({}, InteractionsRef.current.pointer), { isHovering: hoverState.active }), stateControl: __assign(__assign({}, InteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate, true), ["pointerMove"], false) }) });
        },
        onWheel: function (wheelState) {
            var shallAlreadyUpdate = InteractionsRef.current.stateControl.shallUpdate.includes("wheel");
            var prevDelta = InteractionsRef.current.pointer.wheel.delta;
            var deltaX = shallAlreadyUpdate && !!prevDelta ? prevDelta[0] + wheelState.delta[0] : wheelState.delta[0];
            var deltaY = shallAlreadyUpdate && !!prevDelta ? prevDelta[1] + wheelState.delta[1] : wheelState.delta[1];
            InteractionsRef.current = __assign(__assign({}, InteractionsRef.current), { pointer: __assign(__assign({}, InteractionsRef.current.pointer), { wheel: { delta: [deltaX, deltaY], isWheeling: wheelState.active } }), stateControl: __assign(__assign({}, InteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate, true), ["wheel"], false) }) });
        },
        onDragEnd: function (dragState) {
            var xyIn = dragState.xy;
            var xy = transformVector(xyIn);
            InteractionsRef.current = __assign(__assign({}, InteractionsRef.current), { pointer: __assign(__assign({}, InteractionsRef.current.pointer), { dragPointerUp: { isDragPointerUp: true, xy: xy } }), stateControl: __assign(__assign({}, InteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], InteractionsRef.current.stateControl.shallUpdate, true), ["dragEnd"], false) }) });
        },
    }, {
        // target: ContainerRef,
        target: PointerContainerRef,
        drag: { preventScroll: true, touch: true },
        enabled: !((_e = ChartState.menu) === null || _e === void 0 ? void 0 : _e.disablePointerEvents) && !disablePointerEvents && InteractionsRef.current.containerSize.init,
        eventOptions: { passive: false, capture: false },
        pinch: { axis: "x" },
        hover: { mouseOnly: false },
        move: { mouseOnly: false },
    });
    return InteractionsRef;
};
//# sourceMappingURL=useChartInteractions.js.map