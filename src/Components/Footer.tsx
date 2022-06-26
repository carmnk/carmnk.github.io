import { mdiLinkedin, mdiGithub, mdiEmail } from '@mdi/js'
import Icon from '@mdi/react'
import { Box, Stack, Container, Divider, Typography, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { CImg } from './Basics/CImg'
import { DesignDivider } from './DesignDivider'
import { XingIcon } from '../assets/XingIcon'
import { navigateToGithub, navigateToLinkedIn, navigateToXing, sendMail } from '../utils/navigation'
import { Link, useNavigate } from 'react-router-dom'

export const Footer = () => {
  const navigate = useNavigate()

  const routeToImpressum = () => {
    navigate('/impressum')
  }

  return (
    <div>
      <Box sx={{ position: 'relative', top: 0 }}>
        <DesignDivider align="bottom"></DesignDivider>
      </Box>
      <Box sx={{ bgcolor: 'primary.main', pb: 2 }}>
        <Container maxWidth="xs">
          <Stack direction="row" alignContent="center" alignItems="center" justifyContent="center" gap="8px">
            <Tooltip title={<Typography variant="body2">Besuchen Sie mich auf LinkedIn</Typography>}>
              <IconButton size="small" onClick={navigateToLinkedIn}>
                <Icon path={mdiLinkedin} size={'32px'} color="#333"></Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title={<Typography variant="body2">Besuchen Sie mich auf Xing</Typography>}>
              <IconButton size="small" onClick={navigateToXing}>
                <XingIcon color="#333" />
              </IconButton>
            </Tooltip>
            <Tooltip title={<Typography variant="body2">Besuchen Sie mich auf Github</Typography>}>
              <IconButton size="small" onClick={navigateToGithub}>
                <Icon path={mdiGithub} size={'32px'} color="#333"></Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title={<Typography variant="body2">Schreiben Sie mir eine E-Mail</Typography>}>
              <IconButton size="small" onClick={sendMail}>
                <Icon path={mdiEmail} size={'32px'} color="#333"></Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title={<Typography variant="body2">aus Deutschland</Typography>}>
              <IconButton size="small" onClick={routeToImpressum}>
                <CImg src="/map-marker.svg" alt="marker icon" width={'32px'} height={'32px'} />
              </IconButton>
            </Tooltip>
            <Stack direction="row" gap="16px">
              {/* <Divider orientation="vertical" flexItem sx={{ borderColor: 'black' }} />
              <Typography component="div" color="#222">
                Kontakt
              </Typography> */}
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'black' }} />
              <Typography component="span" color="#000">
                <Link to="/impressum" style={{ color: '#000' }}>
                  Impressum
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  )
}
