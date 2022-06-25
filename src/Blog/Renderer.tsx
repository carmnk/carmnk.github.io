import { Backdrop, Box, CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import { marked } from 'marked'
import { useTheme } from '@mui/material'
import { List } from './md-components/List'
import { Heading } from './md-components/Heading'
import { Code } from './md-components/Code'
import { Blockquote } from './md-components/blockquote'
import { Space } from './md-components/Space'
import { Table } from './md-components/Table'
import { Paragraph } from './md-components/Paragraph'

export type CMarkdownParserProps = {
  tokens: marked.Token[]
  headings: marked.Tokens.Heading[]
}

export const CMarkdownParser: React.FC<CMarkdownParserProps> = (props) => {
  const { tokens, headings } = props
  const theme = useTheme()
  // const [Loaded, setLoaded] = React.useState(false);

  const navigateAnchors = (hash: string) => {
    if (!hash) return
    console.log(hash)
    const element = document.getElementById(hash)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  console.log(tokens)

  return !tokens?.length || !headings?.length ? (
    <Backdrop open={true} invisible>
      <CircularProgress disableShrink />
      <Typography component="div">Loading</Typography>
    </Backdrop>
  ) : (
    <Stack sx={{ overflowX: 'hidden' }}>
      {tokens.map((token, tidx) => {
        const heading = (token?.type === 'heading' && headings?.find((heading) => heading.raw === token?.raw)) || null
        const remainingTokens = tokens.slice(tidx + 1)
        const lastCommentTokenIdx = remainingTokens.findIndex((val, idx, arr) => val?.type !== 'html')
        const commentTokens = lastCommentTokenIdx === -1 ? [] : remainingTokens.slice(0, lastCommentTokenIdx)
        const isExpandable = commentTokens.find((val) => val.raw.includes('expandable')) ? true : false
        const labeltag = commentTokens?.find((val) => val?.raw?.includes('label'))?.raw
        const clabeltag = commentTokens?.find((val) => val?.raw?.includes('collapsedLabel'))?.raw
        const elabeltag = commentTokens?.find((val) => val?.raw?.includes('expandedLabel'))?.raw
        // const varEnd = labeltag?.indexOf?.("-->") - 1
        const label = labeltag
          ? labeltag?.substring(labeltag?.indexOf?.('label') + 5 + 1, labeltag?.indexOf?.('-->') - 1)
          : clabeltag
          ? clabeltag?.substring(clabeltag?.indexOf?.('collapsedLabel') + 14 + 1, clabeltag?.indexOf?.('-->') - 1)
          : elabeltag
          ? elabeltag?.substring(elabeltag?.indexOf?.('expandedLabel') + 14 + 1, elabeltag?.indexOf?.('-->') - 1)
          : ''
        return token.type === 'heading' && heading ? (
          <Heading
            key={`token-no-${tidx}`}
            token={heading as any}
            navigate={() => {
              navigateAnchors(token.text)
            }}
          ></Heading>
        ) : token.type === 'paragraph' ? (
          <Paragraph token={token} key={`token-no-${tidx}`} />
        ) : token.type === 'code' ? (
          <Code token={token} key={`token-no-${tidx}`} />
        ) : token?.type === 'table' ? (
          <Table token={token} isExpandable={isExpandable} summaryLabel={label} key={`token-no-${tidx}`} />
        ) : token?.type === 'space' ? (
          <Space key={`token-no-${tidx}`} />
        ) : token?.type === 'list' ? (
          <List listToken={token} key={`token-no-${tidx}`}></List>
        ) : token?.type === 'blockquote' ? (
          <Blockquote token={token} key={`token-no-${tidx}`} />
        ) : token?.type === 'html' ? (
          <span dangerouslySetInnerHTML={{ __html: token?.text ?? '' }} key={`token-no-${tidx}`} />
        ) : (
          <Box key={`token-no-${tidx}`}>
            <Typography variant="h6" component="div" color="error.main">
              Not Supported Markdown-Element (type={token?.type || 'unknown'})
            </Typography>
            <Typography color="error.light">{token.raw}</Typography>
          </Box>
        )
      })}
    </Stack>
  )
}

export const MdParser = React.memo(CMarkdownParser)
