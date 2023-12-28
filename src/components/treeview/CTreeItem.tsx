/* eslint-disable @typescript-eslint/no-explicit-any */

import { mdiExpandAll, mdiDelete } from "@mdi/js";
import {
  SvgIconProps,
  styled,
  Box,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { TreeItemProps, TreeItem, treeItemClasses } from "@mui/x-tree-view";
import React from "react";
import { Button } from "../buttons/Button";

export type StyledTreeItemProps = Omit<TreeItemProps, "nodeId"> & {
  bgColor?: string;
  bgColorForDarkMode?: string;
  color?: string;
  colorForDarkMode?: string;
  labelIcon?: React.ElementType<SvgIconProps> | null;
  labelInfo?: string;
  labelText: string;
  nodeId: number | string;

  //   item: any;
  // onEdit: (id: number, item: any, idFieldName: string) => void
  //   onDelete: (id: number, item: any, idFieldName: string) => void;
  //   onAddChild: (id: number, item: any, idFieldName: string) => void;
  idFieldName?: string;
  children?: StyledTreeItemProps[];
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingLeft: "4px !important",
    paddingRight: "0 !important",
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },

    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    paddingLeft: 8,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
  "&.MuiTreeItem-group, &.MuiCollapse-root": {
    marginLeft: "16px !important",
  },
})) as unknown as typeof TreeItem;

export const StyledTreeItem = React.forwardRef(function StyledTreeItem(
  props: StyledTreeItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    // onDelete,
    // idFieldName,
    // item,
    // onAddChild,
    nodeId,
    ...other
  } = props;

  const styleProps = {
    "--tree-view-color":
      theme.palette.mode !== "dark" ? color : colorForDarkMode,
    "--tree-view-bg-color":
      theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
  };

  return (
    <StyledTreeItemRoot
      nodeId={nodeId as string}
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.5,
            pr: 0,
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row">
            <Box component={LabelIcon as any} color="inherit" sx={{ mr: 1 }} />

            <Typography
              variant="body2"
              sx={{ fontWeight: "inherit", flexGrow: 1 }}
            >
              {labelText}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
            <Stack direction="row" justifyContent="flex-end" gap={1}>
              <Button
                iconButton={true}
                icon={mdiExpandAll}
                // onClick={(e) => {
                //   e.stopPropagation();
                //   !!idFieldName &&
                //     onAddChild(item?.[idFieldName], item, idFieldName);
                // }}
              />
              <Button
                iconButton={true}
                icon={mdiDelete}
                // onClick={(e) => {
                //   e.stopPropagation();
                //   !!idFieldName &&
                //     onDelete(item?.[idFieldName], item, idFieldName);
                // }}
              />
              {/* {additionalActions?.map((action, aIdx) => (
                  <Button
                    key={aIdx}
                    iconButton={true}
                    icon={action.icon}
                    onClick={() => {
                      !!idFieldName && action?.action?.(item, idFieldName)
                    }}
                  />
                ))} */}
            </Stack>
          </Stack>
        </Box>
      }
      style={styleProps}
      {...other}
      ref={ref}
    />
  );
});
