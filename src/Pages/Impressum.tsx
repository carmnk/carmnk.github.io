import { Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { CContainer } from '../Components/Basics/CContainer'

export const Impressum = () => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <CContainer
      maxWidth="md"
      paddingTop="48px"
      paddingBottom="24px"
      paddingRight={isNotMobile ? '16px' : '4px'}
      paddingLeft={isNotMobile ? '16px' : '4px'}
      position="relative"
      zIndex={1}
      className="title-curtain"
    >
      <Typography variant={isNotMobile ? 'h3' : 'h5'}>Carsten Menk</Typography>
      <Typography variant={isNotMobile ? 'h4' : 'h6'} color="text.primary">
        Diplom-Wirtschaftsingenieur
      </Typography>
      <br />
      <Typography>zum Bahnhof 31</Typography>
      <Typography>35510 Butzbach</Typography>
      <Typography>Deutschland</Typography>
      <Typography>Einzelunternehmer</Typography>
      <Typography>St-Nr.: 016 846 03181</Typography>
      <br />
      <Typography>
        E-mail:{' '}
        <Link href="mailto:kontakt@cmenk.online" color="text.primary">
          kontakt@cmenk.online
        </Link>
      </Typography>
    </CContainer>
  )
}
