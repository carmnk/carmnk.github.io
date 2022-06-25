import { Box, Typography } from '@mui/material'
import { marked } from 'marked'
import React from 'react'
import { InlineTokens } from '../utils/InlineTokens'

export type ParagraphProps = {
  token: marked.Tokens.Paragraph
}
export const Paragraph = (props: ParagraphProps) => {
  const { token } = props
  return (
    <Box pb={1}>
      <Typography component="div" variant="body1">
        <InlineTokens token={token} />
      </Typography>
    </Box>
  )
}
