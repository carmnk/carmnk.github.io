import React from 'react'
import {
  Typography,
  IconButton,
  Popover,
  ListItemButton,
  List,
  ListItemIcon,
  Box,
  Stack,
  Select,
  MenuItem,
  TextField,
  Button,
  Switch,
  SelectChangeEvent,
} from '@mui/material'
import { CTableProps, FilterType, FilterDetailsType } from './CTable'
import { Icon } from '@mdi/react'
import { mdiFilterOff } from '@mdi/js'
import { isNumericString } from './utils'

export type FilterMenuProps = {
  anchor: Element | ((element: Element) => Element) | null | undefined
  onClose: () => void
  header: CTableProps['header']
  onFilterRequest: (filterDetails: FilterDetailsType) => void
  onFilterResetRequest: () => void
  activeFilter: FilterType
}

export const FilterMenu = (props: FilterMenuProps) => {
  const { anchor, onClose, header, onFilterRequest, activeFilter, onFilterResetRequest } = props
  const [EditFilter, setEditFilter] = React.useState<
    Omit<FilterDetailsType, 'filterCol'> & {
      filterCol: number | undefined
    }
  >({ filterCol: undefined, filterType: 0, filterVal: '', filterCaseSensitive: false })
  const id = !!anchor ? 'filter-popover' : undefined // avoids collisions with other tables, backdrop should not be disables

  const handleToggleCaseSensitive = () => {
    setEditFilter((current) => ({ ...current, filterCaseSensitive: !current.filterCaseSensitive }))
  }

  const handleSelectFilterType = (e: SelectChangeEvent<number>, child: React.ReactNode) => {
    setEditFilter((current) => ({
      ...current,
      filterType: typeof e.target.value === 'string' ? parseFloat(e.target.value) : e.target.value,
    }))
  }

  const handleChangedFilterVal = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (typeof EditFilter.filterCol !== 'number') return
    if (header[EditFilter.filterCol].isNumeric) {
      const isNumeric = isNumericString(e.target.value)
      if (!isNumeric) return
      setEditFilter((current) => ({ ...current, filterVal: e.target.value }))
    } else {
      setEditFilter((current) => ({ ...current, filterVal: e.target.value }))
    }
  }

  const handleApplyFilter = () => {
    if (typeof EditFilter.filterCol === 'number' && EditFilter.filterType !== 0 && EditFilter.filterVal !== '') {
      onFilterRequest(EditFilter as FilterDetailsType)
    } else {
      if (typeof EditFilter.filterCol !== 'number') alert('ERROR - no filter column selected') //tsx, cannot occure
      if (EditFilter.filterType === 0) alert('Error - no filter type selected')
      if (EditFilter.filterVal === '') alert('Error - no filter value entered')
    }
  }

  const handleSelectFilterCol = (filterCol: number) => {
    setEditFilter((current) => ({
      filterCol: filterCol,
      filterType: activeFilter?.filterCol === filterCol ? activeFilter.filterType : 0,
      filterVal: activeFilter?.filterCol === filterCol ? activeFilter.filterVal : '',
      filterCaseSensitive: activeFilter?.filterCol === filterCol ? activeFilter.filterCaseSensitive : false,
    }))
  }

  const handleResetFilterRequest = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    onFilterResetRequest()
  }

  return (
    <Popover
      id={id}
      open={!!anchor}
      anchorEl={anchor}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Stack direction="row" boxSizing="border-box">
        {/** Set Filter type, left side, expands when column to filter is selected */}
        {typeof EditFilter.filterCol === 'number' && EditFilter.filterCol >= 0 ? (
          <Stack
            direction="column"
            flexGrow={1}
            width={300}
            boxSizing="border-box"
            borderRight="1px solid rgba(102, 102, 102, 0.3)"
          >
            <Typography component="div" p={2} variant="h6" noWrap>
              Set filter type
            </Typography>
            <Stack direction="row" p={2}>
              <Box flexGrow={1}>
                <Typography component="div" variant="subtitle1" noWrap>
                  {header[EditFilter.filterCol].label}
                </Typography>
                <Typography component="div" variant="subtitle1" noWrap>
                  type: {header[EditFilter.filterCol].isNumeric ? 'numeric' : 'text'}
                </Typography>
              </Box>
              {!header[EditFilter.filterCol].isNumeric ? (
                <Box>
                  <Typography component="div">case-sensitive</Typography>
                  <Switch value={EditFilter.filterCaseSensitive} onChange={handleToggleCaseSensitive} />
                </Box>
              ) : null}
            </Stack>
            <Box sx={{ p: 2 }}>
              <Select value={EditFilter.filterType} fullWidth onChange={handleSelectFilterType}>
                <MenuItem value={0}>select filter type</MenuItem>
                {header[EditFilter.filterCol].isNumeric
                  ? [
                      { value: 5, label: 'is greater than' },
                      { value: 15, label: 'is greater or equal than' },
                      { value: 25, label: 'is equal to' },
                      { value: 35, label: 'is smaller than' },
                      { value: 45, label: 'is smaller or equal than' },
                    ].map((item, itemidx) => (
                      <MenuItem key={`filtertype-${item.value}`} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))
                  : [
                      { value: 10, label: 'is equal' },
                      { value: 20, label: 'starts with' },
                      { value: 30, label: 'ends with' },
                      { value: 40, label: 'contains' },
                    ].map((item, itemidx) => (
                      <MenuItem key={`filtertype-${item.value}`} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
              </Select>
            </Box>
            {EditFilter.filterType !== 0 ? (
              <React.Fragment>
                <Typography component="div" pr={2} pl={2} noWrap>
                  enter value to match
                </Typography>
                <Box p={2}>
                  <TextField
                    fullWidth
                    value={EditFilter.filterVal}
                    error={typeof EditFilter.filterCol !== 'number' ? true : EditFilter.filterVal === '' ? true : false}
                    helperText={
                      typeof EditFilter.filterCol !== 'number'
                        ? 'ERROR - no filter column selected'
                        : header[EditFilter.filterCol].isNumeric
                        ? 'required, numbers and decimal dot only'
                        : 'required, any non-empty text'
                    }
                    onChange={handleChangedFilterVal}
                  />
                </Box>
                <Box p={2}>
                  <Button
                    variant="outlined"
                    disabled={
                      typeof EditFilter.filterCol !== 'number' ||
                      EditFilter.filterType === 0 ||
                      EditFilter.filterVal === ''
                    }
                    onClick={handleApplyFilter}
                  >
                    Apply Filter
                  </Button>
                </Box>
              </React.Fragment>
            ) : null}
          </Stack>
        ) : null}

        {/** Select column to filter, right side */}
        <Box width="max-content" flexGrow={0}>
          <Typography component="div" variant="h6" p={2} noWrap>
            Select column to filter
          </Typography>
          <List sx={{ maxHeight: 440 }}>
            {header.map((headerCell, headerCellIdx) => {
              return (
                <ListItemButton
                  key={`list-${headerCellIdx}`}
                  sx={{ p: 2, display: 'flex', height: 24, boxSizing: 'content-box' }}
                  component="div"
                  onClick={() => handleSelectFilterCol(headerCellIdx)}
                >
                  <ListItemIcon onClick={handleResetFilterRequest}>
                    {[activeFilter?.filterCol].includes(headerCellIdx) ? (
                      <IconButton>
                        <Icon path={mdiFilterOff} size={0.85} />
                      </IconButton>
                    ) : null}
                  </ListItemIcon>
                  {headerCell.label}
                  {/* future -> multiple filter
                   {[activeFilter?.filterCol].includes(headerCellIdx) ? (
                    <Box sx={{ flexGrow: 1, textAlign: "right" }}>
                      <IconButton
                        color="primary"
                        sx={{ p: 0, width: 24, height: 24, border: `1px solid ${theme.palette.primary.main}` }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Typography variant="button">{[activeFilter?.filterCol].indexOf(headerCellIdx) + 1}</Typography>
                      </IconButton>
                    </Box>
                  ) : null} */}
                </ListItemButton>
              )
            })}
          </List>
        </Box>
      </Stack>
    </Popover>
  )
}
