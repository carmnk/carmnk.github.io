import React from 'react'
import { Box, Container, Stack, Typography, Link as MuiLink, useMediaQuery, useTheme, Divider } from '@mui/material'
import Icon from '@mdi/react'
import { DesignDivider } from '../Components/DesignDivider'
import { mdiAirplane, mdiBike, mdiGithub, mdiGoogleController, mdiLinkedin, mdiTrendingUp } from '@mdi/js'
import { navigateHashSkills } from '../utils/navigation'
import { CGrid } from '../Components/Basics/CGrid'

export const Skills = () => {
  const isDesktop = useMediaQuery('(min-width:600px)')
  const theme = useTheme()

  const headingColor = 'primary.main'
  const headerColor = theme?.palette?.mode === 'dark' ? 'primary.main' : 'text.primary'
  const textColor = theme?.palette?.mode === 'dark' ? '#fafafa' : 'text.primary'
  return (
    <Box>
      <Container sx={{ pt: 6, pb: 6 }}>
        <Typography
          variant={isDesktop ? 'h3' : 'h4'}
          component="div"
          color={headingColor}
          // sx={{  }}
          onClick={navigateHashSkills}
          sx={{ cursor: 'pointer', mb: 1, '&:hover': { textDecoration: 'underline' } }}
        >
          Profile
        </Typography>
        <Stack direction="row" sx={{ marginBottom: 2, gap: 2 }}>
          <div style={{ maxWidth: 800 }}>
            <Typography variant={isDesktop ? 'h4' : 'h5'} component="div" color={headingColor}>
              Carsten Menk
            </Typography>
            <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color={headingColor}>
              Diplom Wirtschaftsingenieur
            </Typography>
            <Typography variant={isDesktop ? 'body1' : 'body2'} component="div" color={textColor} sx={{ mb: 1 }}>
              (german diploma in industrial engineering)
            </Typography>
          </div>
          {/* <div>
            <img
              src="/profile2.jpg"
              style={{ borderRadius: '50%', border: '5px solid #009688', display: 'block' }}
              alt="Profile"
              width={isDesktop ? '96px' : '64px'}
            ></img>
          </div> */}
        </Stack>
        <div style={{ marginBottom: 16, maxWidth: '100%' }}>
          <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color={headingColor}>
            Experience
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'max-content auto', gap: 2 }}>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              Since 01/2022
            </Typography>
            <div>
              <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
                Freelancing Fullstack Developer
              </Typography>
              <Typography variant={'body2'} component="ul" color={textColor} sx={{ mb: 1, paddingInlineStart: '16px' }}>
                <Box component="li" mt={2}>
                  Frontend development: Webapp for managing business processes in a SME in the financial industry <br />
                  React/Typescript App connected to a Python Rest-API Backend,
                </Box>
                <Box component="li" mt={2}>
                  Fullstack development: Responsive Click-Flow-Website providing users informations about investment
                  strategies based on data input
                  <br />
                  React/Typescript App with minimal serverless Backend
                </Box>
              </Typography>
            </div>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              09/2021 – 12/2021
            </Typography>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              Open-Source (react-techchart project)
            </Typography>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              07/2019 - 09/2021
            </Typography>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              Sabbatical / Education
            </Typography>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              03/2016 - 06/2019
            </Typography>
            <div>
              <Typography variant={'body1'} component="span" color={textColor} sx={{ mb: 1 }}>
                Project Manager in automotive service industry
              </Typography>
              <Typography variant={'body2'} component="ul" color={textColor} sx={{ mb: 1, paddingInlineStart: '16px' }}>
                <Box component="li" mt={2}>
                  process engineering in body shop
                </Box>
                <Box component="li" mt={2}>
                  teams up to 10 employees
                </Box>
              </Typography>
            </div>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              01/2013 - 02/2016
            </Typography>
            {/* <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1, width: '100%' }}>
              Project Engineer in automotive service industry (process engineering)
            </Typography> */}
            <div>
              <Typography variant={'body1'} component="span" color={textColor} sx={{ mb: 1 }}>
                Project Engineer in automotive service industry
              </Typography>
              <Typography variant={'body2'} component="ul" color={textColor} sx={{ mb: 1, paddingInlineStart: '16px' }}>
                <Box component="li" mt={2}>
                  process engineering in body shop
                </Box>
              </Typography>
            </div>
          </Box>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color={headingColor}>
            Education
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'max-content auto', gap: 2 }}>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              10/2006 - 10/2012
            </Typography>
            <div>
              <Typography variant={'body1'} component="div" color={textColor} sx={{}}>
                Diploma in Industrial Engineering
              </Typography>
              <Typography variant={'body2'} component="div" color={textColor} sx={{ mb: 1 }}>
                (german national degree, comparable to master degree)
              </Typography>

              <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
                University of Siegen, Germany
              </Typography>
              <Typography variant={'body2'} component="div" color={textColor} sx={{ mb: 1 }}>
                Focus: Production Engineering and Controlling
              </Typography>
            </div>

            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              09/1997 - 09/2006
            </Typography>
            <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
              High School (German 'Abitur')
            </Typography>
          </Box>
        </div>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color="primary.main" sx={{ mb: 2 }}>
              Skills
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'max-content max-content auto',
                gap: '24px 16px',
                alignItems: 'center',
              }}
            >
              <Typography component="div" color={textColor}>
                React
              </Typography>
              {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
              <img src="/react-logo.png" width="40px" alt="React Logo" />
              <Box id="react-skill-bar" sx={{ transition: 'width 1s' }}>
                <div
                  style={{
                    border: '1px solid rgba(0,150,136,0.5)',
                    borderRadius: '50px',
                    padding: '0 8px',
                    background: theme.palette.primary.main,
                    height: 24,
                    // width: "90%",
                  }}
                >
                  <Typography textAlign="right" color="#fff">
                    expert
                  </Typography>
                </div>
              </Box>

              <Typography component="div" color={textColor}>
                Typescript
              </Typography>
              {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
              <img src="/ts-logo.png" width="40px" alt="Typescript Logo" />
              <Box id="ts-skill-bar" sx={{ transition: 'width 1s' }}>
                <div
                  style={{
                    border: '1px solid rgba(0,150,136,0.5)',
                    borderRadius: '50px',
                    padding: '0 8px',
                    background: theme.palette.primary.main,
                    height: 24,
                    // width: "90%",
                  }}
                >
                  <Typography textAlign="right" color="#fff">
                    proficient
                  </Typography>
                </div>
              </Box>

              <Typography component="div" color={textColor}>
                JavaScript
              </Typography>
              {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
              <img src="/js-logo.png" width="40px" alt="Javascript Logo" />
              <Box id="js-skill-bar" sx={{ transition: 'width 1s' }}>
                <div
                  style={{
                    border: '1px solid rgba(0,150,136,0.5)',
                    borderRadius: '50px',
                    padding: '0 8px',
                    background: theme.palette.primary.main,
                    height: 24,
                    // width: "95%",
                  }}
                >
                  <Typography textAlign="right" color="#fff">
                    proficient
                  </Typography>
                </div>
              </Box>

              <Typography component="div" color={textColor}>
                Testing / Jest
              </Typography>
              {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
              <img src="/jest.svg" width="40px" alt="Javascript Logo" />
              <Box id="jest-skill-bar" sx={{ transition: 'width 1s' }}>
                <div
                  style={{
                    border: '1px solid rgba(0,150,136,0.5)',
                    borderRadius: '50px',
                    padding: '0 8px',
                    background: theme.palette.primary.main,
                    height: 24,
                    // width: "95%",
                  }}
                >
                  <Typography textAlign="right" color="#fff">
                    competent
                  </Typography>
                </div>
              </Box>

              <Typography component="div" color={textColor}>
                Node.js
              </Typography>
              {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
              <img src="/node-logo.png" width="40px" alt="Node.js Logo" />
              <Box id="node-skill-bar" sx={{ transition: 'width 1s' }}>
                <div
                  style={{
                    border: '1px solid rgba(0,150,136,0.5)',
                    borderRadius: '50px',
                    padding: '0 8px',
                    background: theme.palette.primary.main,
                    height: 24,
                    // width: "85%",
                  }}
                >
                  <Typography textAlign="right" color="#fff">
                    proficient
                  </Typography>
                </div>
              </Box>

              <Typography component="div" color={textColor}>
                SQL/NoSQL
              </Typography>
              {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
              <img src="/sql-symbol.png" width="40px" alt="NoSQL/SQL icon" />
              <Box id="sql-skill-bar" sx={{ transition: 'width 1s' }}>
                <div
                  style={{
                    border: '1px solid rgba(0,150,136,0.5)',
                    borderRadius: '50px',
                    padding: '0 8px',
                    background: theme.palette.primary.main,
                    height: 24,
                    // width: "80%",
                  }}
                >
                  <Typography textAlign="right" color="#fff">
                    proficient
                  </Typography>
                </div>
              </Box>
            </Box>
          </Box>
          {/*  */}
          <Box sx={{ mb: 2 }}>
            <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color={headingColor} sx={{ mb: 2 }}>
              Languages
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'max-content auto',
                gap: '24px 16px',
                alignItems: 'center',
              }}
            >
              <Typography component="div" color={textColor}>
                German
              </Typography>
              <Box id="german-skill-bar" sx={{ transition: 'width 1s' }}>
                <div
                  style={{
                    border: '1px solid rgba(0,150,136,0.5)',
                    borderRadius: '50px',
                    padding: '0 8px',
                    background: theme.palette.primary.main,
                    height: '24px',
                    // width: "100%",
                    paddingRight: 16,
                  }}
                >
                  <Typography textAlign="right" color="#fff">
                    native
                  </Typography>
                </div>
              </Box>

              <Typography component="div" color={textColor}>
                English
              </Typography>
              <Box id="english-skill-bar" sx={{ transition: 'width 1s' }}>
                <div
                  style={{
                    boxSizing: 'content-box',
                    border: '1px solid rgba(0,150,136,0.5)',
                    borderRadius: '50px',
                    padding: '0 8px',
                    background: theme.palette.primary.main,
                    height: '24px',
                    // width: "95%",
                    paddingRight: 16,
                  }}
                >
                  <Typography textAlign="right" color="#fff">
                    proficient
                  </Typography>
                </div>
              </Box>
            </Box>
            <Typography
              variant={isDesktop ? 'h5' : 'h6'}
              component="div"
              color="primary.main"
              marginBottom="8px"
              marginTop="64px"
            >
              Interests
            </Typography>
            <Stack direction="row" gap={4} maxWidth={420} pt={2} justifyContent="center">
              <Icon
                path={mdiBike}
                size={'64px'}
                color={theme.palette.primary.main}
                className="fadein"
                style={{ transition: 'opacity 4s' }}
              ></Icon>
              <Icon
                className="fadein"
                path={mdiTrendingUp}
                size={'64px'}
                color={theme.palette.primary.main}
                style={{
                  borderLeft: '1px solid ' + theme.palette.primary.main,
                  borderBottom: '1px solid ' + theme.palette.primary.main,
                  transition: 'opacity 4s',
                }}
              ></Icon>
              <Icon
                className="fadein"
                path={mdiAirplane}
                size={'64px'}
                color={theme.palette.primary.main}
                style={{ transition: 'opacity 4s' }}
              ></Icon>
              <Icon
                className="fadein"
                path={mdiGoogleController}
                size={'64px'}
                color={theme.palette.primary.main}
                style={{ transition: 'opacity 4s' }}
              ></Icon>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant={isDesktop ? 'h5' : 'h6'}
            component="div"
            color="primary.main"
            marginBottom="8px"
            marginTop="32px"
          >
            Einige meiner Favoriten-Libraries
          </Typography>
          <Box className="slidein-left" position="relative" left="0%" sx={{ transition: 'left 2s' }}>
            <CGrid gap={4} pt={2} gridTemplateColumns="repeat(auto-fill, 72px)">
              <Stack justifyContent="center" alignItems="center">
                <img src="/cra.png" alt="CRA" width="40px" height="auto"></img>
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                <img
                  src={theme.palette.mode === 'dark' ? '/next_dark.png' : '/next.png'}
                  alt="Next.js"
                  width="48px"
                  height="auto"
                ></img>
              </Stack>
              <Stack justifyContent="center" alignItems="center" bgcolor="#f0f0f0" borderRadius="2px">
                <img src="/express.png" alt="Express" width="64px" height="auto"></img>
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                <img src="/eslint.png" alt="Eslint" width="40px" height="auto"></img>
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                <img src="/prettier.png" alt="Prettier" width="40px" height="auto"></img>
              </Stack>

              <Stack justifyContent="center" alignItems="center">
                <img
                  src={theme.palette.mode === 'dark' ? '/router.png' : '/router_light.png'}
                  alt="React Router Dom"
                  width="48px"
                  height="auto"
                ></img>
              </Stack>

              <Stack justifyContent="center" alignItems="center">
                <img src="/mui.png" alt="MUI" width="48px" height="auto"></img>
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                <img src="/redux.png" alt="Redux" width="48px" height="auto"></img>
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                <Box bgcolor="#f0f0f0" borderRadius={'2px'}>
                  <img src="/lodash.png" alt="Lodash" width="48px" height="auto"></img>
                </Box>
              </Stack>
            </CGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
