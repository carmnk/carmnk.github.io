import React from 'react'
import { Box, Fab, useTheme } from '@mui/material'
import { HomeTitle } from '../Content/HomeTitle'
import { References } from '../Content/References'
import { Profile } from '../Content/Profile'
import { DesignDivider } from '../Components/DesignDivider'
import { navigateHashAbout, navigateHashPortfolio, navigateHashTop } from '../utils/navigation'
import { About } from '../Content/About'
import { Portfolio } from '../Content/Portfolio'
import { Skills } from '../Content/Skills'
import { useScrollAnimations } from '../utils/scroll-animation'
import Icon from '@mdi/react'
import { mdiChevronUp } from '@mdi/js'

export const Home = () => {
  useScrollAnimations()
  const theme = useTheme()
  return (
    <>
      <Box height="100%" id="home-start">
        <HomeTitle />

        <Box position="relative" top="0px" height="118px">
          <DesignDivider align="bottom" showScrollButton={true} onScrollButtonClick={navigateHashAbout} />
          <Box height="58px" bgcolor="primary.main" />
        </Box>
      </Box>

      <Box id="about-start">
        <About />
      </Box>
      <div style={{ position: 'relative', top: 0 }} id="portfolio-start">
        <DesignDivider align="top" />
      </div>
      <Portfolio />

      <Box position="relative" top="0px" height="118px" id="references-start">
        <DesignDivider align="bottom" />
        <Box height="58px" bgcolor="primary.main" />
      </Box>
      <Box>
        <References />
      </Box>
      <DesignDivider align="top" />
      <Box id="skills-start">
        <Skills />
      </Box>
      <Box color="#333">
        <Fab
          id="scroll-top-iconbutton"
          sx={{
            width: 48,
            height: 48,
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            opacity: 0,
            transition: 'opacity 1s',
            zIndex: 1000
          }}
          color={theme.palette.mode === 'dark' ? 'default' : ('grey' as any)}
          onClick={navigateHashTop}
        >
          <Icon path={mdiChevronUp}></Icon>
        </Fab>
      </Box>
    </>
  )
}
