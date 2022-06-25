import React from 'react'
import { mdiTableOfContents } from '@mdi/js'
import {
  Backdrop,
  Container,
  Fab,
  Stack,
  Box,
  CircularProgress,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { Icon } from '@mdi/react'
import { ContentListDrawer } from '../Layout/Components/ContentListDrawer'
import { useLexer } from '../Blog/useLexer'
import { MdParser } from '../Blog/Renderer'

export type BlogProps = {
  path: string
}
export const Blog = (props: BlogProps) => {
  const { path } = props
  const { tokens: Tokens, headings } = useLexer(path)
  const [MenuOpen, setMenuOpen] = React.useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery('(min-width:1260px)')

  const navigateAnchors = (hash: string) => {
    if (!hash) return
    console.log(hash)
    const element = document.getElementById(hash)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return !Tokens ? null : (
    <Stack direction={'row'}>
      <Box
        sx={{
          width: MenuOpen && isDesktop ? 360 : 0,
          boxSizing: 'border-box',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      ></Box>
      <Container maxWidth="lg">
        {Tokens && <MdParser tokens={Tokens} headings={headings} />}

        <ContentListDrawer
          open={MenuOpen}
          headingTokens={headings}
          onClose={() => {
            setMenuOpen(false)
          }}
          onOpen={() => {
            setMenuOpen(true)
          }}
          navigate={navigateAnchors}
        />
        {(!isDesktop || !MenuOpen) && (
          <Fab aria-label="content" onClick={() => setMenuOpen(true)} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
            <Icon path={mdiTableOfContents} size={2} />
          </Fab>
        )}
      </Container>
    </Stack>
  )
}
