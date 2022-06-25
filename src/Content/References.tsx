import React from 'react'
import { Box, Stack, Typography, Link as MuiLink, useMediaQuery, Button, useTheme, styled } from '@mui/material'
import Icon from '@mdi/react'
import { mdiGithub, mdiNpm, mdiBookOpenBlankVariant } from '@mdi/js'
import { useNavigate } from 'react-router-dom'
import { CContainer } from '../Components/Basics/CContainer'
import { DarkButton } from '../Components/Basics/DarkButton'
import { CImg } from '../Components/Basics/CImg'
import { parseStringNewLines } from '../utils/format'

const defaultColor = '#333'

const OverlayBox = styled(Box)({
  '&:hover': {
    opacity: '0.75',
    background: 'rgba(0,0,0,0.75)',
  },
  opacity: 0,
  background: '#000',
  zIndex: 1,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  transition: 'opacity 0.6s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export type ReferenceProps = {
  projectTitle: string
  projectTitleHref?: string
  description: React.ReactNode
  imageSrc?: string
  overlayButtonLabel?: string
  overlayButtonOnClick?: () => any
  furtherDescription?: React.ReactNode
}

export const Reference = (props: ReferenceProps) => {
  const {
    projectTitle,
    projectTitleHref,
    description,
    imageSrc,
    overlayButtonLabel,
    overlayButtonOnClick,
    furtherDescription,
  } = props
  return (
    <>
      <Stack gap={2}>
        <Typography variant="h6" component="div">
          <MuiLink
            color={defaultColor}
            href={projectTitleHref ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            component={projectTitleHref ? 'a' : 'div'}
          >
            {projectTitle}
          </MuiLink>
        </Typography>

        <Box>
          <Typography variant="body1" component="div" color={defaultColor}>
            {description}
          </Typography>
        </Box>
      </Stack>
      {imageSrc && (
        <Stack direction="row" justifyContent="center" mt={2}>
          <Box p={2} maxWidth="800px">
            <Box position="relative">
              <CImg src={imageSrc} alt={projectTitle} width="100%" height="auto" />
              {overlayButtonLabel && (
                <OverlayBox>
                  <Box>
                    <Button variant="contained" onClick={overlayButtonOnClick}>
                      <Box p={2}>{overlayButtonLabel}</Box>
                    </Button>
                  </Box>
                </OverlayBox>
              )}
            </Box>
          </Box>
        </Stack>
      )}
      {furtherDescription}
    </>
  )
}

export const References = () => {
  const isDesktop = useMediaQuery('(min-width:600px)')
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Box sx={{ bgcolor: 'primary.main' }}>
        <CContainer paddingTop="16px" paddingBottom="64px">
          <Typography
            variant={isDesktop ? 'h3' : 'h5'}
            component="div"
            color={defaultColor}
            marginBottom="8px"
            onClick={() => {
              document?.getElementById?.('references-start')?.scrollIntoView({ behavior: 'smooth' })
            }}
            sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
          >
            Referenzen
          </Typography>

          <Box>
            <Reference
              projectTitle="Generisches Fullstack-Dashboard"
              // projectTitleHref="https://carmnk.github.io/react-techchart/"
              description={parseStringNewLines(`Ein tabellarisches Dashboard zum Datenmanagement - geeignet für IT-Systeme in KMU. Frontend und Backend sind hierbei effizient und flexibel aufeinander abgestimmt. Der systematische, generische Ansatz bietet sowohl in der Implementierung als auch bei Änderungswünschen Kostenvorteile. 
            Das Frontend ist eine React/Typescript-Webapp, welche via Rest API mit einem Node.js-Backend verbunden ist. Durch die gemeinsame Codebasis ist dieser Ansatz am schnellsten und kostengünstigsten darstellbar.\nAuf Wunsch können natürlich andere Technologien wie z.B. ein Python-basiertes Backend eingesetzt werden.`)}
              imageSrc="/dashboard.png"
              overlayButtonLabel="Live-Demo folgt demnächst"
            />
          </Box>
          <Reference
            projectTitle="react-techchart"
            projectTitleHref="https://carmnk.github.io/react-techchart/"
            description={parseStringNewLines(`Ein interactives Charting-Tool größtenteils von Grund auf konzipiert, in React/Typescript entwickelt und
                als Open Source Libary (MIT-Lizenz) veröffentlicht. Neben der Darstellung von Charts sind charttechnische Werkzeuge wie Indikatoren und Zeichenwerkzeuge verfügbar. Das Tool eignet sich zum Einsatz auf mobilen Geräten bishin zu Dektop-Computern. \nIn der Retrospektive war dieses Projekt der optimale Einstieg in die React-Frontend Entwicklung, da die Render-Logik aus Performance-Gründen sehr präzise kontrolliert werden muss.`)}
            imageSrc="/techchart.png"
            overlayButtonLabel="Besuchen Sie die Live-Demo"
            overlayButtonOnClick={() => {
              window?.open?.('https://carmnk.github.io/react-techchart/', '_blank', 'noopener')
            }}
            furtherDescription={
              <>
                <Typography variant="h6" component="div" color={defaultColor} sx={{ textAlign: 'center', pb: 2 }}>
                  Check out
                </Typography>
                <Stack direction="row" alignContent="center" alignItems="center" justifyContent="center" gap={2}>
                  <DarkButton
                    onClick={() => {
                      window?.open?.('https://carmnk.github.io/react-techchart/', '_blank', 'noopener')
                    }}
                    endIcon={
                      <Icon path={mdiBookOpenBlankVariant} size={'32px'} color={theme.palette.primary.main}></Icon>
                    }
                  >
                    Docs
                  </DarkButton>
                  <DarkButton
                    onClick={() => {
                      window?.open?.('https://github.com/carmnk/react-techchart', '_blank', 'noopener')
                    }}
                    endIcon={<Icon path={mdiGithub} size={'32px'} color={theme.palette.primary.main}></Icon>}
                  >
                    Github
                  </DarkButton>
                </Stack>
              </>
            }
          />
        </CContainer>
      </Box>
    </React.Fragment>
  )
}
