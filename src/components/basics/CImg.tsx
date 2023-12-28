import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'

export type CImgProps = Omit<BoxProps, 'component'>

export const CImg = (props: Omit<BoxProps<'img'>, 'component'>) => {
  const { children, ...restProps } = props
  return (
    <Box {...restProps} component="img">
      {children}
    </Box>
  )
}
