import { Box, BoxProps, useTheme } from '@mui/material'
import React from 'react'
import { ScrollButton } from '../Layout/ScrollButton'

export type DesignDividerProps = {
  align?: 'top' | 'bottom'
  showScrollButton?: boolean
  ContainerProps?: BoxProps
  onScrollButtonClick?: () => void
}

export const DesignDivider: React.FC<DesignDividerProps> = (props) => {
  const { align, ContainerProps, showScrollButton, onScrollButtonClick } = props

  const theme = useTheme()
  const rectSecColorCss = {
    background: 'rgba(0,150,136,0.5)',
    display: 'inline-block',
  }
  const rectColorCss = {
    background: theme.palette.primary.main,
    display: 'inline-block',
  }

  const roundedBorder = align === 'bottom' ? { borderRadius: '2px 2px 0px 0px' } : { borderRadius: '0px 0px 2px 2px' }

  return (
    <Box style={{ position: 'relative', top: 0, left: 0, width: '100%' }} {...ContainerProps}>
      <Box style={{ display: 'flex', alignItems: align === 'bottom' ? 'flex-end' : 'flex-start', height: 60 }}>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '7%', height: 40 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '10%', height: 30 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '6%', height: 30 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '8%', height: 40 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '3%', height: 20 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '8%', height: 30 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '9%', height: 40 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '7%', height: 50 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '5%', height: 30 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '3%', height: 50 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '6%', height: 20 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '7%', height: 40 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '4%', height: 50 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '9%', height: 40 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '4%', height: 30 }}></Box>
        <Box style={{ ...rectSecColorCss, ...roundedBorder, width: '4%', height: 40 }}></Box>
      </Box>
      <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <Box style={{ display: 'flex', alignItems: align === 'bottom' ? 'flex-end' : 'flex-start', height: 60 }}>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '10%', height: 20 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '7%', height: 40 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '9%', height: 20 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '6%', height: 30 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '4%', height: 50 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '9%', height: 20 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '12%', height: 40, position: 'relative' }}>
            {showScrollButton && (
              <ScrollButton
                sx={{ position: 'absolute', top: align === 'bottom' ? 24 : -24, right: '25%' }}
                color="#333"
                onClick={onScrollButtonClick}
              />
            )}
          </Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '3%', height: 1 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '6%', height: 10 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '9%', height: 50 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '5%', height: 30 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '4%', height: 50 }}></Box>
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '14%', height: 30 }}></Box>
          {/* <div style={{ ...rectColorCss, ...roundedBorder, width: "6%", height: 30 }}></div> */}
          <Box style={{ ...rectColorCss, ...roundedBorder, width: '2%', height: 60 }}></Box>
        </Box>
      </Box>
      {props?.children && <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>{props.children}</Box>}
    </Box>
  )
}
