import React from 'react'
import { Box, Container, Stack, Typography, Link as MuiLink, useMediaQuery, useTheme, Divider } from '@mui/material'
import Icon from '@mdi/react'
import { DesignDivider } from '../Components/DesignDivider'
import { mdiAirplane, mdiBike, mdiGithub, mdiGoogleController, mdiLinkedin, mdiTrendingUp } from '@mdi/js'

export const Profile = () => {
  const isDesktop = useMediaQuery('(min-width:600px)')
  const theme = useTheme()

  const headingColor = 'primary.main'
  const textColor = theme?.palette?.mode === 'dark' ? 'primary.main' : 'text.primary'
  return (
    <React.Fragment>
      <div style={{ position: 'relative', top: 0 }} id="profile-start">
        <DesignDivider align="top" />
      </div>
      <Box sx={{}}>
        <Container sx={{ pt: 6, pb: 6 }}>
          <Typography
            variant={isDesktop ? 'h3' : 'h4'}
            component="div"
            color={headingColor}
            // sx={{  }}
            onClick={() => {
              document?.getElementById?.('profile-start')?.scrollIntoView({ behavior: 'smooth' })
            }}
            sx={{ cursor: 'pointer', mb: 1, '&:hover': { textDecoration: 'underline' } }}
          >
            Profile
          </Typography>
          {/* <Stack direction="row" sx={{ marginBottom: 2, gap: 2 }}>
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
            <div>
              <img
                src="/profile2.jpg"
                style={{ borderRadius: '50%', border: '5px solid #009688', display: 'block' }}
                alt="Profile"
                width={isDesktop ? '96px' : '64px'}
              ></img>
            </div>
          </Stack>
          <div style={{ marginBottom: 16, maxWidth: '100%' }}>
            <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color={headingColor}>
              Experience
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'max-content auto', gap: 2 }}>
              <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
                since 09/2021
              </Typography>
              <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
                react-techchart project
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
                  Project Manager in automotive service industry (process engineering, teams up to 10 employees)
                </Typography>
              </div>
              <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1 }}>
                01/2013 - 02/2016
              </Typography>
              <Typography variant={'body1'} component="div" color={textColor} sx={{ mb: 1, width: '100%' }}>
                Project Engineer in automotive service industry (process engineering)
              </Typography>
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
          </div> */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color="primary.main" sx={{ mb: 1 }}>
                Skills
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'max-content max-content auto',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <Typography component="div" color={textColor}>
                  Typescript
                </Typography>
                {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
                <img src="/ts-logo.png" width="32px" alt="Typescript Logo" />
                <Box sx={{ width: '90%' }}>
                  <div
                    style={{
                      border: '1px solid rgba(0,150,136,0.5)',
                      borderRadius: '50px',
                      padding: '0 8px',
                      background: theme.palette.primary.main,
                      height: 24,
                      // width: "90%",
                    }}
                  ></div>
                </Box>

                <Typography component="div" color={textColor}>
                  JavaScript
                </Typography>
                {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
                <img src="/js-logo.png" width="32px" alt="Javascript Logo" />
                <Box sx={{ width: '95%' }}>
                  <div
                    style={{
                      border: '1px solid rgba(0,150,136,0.5)',
                      borderRadius: '50px',
                      padding: '0 8px',
                      background: theme.palette.primary.main,
                      height: 24,
                      // width: "95%",
                    }}
                  ></div>
                </Box>

                <Typography component="div" color={textColor}>
                  React
                </Typography>
                {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
                <img src="/react-logo.png" width="32px" alt="React Logo" />
                <Box sx={{ width: '90%' }}>
                  <div
                    style={{
                      border: '1px solid rgba(0,150,136,0.5)',
                      borderRadius: '50px',
                      padding: '0 8px',
                      background: theme.palette.primary.main,
                      height: 24,
                      // width: "90%",
                    }}
                  ></div>
                </Box>

                <Typography component="div" color={textColor}>
                  Node.js
                </Typography>
                {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
                <img src="/node-logo.png" width="32px" alt="Node.js Logo" />
                <Box sx={{ width: '85%' }}>
                  <div
                    style={{
                      border: '1px solid rgba(0,150,136,0.5)',
                      borderRadius: '50px',
                      padding: '0 8px',
                      background: theme.palette.primary.main,
                      height: 24,
                      // width: "85%",
                    }}
                  ></div>
                </Box>

                <Typography component="div" color={textColor}>
                  SQL/NoSQL
                </Typography>
                {/* <Icon path={mdiLanguageTypescript} size={1} color={theme.palette.primary.main}></Icon> */}
                <img src="/sql-symbol.png" width="32px" alt="NoSQL/SQL icon" />
                <Box sx={{ width: '80%' }}>
                  <div
                    style={{
                      border: '1px solid rgba(0,150,136,0.5)',
                      borderRadius: '50px',
                      padding: '0 8px',
                      background: theme.palette.primary.main,
                      height: 24,
                      // width: "80%",
                    }}
                  ></div>
                </Box>
              </Box>
            </Box>
            {/*  */}
            <Box sx={{ mb: 2 }}>
              <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color={headingColor} sx={{ mb: 1 }}>
                Languages
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'max-content auto',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <Typography component="div" color={textColor}>
                  German
                </Typography>
                <Box>
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
                    <Typography sx={{ textAlign: 'right' }}>native</Typography>
                  </div>
                </Box>

                <Typography component="div" color={textColor}>
                  English
                </Typography>
                <Box sx={{ width: '90%' }}>
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
                    <Typography sx={{ textAlign: 'right' }}>proficient</Typography>
                  </div>
                </Box>
              </Box>
              <Typography variant={isDesktop ? 'h5' : 'h6'} component="div" color="primary.main" sx={{ mb: 1, mt: 4 }}>
                Interests
              </Typography>
              <Stack direction="row" sx={{ gap: 4, maxWidth: 400 }} justifyContent="center">
                <Icon path={mdiBike} size={'64px'} color={theme.palette.primary.main}></Icon>
                <Icon
                  path={mdiTrendingUp}
                  size={'64px'}
                  color={theme.palette.primary.main}
                  style={{
                    borderLeft: '1px solid ' + theme.palette.primary.main,
                    borderBottom: '1px solid ' + theme.palette.primary.main,
                  }}
                ></Icon>
                <Icon path={mdiAirplane} size={'64px'} color={theme.palette.primary.main}></Icon>
                <Icon path={mdiGoogleController} size={'64px'} color={theme.palette.primary.main}></Icon>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  )
}
