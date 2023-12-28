import * as React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { Button } from './Button'
import { mdiMenuDown } from '@mdi/js'
import { Tooltip } from '@mui/material'

const UntypedPopper = Popper as any

export type SplitButtonProps = {
  options: { label: string; onClick: () => void; icon?: React.ReactNode }[]
  menuDownIconColor?: string
  type?: string
  disabled?: boolean
  tooltip?: string
  name?: string
}

export default function SplitButton(props: SplitButtonProps) {
  const { options = [], menuDownIconColor, type, disabled, tooltip, name } = props
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleClick = React.useCallback(() => {
    options?.[selectedIndex]?.onClick?.()
  }, [options, selectedIndex])

  const handleMenuItemClick = React.useCallback((event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index)
    setOpen(false)
  }, [])

  const handleToggle = React.useCallback(() => {
    setOpen((prevOpen) => !prevOpen)
  }, [])

  const handleClose = React.useCallback((event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }, [])

  return (
    <React.Fragment>
      <Tooltip placement="top" arrow title={tooltip}>
        <ButtonGroup
          ref={anchorRef}
          aria-label="split button"
          sx={{ minWidth: 0, boxShadow: 'none', display: 'flex' }}
          disabled={disabled}
        >
          <Button onClick={handleClick} icon={options?.[selectedIndex]?.icon} type={type} disabled={disabled}>
            {options?.[selectedIndex]?.label}
          </Button>
          <Button
            size="small"
            type={type}
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            data-testid={name ? `${name}-split-selector` : undefined}
            aria-haspopup="menu"
            onClick={handleToggle}
            sx={{ position: 'flex', alignItems: 'center', justifyContent: 'center', py: 0, minWidth: '0 !important' }}
            disabled={disabled}
            icon={mdiMenuDown}
          />
        </ButtonGroup>
      </Tooltip>
      <UntypedPopper
        sx={{
          zIndex: 100,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }: any) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={index}
                      // disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option?.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </UntypedPopper>
    </React.Fragment>
  )
}
