import React from 'react'
import { marked } from 'marked'

export const useLexer = (url: string) => {
  const [Tokens, setTokens] = React.useState<marked.Token[]>([])
  const [Headings, setHeadings] = React.useState<marked.Tokens.Heading[]>([])

  React.useEffect(() => {
    if (!url) return
    async function asyncFetchMd() {
      const tokens = await fetch(url)
        .then((response) => {
          return response.text()
        })
        .then((text) => marked.lexer(text))
        .then((tokens) => {
          let lastAddr = [0, 0, 0, 0, 0, 0]
          const addAddress = (depth: number) => {
            lastAddr[depth - 1]++
          }
          const resetAddress = (depth: number) => {
            lastAddr[depth - 1] = 0
          }
          const headingTokens = tokens.filter((token) => token?.type === 'heading') as marked.Tokens.Heading[]
          headingTokens?.forEach((token, idx) => {
            const prevItems = (headingTokens as marked.Tokens.Heading[])?.slice(0, idx).reverse()
            const lastParentRevIdx = prevItems?.findIndex((it) => it?.depth < token.depth)
            const lastParentIdx = lastParentRevIdx === -1 ? -1 : prevItems.length - 1 - lastParentRevIdx
            if (prevItems?.[0]?.depth > token.depth) {
              for (let i = token.depth + 1; i <= 6; i++) {
                resetAddress(i)
              }
            }
            addAddress(token.depth)
            const parent =
              (headingTokens as marked.Tokens.Heading[])?.[idx - 1]?.depth < token?.depth
                ? idx - 1
                : (headingTokens as marked.Tokens.Heading[])?.[idx - 1]?.depth === token?.depth
                ? (headingTokens as any)?.[idx - 1]?.parent
                : lastParentIdx !== -1
                ? lastParentIdx
                : undefined
            ;(token as any).parent = parent // return ({...item, parent: })
            ;(token as any).idx = idx
            ;(token as any).order = [...lastAddr]
          })
          return { headings: headingTokens, tokens: tokens }
        })

      if (tokens?.tokens) setTokens(tokens?.tokens as any)
      if (tokens?.headings) setHeadings(tokens?.headings)
    }
    asyncFetchMd()
  }, [url])
  return { tokens: Tokens, headings: Headings }
}
