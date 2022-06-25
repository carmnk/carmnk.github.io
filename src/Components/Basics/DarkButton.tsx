import React from 'react'
import { styled, Button } from '@mui/material'

export const DarkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: '#333',
  '&:hover': { background: '#222' },
  minWidth: 100,
}))
