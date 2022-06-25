import React from 'react'
import { marked } from 'marked'
import { Chip, Link, Typography } from '@mui/material'
import uniqid from 'uniqid'
// import HTMLRenderer from "react-html-renderer";

export type InlineTokensProps = {
  token: marked.Tokens.Paragraph | marked.Tokens.ListItem | marked.Tokens.TableCell | marked.Tokens.Text
}
export const InlineTokens = (props: InlineTokensProps) => {
  const { token } = props

  const makeHtmlFromTokens = (rawTokens: marked.Token[]) => {
    let tempIdx = -3
    return rawTokens
      ?.map((val, idx, arr) => {
        const nextVal = arr?.[idx + 1]
        const next2Val = arr?.[idx + 2]
        const isHtmlElementStart = val?.type === 'html' && nextVal?.type === 'text' && next2Val?.type === 'html'
        if (isHtmlElementStart) tempIdx = idx
        return idx <= tempIdx + 2 && idx > tempIdx
          ? null
          : isHtmlElementStart
          ? { ...val, text: val?.text + nextVal?.text + next2Val?.text, raw: val?.raw + nextVal?.raw + next2Val?.raw }
          : val
      })
      ?.filter((val) => val !== null)
  }
  const tokens = makeHtmlFromTokens(token?.tokens ?? [])

  return (
    <React.Fragment>
      {tokens?.map((token) => {
        return token?.type === 'text' ? (
          <Typography component="span" key={uniqid()}>{`${token?.raw}`}</Typography>
        ) : token?.type === 'link' ? (
          <Link href={token.href} key={uniqid()}>{`${token?.text}`}</Link>
        ) : token?.type === 'codespan' ? (
          <Chip label={token?.raw?.replaceAll('`', '')} size="small" key={uniqid()} />
        ) : token?.type === 'strong' ? (
          <span style={{ fontWeight: 700 }} key={uniqid()}>
            {token?.text}
          </span>
        ) : token?.type === 'em' ? (
          <span style={{ fontStyle: 'italic' }} key={uniqid()}>
            {token?.text}
          </span>
        ) : token?.type === 'del' ? (
          <span style={{ textDecoration: 'line-through' }} key={uniqid()}>
            {token?.text}
          </span>
        ) : token?.type === 'image' ? (
          <img src={token?.href} alt={token?.text} key={uniqid()} />
        ) : token?.type === 'html' ? (
          <span dangerouslySetInnerHTML={{ __html: token?.text ?? '' }} key={uniqid()} />
        ) : null
      })}
    </React.Fragment>
  )
}
