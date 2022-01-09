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
import { useGesture } from "react-use-gesture";
import { isNullish } from "../utils/Basics";
import { getDefaultChartInteractions } from "./Defaults";
export var useChartInteractions = function (HtmlElementRef, initialState, staticWidth, staticHeight, viewMode, disablePointerEvents, fullscreen) {
    var _a, _b, _c, _d;
    /* T.ChartInteractions ref used to store/accumulate interactive state changes before setting state */
    var ChartInteractionsRef = React.useRef(getDefaultChartInteractions(initialState));
    /* update static container size if not in fullscreen */
    var _e = (_b = (_a = HtmlElementRef === null || HtmlElementRef === void 0 ? void 0 : HtmlElementRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {}, clientTop = _e.top, clientLeft = _e.left;
    React.useEffect(function () {
        var ref = HtmlElementRef;
        if (!(ref === null || ref === void 0 ? void 0 : ref.current) || fullscreen || viewMode !== "static")
            return;
        if (isNullish(clientTop) || isNullish(clientLeft) || isNullish(staticWidth) || isNullish(staticHeight))
            return;
        var Interactions = ChartInteractionsRef.current;
        var containerSize = {
            top: clientTop,
            left: clientLeft,
            width: staticWidth,
            height: staticHeight,
            init: true,
        };
        ref.current.style.position = "relative";
        ref.current.style.width = viewMode === "static" && staticWidth !== undefined ? staticWidth + "px" : "100%";
        ref.current.style.height = viewMode === "static" && staticHeight !== undefined ? staticHeight + "px" : "100%";
        ref.current.style.top = "0px";
        ref.current.style.left = "0px";
        ChartInteractionsRef.current = __assign(__assign({}, Interactions), { stateControl: __assign(__assign({}, Interactions.stateControl), { shallUpdate: __spreadArray(__spreadArray([], Interactions.stateControl.shallUpdate, true), ["containerResize"], false) }), containerSize: containerSize });
    }, [viewMode, HtmlElementRef, fullscreen, staticWidth, staticHeight, clientLeft, clientTop]);
    /** init and update container size if in fullscreen */
    React.useEffect(function () {
        var ref = HtmlElementRef;
        if (!(ref === null || ref === void 0 ? void 0 : ref.current))
            return;
        if (disablePointerEvents) {
            ref.current.style.pointerEvents = "none";
            return;
        }
        ref.current.style.pointerEvents = "auto";
        if (!fullscreen)
            return;
        var Interactions = ChartInteractionsRef.current;
        var handleWindowResize = function (e) {
            if (!ref || !ref.current)
                return;
            var width = window.innerWidth, height = window.innerHeight;
            ChartInteractionsRef.current = __assign(__assign({}, Interactions), { stateControl: __assign(__assign({}, Interactions.stateControl), { shallUpdate: __spreadArray(__spreadArray([], Interactions.stateControl.shallUpdate, true), ["containerResize"], false) }), containerSize: { top: 0, left: 0, width: width, height: height, init: true } });
        };
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("orientationchange", handleWindowResize);
        return function () {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("orientationchange", handleWindowResize);
        };
    }, [HtmlElementRef, fullscreen, disablePointerEvents]);
    /* init and update container size if in responsive viewMode using parents size */
    var handleResizeDetected = React.useCallback(function (width, height) {
        var _a;
        if (viewMode !== "responsive" || isNullish(width) || isNullish(height) || fullscreen)
            return;
        if (!((_a = HtmlElementRef === null || HtmlElementRef === void 0 ? void 0 : HtmlElementRef.current) === null || _a === void 0 ? void 0 : _a.parentElement))
            return;
        var Interactions = ChartInteractionsRef.current;
        var _b = HtmlElementRef.current.parentElement.getBoundingClientRect(), top = _b.top, left = _b.left;
        ChartInteractionsRef.current = __assign(__assign({}, Interactions), { stateControl: __assign(__assign({}, Interactions.stateControl), { shallUpdate: __spreadArray(__spreadArray([], Interactions.stateControl.shallUpdate, true), ["containerResize"], false) }), containerSize: { top: top, left: left, width: width, height: height, init: true } });
    }, [fullscreen, viewMode, HtmlElementRef]);
    useResizeDetector({
        targetRef: (_d = { current: (_c = HtmlElementRef.current) === null || _c === void 0 ? void 0 : _c.parentElement }) !== null && _d !== void 0 ? _d : undefined,
        onResize: handleResizeDetected,
    });
    /* pointer event handlers  */
    var transformVector = function (xy) { return [xy[0] - 0, xy[1] - 0]; };
    useGesture({
        onPinch: function (pinchState) {
            if (disablePointerEvents)
                return;
            var isPinching = pinchState.active, origin = pinchState.origin, movementInitial = pinchState.movement, first = pinchState.first, offset = pinchState.offset;
            ChartInteractionsRef.current.pointer = __assign(__assign({}, ChartInteractionsRef.current.pointer), { pinch: {
                    isPinching: isPinching,
                    origin: transformVector(origin),
                    movementInitial: movementInitial,
                    first: first,
                } });
            // alert("pinch: " + movementInitial + "vs:" + pinchState.offset+ ", origin: " + transformVector(origin));
            ChartInteractionsRef.current.stateControl.shallUpdate = __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate.filter(function (val) { return val !== "pointerMove"; }), true), [
                "pinch",
            ], false);
        },
        onDrag: function (dragState) {
            if (disablePointerEvents)
                return;
            // if (dragState.event.target !== this) console.log("WHAT!!", dragState);
            var shallAlreadyUpdate = ChartInteractionsRef.current.stateControl.shallUpdate.includes("drag");
            var prevDelta = ChartInteractionsRef.current.pointer.drag.delta;
            var deltaX = shallAlreadyUpdate && !!prevDelta ? prevDelta[0] + dragState.delta[0] : dragState.delta[0];
            var deltaY = shallAlreadyUpdate && !!prevDelta ? prevDelta[1] + dragState.delta[1] : dragState.delta[1];
            var xy = dragState.xy, initial = dragState.initial, movementInitial = dragState.movement, firstIn = dragState.first, lastIn = dragState.last, isDragging = dragState.active, ctrlKey = dragState.ctrlKey;
            var first = shallAlreadyUpdate ? ChartInteractionsRef.current.pointer.drag.first || firstIn : firstIn;
            var last = shallAlreadyUpdate ? ChartInteractionsRef.current.pointer.drag.last || lastIn : lastIn;
            if (isDragging && !first && !dragState.delta[0] && !dragState.delta[1])
                return;
            ChartInteractionsRef.current = __assign(__assign({}, ChartInteractionsRef.current), { pointer: __assign(__assign({}, ChartInteractionsRef.current.pointer), { drag: {
                        isDragging: isDragging,
                        xy: transformVector(xy),
                        initial: transformVector(initial),
                        movementInitial: movementInitial,
                        last: last,
                        first: first,
                        delta: [deltaX, deltaY],
                        ctrlKey: ctrlKey,
                    } }), stateControl: __assign(__assign({}, ChartInteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate, true), ["drag"], false), lastUpdate: ChartInteractionsRef.current.stateControl.lastUpdate }) });
        },
        onMove: function (moveState) {
            if (disablePointerEvents)
                return;
            var isMoving = moveState.active;
            if (isMoving && !moveState.first && !moveState.delta[0] && !moveState.delta[1])
                return;
            ChartInteractionsRef.current = __assign(__assign({}, ChartInteractionsRef.current), { pointer: __assign(__assign({}, ChartInteractionsRef.current.pointer), { move: {
                        isMoving: moveState.active,
                        xy: transformVector(moveState.xy),
                    } }), stateControl: __assign(__assign({}, ChartInteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate, true), ["pointerMove"], false) }) });
        },
        onHover: function (hoverState) {
            if (disablePointerEvents)
                return;
            ChartInteractionsRef.current = __assign(__assign({}, ChartInteractionsRef.current), { pointer: __assign(__assign({}, ChartInteractionsRef.current.pointer), { isHovering: hoverState.active }), stateControl: __assign(__assign({}, ChartInteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate, true), ["pointerMove"], false) }) });
        },
        onWheel: function (wheelState) {
            if (disablePointerEvents)
                return;
            var shallAlreadyUpdate = ChartInteractionsRef.current.stateControl.shallUpdate.includes("wheel");
            var prevDelta = ChartInteractionsRef.current.pointer.wheel.delta;
            var deltaX = shallAlreadyUpdate && !!prevDelta ? prevDelta[0] + wheelState.delta[0] : wheelState.delta[0];
            var deltaY = shallAlreadyUpdate && !!prevDelta ? prevDelta[1] + wheelState.delta[1] : wheelState.delta[1];
            ChartInteractionsRef.current = __assign(__assign({}, ChartInteractionsRef.current), { pointer: __assign(__assign({}, ChartInteractionsRef.current.pointer), { wheel: { delta: [deltaX, deltaY], isWheeling: wheelState.active } }), stateControl: __assign(__assign({}, ChartInteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate, true), ["wheel"], false) }) });
        },
        onDragEnd: function (dragState) {
            if (disablePointerEvents)
                return;
            var xy = dragState.xy, initial = dragState.initial, first = dragState.first, last = dragState.last, movementInitial = dragState.movement;
            ChartInteractionsRef.current = __assign(__assign({}, ChartInteractionsRef.current), { pointer: __assign(__assign({}, ChartInteractionsRef.current.pointer), { dragPointerUp: {
                        isDragPointerUp: true,
                        xy: transformVector(xy),
                        initial: transformVector(xy),
                        movementInitial: movementInitial,
                        last: last,
                        first: first,
                    } }), stateControl: __assign(__assign({}, ChartInteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate, true), ["dragEnd"], false) }) });
        },
    }, {
        domTarget: fullscreen ? document.body : HtmlElementRef,
        transform: function (_a) {
            var x = _a[0], y = _a[1];
            return [x - (clientLeft !== null && clientLeft !== void 0 ? clientLeft : 0), y - (clientTop !== null && clientTop !== void 0 ? clientTop : 0)];
        },
        drag: { experimental_preventWindowScrollY: true, useTouch: true },
        enabled: 
        // !disablePointerEvents &&
        ChartInteractionsRef.current.containerSize.init,
        eventOptions: { passive: false, capture: false },
        pinch: { transform: function (_a) {
                var x = _a[0], y = _a[1];
                return [x, y];
            } },
        wheel: { transform: function (_a) {
                var x = _a[0], y = _a[1];
                return [x, y];
            } },
    });
    return ChartInteractionsRef;
};
