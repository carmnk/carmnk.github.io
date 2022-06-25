import React from 'react'
import { Box } from '@mui/material'
import { HomeTitle } from '../Content/HomeTitle'
import { References } from '../Content/References'
import { Profile } from '../Content/Profile'
import { DesignDivider } from '../Components/DesignDivider'
import { navigateHashAbout, navigateHashPortfolio } from '../utils/navigation'
import { About } from '../Content/About'
import { Portfolio } from '../Content/Portfolio'
import { Skills } from '../Content/Skills'

export const Home = () => {
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
    </>
  )
}
