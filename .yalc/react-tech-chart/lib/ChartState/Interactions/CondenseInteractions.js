export {};
// const snapSubchartByBottom = (
//   pixXy: [number, number] | undefined,
//   subcharts: T.ChartState["subCharts"],
//   snapTolPix?: number
// ): number | null => {
//   if (!pixXy) return null;
//   const snapTolPixInt = snapTolPix ?? 10;
//   const activeSubchart = subcharts.find(
//     (val) => pixXy[1] >= val.bottom - snapTolPixInt && pixXy[1] < val.bottom + snapTolPixInt
//   );
//   if (!activeSubchart) return null;
//   const activeIdx = subcharts.indexOf(activeSubchart);
//   if (activeIdx === -1) return null;
//   return activeIdx;
// };
// const getDragAction = (
//   PreState: T.ChartInteractions,
//   ChartState: T.ChartState
// ): T.DragAction | null => {
//   const { containerSize, stateControl, pointer } = PreState;
//   const { shallUpdate: interactiveUpdates } = stateControl;
//   const { width: canvasWidth, height: containerHeight } = containerSize;
//   if ((ChartState.calc?.action?.pointer as T.DragAction)?.end) return null;
//   const prevAction = ChartState?.calc?.action;
//   const { isDrawing } = ChartState.draw;
//   const { xaxis } = ChartState.calc;
//   const xaxisHeight = ChartState.options.xaxis.heightXAxis;
//   const prevDragAction = prevAction?.pointer as T.DragAction;
//   const canvasHeight = containerHeight - xaxisHeight;
//   const isDragStart = pointer.drag.first;
//   const isDragEnd = pointer.drag.last;
//   const isDragging = pointer.drag.isDragging;
//   // console.log("GET ACTION: State: ", ChartState?.calc?.action?.pointer);
//   const shallUpdateDragAction =
//     (!!pointer.drag?.delta?.[0] || !!pointer.drag?.delta?.[1]) &&
//     !pointer.drag?.first &&
//     interactiveUpdates.includes("drag");
//   const doContinuePrevAction =
//     ["drawTool", "editTool", "resizeSubchart"].includes(prevDragAction?.type ?? "") ||
//     (["translate", "scale"].includes(prevDragAction?.type ?? "") && !pointer.drag.last);
//   if (doContinuePrevAction && prevDragAction)
//     return {
//       ...prevDragAction,
//       shallUpdate: shallUpdateDragAction,
//       start: false,
//       end: isDragEnd,
//     };
//   if (isDragging && isDrawing)
//     return {
//       type: "drawTool" as const,
//       start: true,
//       end: false,
//       shallUpdate: true,
//     } as T.DragAction<"drawTool">;
//   if (isDragging && !isDrawing) {
//     const dragInitXy = pointer.drag.initial;
//     const resizeSubchartIdx = snapSubchartByBottom(dragInitXy, ChartState.subCharts);
//     const isResizeSubchartAction = resizeSubchartIdx !== null && resizeSubchartIdx !== ChartState.subCharts.length - 1;
//     if (isResizeSubchartAction)
//       return {
//         type: "resizeSubchart" as const,
//         start: isDragStart,
//         end: isDragEnd,
//         subchartIdx: resizeSubchartIdx,
//         bottomInitY: ChartState.subCharts[resizeSubchartIdx].bottom,
//         shallUpdate: true,
//       };
//     const selTools = snapToolsByXy(dragInitXy, ChartState.subCharts, xaxis, ChartState.calc); //only initially -> tool xy is changed by editing but dragInitXy isnt adjusted!
//     if (selTools.length > 0) {
//       const { subchartIdx, yaxisIdx, toolIdx, toolPtIdx } = selTools[0];
//       const toolInitXy = ChartState.subCharts[subchartIdx].yaxis[yaxisIdx].tools[toolIdx].xy[toolPtIdx];
//       return {
//         type: "editTool" as const,
//         start: isDragStart,
//         end: isDragEnd,
//         subchartIdx,
//         yaxisIdx,
//         toolIdx,
//         toolPtIdx,
//         toolInitXy,
//         shallUpdate: true,
//       };
//     }
//     const isTranslateAction =
//       dragInitXy[0] >= 0 && dragInitXy[0] < 0 + canvasWidth && dragInitXy[1] >= 0 && dragInitXy[1] < 0 + canvasHeight;
//     if (isTranslateAction)
//       return {
//         type: "translate" as const,
//         start: isDragStart,
//         end: isDragEnd,
//         shallUpdate: true,
//       } as T.DragAction<"translate">;
//     const isPointerScaleAction =
//       dragInitXy[0] >= 0 && dragInitXy[0] < 0 + canvasWidth && dragInitXy[1] >= 0 + canvasHeight;
//     if (isPointerScaleAction) {
//       return {
//         type: "scale" as const,
//         start: isDragStart,
//         end: isDragEnd,
//         initScaledWidthPerTick: xaxis.scaledWidthPerTick,
//         initTranslatedX: xaxis.totalTranslatedX,
//         shallUpdate: true,
//       };
//     }
//     return null;
//   }
//   return null;
// };
// export const getAction = (
//   PreState: T.ChartInteractions,
//   ChartState: T.ChartState,
//   isRtOutOfRange: boolean
// ): { action: T.Action } => {
//   const { xaxis } = ChartState.calc;
//   const { stateControl, pointer } = PreState;
//   const { shallUpdate: interactiveUpdates } = stateControl;
//   const wheelDeltaY = pointer.wheel?.delta[1];
//   const isWheeling = !!pointer.wheel?.isWheeling && interactiveUpdates.includes("wheel") && !!wheelDeltaY;
//   const wheel = isWheeling ? { wheelDeltaY, type: "wheelScale" as const } : null;
//   const prevAction = ChartState.calc?.action;
//   const pinch =
//     prevAction?.pointer?.type === "pinchScale" && PreState.pointer.pinch.isPinching
//       ? prevAction.pointer
//       : interactiveUpdates.includes("pinch") && PreState.pointer.pinch.isPinching
//       ? {
//           type: "pinchScale" as const,
//           initScaledWidthPerTick: xaxis.scaledWidthPerTick,
//           initTranslatedX: xaxis.totalTranslatedX,
//         }
//       : null;
//   const pointerAction = pinch ? pinch : getDragAction(PreState, ChartState);
//   const containerResize = {
//     active: interactiveUpdates.includes("containerResize") && ChartState.subCharts.length > 0,
//   };
//   const deps = interactiveUpdates.includes("deps");
//   const shallUpdateCalcSubcharts =
//     (["scale", "translate"].includes(pointerAction?.type ?? "") && (pointerAction as T.DragAction)?.shallUpdate) ||
//     pointerAction?.type === "resizeSubchart" ||
//     containerResize.active ||
//     deps ||
//     !!wheel;
//   const shallUpdateXaxis =
//     (!!wheel ||
//       deps ||
//       !!pinch ||
//       ((pointerAction as T.DragAction)?.shallUpdate &&
//         (pointerAction.type === "translate" || pointerAction.type === "scale"))) ??
//     false;
//   const action = {
//     pointer: pointerAction,
//     wheel,
//     containerResize,
//     deps,
//     shallUpdateCalcSubcharts,
//     shallUpdateXaxis,
//     pointerMove: stateControl.shallUpdate.includes("pointerMove"),
//     isRtOutOfRange,
//   };
//   return {
//     action,
//   };
// };
//# sourceMappingURL=CondenseInteractions.js.map