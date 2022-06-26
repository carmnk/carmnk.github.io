import React from 'react'
import { Box, Stack, Typography, Link as MuiLink, useMediaQuery, useTheme, Tooltip, IconButton } from '@mui/material'
import Icon from '@mdi/react'
import { useNavigate } from 'react-router-dom'
import { CContainer } from '../Components/Basics/CContainer'
import { mdiEmail, mdiGithub, mdiLinkedin, mdiMail } from '@mdi/js'
import { CImg } from '../Components/Basics/CImg'
import { navigateToGithub, navigateToLinkedIn, navigateToXing, sendMail } from '../utils/navigation'
import { XingIcon } from '../assets/XingIcon'

export const About = () => {
  const isDesktop = useMediaQuery('(min-width:600px)')
  const theme = useTheme()
  const navigate = useNavigate()
  const isMinTablet = useMediaQuery(theme.breakpoints.up('md'))

  const headerColor = theme.palette.mode === 'dark' ? '#333' : '#fafafa'
  const defaultColor = theme.palette.mode === 'dark' ? '#000' : '#fff'
  const buttonColor = theme.palette.mode === 'dark' ? "#222" : '#fff'
  const iconButtonSize = isMinTablet ? '40px' : '32px'
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: 'primary.main' }}>
        <CContainer paddingTop="16px" paddingBottom="64px">
          <Typography
            variant={isDesktop ? 'h3' : 'h5'}
            component="div"
            color={headerColor}
            marginBottom="8px"
            onClick={() => {
              document?.getElementById?.('about-start')?.scrollIntoView({ behavior: 'smooth' })
            }}
            sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
          >
            Über mich
          </Typography>
          <Typography color={headerColor} variant={isDesktop ? 'h5' : 'h6'}>
            Carsten Menk, <br />
            Ich bin freiberuflicher Web-Entwickler
          </Typography>

          {/* <Stack>
            <Box alignSelf="flex-start">
              <Typography color={defaultColor} paddingTop="12px">
                <ul>
                  <li>seit 2019 intensive Beschäftigung mit der Entwicklung von Webapps.</li>
                  <li> seit 01/2022 als freiberuflicher Entwickler.</li>
                  <li>React/Typescript im Frontend</li>
                  <li>Node.js (demnächst Python) im Backend</li>
                </ul>
              </Typography>
            </Box>
            <Box alignSelf="flex-end" width="50%">
              <Typography color={defaultColor} paddingTop="12px">
                <ul>
                  <li>Quereinsteiger aus Automobilindustrie</li>
                  <li>3 Jahre Prozessplaner im Karosseriebau</li>
                  <li>3 Jahre Projektleiter Prozessplanung</li>
                  <li>Erfahrung mit komplexen Systemen</li>
                </ul>
              </Typography>
            </Box>
            <Box alignSelf="flex-start">
              <Typography color={defaultColor} paddingTop="12px">
                <ul>
                  <li>Architekturansatz: effizienter, wiederverwendbares Baukastensystem</li>
                  <li>3 Jahre Prozessplaner im Karosseriebau</li>
                  <li>3 Jahre Projektleiter Prozessplanung</li>
                  <li>Erfahrung mit komplexen Systemen</li>
                </ul>
              </Typography>
            </Box>
          </Stack> */}

          <Typography color={defaultColor} paddingTop="12px">
            Ich beschäftige mich seit 2019 intensiv mit der Entwicklung von webbasierten Applikationen und biete meine
            Dienste seit Anfang 2022 als Freiberufler an. Im Frontend liegt meine Fokus auf{' '}
            <span style={{ textDecoration: 'underline' }}>React/Typescript</span> Apps. Backendsysteme biete ich aktuall
            auf Basis von <span style={{ textDecoration: 'underline' }}>Node.js und demnächst auch Python</span> an.
          </Typography>
          <Typography color={defaultColor} paddingTop="12px">
            Ich bin Quereinsteiger aus der Automobilindustrie. Dort war ich zunächst knapp 3 Jahre als Prozessplaner im
            Karosseriebau und anschließend weitere 3 Jahre als Projektleiter in der Prozessplanung beschäftigt. Durch
            diese Erfahrung weiß ich wie komplexe Systeme geplant und realisiert werden. Dieser
            analytische/systematische Ansatz hebt mich von anderen Entwicklern ab.
          </Typography>
          <Typography color={defaultColor} paddingTop="12px">
            Mein Architekturansatz besteht im Grunde darin ein{' '}
            <span style={{ textDecoration: 'underline' }}>Baukastensystem</span> aus Komponenten im Frontend (React)
            bzw. Modulen im Backend aufzubauen. Dabei wird das Gesamtsystem in sinnvoll, wiederverwendbare Teilsysteme zerlegt. Dies hat den Vorteil, dass wiederkehrende Elemente schnell und einfach wiederverwendet
            werden können und damit effizienter realisiert werden können. Erweiterungen und Änderungen sind auf diese
            Weise ebenfalls kostengünstiger darstellbar.
          </Typography>
          <Typography color={defaultColor} paddingTop="12px">
            Ich biete von der Konzeptionierung, der Implementierung, dem (automatischen) Testen sowie dem Deployment
            alle Prozessschritte an um Ihre Web-App zu Veröffentlichen.
          </Typography>

          <Stack pt="16px" direction="row">
            <Box flexGrow={1}>
              <Typography color={defaultColor} paddingTop="12px">
                Sie suchen einen fähigen Entwickler für Ihr Projekt? <br />
                Dann nehmen Sie gerne Kontakt mit mir auf.
              </Typography>

              {/* <Button
                sx={{
                  color: buttonColor,
                  background: '#333',
                  '&:hover': { background: '#222' },
                  minWidth: 100,
                  width: '220px',
                  marginTop: '16px',
                }}
                startIcon={<Icon path={mdiEmail} size={'32px'} color={buttonColor}></Icon>}
              >
                zum Mailformular
              </Button> */}
              <Stack direction="row" marginTop={2}>
                <Tooltip title={<Typography variant="body2">Besuchen Sie mich auf LinkedIn</Typography>}>
                  <IconButton size="small" onClick={navigateToLinkedIn}>
                    <Icon path={mdiLinkedin} size={iconButtonSize} color={buttonColor}></Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title={<Typography variant="body2">Besuchen Sie mich auf Xing</Typography>}>
                  <IconButton size="small" onClick={navigateToXing}>
                    <XingIcon
                      color={buttonColor}
                      width={isMinTablet ? '34px' : '28px'}
                      height={isMinTablet ? '34px' : '28px'}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title={<Typography variant="body2">Besuchen Sie mich auf Github</Typography>}>
                  <IconButton size="small" onClick={navigateToGithub}>
                    <Icon path={mdiGithub} size={iconButtonSize} color={buttonColor}></Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title={<Typography variant="body2">Schreiben Sie mir eine E-Mail</Typography>}>
                  <IconButton size="small" onClick={sendMail}>
                    <Icon path={mdiEmail} size={iconButtonSize} color={buttonColor}></Icon>
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
            <Box>
              <CImg
                src="/profile2.jpg"
                borderRadius="50%"
                border={`5px solid #333`}
                display="block"
                alt="Profile"
                width={isDesktop ? '96px' : '64px'}
              />
            </Box>
          </Stack>
        </CContainer>
      </Box>
    </React.Fragment>
  )
}
