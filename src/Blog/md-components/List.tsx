import { marked } from 'marked'
import TreeItem from '@mui/lab/TreeItem'
import TreeView from '@mui/lab/TreeView'
import { Box, Typography } from '@mui/material'
import { InlineTokens } from '../utils/InlineTokens'
import uniqid from 'uniqid'

import React from 'react'
import { CAccordion } from '../utils/CAccordion'

export const unflattenedList = (
  items: marked.Tokens.ListItem[],
  ordered: boolean
): { nodes: React.ReactNode[]; nodeIds: string[] } => {
  const nodeIds: string[] = []
  const getItems = (items: marked.Tokens.ListItem[], ordered: boolean): React.ReactNode[] => {
    return items.map((item, itemIdx) => {
      const nodeId = uniqid()
      nodeIds.push(nodeId)
      const subList = item.tokens.filter((val) => val.type === 'list') as marked.Tokens.List[]

      const orderSymbol = ordered ? <Typography>{itemIdx + 1}.</Typography> : <Typography>-</Typography>
      return subList.length > 0 ? (
        <TreeItem
          nodeId={nodeId}
          key={nodeId}
          label={<InlineTokens token={item?.tokens?.[0] as marked.Tokens.Text} />}
          icon={<Box sx={{ lineHeight: 1.5 }}>{orderSymbol}</Box>}
          sx={{ '& .MuiTreeItem-label': { p: 1 } }}
        >
          {getItems(subList[0].items, ordered)}
        </TreeItem>
      ) : 'text' in item ? (
        <TreeItem
          nodeId={nodeId}
          key={nodeId}
          label={<InlineTokens token={item?.tokens?.[0] as marked.Tokens.Text} />}
          icon={<Box sx={{ lineHeight: 1.5 }}>{orderSymbol}</Box>}
          sx={{ '& .MuiTreeItem-label': { p: 1, width: '100%' } }}
        />
      ) : null
    })
  }
  return { nodes: getItems(items, ordered), nodeIds }
}

export const ListComp = (props: { listToken: marked.Tokens.List }) => {
  const { listToken } = props
  const { nodes: treeNodes, nodeIds } = React.useMemo(
    () => unflattenedList(listToken.items, listToken.ordered),
    [listToken]
  )
  const isExpandable = listToken?.raw?.includes('expandable')
  const List = (
    <Box sx={{ overflow: 'visible', p: 1 }}>
      <TreeView
        defaultCollapseIcon={undefined}
        defaultExpandIcon={undefined}
        disableSelection
        expanded={nodeIds}
        sx={{ boxSizing: 'border-box', overflowX: 'hidden', width: '100%', p: 0 }}
      >
        {treeNodes}
      </TreeView>
    </Box>
  )

  return isExpandable && treeNodes?.[0] ? <CAccordion content={List} summary={treeNodes?.[0]}></CAccordion> : List
}
export const List = React.memo(ListComp)

///
// export type UnflattenedListItem = (marked.Tokens.ListItem & { children?: marked.Tokens.ListItem[] })[];
// export const unflattenListItem = (token: marked.Tokens.List) => {
//   const listItems = token?.items;
//   const nodeIds: string[] = [];

//   const getItems = (items: marked.Tokens.ListItem[]): UnflattenedListItem =>
//     items.map((item) => {
//       const nodeId = uniqid();
//       nodeIds.push(nodeId);
//       const childrenLists = item.tokens?.filter((token) => token?.type === "list") as marked.Tokens.List[];
//       return childrenLists.length > 0
//         ? { ...item, children: getItems(childrenLists?.[0]?.items), nodeId }
//         : { ...item, nodeId };
//     });
//   return { tokens: getItems(listItems), ids: nodeIds };
// };

// export type ListProps = {
//   token: marked.Tokens.List;
// };
// export const List = (props: ListProps) => {
//   const { token } = props;

// //   const recMap = (arr: any[]) => arr.map((val) => (val?.children?.length ? {recMap(val?.children)} : val));
//   const { tokens, ids } = React.useMemo(() => {
//     const unflattened = unflattenListItem(token);
//       const unflatTokens = unflattened?.tokens;
//       const ListItems = [];
//       unflatTokens?.forEach((token) => {

//     });
//   });
// };
