import { Button, ButtonProps } from '@mui/material'
import React from 'react'

export const TextButton = (props: React.PropsWithChildren<Omit<ButtonProps, 'variant'>>) => {
  const { children, ...rest } = props
  return (
    <Button
      variant="text"
      {...rest}
      sx={{ textTransform: 'none', py: 0, px: 0, my: 0, minWidth: 0, ...(rest?.sx ?? {}) }}
    >
      {children}
    </Button>
  )
}
