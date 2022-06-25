import { marked } from 'marked'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { getHeadingOrderString } from '../utils/utils'

export type HeadingProps = {
  token: marked.Tokens.Heading & {
    parent: number
    idx: number
    order: number[]
  }
  navigate: (to: string) => void
}
type HeaderDepths = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const Heading = (props: HeadingProps) => {
  const { navigate, token } = props

  const itemOrder = getHeadingOrderString(token)
  return (
    <Button
      variant="text"
      sx={{ width: 'max-content', textTransform: 'none', userSelect: 'text' }}
      onClick={() => {
        navigate(token.text)
      }}
    >
      <Typography id={token.text} variant={('h' + token.depth) as HeaderDepths} color="primary.main">
        {itemOrder} {token.text}
      </Typography>
    </Button>
  )
}
