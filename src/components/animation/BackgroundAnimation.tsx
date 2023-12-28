import React from "react";
// import "../bg.scss";
import { useTheme } from "@mui/material";
import { uniqBy } from "lodash";
import { Hexagon } from "../geometry/Hexagon";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const onResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return windowSize;
};

// const size = 32
const rows = 5;

const randomRow = Math.min(
  Math.max(Math.round(Math.random() * rows - 1), 0),
  rows - 1
);

export const BackgroundAnimation = () => {
  const theme = useTheme();
  const windowSize = useWindowSize();
  const itemsPerRow = React.useMemo(
    () => (windowSize?.width <= theme.breakpoints.values.sm ? 5 : 10),
    [theme.breakpoints.values.sm, windowSize?.width]
  );
  const randomItem = Math.min(
    Math.max(Math.round(Math.random() * itemsPerRow - 1), 0),
    itemsPerRow - 1
  );
  const initNeighbors = React.useMemo(
    () => [{ rowIdx: randomRow, itemIdx: randomItem }],
    [randomItem]
  );

  // const [activeCells, setActiveCells] = React.useState<{ rowIdx: number; itemIdx: number }[]>(initNeighbors)
  // const [alreadyUsedNeighbors, setAlreadyUsedNeighbors] =
  //   React.useState<{ rowIdx: number; itemIdx: number }[]>(initNeighbors)
  const activeCells =
    React.useRef<{ rowIdx: number; itemIdx: number }[]>(initNeighbors);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stateCells, setStateCells] =
    React.useState<{ rowIdx: number; itemIdx: number }[]>(initNeighbors);
  const alreadyUsedNeighbors =
    React.useRef<{ rowIdx: number; itemIdx: number }[]>(initNeighbors);

  React.useEffect(() => {
    const getNeighbors = (rowIdx: number, itemIdx: number) => {
      const tl =
        rowIdx % 2 === 0 && rowIdx > 0
          ? { rowIdx: rowIdx - 1, itemIdx: itemIdx - 1 }
          : itemIdx > 0 && rowIdx > 0 && rowIdx % 2 !== 0
          ? { rowIdx: rowIdx - 1, itemIdx: itemIdx }
          : null;
      const tr =
        rowIdx % 2 === 0 && rowIdx > 0
          ? { rowIdx: rowIdx - 1, itemIdx: itemIdx }
          : itemIdx < itemsPerRow - 1 && rowIdx > 0 && rowIdx % 2 !== 0
          ? { rowIdx: rowIdx - 1, itemIdx: itemIdx + 1 }
          : null;
      const l = itemIdx > 0 ? { rowIdx, itemIdx: itemIdx - 1 } : null;
      const r =
        itemIdx < itemsPerRow - 1 ? { rowIdx, itemIdx: itemIdx + 1 } : null;
      const bl =
        rowIdx < rows - 1 && rowIdx % 2 === 0
          ? { rowIdx: rowIdx + 1, itemIdx: itemIdx - 1 }
          : rowIdx < rows - 1 && itemIdx > 0 && rowIdx % 2 !== 0
          ? { rowIdx: rowIdx + 1, itemIdx: itemIdx }
          : null;
      const br =
        rowIdx < rows - 1 && rowIdx % 2 === 0
          ? { rowIdx: rowIdx + 1, itemIdx: itemIdx }
          : rowIdx < rows - 1 && itemIdx < itemsPerRow - 1 && rowIdx % 2 !== 0
          ? { rowIdx: rowIdx + 1, itemIdx: itemIdx + 1 }
          : null;
      const neighbors = [tl, tr, l, r, bl, br].filter(
        (neighbor) => neighbor !== null
      );
      const neighborsAdj = neighbors as { rowIdx: number; itemIdx: number }[];
      return neighborsAdj;
    };
    const getAllCurrentNeighbors = (
      currentNeighbors: { rowIdx: number; itemIdx: number }[]
    ) => {
      const newNeighbors: {
        rowIdx: number;
        itemIdx: number;
      }[] = [];
      currentNeighbors.forEach((neighbor) => {
        const { rowIdx, itemIdx } = neighbor;
        const newNeighbor = getNeighbors(rowIdx, itemIdx);
        newNeighbors.push(...newNeighbor);
      });
      return uniqBy(
        newNeighbors,
        (neighbor: { rowIdx: number; itemIdx: number }) =>
          [neighbor.rowIdx, neighbor.itemIdx].join()
      );
    };
    let emptyTime = 0;
    const onTimer = () => {
      const neighborsInt: {
        rowIdx: number;
        itemIdx: number;
      }[] = getAllCurrentNeighbors(activeCells.current).filter(
        (neighbor) =>
          !alreadyUsedNeighbors.current.find(
            (aNeighbor) =>
              aNeighbor.rowIdx === neighbor.rowIdx &&
              aNeighbor.itemIdx === neighbor.itemIdx
          )
      );
      if (!neighborsInt.length) {
        // console.log("EMPTY");
        if (!emptyTime) {
          emptyTime = Date.now();
          activeCells.current = [];
          alreadyUsedNeighbors.current = [];
          setStateCells([]);
        }
        if (Date.now() - emptyTime > 2000) {
          // console.log("EMPTY AND TIME'S UP");
          const randomRow = Math.min(
            Math.max(Math.round(Math.random() * rows - 1), 0),
            rows - 1
          );
          const randomItem = Math.min(
            Math.max(Math.round(Math.random() * itemsPerRow - 1), 0),
            itemsPerRow - 1
          );
          const initNeighbors = [{ rowIdx: randomRow, itemIdx: randomItem }];

          // setAlreadyUsedNeighbors(initNeighbors)
          alreadyUsedNeighbors.current = initNeighbors;
          // setActiveCells(initNeighbors)
          activeCells.current = initNeighbors;
          setStateCells(initNeighbors);
          return;
        } else {
          return;
        }
      }
      emptyTime = 0;
      activeCells.current = neighborsInt;
      setStateCells(neighborsInt);
      alreadyUsedNeighbors.current = [
        ...alreadyUsedNeighbors.current,
        ...neighborsInt,
      ];
    };
    const timer = setInterval(onTimer, 130);
    return () => {
      clearInterval(timer);
    };
  }, [activeCells]);

  const hexagonSize =
    windowSize?.width <= theme.breakpoints.values.sm
      ? 32
      : windowSize?.width <= theme.breakpoints.values.md
      ? 32
      : windowSize?.width <= theme.breakpoints.values.lg
      ? 48
      : 64;

  const outerStyle = React.useMemo(() => {
    return {
      padding: 32,
      transform:
        "perspective(600px) rotateY(-8deg) rotateX(8deg) rotateZ(-2deg)",
      transformStyle: "preserve-3d" as const,
      width: "max-content",
      margin: "0 auto",
    };
  }, [hexagonSize]);

  const outerHexStyle = React.useMemo(() => {
    return { display: "flex", gap: (0.5) * hexagonSize, marginBottom: 16 };
  }, [hexagonSize]);

  return (
    <div className="App" style={outerStyle}>
      {new Array(rows).fill(0).map((row, rIdx) => (
        <div style={outerHexStyle} key={rIdx}>
          {new Array(itemsPerRow).fill(0).map((item, iIdx) => {
            // const translateLength = rIdx && !iIdx && rIdx % 2 === 1 ? 32 : 0
            return (
              <Hexagon
                rows={rows}
                itemsPerRow={itemsPerRow}
                rIdx={rIdx}
                iIdx={iIdx}
                activeCells={activeCells.current}
                hexagonSize={hexagonSize}
                key={
                  rIdx.toString().padStart(2, "0") +
                  "_" +
                  iIdx.toString().padStart(2, "0")
                }
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
