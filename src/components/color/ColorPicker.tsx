"use strict";

import { Box, Popover, hexToRgb, useTheme } from "@mui/material";
import React, { CSSProperties, useEffect } from "react";
import { SketchPicker } from "react-color";
import { Button } from "../buttons/Button";
import { mdiCheck } from "@mdi/js";

export type ColorPickerProps = {
  value: CSSProperties["color"];
  defaultValue?: string;
  onChange: (color: string) => void;
};

const simplifiedRgbaRegex =
  /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
const simplifiedHexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
const simplifiedHexARegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

export const rgbaToObj = (rgbaString?: string, defaultRgbaStr?: string) => {
  const colorParts =
    rgbaString
      ?.match(/rgba\((.*)\)/)?.[1]
      ?.split(",")
      ?.map((val: string) => val?.trim?.()) ?? [];
  const defaultColor: any = defaultRgbaStr
    ? rgbaToObj(defaultRgbaStr)
    : { r: 0, g: 0, b: 0, a: 1 };
  return {
    r: colorParts?.[0] ?? defaultColor,
    g: colorParts?.[1] ?? defaultColor,
    b: colorParts?.[2] ?? defaultColor,
    a: colorParts?.[3] ?? defaultColor,
  };
};

const extractRgbaValuesFromString = (rgba: string) => {
  return rgba.replaceAll(/^(?:\d+(?:,\d+)*,?)?$/, "")?.split(",");
};

export const ColorPicker = (props: ColorPickerProps) => {
  const { value, onChange, defaultValue } = props;
  const theme = useTheme();
  const [color, setColor] = React.useState(rgbaToObj(value, defaultValue));
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

  const handleToggleColorPicker = React.useCallback(() => {
    setDisplayColorPicker((current) => !current);
  }, []);

  const handleChangeColor = React.useCallback((color: any) => {
    setColor(color.rgb);
  }, []);

  const handleTakeover = React.useCallback(() => {
    const defaultObjectColor =
      "r" in color
        ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
        : null;
    const colorAdj =
      typeof color === "string"
        ? simplifiedRgbaRegex.test(color)
          ? color
          : simplifiedHexRegex.test(color)
          ? hexToRgb(color)
          : defaultObjectColor
        : defaultObjectColor;
    if (!colorAdj) return;
    // const colorCss = `rgba(${color?.r ?? 0}, ${color?.g ?? 0}, ${
    //   color?.b ?? 0
    // }, ${color?.a ?? 1})`;
    onChange?.(colorAdj);
  }, [onChange, color]);

  const indicatorRef = React.useRef<HTMLDivElement>(null);
  //   const styles = React.useMemo(() => makeStyles/;(rgbaToObj(value)), [value]);

  // EFFECTS

  useEffect(() => {
    const colorAdj =
      typeof value === "string"
        ? simplifiedRgbaRegex.test(value)
          ? value
          : simplifiedHexRegex.test(value) || simplifiedHexARegex.test(value)
          ? hexToRgb(value)
          : value
        : value;
    setColor(rgbaToObj(colorAdj, defaultValue));
  }, [value, defaultValue]);

  return (
    <div style={{ height: 28, width: 28 }}>
      <Box
        sx={{
          width: 28,
          boxSizing: "border-box",
          height: "28px",
          padding: "4px",

          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={handleToggleColorPicker}
        ref={indicatorRef}
      >
        <Box
          sx={{
            width: "28px",
            borderRadius: "2px",
            border: "1px solid " + theme.palette.divider,
            height: "28px",
            backgroundColor: color?.r
              ? `rgba(${color?.r ?? 0}, ${color?.g ?? 0}, ${color?.b ?? 0}, ${
                  color?.a ?? 1
                })`
              : "#fff",
          }}
        />
      </Box>
      {displayColorPicker ? (
        // <Dialog open={displayColorPicker} onClose={handleToggleColorPicker}>

        <Popover
          anchorEl={indicatorRef.current}
          open={displayColorPicker}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          onClose={handleToggleColorPicker}
        >
          <div onClick={handleToggleColorPicker} />
          <SketchPicker color={color as any} onChange={handleChangeColor} />
          <Box position="absolute" bottom={4} right={4}>
            <Button
              iconButton={true}
              icon={mdiCheck}
              onClick={handleTakeover}
            />
          </Box>
        </Popover>
      ) : null}
    </div>
  );
};
