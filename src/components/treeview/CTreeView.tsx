/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { StyledTreeItem, StyledTreeItemProps } from "./CTreeItem";

declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}
const treeViewProps = {
  WebkitUserSelect: "none" /* Safari */,
  MozUserSelect: "none" /* Firefox */,
  MsUserSelect: "none" /* IE10+/Edge */,
  userSelect: "none" /* Standard */,
};

const recursiveMap = (
  items: StyledTreeItemProps[],
  events: {
    onAddChild?: (id: string) => void;
    onDelete?: (id: string) => void;
  },
  disableBorderLeft?: boolean
): JSX.Element[] => {
  return (
    items?.map?.(({ icon, ...item }) => {
      const children = (item?.children ?? []) as StyledTreeItemProps[];
      return (
        <StyledTreeItem
          {...item}
          icon={typeof icon === "string" ? <Icon path={icon} size={1} /> : icon}
          onAddChild={events?.onAddChild}
          onDelete={events?.onDelete}
          disableBorderLeft={disableBorderLeft}
        >
          {recursiveMap(children, events) as any}
        </StyledTreeItem>
      );
    }) ?? null
  );
};

export type AdditionalActionType = {
  action: (item: any, idFieldName: string) => void;
  icon: string;
  tooltip: string;
};

export type CTreeViewProps = {
  items: StyledTreeItemProps[];
  //   idFieldName: string;
  //   parentIdFieldName: string;
  //   labelFieldName: string;
  //   additionalActions?: AdditionalActionType[];
  //   filter?: FilterType;
  //   onEdit: (id: number, item: any, idFieldName: string) => void;
  onDelete?: (id: string) => void;
  onAddChild?: (id: string) => void;
  onToggleExpand?: (id: string) => void;
  //   onFilterChange?: (filter: FilterType) => void;
  expandedItems?: string[];
  selectedItems?: string[];
  maxWidth?: number;
};

export const CTreeView = (props: CTreeViewProps) => {
  const {
    items,
    onToggleExpand,
    expandedItems,
    selectedItems,
    maxWidth = 320,
  } = props;
  //   const {} = props;

  //   const showToast = useToaster();
  //   const showAlert = useAlert();
  //   const theme = useTheme();

  // const [ui, setUi] = React.useState({
  //   expandedItems: [] as string[],
  // });

  return (
    <>
      <TreeView
        aria-label="tree-view"
        expanded={expandedItems as any}
        onNodeSelect={(e, value) => {
          if (!onToggleExpand) return;

          onToggleExpand(value);
        }}
        selected={selectedItems?.[0]}
        // multiSelect={true}
        defaultCollapseIcon={<Icon path={mdiChevronDown} size={1} />}
        defaultExpandIcon={<Icon path={mdiChevronRight} size={1} />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ overflowY: "auto", maxWidth: maxWidth, ...treeViewProps }}
      >
        {items?.map?.((item) =>
          recursiveMap(
            [item],
            {
              onAddChild: props?.onAddChild,
              onDelete: props?.onDelete,
            },
            true
          )
        )}
      </TreeView>
    </>
  );
};
