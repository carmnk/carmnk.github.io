import {
  ListItemButtonProps,
  ListItemButton,
  BoxProps,
  alpha,
  ListItem,
  ListItemProps,
  Box,
  styled,
  useTheme,
} from '@mui/material'
import React from 'react'
import { SecondaryText } from '../basics/Typography'

const ActiveIndicator = styled(Box)<BoxProps & { minified?: boolean }>(({ minified }) => ({
  width: minified ? '2px' : '4px',
  height: 22,
  // background: active ? theme.palette.primary.main : 'transparent',
  borderRadius: '0px 5px 5px 0px;',
  //   marginRight: '13px',
  position: 'absolute',
  top: 11,
  left: 0,
}))

const CListItemButton = styled<
  React.JSXElementConstructor<
    ListItemButtonProps & { active: boolean; minified?: boolean; backgroundColor?: string; minifiedSize?: number }
  >
>(({ active, minified, backgroundColor, minifiedSize, ...rest }) => <ListItemButton {...rest} />)<
  BoxProps & { active: boolean }
>(({ theme, active, minified, backgroundColor, minifiedSize }) => ({
  padding: 0,
  gap: minified ? '12px' : '16px',
  display: 'flex',
  height: minifiedSize ?? 46,
  width: minifiedSize ?? 46,
  borderRadius: '5px',
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.1) : backgroundColor || 'transparent',
  ...(active
    ? {
        '&: hover': {
          textDecoration: 'none',
          backgroundColor: alpha(theme.palette.primary.main, 0.33),
        },
      }
    : backgroundColor
    ? {
        '&: hover': {
          textDecoration: 'none',
          backgroundColor: alpha(backgroundColor, 0.33),
        },
      }
    : {}),
}))

const CListItem = styled(ListItem)(() => ({
  padding: 0,
  marginTop: 16,
}))

export type SidePanelButtonProps = Omit<ListItemProps, 'value'> & {
  active: boolean
  icon: React.ReactNode
  label: React.ReactNode
  onNavigate?: (target: string) => void
  value: string
  disabled?: boolean
  minified?: boolean
  backgroundColor?: string
  minifiedSize?: number
}
export const SidePanelButton = (props: SidePanelButtonProps) => {
  const {
    active,
    icon,
    label,
    onNavigate,
    value,
    disabled,
    minified,
    backgroundColor,
    onClick,
    minifiedSize,
    ...rest
  } = props
  const theme = useTheme()

  const minifiedStyles = minified
    ? { minWidth: minifiedSize ?? 46, height: minifiedSize ?? 46, p: 0.5, pt: 0.5, mt: 0 }
    : {}

  const handleOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      if (disabled) return
      if (onNavigate) {
        onNavigate?.(value)
      } else {
        onClick?.(e)
      }
    },
    [value, onClick, onNavigate, disabled]
  )
  return (
    <CListItem {...(rest as any)} onClick={handleOnClick} sx={{ ...(rest?.sx ?? {}), ...minifiedStyles }}>
      <CListItemButton
        sx={{ position: 'relative', justifyContent: minified ? 'center' : 'flex-start' }}
        active={active && !disabled}
        disabled={disabled}
        minified={minified}
        backgroundColor={backgroundColor}
        minifiedSize={minifiedSize}
      >
        {active && (
          <ActiveIndicator sx={{ background: active && !disabled ? theme.palette.primary.main : 'transparent' }} />
        )}
        <Box sx={{ marginLeft: !minified ? '8px' : 0 }}>{icon}</Box>
        {!minified && (
          <Box>
            <SecondaryText color={'#212529'}>{label}</SecondaryText>
          </Box>
        )}
      </CListItemButton>
    </CListItem>
  )
}
