import React from 'react'
import { Box, BoxProps, useTheme } from '@mui/material'

export type CategoryFilterButtonProps = BoxProps<'button'> & {
  name?: string
  children: React.ReactNode
  active: boolean
  //   onClick?: (e: an) => void
}
export const CategoryFilterButton = (props: CategoryFilterButtonProps) => {
  const { children, active, onClick, ...rest } = props
  const theme = useTheme()

  return (
    <Box
      component="button"
      color={active ? theme.palette.primary.main : undefined}
      fontWeight={active ? 900 : 400}
      mr="27px"
      onClick={onClick}
      {...rest}
    >
      {children}
    </Box>
  )
}
