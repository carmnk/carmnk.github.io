import { marked } from 'marked'
import React from 'react'
import { Typography } from '@mui/material'
import { TreeItem, TreeView } from '@mui/lab'
import { getHeadingOrderString } from './utils/utils'

export const getContentListItems = (items: marked.Tokens.Heading[], onClick: (id: string) => void) => {
  const nodeIds: string[] = []
  const parentedItems = items.filter((item) => item?.type === 'heading') as (marked.Tokens.Heading & {
    parent: number
    idx: number
    order: number[]
  })[]

  const getItemsPerParent = (parent: number | undefined) => parentedItems?.filter((it) => it.parent === parent)
  const unflattenItem = (itemIdx: number, orderIdx?: number) => {
    const item = parentedItems?.[itemIdx]
    const childs = getItemsPerParent(itemIdx)
    const id = item.text
    if (childs?.length) nodeIds.push(id)
    // const depth = item?.depth;
    const headingOrder = getHeadingOrderString(item)
    return (
      <TreeItem
        nodeId={id}
        id={`content-${id}`}
        key={`content-${id}`}
        label={
          <React.Fragment>
            <Typography component="span" variant="body2" color="text.secondary">
              {headingOrder}
            </Typography>{' '}
            <Typography component="span">{item.text}</Typography>
          </React.Fragment>
        }
        onClick={() => onClick?.(item?.text)}
      >
        {childs?.map((child, cIdx) => unflattenItem(child.idx, cIdx))}
      </TreeItem>
    )
  }
  const unflattened = getItemsPerParent(undefined)?.map((it, idx) => unflattenItem(idx))
  return { nodes: unflattened, nodeIds }
}

export const ContentListComponent = (props: {
  tokens: marked.Token[]
  navigate: (id: string) => void
  selected?: string[]
}) => {
  const { tokens, navigate, selected } = props
  const { nodes, nodeIds } = React.useMemo(() => {
    const headingTokens = tokens?.filter((token) => token.type === 'heading') as marked.Tokens.Heading[] | undefined
    return getContentListItems(headingTokens ?? [], navigate)
  }, [tokens, navigate])

  return (
    <TreeView
      defaultCollapseIcon={undefined}
      defaultExpandIcon={undefined}
      disableSelection
      expanded={nodeIds}
      selected={selected ?? []}
      sx={{
        boxSizing: 'border-box',
        overflowX: 'hidden',
        maxWidth: '100%',
        p: 0,
      }}
    >
      {nodes}
    </TreeView>
  )
}
export const ContentList = React.memo(ContentListComponent)
