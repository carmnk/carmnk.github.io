import React from 'react'
import { Box, useTheme } from '@mui/material'
import { BoxProps } from '@mui/system'

export const ScrollButton = (props: BoxProps & { color?: string; onClick?: () => void }) => {
  //   const { BoxProps } = props;
  const theme = useTheme()
  return (
    <Box {...props}>
      <button
        onClick={props?.onClick}
        style={{
          cursor: 'pointer',
          background: 'transparent',
          borderWidth: 0,
          position: 'relative',
          zIndex: 2,
          display: 'inline-block',
          color: props?.color ?? '#000',
          font: "normal 400 20px/1 'Josefin Sans', sans-serif",
          letterSpacing: '.1em',
          textDecoration: 'none',
          transition: 'opacity .3s',
          width: 30,
          height: 50,
        }}
      >
        <Box
          component="span"
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '30px',
            height: '50px',
            marginLeft: '-15px',
            border: '2px solid ' + (props?.color ?? '#000'),
            borderRadius: '50px',
            boxSizing: 'border-box',
            background: '#333',
            '&::before': {
              position: 'absolute',
              top: '10px',
              left: '50%',
              content: "''",
              width: '6px',
              height: '6px',
              marginLeft: '-3px',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '100%',
              WebkitAnimation: 'sdb10 2s infinite',
              animation: 'sdb10 2s infinite',
              boxSizing: 'border-box',
            },
          }}
        ></Box>
      </button>
    </Box>
  )
}
