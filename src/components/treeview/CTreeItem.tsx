/* eslint-disable @typescript-eslint/no-explicit-any */

import { mdiExpandAll, mdiDelete } from "@mdi/js";
import {
  SvgIconProps,
  styled,
  Box,
  Stack,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import { TreeItemProps, TreeItem, treeItemClasses } from "@mui/x-tree-view";
import React from "react";
import { Button } from "../buttons/Button";

export type StyledTreeItemProps = Omit<TreeItemProps, "nodeId" | "children"> & {
  bgColor?: string;
  bgColorForDarkMode?: string;
  color?: string;
  colorForDarkMode?: string;
  labelIcon?: React.ElementType<SvgIconProps> | null;
  labelInfo?: string;
  labelText: string;
  nodeId: number | string;
  disableBorderLeft?: boolean;
  disableAddAction?: boolean;
  disableDeleteAction?: boolean;

  //   item: any;
  // onEdit: (id: number, item: any, idFieldName: string) => void
  //   onDelete: (id: number, item: any, idFieldName: string) => void;
  //   onAddChild: (id: number, item: any, idFieldName: string) => void;

  onDelete?: (id: string) => void;
  onAddChild?: (id: string) => void;
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
})) as any;

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
    onDelete,
    onAddChild,
    nodeId,
    disableBorderLeft,
    disableAddAction,
    disableDeleteAction,
    ...other
  } = props;

  const styleProps = {
    borderLeft: disableBorderLeft
      ? undefined
      : `1px dashed ` + alpha(theme.palette.primary.main, 0.66),
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
          <Stack direction="row" maxWidth={"calc(100% - 64px)"}>
            <Box component={LabelIcon as any} color="inherit" sx={{ mr: 1 }} />

            <Typography
              variant="body2"
              sx={{
                fontWeight: "inherit",
                flexGrow: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {labelText}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>

            <Stack direction="row" justifyContent="flex-end" gap={1}>
              {!disableAddAction && (
                <Button
                  iconButton={true}
                  icon={mdiExpandAll}
                  onClick={(e) => {
                    e.stopPropagation();
                    !!nodeId && onAddChild?.(nodeId as any);
                  }}
                  iconSize="16px"
                  sx={{ height: 24, width: 24 }}
                />
              )}
              {!disableDeleteAction && (
                <Button
                  iconButton={true}
                  icon={mdiDelete}
                  onClick={(e) => {
                    console.log("WHY NOT DELETE? ")
                    e.stopPropagation();
                    !!nodeId && onDelete?.(nodeId as any);
                  }}
                  size="small"
                  iconSize="16px"
                  sx={{ height: 24, width: 24 }}
                />
              )}
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
