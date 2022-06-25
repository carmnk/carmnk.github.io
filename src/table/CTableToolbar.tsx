import React from 'react'
import { Toolbar, Typography, IconButton } from '@mui/material'
import { CTableProps, FilterType, FilterDetailsType } from './CTable'
import { FilterMenu } from './CFilterMenu'
import { Icon } from '@mdi/react'
import { mdiFilter } from '@mdi/js'

export type CTableToolbarProps = {
  numSelected: number
  title: CTableProps['title']
  header: CTableProps['header']
  onFilterRequest: (filterDetails: FilterDetailsType) => void
  onFilterResetRequest: () => void
  activeFilter: FilterType
}

export const CTableToolbar = (props: CTableToolbarProps) => {
  const { numSelected, title, header, onFilterRequest, activeFilter, onFilterResetRequest } = props
  const [AnchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1 },
        ...(numSelected > 0 && {
          // bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          bgcolor: 'primary.main',
        }),
      }}
    >
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
        {title}
      </Typography>
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : null}

      <IconButton onClick={handleClick}>
        <Icon path={mdiFilter} size={1} />
      </IconButton>
      <FilterMenu
        anchor={AnchorEl}
        onClose={handleClose}
        header={header}
        onFilterRequest={onFilterRequest}
        activeFilter={activeFilter}
        onFilterResetRequest={onFilterResetRequest}
      />
    </Toolbar>
  )
}
