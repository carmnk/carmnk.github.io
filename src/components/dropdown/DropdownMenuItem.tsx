import React from 'react'
import { MenuItem, Tooltip, Stack, CircularProgress, useTheme, Divider } from '@mui/material'
import { SecondaryText } from '../basics/Typography'
import Icon from '@mdi/react'

export type DropDownMenuItemProps = {
  onClick: () => void
  tooltip?: React.ReactNode
  icon?: React.ReactNode
  id: string
  disabled?: boolean
  loading?: boolean
  label: string
}

export const SlimDivider = () => (
  <Divider sx={{ mt: '0px !important', mb: '0px !important' }} key={'menu-offer-divider'} />
)

export const DropdownMenuItem = (props: DropDownMenuItemProps) => {
  const { onClick, tooltip, id, icon, disabled, loading, label } = props
  const theme = useTheme()

  const handleOnClick = React.useCallback(() => {
    if (disabled || loading) return
    onClick()
  }, [disabled, loading, onClick])

  return (
    <>
      <MenuItem sx={{ height: 47 }} key={id} onClick={handleOnClick}>
        <Tooltip title={tooltip} placement="top" arrow>
          <Stack direction="row" justifyItems="center" alignItems="center" gap={2}>
            <Stack direction="row" alignItems="center" width={loading || icon ? '17px' : 0}>
              {loading ? (
                <CircularProgress color="inherit" size={17} />
              ) : typeof icon === 'string' ? (
                <Icon path={icon} size={'20px'} color={disabled ? theme.palette.action.disabled : '#212529'} />
              ) : (
                icon
              )}
            </Stack>

            <SecondaryText
              sx={{
                fontWeight: 700,
                color: disabled ? theme.palette.action.disabled : '#212529',
              }}
            >
              {label}
            </SecondaryText>
          </Stack>
        </Tooltip>
      </MenuItem>
      <SlimDivider />
    </>
  )
}
