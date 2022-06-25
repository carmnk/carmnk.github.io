import React from 'react'
import { ContainerProps, Container, styled, Box } from '@mui/material'

export type CContainerProps = ContainerProps &
  Partial<
    Pick<
      React.CSSProperties,
      | 'paddingTop'
      | 'paddingBottom'
      | 'marginTop'
      | 'marginBottom'
      | 'paddingRight'
      | 'paddingLeft'
      | 'position'
      | 'zIndex'
    >
  >

export const CContainer = styled((props: CContainerProps) => {
  const {
    paddingTop,
    paddingBottom,
    marginBottom,
    marginTop,
    paddingLeft,
    paddingRight,
    position,
    zIndex,
    children,
    ...restProps
  } = props
  return <Container {...restProps}>{children}</Container>
})<CContainerProps>(
  ({ paddingTop, paddingBottom, marginBottom, marginTop, paddingLeft, paddingRight, position, zIndex }) => ({
    paddingTop,
    paddingBottom,
    marginBottom,
    marginTop,
    paddingLeft,
    paddingRight,
    position,
    zIndex,
  })
)
