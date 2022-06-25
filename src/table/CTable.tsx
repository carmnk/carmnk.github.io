import * as React from 'react'
import Table, { TableProps } from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { TableCellProps } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination, { TablePaginationProps } from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useMediaQuery, Paper, Checkbox, useTheme, PaperProps } from '@mui/material'
import { CTableHead } from './CTableHead'
import { CTableToolbar } from './CTableToolbar'

export type OrderType = 'asc' | 'desc' | 'none'
export type FilterDetailsType = {
  filterCol: number
  filterType: number
  filterVal: string
  filterCaseSensitive: boolean
}
export type FilterType = (FilterDetailsType & { fn: (val: (number | string)[]) => boolean }) | undefined

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order: OrderType, orderBy: any): (a: any, b: any) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

const getRequestedFilter = (requestedFilter: FilterDetailsType): FilterType | null => {
  if (!requestedFilter) return null
  const { filterVal, ...otherFilterDetails } = requestedFilter
  const filterValCase = requestedFilter.filterCaseSensitive ? filterVal : filterVal.toLowerCase()

  const getFilterColString = (filterColumnVal: string | number) =>
    typeof filterColumnVal !== 'string'
      ? null
      : requestedFilter.filterCaseSensitive
      ? filterColumnVal
      : filterColumnVal.toLowerCase()

  return {
    ...otherFilterDetails,
    filterVal: filterValCase,
    fn:
      requestedFilter.filterType === 5
        ? (val: (number | string)[]) => val[requestedFilter.filterCol] > parseFloat(requestedFilter.filterVal)
        : requestedFilter.filterType === 15
        ? (val: (number | string)[]) => val[requestedFilter.filterCol] >= parseFloat(requestedFilter.filterVal)
        : requestedFilter.filterType === 25
        ? (val: (number | string)[]) => val[requestedFilter.filterCol] === parseFloat(requestedFilter.filterVal)
        : requestedFilter.filterType === 35
        ? (val: (number | string)[]) => val[requestedFilter.filterCol] < parseFloat(requestedFilter.filterVal)
        : requestedFilter.filterType === 45
        ? (val: (number | string)[]) => val[requestedFilter.filterCol] <= parseFloat(requestedFilter.filterVal)
        : requestedFilter.filterType === 10
        ? (val: (number | string)[]) => {
            const filterColVal = getFilterColString(val[requestedFilter.filterCol])
            return !filterColVal ? false : filterColVal === filterValCase
          }
        : requestedFilter?.filterType === 20
        ? (val: (number | string)[]) => {
            const filterColVal = getFilterColString(val[requestedFilter.filterCol])
            return !filterColVal ? false : filterColVal.startsWith(filterValCase)
          }
        : requestedFilter?.filterType === 30
        ? (val: (number | string)[]) => {
            const filterColVal = getFilterColString(val[requestedFilter.filterCol])
            return !filterColVal ? false : filterColVal.endsWith(filterValCase)
          }
        : requestedFilter?.filterType === 40
        ? (val: (number | string)[]) => {
            const filterColVal = getFilterColString(val[requestedFilter.filterCol])
            return !filterColVal ? false : filterColVal.includes(filterValCase)
          }
        : () => false,
  }
}

export type CTableProps = {
  rows: (string | number | React.ReactNode)[][]
  header: (TableCellProps & { label: string; isNumeric?: boolean; width?: React.CSSProperties['width'] })[]
  selectableRows?: boolean
  TableProps?: TableProps
  TablePaginationProps?: TablePaginationProps
  title?: React.ReactNode
  disableToolbar?: boolean
  disablePagination?: boolean
  stickyHeader?: boolean
  size?: TableProps['size']
  PaperProps?: PaperProps
}

export default function CTable(props: CTableProps) {
  const {
    header,
    rows,
    selectableRows,
    TablePaginationProps,
    TableProps,
    title,
    disableToolbar,
    disablePagination,
    stickyHeader,
    size,
    PaperProps,
  } = props

  const theme = useTheme()
  const hasFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const [Order, setOrder] = React.useState<OrderType>('none')
  const [OrderBy, setOrderBy] = React.useState<any>()
  const [Selected, setSelected] = React.useState<string[]>([])
  const [Page, setPage] = React.useState(0)
  const [RowsPerPage, setRowsPerPage] = React.useState(5)
  const [Filter, setFilter] = React.useState<FilterType>(undefined)

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = OrderBy === property && Order === 'asc'
    const isDesc = OrderBy === property && Order === 'desc'
    setOrder(isAsc ? 'desc' : isDesc ? 'none' : 'asc')
    setOrderBy(property)
  }

  // console.log(header, rows)

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n, idx) => idx.toString() as string)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = Selected.indexOf(name)
    let newSelected: string[] = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(Selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(Selected.slice(1))
    } else if (selectedIndex === Selected.length - 1) {
      newSelected = newSelected.concat(Selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(Selected.slice(0, selectedIndex), Selected.slice(selectedIndex + 1))
    }
    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (name: string) => Selected.indexOf(name) !== -1
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = Page > 0 ? Math.max(0, (1 + Page) * RowsPerPage - rows.length) : 0

  const preprocessRows = (rowsRaw: (string | number)[][]) => {
    const filteredRows = !!Filter ? rowsRaw.filter(Filter.fn) : rowsRaw
    const sortedRows = Order !== 'none' ? [...filteredRows].sort(getComparator(Order, OrderBy)) : filteredRows
    const paginatedRows = !disablePagination
      ? sortedRows.slice(Page * RowsPerPage, Page * RowsPerPage + RowsPerPage)
      : sortedRows
    return paginatedRows
  }

  const mouseHoverProps = hasFinePointer
    ? ({
        '&:hover': {
          backgroundColor: theme.palette.grey.A400 + ' !important', //theme.palette.secondary.light + " !important",
        },
      } as TableCellProps['sx'])
    : {}

  const handleFilterRequest = (requestedFilter: FilterDetailsType) => {
    if (!requestedFilter) return
    const filter = getRequestedFilter(requestedFilter)
    if (!filter) return
    setFilter(() => filter)
  }

  const handleFilterReset = () => {
    setFilter(undefined)
  }

  return (
    <Paper
      {...PaperProps}
      sx={{ width: '100%', maxHeight: '100%', overflow: 'hidden', boxSizing: 'border-box', ...PaperProps?.sx }}
    >
      {!disableToolbar ? (
        <CTableToolbar
          numSelected={Selected.length}
          title={title}
          header={header}
          onFilterRequest={handleFilterRequest}
          onFilterResetRequest={handleFilterReset}
          activeFilter={Filter}
        />
      ) : null}
      <TableContainer
        sx={{ maxHeight: stickyHeader ? 500 : 'auto', position: 'relative', top: 0, boxSizing: 'border-box' }}
      >
        <Table
          sx={{ minWidth: 360, height: '100%', boxSizing: 'border-box' }}
          aria-labelledby="tableTitle"
          size={size}
          {...TableProps}
        >
          <CTableHead
            header={header}
            numSelected={Selected.length}
            order={Order}
            orderBy={OrderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            selectableRows={selectableRows}
            stickyHeader={stickyHeader}
          />
          <TableBody>
            {rows &&
              preprocessRows(rows as any[]).map((row, rowIdx) => {
                const isItemSelected = isSelected(rowIdx.toString())
                const labelId = `table-checkbox-${rowIdx}`

                return (
                  <TableRow
                    // hover
                    onClick={(event) => handleClick(event, rowIdx.toString())}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={`row-${rowIdx}`}
                    selected={isItemSelected}
                    sx={{ ...mouseHoverProps }}
                  >
                    {selectableRows ? (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                    ) : null}
                    {row.map((cell, cellIdx) => {
                      const rowHeaderProps =
                        cellIdx === 0 ? ({ component: 'th', scope: 'row' } as TableCellProps) : ({} as TableCellProps)
                      const alignedByHeaderProps = header[cellIdx].align ? { align: header[cellIdx].align } : {}
                      return (
                        <TableCell
                          key={`cell-${cellIdx}`}
                          id={labelId}
                          align={header[cellIdx].isNumeric ? 'right' : 'left'}
                          {...rowHeaderProps}
                          {...alignedByHeaderProps}
                        >
                          {cell}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (size === 'small' ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {!disablePagination ? (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={RowsPerPage}
          page={Page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          {...TablePaginationProps}
        />
      ) : null}
    </Paper>
  )
}
