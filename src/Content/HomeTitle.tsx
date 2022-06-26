import { mdiLinkedin, mdiGithub, mdiEmail } from '@mdi/js'
import Icon from '@mdi/react'
import { Box, Stack, Typography, useMediaQuery, IconButton, useTheme, Tooltip } from '@mui/material'
import React from 'react'
import { CONTENT_DE } from '../CONTENT'
import { DesignDivider } from '../Components/DesignDivider'
import { parseStringNewLines } from '../utils/format'
import { CContainer } from '../Components/Basics/CContainer'
import { CImg } from '../Components/Basics/CImg'
import {
  navigateHashPortfolio,
  navigateToGithub,
  navigateToLinkedIn,
  navigateToXing,
  sendMail,
} from '../utils/navigation'
import { XingIcon } from '../assets/XingIcon'

const CONTENT = CONTENT_DE

export const HomeTitle = () => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up('sm'))
  const isMinTablet = useMediaQuery(theme.breakpoints.up('md'))

  const iconColor = theme.palette.primary.main
  const textColor = theme?.palette?.mode === 'dark' ? theme.palette.primary.main : theme.palette.text.primary

  // const [showTooltip, setShowtooltip] = React.useState(false)
  // const handleShowToolTip = React.useCallback(() => {
  //   setShowtooltip(true)
  // }, [])
  // const handleHideToolTip = React.useCallback(() => {
  //   setShowtooltip(false)
  // }, [])

  

  return (
    <>
      <Stack direction="row" minHeight="calc(100% - 118px)" alignItems="center">
        <CContainer
          maxWidth="md"
          paddingTop="24px"
          paddingBottom="24px"
          paddingRight={isNotMobile ? '16px' : '4px'}
          paddingLeft={isNotMobile ? '16px' : '4px'}
          position="relative"
          zIndex={1}
          className="title-curtain"
        >
          <Stack alignContent="center" justifyContent="center" justifyItems="center">
            <CImg src="/scheme.png" width="100%" height="100%" maxWidth="768px" alt="coding work sceme" />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="center" gap={isNotMobile ? '16px' : '4px'}>
            <Stack alignItems="center" gap="8px">
              <Stack width="126px" justifyContent="center" direction="row">
                <CImg
                  src="/profile2.jpg"
                  borderRadius="50%"
                  border={`5px solid ${theme.palette.primary.main}`}
                  display="block"
                  alt="Profile"
                  width={isNotMobile ? '96px' : '64px'}
                />
              </Stack>
              <div>
                <Tooltip title={<Typography variant="body2">Besuchen Sie mich auf LinkedIn</Typography>}>
                  <IconButton size="small" onClick={navigateToLinkedIn}>
                    <Icon
                      path={mdiLinkedin}
                      size={isMinTablet ? '40px' : '32px'}
                      color={theme.palette.primary.main}
                    ></Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title={<Typography variant="body2">Besuchen Sie mich auf Xing</Typography>}>
                  <IconButton size="small" onClick={navigateToXing}>
                    <XingIcon
                      color={theme.palette.primary.main}
                      width={isMinTablet ? '34px' : '28px'}
                      height={isMinTablet ? '34px' : '28px'}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title={<Typography variant="body2">Schreiben Sie mir eine E-Mail</Typography>}>
                  <IconButton size="small" onClick={sendMail}>
                    <Icon
                      path={mdiEmail}
                      size={isMinTablet ? '40px' : '32px'}
                      color={theme.palette.primary.main}
                    ></Icon>
                  </IconButton>
                </Tooltip>
              </div>
            </Stack>
            <Box>
              <Typography variant={isNotMobile ? 'h3' : 'h5'} component="div">
                {parseStringNewLines(CONTENT.home.title)}
              </Typography>
              <Typography variant={isNotMobile ? 'h6' : 'body1'} component="div" paddingTop="16px" color={textColor}>
                {parseStringNewLines(CONTENT.home.subtitle)}
              </Typography>
              <Typography variant={isNotMobile ? 'body1' : 'body2'} component="div" color={textColor}>
                {parseStringNewLines(CONTENT.home.subtitle2)}
              </Typography>
            </Box>
          </Stack>
        </CContainer>
      </Stack>
      {/* {children} */}
    </>
  )
}
