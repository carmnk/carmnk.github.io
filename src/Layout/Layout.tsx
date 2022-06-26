import React from 'react'
import { Box, Fab, Stack, useTheme } from '@mui/material'
import { Footer } from '../Components/Footer'
// import { DrawerMenu } from '../future/DrawerMenu'
import { Navbar } from '../Components/Navbar'
import { useLocation } from 'react-router-dom'
import { Home } from '../Pages/Home'
import Icon from '@mdi/react'
import { mdiChevronUp } from '@mdi/js'
import { navigateHashTop } from '../utils/navigation'

export type LayoutProps = {
  onToggleTheme?: () => void
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { onToggleTheme } = props
  const theme = useTheme()
  const [MenuOpen, setMenuOpen] = React.useState(false)
  const location = useLocation()
  console.log(location)

  const openDrawer = React.useCallback(() => {
    setMenuOpen(true)
  }, [])
  const closeDrawer = React.useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <Stack
      top="0px"
      left="0px"
      position="fixed"
      width="100%"
      height="100%"
      bgcolor={theme.palette.mode === 'dark' ? 'rgb(29, 29, 29)' : '#f0f0f0'}
      overflow="auto"
      id="layoutRoot"
      className={theme.palette.mode === 'dark' ? 'dark-scrollbar' : 'light-scrollbar'}
    >
      <Navbar onOpenDrawer={openDrawer} onToggleTheme={onToggleTheme} />

      <Box height="calc(100% - 120px)" position="relative">
        {location?.pathname === '/' ? (
          <Home />
        ) : (
          <Box minHeight="calc(100% - 118px)" top="0px">
            {props.children}
          </Box>
        )}
        <Footer />
      </Box>
      {/* <DrawerMenu open={MenuOpen} onOpen={openDrawer} onClose={closeDrawer} toggleTheme={onToggleTheme}></DrawerMenu> */}
      
    </Stack>
  )
}
