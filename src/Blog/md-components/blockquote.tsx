import { useTheme } from '@mui/material'
import { marked } from 'marked'
import { Paper, Box, Typography } from '@mui/material'
import React from 'react'

export type BlockquoteProps = {
  token: marked.Tokens.Blockquote
}
export const Blockquote = (props: BlockquoteProps) => {
  const { token } = props
  const theme = useTheme()
  return (
    <Paper elevation={theme.palette.mode === 'light' ? 0 : 1}>
      <Box component="blockquote" sx={{ borderLeft: `4px solid ${theme.palette.grey.A400}`, pl: 2, m: 0 }}>
        <Typography>
          {token.text.split('\n').map((val, vidx, arr) => (
            <React.Fragment>
              {val}
              {vidx !== arr.length - 1 ? <br /> : null}
            </React.Fragment>
          ))}
        </Typography>
      </Box>
    </Paper>
  )
}
