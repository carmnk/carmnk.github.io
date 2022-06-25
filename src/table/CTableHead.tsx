import { TableCellProps, TableHead, TableRow, TableCell, Checkbox, TableSortLabel, Typography } from '@mui/material/'
import { Box } from '@mui/material/'
import { visuallyHidden } from '@mui/utils'
import React from 'react'
import { CTableProps, OrderType } from './CTable'

export type CTableHeadProps = {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: OrderType
  orderBy: number
  rowCount: number
  header: CTableProps['header']
  selectableRows?: boolean
  stickyHeader?: boolean
}

export const CTableHead = (props: CTableHeadProps) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    header,
    selectableRows,
    stickyHeader,
  } = props

  const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }
  const stickyHeaderProps = stickyHeader
    ? ({ position: 'sticky', top: 0, zIndex: 2, backgroundColor: 'primary.light' } as TableCellProps['sx']) //bgcolor: "primary.light"
    : {}

  return (
    <TableHead>
      <TableRow>
        {selectableRows ? (
          <TableCell
            padding="checkbox"
            // sx={{
            //   ...stickyHeaderProps,
            //   boxSizing: "border-box",
            // }}
          >
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all rows',
              }}
            />
          </TableCell>
        ) : null}
        {header.map((headCell, headerIdx) => {
          const { label, isNumeric, ...headerTableCellProps } = headCell
          return (
            <TableCell
              key={`header-${headCell.label}`}
              align={isNumeric ? 'right' : 'left'}
              sortDirection={orderBy === headerIdx && order !== 'none' ? order : false}
              // {...headerTableCellProps}
              // sx={{ ...stickyHeaderProps, ...headCell.sx, boxSizing: "border-box" as any } as any}
            >
              {/* <TableSortLabel
                active={orderBy === headerIdx && order !== "none"}
                direction={orderBy === headerIdx && order !== "none" && order ? order : "asc"}
                onClick={createSortHandler(headerIdx)}
              > */}
              <Typography variant="h6" component="span">
                {headCell.label}
              </Typography>
              {orderBy === headerIdx ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
              {/* </TableSortLabel> */}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}
