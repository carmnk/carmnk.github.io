import {
  Box,
  Divider,
  Drawer,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Button } from "../../components/buttons/Button";
import {
  mdiAlignHorizontalCenter,
  mdiAlignHorizontalLeft,
  mdiAlignHorizontalRight,
  mdiAlignVerticalBottom,
  mdiAlignVerticalCenter,
  mdiAlignVerticalTop,
  mdiArrowExpandHorizontal,
  mdiArrowExpandVertical,
  mdiArrowUDownLeft,
  mdiEyeOff,
  mdiFile,
  mdiFormatFloatLeft,
  mdiFormatTextRotationNone,
  mdiGridLarge,
  mdiHelp,
  mdiPencil,
  mdiRectangleOutline,
  mdiViewAgendaOutline,
  mdiViewColumn,
  mdiViewColumnOutline,
  mdiViewSequentialOutline,
} from "@mdi/js";

import { CGrid } from "../../components/basics/CGrid";
import CTextField from "../../components/inputs/CTextField";

// const treeItems: StyledTreeItemProps[] = [
//   {
//     nodeId: 1,
//     labelText: "<head>",
//     children: [
//       {
//         nodeId: 2,
//         labelText: "Item 1.1",
//         children: [
//           {
//             nodeId: 3,
//             labelText: "Item 1.1.1",
//           },
//           {
//             nodeId: 4,
//             labelText: "Item 1.1.2",
//           },
//         ],
//       },
//       {
//         nodeId: 5,
//         labelText: "Item 1.2",
//       },
//     ],
//   },
//   {
//     nodeId: 6,
//     labelText: "<body>",
//     children: [
//       {
//         nodeId: 7,
//         labelText: "Item 2.1",
//       },
//       {
//         nodeId: 8,
//         labelText: "Item 2.2",
//       },
//     ],
//   },
// ];

export const RightMenu = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      disablePortal={true}
      open={true}
      PaperProps={{ sx: { position: "absolute" } }}
    >
      {/* Layout */}
      <Stack
        gap={2}
        borderLeft={"1px solid " + theme.palette.divider}
        // height="100%"
        p={1}
      >
        <Typography fontWeight={700} color="text.primary" variant="h6">
          Layout
        </Typography>
        <Box>
          <CGrid gridTemplateColumns="auto auto" gap={1}>
            {/* Display */}
            <Box>Display</Box>
            <Stack
              direction="row"
              gap={0.25}
              border={"1px solid " + theme.palette.divider}
            >
              <Button
                type="text"
                iconButton={true}
                icon={mdiRectangleOutline}
                tooltip="Block"
              />
              <Button
                type="text"
                iconButton={true}
                icon={mdiViewColumnOutline}
                tooltip="Flexbox"
              />
              <Button
                type="text"
                iconButton={true}
                icon={mdiGridLarge}
                tooltip="Grid"
              />
              <Button
                type="text"
                iconButton={true}
                icon={mdiFormatTextRotationNone}
                tooltip="Inline"
              />
              <Button
                type="text"
                iconButton={true}
                icon={mdiEyeOff}
                tooltip="Grid"
              />
              <Divider orientation="vertical" flexItem />
              <Button
                type="text"
                iconButton={true}
                icon={mdiFormatFloatLeft}
                title="Inline-"
              />
            </Stack>

            {/* Direction */}
            <Box>Direction</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiViewColumnOutline}
                  tooltip="Horizontal"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiViewAgendaOutline}
                  tooltip="Vertical"
                />
                <Divider orientation="vertical" flexItem />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiArrowUDownLeft}
                  tooltip="Vertical"
                />
              </Stack>
            </Box>

            {/* Align */}
            <Box>Align</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiAlignVerticalTop}
                  tooltip="Start"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiAlignVerticalBottom}
                  tooltip="End"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiAlignVerticalCenter}
                  tooltip="Center"
                />
                <Divider orientation="vertical" flexItem />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiArrowExpandVertical}
                  tooltip="Stretch"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="BaseLine"
                />
              </Stack>
            </Box>

            {/* Justify */}
            <Box>Justify</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiAlignHorizontalLeft}
                  tooltip="Start"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiAlignHorizontalCenter}
                  tooltip="Center"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiAlignHorizontalRight}
                  tooltip="End"
                />
                <Divider orientation="vertical" flexItem />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiArrowExpandHorizontal}
                  tooltip="Stretch"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="BaseLine"
                />
              </Stack>
            </Box>

            {/* Gap */}
            <Box>Gap</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                // border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Box width={100}>
                  <TextField
                    size="small"
                    inputProps={{ sx: { p: 0.5, px: 1 } }}
                  />
                </Box>
                <Box width={100}>
                  <TextField
                    // label="Row"x
                    size="small"
                    inputProps={{ sx: { p: 0.5, px: 1 } }}
                  />
                </Box>
              </Stack>
            </Box>

            {/* Justify */}
            <Box>Position</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiViewSequentialOutline}
                  tooltip="Static"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiViewSequentialOutline}
                  tooltip="Relative"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiViewSequentialOutline}
                  tooltip="Absolute"
                />
                <Divider orientation="vertical" flexItem />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiViewSequentialOutline}
                  tooltip="Fixed"
                />
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="Sticky"
                />
              </Stack>
            </Box>

            {/* Spacing */}
            <Box>Spacing</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="TODO"
                />
              </Stack>
            </Box>
          </CGrid>
        </Box>
      </Stack>

      {/* Size */}
      <Stack gap={2} borderLeft={"1px solid " + theme.palette.divider} p={1}>
        <Typography fontWeight={700} color="text.primary" variant="h6">
          Size
        </Typography>
        <Box>
          <CGrid gridTemplateColumns="auto auto" gap={1}>
            {/* Display */}

            {/* height */}
            <Box>Width</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="TODO"
                />
              </Stack>
            </Box>
            {/* width */}
            <Box>Height</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="TODO"
                />
              </Stack>
            </Box>
          </CGrid>
        </Box>
      </Stack>

      {/* Colors */}
      <Stack gap={2} borderLeft={"1px solid " + theme.palette.divider} p={1}>
        <Typography fontWeight={700} color="text.primary" variant="h6">
          Colors
        </Typography>
        <Box>
          <CGrid gridTemplateColumns="auto auto" gap={1}>
            {/* Display */}

            {/* Spacing */}
            <Box>Background</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="TODO"
                />
              </Stack>
            </Box>

            <Box>Color</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="TODO"
                />
              </Stack>
            </Box>
          </CGrid>
        </Box>
      </Stack>

      {/* Borders */}
      <Stack gap={2} borderLeft={"1px solid " + theme.palette.divider} p={1}>
        <Typography fontWeight={700} color="text.primary" variant="h6">
          Borders
        </Typography>
        <Box>
          <CGrid gridTemplateColumns="auto auto" gap={1}>
            {/* Display */}

            {/* Spacing */}
            <Box>BorderWidth</Box>
            <Box display="flex" justifyContent="flex-end">
              <Stack
                direction="row"
                gap={0.25}
                border={"1px solid " + theme.palette.divider}
                width="max-content"
              >
                <Button
                  type="text"
                  iconButton={true}
                  icon={mdiHelp}
                  tooltip="TODO"
                />
              </Stack>
            </Box>
          </CGrid>
        </Box>
      </Stack>
    </Drawer>
  );
};
