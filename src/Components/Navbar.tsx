import React from 'react'
import { Paper, Button, Typography, styled, Stack } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiMenu, mdiThemeLightDark } from '@mdi/js'
import { DesignDivider } from './DesignDivider'
import { Box } from '@mui/system'

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'
  // forcing scrollbar to appear
  ;(outer.style as any).msOverflowStyle = 'scrollbar' // needed for WinJS apps
  document.body.appendChild(outer)

  // Creating inner element and placing it in the container
  const inner = document.createElement('div')
  outer.appendChild(inner)

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  // Removing temporary elements from the DOM
  outer?.parentNode?.removeChild?.(outer)

  return scrollbarWidth
}
const scrollbarWidth = getScrollbarWidth()
console.log(scrollbarWidth)

export type MenuProps = {
  onToggleTheme?: () => void
  onOpenDrawer: () => void
}

export const Navbar = (props: MenuProps) => {
  const { onOpenDrawer, onToggleTheme } = props
  const location = useLocation()
  const isDevBlog = location?.pathname === '/devblog'

  return (
    <>
      <div title="menu-container" style={{ position: 'relative', top: 0, left: 0, zIndex: 1000 }}>
        {/** ContentMenu without squre styles **/}
        <ContentMenuContainer
          square
          id="menu-bar" // bookmark to page's top
        >
          {/* div-Container allowing overfloating in square styles  */}
          <ContentMenuTitle>
            {/* Home Link */}
            <LinkUndecorated to="/">
              <img src="/logo_noborder.png" alt="Logo" width="56px" height="56px" />
            </LinkUndecorated>
            {/* Link  to Devblog if current location is /devblog*/}
            {isDevBlog && (
              <LinkUndecorated to="/devblog">
                <Typography component="div" variant="h3" color="#333333" lineHeight="56px">
                  's Devblog
                </Typography>
              </LinkUndecorated>
            )}
          </ContentMenuTitle>
          {/* Action Buttons */}
          <ContentMenuActionContainer>
            <MenuButton variant="contained" onClick={onToggleTheme}>
              <Icon path={mdiThemeLightDark} size={1.5} />
            </MenuButton>
            <MenuButton variant="contained" onClick={onOpenDrawer}>
              <Icon path={mdiMenu} size={1.5} />
            </MenuButton>
          </ContentMenuActionContainer>
        </ContentMenuContainer>
        {/* DesignDivider (rect styles) */}
        <DesignDivider />
      </div>

      {/* <HiddenContentMenuContainer
        square
        elevation={8}
        id="hidden-menu-bar" // bookmark to page's top
        // sx={{ mr: 8 }}
      
      >
        <Stack direction="row" width="calc(100% - 32px)" gap="8px">
          <ContentMenuTitle>
            <LinkUndecorated to="/">
              <img src="/logo_noborder.png" alt="Logo" width="48px" height="48px" />
            </LinkUndecorated>

            {isDevBlog && (
              <LinkUndecorated to="/devblog">
                <Typography component="div" variant="h3" color="#333333" lineHeight="56px">
                  's Devblog
                </Typography>
              </LinkUndecorated>
            )}
          </ContentMenuTitle>

          <div>
            <HiddenMenuButton variant="contained" onClick={onToggleTheme}>
              <Icon path={mdiThemeLightDark} size={'48px'} />
            </HiddenMenuButton>
            <HiddenMenuButton variant="contained" onClick={onOpenDrawer}>
              <Icon path={mdiMenu} size={1.5} />
            </HiddenMenuButton>
          </div>
        </Stack>
      </HiddenContentMenuContainer> */}
    </>
  )
}

/** styled Subelements */

const ContentMenuContainer = styled(Paper)(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '8px',
  display: 'flex',
  gap: '8px',
  position: 'relative',
  top: 0,
  left: 0,
}))

const ContentMenuTitle = styled('div')({
  flexGrow: 1,
  height: 44,
  overflowY: 'visible',
  zIndex: 1,
  display: 'flex',
})
const ContentMenuActionContainer = styled('div')({
  height: 44,
  overflowY: 'visible',
  zIndex: 1,
  display: 'flex',
})

const MenuButton = styled(Button)(({ theme }) => ({
  width: 44,
  height: 44,
  padding: '4px',
  marginLeft: '8px',
  marginTop: '6px',
  minWidth: 0,
  borderRadius: '4px',
  backgroundColor: '#424242',
  '&:hover': { bgcolor: theme.palette.primary.dark },
}))

const LinkUndecorated = styled(Link)({ textDecoration: 'none' })

const HiddenContentMenuContainer = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: '8px',
  paddingTop: '4px',
  paddingBottom: '4px',
  // paddingRight: '64px',
  boxSizing: "border-box",
  position: 'fixed',
  top: 0,
  left: 0,
  // width: `calc(100% - ${32}px)`,
  zIndex: 1000,
  // overflow: 'hidden',
  // background: "#333",
}))
const HiddenMenuButton = styled(Button)(({ theme }) => ({
  width: 44,
  height: 44,
  padding: '4px',
  marginLeft: '8px',
  // marginTop: '6px',
  minWidth: 0,
  borderRadius: '4px',
  backgroundColor: '#424242',
  '&:hover': { bgcolor: theme.palette.primary.dark },
}))
