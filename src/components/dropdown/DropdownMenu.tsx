import { Menu } from '@mui/material'
import React from 'react'

export type DropdownMenuProps = {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: () => void
}

export const DropdownMenu = (props: React.PropsWithChildren<DropdownMenuProps>) => {
  const { children, anchorEl, onClose, open } = props

  return (
    <Menu
      open={!!open}
      anchorEl={anchorEl || undefined}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      // classes={{ list: 'pt-0' }}
      MenuListProps={{ sx: { pt: 0, pb: 0 } }}
      PaperProps={{ sx: { borderRadius: '10px' } }}
    >
      {children}
    </Menu>
  )
}