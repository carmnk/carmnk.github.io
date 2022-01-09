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
import { getDefaultChartInteractions } from "./Defaults";
import { useGesture as useGesture2 } from "@use-gesture/react";
export var useChartInteractions = function (HtmlElementRef, initialState, disablePointerEvents, fullscreen) {
    var _a, _b;
    /* T.ChartInteractions ref used to store/accumulate interactive state changes before setting state */
    var ChartInteractionsRef = React.useRef(getDefaultChartInteractions(initialState));
    var _c = (_b = (_a = HtmlElementRef === null || HtmlElementRef === void 0 ? void 0 : HtmlElementRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {}, clientTop = _c.top, clientLeft = _c.left;
    var transformVector = function (xy) { return [
        xy[0] - (clientLeft !== null && clientLeft !== void 0 ? clientLeft : 0),
        xy[1] - (clientTop !== null && clientTop !== void 0 ? clientTop : 0),
    ]; };
    useGesture2({
        onPinch: function (pinchState) {
            if (disablePointerEvents)
                return;
            var isPinching = pinchState.active, origin = pinchState.origin, movementInitial = pinchState.movement, first = pinchState.first, distance = pinchState.distance;
            ChartInteractionsRef.current.pointer = __assign(__assign({}, ChartInteractionsRef.current.pointer), { pinch: {
                    isPinching: isPinching,
                    origin: transformVector(origin),
                    movementInitial: distance,
                    first: first,
                } });
            ChartInteractionsRef.current.stateControl.shallUpdate = __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate.filter(function (val) { return val !== "pointerMove"; }), true), [
                "pinch",
            ], false);
        },
        onDrag: function (dragState) {
            if (disablePointerEvents)
                return;
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
                    } }), stateControl: __assign(__assign({}, ChartInteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate, true), ["drag"], false) }) });
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
                        // initial: transformVector(xy),
                        // movementInitial,
                        // last,
                        // first,
                    } }), stateControl: __assign(__assign({}, ChartInteractionsRef.current.stateControl), { shallUpdate: __spreadArray(__spreadArray([], ChartInteractionsRef.current.stateControl.shallUpdate, true), ["dragEnd"], false) }) });
        },
    }, {
        target: fullscreen ? document.body : HtmlElementRef,
        hover: { mouseOnly: false },
        move: { mouseOnly: false },
        // transform: ([x, y]) => [x - (clientLeft ?? 0), y - (clientTop ?? 0)],
        drag: { preventScroll: true },
        enabled: 
        // !disablePointerEvents &&
        ChartInteractionsRef.current.containerSize.init,
        eventOptions: { passive: false, capture: false },
        // pinch: { transform: ([x, y]) => [x, y] },
        // wheel: { transform: ([x, y]) => [x, y] , },
    });
    return ChartInteractionsRef;
};
//# sourceMappingURL=useGestNew.js.map