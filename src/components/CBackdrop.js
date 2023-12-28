import { Backdrop, CircularProgress, Portal } from '@mui/material'
import React from 'react'

const BackdropStyles = {
  color: '#fff',
  zIndex: (theme) => theme.zIndex.drawer + 10000,
}

export const CBackdrop = (props) => {
  const { open } = props
  return (
    <Portal>
      <Backdrop sx={BackdropStyles} open={open}>
        <CircularProgress color="primary" />
      </Backdrop>
    </Portal>
  )
}
