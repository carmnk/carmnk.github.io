import React from 'react'
import { Tooltip, IconButton, Box, useTheme } from '@mui/material'
import Icon from '@mdi/react'

export type CIconButtonProps = {
  tooltip?: string
  onClick?: (any?: any) => void
  IconButtonSx?: any
  disableTabIndex?: boolean
  mdiIconPath: string
  color?: string
  disabled?: boolean
  iconTitle?: string
}

export const CIconButton = (props: CIconButtonProps) => {
  const { tooltip, onClick, IconButtonSx: sx, disableTabIndex = true, mdiIconPath, color, disabled, iconTitle } = props
  const theme = useTheme()
  const handleOnClick = React.useCallback(
    (e: any) => {
      if (disabled) return
      onClick?.(e)
    },
    [disabled, onClick]
  )

  return (
    <Tooltip title={tooltip ?? ''} placement="top" arrow>
      <div>
        <IconButton
          title={iconTitle}
          disabled={disabled}
          onClick={handleOnClick}
          sx={{ ...(sx ?? {}) }}
          tabIndex={disableTabIndex ? -1 : undefined}
        >
          <Box
            sx={{
              width: 18,
              height: 18,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Icon
              path={mdiIconPath}
              size={'18px'}
              color={color ?? (disabled ? theme.palette.action.disabled : theme.palette.primary.main)}
            />
          </Box>
        </IconButton>
      </div>
    </Tooltip>
  )
}
