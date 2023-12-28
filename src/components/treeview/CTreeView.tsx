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
  "-webkit-user-select": "none" /* Safari */,
  "-moz-user-select": "none" /* Firefox */,
  "-ms-user-select": "none" /* IE10+/Edge */,
  "user-select": "none" /* Standard */,
};

const recursiveMap = (items: StyledTreeItemProps[]): JSX.Element[] => {
  return (
    items?.map?.((item) => {
      const children = (item?.children ?? []) as StyledTreeItemProps[];
      return (
        <StyledTreeItem {...item}>
          {recursiveMap(children) as any}
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
  //   onDelete: (id: number, item: any, idFieldName: string) => void;
  //   onAddChild: (id: number, item: any, idFieldName: string) => void;
  //   onFilterChange?: (filter: FilterType) => void;
};

export const CTreeView = (props: CTreeViewProps) => {
  const { items } = props;
  //   const {} = props;

  //   const showToast = useToaster();
  //   const showAlert = useAlert();
  //   const theme = useTheme();

  const [ui, setUi] = React.useState({
    expandedItems: [] as number[],
    selectedItem: 1 as number,
  });

  return (
    <>
      <TreeView
        aria-label="tree-view"
        expanded={ui?.expandedItems as any}
        onNodeSelect={(e, value) => {
          setUi((current) => ({
            ...current,
            selectedItem: parseInt(value),
            expandedItems: current?.expandedItems?.includes(parseInt(value))
              ? current?.expandedItems?.filter(
                  (item) => item !== parseInt(value)
                )
              : [...(current?.expandedItems ?? []), parseInt(value)],
          }));
        }}
        selected={ui?.selectedItem as any}
        // multiSelect={true}
        defaultCollapseIcon={<Icon path={mdiChevronDown} size={1} />}
        defaultExpandIcon={<Icon path={mdiChevronRight} size={1} />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ overflowY: "auto", ...treeViewProps }}
      >
        {items?.map?.((item) => recursiveMap([item]))}
      </TreeView>
    </>
  );
};
