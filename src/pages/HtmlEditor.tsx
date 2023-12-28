import { AppBar, Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { Button } from "../components/buttons/Button";
import { mdiAlphaC, mdiPlay } from "@mdi/js";
import { LeftMainMenu } from "./HtmlEditor/LeftMainMenu";
import { RightMenu } from "./HtmlEditor/RightMenu.tsx";

export const HtmlEditor = () => {
  const theme = useTheme();

  return (
    <Box
      position="fixed"
      height="100%"
      width="100%"
      top={0}
      left={0}
      zIndex={100000}
      bgcolor="background.paper"
    >
      <AppBar
        position="static"
        sx={{
          height: 42,
          border: "1px solid " + theme.palette.divider,
          width: "calc(100% - 2px)",
        }}
        elevation={0}
      >
        <Stack direction="row">
          <Box
            p={"7px"}
            pr="7px"
            borderRight={"1px solid " + theme.palette.divider}
          >
            <Button iconButton={true} icon={mdiAlphaC} />
          </Box>

          <Box p={"7px"}>
            <Button iconButton={true} icon={mdiPlay} type="text" />
          </Box>
        </Stack>
      </AppBar>
      <Box height="calc(100% - 42px)" position="relative">
        <Box>{/* CANVAS !!! */}</Box>

        <LeftMainMenu />
        <RightMenu />
      </Box>
    </Box>
  );
};
