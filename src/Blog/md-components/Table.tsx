import { Box } from '@mui/material'
import React from 'react'
import { InlineTokens } from '../utils/InlineTokens'
import { CAccordion } from '../utils/CAccordion'
import { marked } from 'marked'
import CTable from '../../table/CTable'

export type TableProps = {
  token: marked.Tokens.Table
  isExpandable: boolean
  summaryLabel?: string
}

export const Table = (props: TableProps) => {
  const { token, isExpandable, summaryLabel } = props

  const rows = React.useMemo(
    () =>
      token.rows?.map((row, ridx) => {
        return row.map((cell, cidx) => {
          return cell?.text ? (
            <React.Fragment>
              <InlineTokens token={cell} />
            </React.Fragment>
          ) : null
        })
      }),
    [token.rows]
  )
  const header = React.useMemo(
    () =>
      token.header.map((val) => ({
        label: val?.text,
        tokens: val?.tokens,
        sx: { fontWeight: 800 },
      })),
    [token.header]
  )
  const table = (
    <CTable
      PaperProps={{ elevation: isExpandable ? 3 : 3, variant: 'elevation' }}
      disablePagination
      header={header}
      rows={rows}
      disableToolbar
    />
  )

  return (
    <Box p={1}>
      {isExpandable ? (
        <CAccordion content={table} summary={summaryLabel ? '- ' + summaryLabel : ''}></CAccordion>
      ) : (
        table
      )}
    </Box>
  )
}
