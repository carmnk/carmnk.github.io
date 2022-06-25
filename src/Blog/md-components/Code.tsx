import React from 'react'
import { Box, Paper, useTheme } from '@mui/material'

import { Prism as CodeBlock } from 'react-syntax-highlighter'
import { vscDarkPlus, ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { marked } from 'marked'

export type CodeProps = {
  token: marked.Tokens.Code
}

export const Code = (props: CodeProps) => {
  const { token } = props
  const theme = useTheme()
  return (
    <Box p={1}>
      <Paper elevation={3} sx={{ background: '#333' }}>
        <CodeBlock
          language={token.lang}
          style={vscDarkPlus}
          customStyle={{ borderWidth: 0, backgroundColor: 'transparent', whiteSpace: 'pre-wrap' }}
          showLineNumbers
          wrapLines
        >
          {token.text}
        </CodeBlock>
      </Paper>
    </Box>
  )
}
