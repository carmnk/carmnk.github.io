import React from "react";
import { Rectangle } from "./Rectangle";

export const HexagonComp = (props: {
  hexagonSize: number;
  rows: number;
  itemsPerRow: number;
  rIdx: number;
  iIdx: number;
  activeCells: { rowIdx: number; itemIdx: number }[];
}) => {
  const { hexagonSize, rows, itemsPerRow, iIdx, rIdx, activeCells } = props;

  const innerHexStyle = React.useMemo(() => {
    return new Array(rows).fill(0).map((row, rIdx) =>
      new Array(itemsPerRow).fill(0).map((item, iIdx) => ({
        position: "relative" as const,
        paddingLeft: rIdx % 2 && !iIdx ? (42 / 64) * hexagonSize : 0,
        transition: "transform 400ms ease",
      }))
    );
  }, [hexagonSize, itemsPerRow, rows]);

  return (
    <div
      className={
        activeCells.find(
          (cell) => cell.itemIdx === iIdx && cell.rowIdx === rIdx
        )
          ? " selected"
          : ""
      }
      style={innerHexStyle[rIdx][iIdx]}
      key={
        rIdx.toString().padStart(2, "0") +
        "_" +
        iIdx.toString().padStart(2, "0")
      }
    >
      <div style={{ transform: "rotate(0deg)" }}>
        <Rectangle size={hexagonSize} />
      </div>

      {/* <div style={{ transform: 'rotate(60deg)', position: 'absolute', left: 0, top: 0 }}>
        <Rectangle size={hexagonSize} />
      </div>
      <div style={{ transform: 'rotate(-60deg)', position: 'absolute', left: 0, top: 0 }}>
        <Rectangle size={hexagonSize} />
      </div> */}
    </div>
  );
};

export const Hexagon = React.memo(HexagonComp);
