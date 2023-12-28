import { Divider, Drawer, Stack, useTheme } from "@mui/material";
import React from "react";
import { Button } from "../../components/buttons/Button";
import { mdiFile, mdiPencil } from "@mdi/js";
import { CTreeView } from "../../components/treeview/CTreeView";
import { StyledTreeItemProps } from "../../components/treeview/CTreeItem";

const treeItems: StyledTreeItemProps[] = [
  {
    nodeId: 1,
    labelText: "<head>",
    children: [
      {
        nodeId: 2,
        labelText: "Item 1.1",
        children: [
          {
            nodeId: 3,
            labelText: "Item 1.1.1",
          },
          {
            nodeId: 4,
            labelText: "Item 1.1.2",
          },
        ],
      },
      {
        nodeId: 5,
        labelText: "Item 1.2",
      },
    ],
  },
  {
    nodeId: 6,
    labelText: "<body>",
    children: [
      {
        nodeId: 7,
        labelText: "Item 2.1",
      },
      {
        nodeId: 8,
        labelText: "Item 2.2",
      },
    ],
  },
] as any;

export const LeftMainMenu = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      disablePortal={true}
      open={true}
      PaperProps={{ sx: { position: "absolute" } }}
    >
      <Stack direction="row" height="100%">
        {/* MainMenu (icons) */}
        <Stack gap={2} p={1}>
          <Button iconButton={true} icon={mdiFile} type="text" />

          <Divider />
          <Button iconButton={true} icon={mdiPencil} type="text" />
        </Stack>

        {/* SubMenu */}
        <Stack
          gap={2}
          borderLeft={"1px solid " + theme.palette.divider}
          height="100%"
        >
          <CTreeView items={treeItems} />
        </Stack>
      </Stack>
    </Drawer>
  );
};
