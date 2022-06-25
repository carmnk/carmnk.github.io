import { marked } from 'marked'

export const getHeadingOrderString = (
  item: marked.Tokens.Heading & {
    parent: number
    idx: number
    order: number[]
  }
) => {
  const itemOrder = item.order
    .slice(
      1,
      item.order.findIndex((or) => or === 0)
    )
    ?.join('.')
  return itemOrder
}
