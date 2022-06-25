import { SwipeableDrawer, Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Paper, Stack, Typography, Chip, IconButton } from '@mui/material'
import { Icon } from '@mdi/react'
import {
  mdiLinkedin,
  mdiThemeLightDark,
  mdiGithub,
  mdiHome,
  mdiCodeJson,
  mdiEye,
  mdiClipboardAccountOutline,
} from '@mdi/js'
import { TreeItem, TreeView } from '@mui/lab'
import { useNavigate, useLocation } from 'react-router-dom'

export type DrawerMenuProps = {
  open: boolean
  onClose: () => void
  onOpen: () => void
  toggleTheme?: () => void
}
export const DrawerMenu: React.FC<DrawerMenuProps> = (props) => {
  const { open, onClose, onOpen, toggleTheme } = props

  const theme = useTheme()
  //   const isDesktop = useMediaQuery("(min-width:1260px)");
  //   const disableScrollLock = isDesktop ? {} : { disableScrollLock: true };
  const supportsTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || ((window as any)?.documentTouch && document instanceof (window as any)?.DocumentTouch))
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const navigate = useNavigate()
  const location = useLocation()
  const isDark = theme.palette.mode === 'dark'

  return (
    <SwipeableDrawer
      open={open}
      onOpen={onOpen}
      anchor="right"
      //   hideBackdrop={true}
      // onBackdropClick={() => {}}
      // BackdropProps={{}}
      //   hideBackdrop={isDesktop}
      //   variant={isDesktop ? "persistent" : "temporary"}
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        className: 'dark-scrollbar',
        sx: { maxWidth: 320, display: 'flex', height: '100%' },
        // onScroll: handleContentMenuScroll,
      }}
      disableDiscovery={isIOS || !supportsTouch}
      disableSwipeToOpen={isIOS || !supportsTouch}
      //   {...disableScrollLock}
      onClose={onClose}
      disableScrollLock
      disableRestoreFocus
    >
      <Paper
        square
        elevation={8}
        sx={{
          background: theme.palette.primary.main,
          p: 1,
          display: 'flex',
          gap: 1,
          justifyItems: 'flex-end',

          borderBottomLeftRadius: 12,
          // borderBottomRightRadius: 8,
          // borderRadius: 3
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Typography variant="h5" color="#fff" component="div" sx={{ pl: 1, pr: 1 }}>
            Carsten Menk
          </Typography>
          <Typography variant="h6" color="#fff" component="div" sx={{ pl: 1, pr: 1 }}>
            Fullstack Developer
          </Typography>
        </div>
      </Paper>

      <Stack title="drawer-content" sx={{ p: 2, pt: 3, flexGrow: 1 }}>
        <Stack direction="row" justifyContent="center">
          <img
            src="/profile2.jpg"
            style={{ borderRadius: '50%', border: '5px solid ' + theme.palette.primary.main, display: 'block' }}
            alt="Profile"
            // width={isDesktop ? "96px" : "64px"}
            width={96}
          />
        </Stack>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" gap={1} flexWrap="wrap">
            <Chip
              color="default"
              label={<Typography color={'text.primary'}>Web Solutions based on</Typography>}
              sx={{
                width: '100%',
                background: isDark ? 'rgba(255,255,255,0.16)' : 'rgba(0, 0, 0, 0.16);',
              }}
            ></Chip>
            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  Typescript
                </Typography>
              }
              clickable
              color="primary"
            ></Chip>
            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  React
                </Typography>
              }
              clickable
              color="primary"
            ></Chip>

            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  Node.js
                </Typography>
              }
              clickable
              color="primary"
            ></Chip>
            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  SQL
                </Typography>
              }
              clickable
              color="primary"
            ></Chip>
            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  NoSQL
                </Typography>
              }
              clickable
              color="primary"
            ></Chip>
            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  MongoDB
                </Typography>
              }
              clickable
              color="primary"
            ></Chip>

            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  HTML
                </Typography>
              }
              clickable
              color="primary"
              sx={{ background: theme.palette.primary.dark }}
            ></Chip>
            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  CSS
                </Typography>
              }
              clickable
              color="primary"
              sx={{ background: theme.palette.primary.dark }}
            ></Chip>
            <Chip
              label={
                <Typography variant="body2" color="#fff">
                  Javascript
                </Typography>
              }
              clickable
              color="primary"
              sx={{ background: theme.palette.primary.dark }}
            ></Chip>
          </Stack>
        </Box>
        <Box sx={{ pt: 3, p: 2 }}>
          <Chip
            label={<Typography>Navigation</Typography>}
            sx={{
              width: '100%',
              mb: 1,
              background: isDark ? 'rgba(255,255,255,0.16)' : 'rgba(0, 0, 0, 0.16);',
            }}
          ></Chip>
          <TreeView sx={{}}>
            <TreeItem
              nodeId="1a"
              label={
                <Typography variant="h6" color={isDark ? 'text.primary' : 'primary.dark'} component="div">
                  Home
                </Typography>
              }
              onClick={ () => {
                console.log(location)
                navigate?.('/')
                document.getElementById('menu-bar')?.scrollIntoView?.({ behavior: 'smooth' })
              }}
              icon={
                <div style={{ height: 36 }}>
                  <Icon
                    path={mdiHome}
                    size={'32px'}
                    style={{ marginRight: '8px' }}
                    color={theme.palette.primary.main}
                  ></Icon>
                </div>
              }
              sx={{ '& .MuiTreeItem-iconContainer': { width: 'auto' } }}
            ></TreeItem>
            {/* <TreeItem nodeId="1b" label="Title" /> */}
            <TreeItem
              nodeId="1c"
              label={
                <Typography variant="h6" color={isDark ? 'text.primary' : 'primary.dark'} component="div">
                  References
                </Typography>
              }
              icon={
                <div style={{ height: 36 }}>
                  <Icon
                    path={mdiEye}
                    size={'32px'}
                    style={{ marginRight: '8px' }}
                    color={theme.palette.primary.main}
                  ></Icon>
                </div>
              }
              sx={{ '& .MuiTreeItem-iconContainer': { width: 'auto' } }}
              onClick={ () => {
                navigate?.('/')
                document.getElementById('references-start')?.scrollIntoView?.({ behavior: 'smooth' })
              }}
            />
            <TreeItem
              nodeId="1d"
              label={
                <Typography variant="h6" color={isDark ? 'text.primary' : 'primary.dark'} component="div">
                  Profile
                </Typography>
              }
              icon={
                <div style={{ height: 36 }}>
                  <Icon
                    path={mdiClipboardAccountOutline}
                    size={'32px'}
                    style={{ marginRight: '8px' }}
                    color={theme.palette.primary.main}
                  ></Icon>
                </div>
              }
              sx={{ '& .MuiTreeItem-iconContainer': { width: 'auto' } }}
              onClick={ () => {
                navigate?.('/')
                document.getElementById('profile-start')?.scrollIntoView?.({ behavior: 'smooth' })
              }}
            />
            <TreeItem
              nodeId="2a"
              label={
                <Typography variant="h6" color={isDark ? 'text.primary' : 'primary.dark'} component="div">
                  Dev-Blog
                </Typography>
              }
              onClick={ () => {
                navigate?.('/devblog')
                document.getElementById('menu-bar')?.scrollIntoView?.({ behavior: 'smooth' })
              }}
              icon={
                <div style={{ height: 36 }}>
                  <Icon
                    path={mdiCodeJson}
                    size={'32px'}
                    style={{ marginRight: '4px', marginTop: 4 }}
                    color={theme.palette.primary.main}
                  />
                </div>
              }
              sx={{ '& .MuiTreeItem-iconContainer': { width: 'auto' } }}
            >
              {/* <TreeItem
                nodeId="2b"
                label="HTML"
                icon={
                  <div style={{ height: 32 }}>
                    <img
                      src="/html5-logo.svg"
                      width="28px"
                      height="28px"
                      alt="HTML Icon"
                      style={{ marginRight: "8px", marginTop: 2 }}
                    />
                  </div>
                }
                sx={{ height: 32, "& .MuiTreeItem-iconContainer": { width: "max-content" } }}
              />
              <TreeItem
                nodeId="2c"
                label="CSS"
                icon={
                  <div style={{ height: 32 }}>
                    <img
                      src="/css-logo.svg"
                      width="24px"
                      height="24px"
                      alt="HTML Icon"
                      style={{ marginRight: "8px", marginTop: 4 }}
                    />
                  </div>
                }
                sx={{ height: 32, "& .MuiTreeItem-iconContainer": { width: "max-content" } }}
              /> */}
            </TreeItem>
          </TreeView>
        </Box>
      </Stack>

      <Paper
        square
        elevation={8}
        sx={{
          background: theme.palette.primary.main,
          p: 1,
          display: 'flex',
          gap: 1,
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <IconButton
            size="small"
            onClick={() => {
              toggleTheme?.()
            }}
          >
            <Icon path={mdiThemeLightDark} size={'32px'} color={'#fff'}></Icon>
          </IconButton>
        </div>
        <IconButton
          size="small"
          onClick={() => {
            window?.open?.('https://www.linkedin.com/in/cmenk/', '_blank', 'noopener')
          }}
        >
          <Icon path={mdiLinkedin} size={'32px'} color={'#fff'}></Icon>
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            window?.open?.('https://github.com/carmnk', '_blank', 'noopener')
          }}
        >
          <Icon path={mdiGithub} size={'32px'} color={'#fff'}></Icon>
        </IconButton>
        <IconButton size="small" disableFocusRipple disableTouchRipple>
          <img src="/map-marker.svg" alt="marker icon" style={{ width: '32px', height: '32px', fill: 'red' }} />
        </IconButton>
      </Paper>
    </SwipeableDrawer>
  )
}
