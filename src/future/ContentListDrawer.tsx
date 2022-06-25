import React from 'react'
import { Box, IconButton, Drawer, useMediaQuery, useTheme, Fab, Button, SwipeableDrawer } from '@mui/material'
import { Icon } from '@mdi/react'
import { mdiClose } from '@mdi/js'
import { marked } from 'marked'
import { ContentList } from '../Blog/ContentListRenderer'

export type DrawerMenuProps = {
  open: boolean
  onClose: () => void
  onOpen: () => void
  headingTokens: marked.Tokens.Heading[] | null
  navigate: (id: string) => void
}

export const ContentListDrawer = (props: DrawerMenuProps) => {
  const { open, onClose, headingTokens, navigate, onOpen } = props
  // const theme = useTheme();
  const [Selected, setSelected] = React.useState<string[]>([])
  const isDesktop = useMediaQuery('(min-width:1260px)')

  const navigatedHash = React.useRef('')
  const onNavigate = (hash: string) => {
    if (!hash) return
    navigatedHash.current = hash
    navigate(hash)
  }

  React.useEffect(() => {
    const onScroll = () => {
      const selectedTokens = headingTokens?.filter((htoken, hidx) => {
        const clientRect = document?.getElementById(htoken?.text)?.getBoundingClientRect() || null
        const top = clientRect?.top || null
        const nextToken = headingTokens?.[hidx + 1]
        const nextTop = nextToken
          ? document?.getElementById(nextToken?.text)?.getBoundingClientRect()?.top || clientRect?.bottom
          : window.innerHeight
        const isSelected = top && nextTop ? nextTop >= 0 && top < window.innerHeight : false
        if (isSelected) return true
        return false
      })
      const selected = selectedTokens?.map((htoken) => htoken.text) || []
      setSelected(selected)

      if (
        navigatedHash?.current &&
        Math.abs(document?.getElementById(navigatedHash?.current)?.getBoundingClientRect()?.top || 5) >= 5
      )
        return
      if (
        navigatedHash?.current &&
        Math.abs(document?.getElementById(navigatedHash?.current)?.getBoundingClientRect()?.top || 5) < 5
      )
        navigatedHash.current = ''

      if (selected.length) {
        const topSelected = document?.getElementById(`content-${selected?.[0]}`)?.getBoundingClientRect()?.top
        const bottomSelected = document
          ?.getElementById(`content-${selected?.[selected?.length - 1]}`)
          ?.getBoundingClientRect?.()?.bottom
        if ((topSelected && topSelected < 0) || (bottomSelected && bottomSelected > window?.innerHeight))
          document?.getElementById(`content-${selected?.[0]}`)?.scrollIntoView()
      }
    }
    onScroll?.()
    document?.getElementsByClassName('dark-scrollbar')?.[0]?.addEventListener('scroll', onScroll)

    return () => {
      document?.getElementsByClassName('dark-scrollbar')?.[0]?.removeEventListener('scroll', onScroll)
    }
  }, [headingTokens])

  const disableScrollLock = isDesktop ? {} : { disableScrollLock: true }
  const supportsTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || ((window as any)?.documentTouch && document instanceof (window as any)?.DocumentTouch))
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <SwipeableDrawer
      open={open}
      onOpen={onOpen}
      // anchor="right"
      hideBackdrop={isDesktop}
      variant={isDesktop ? 'persistent' : 'temporary'}
      PaperProps={{
        className: 'dark-scrollbar',
        sx: { maxWidth: 360 },
        // onScroll: handleContentMenuScroll,
      }}
      disableDiscovery={isIOS || !supportsTouch}
      disableSwipeToOpen={isIOS || !supportsTouch}
      {...disableScrollLock}
      onClose={onClose}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ position: 'sticky', top: '16px', zIndex: 1, height: 0 }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              pointerEvents: 'none',
            }}
          >
            <Button
              color="primary"
              variant="contained"
              sx={{ borderRadius: 200, m: 0, minWidth: 0, pointerEvents: 'auto', p: 1 }}
              onClick={onClose}
            >
              <Icon path={mdiClose} size={1}></Icon>
            </Button>
          </Box>
        </Box>
        {headingTokens && <ContentList tokens={headingTokens} navigate={onNavigate} selected={Selected} />}
      </Box>
    </SwipeableDrawer>
  )
}
