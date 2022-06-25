import { Icon } from '@mdi/react'
import { mdiArrowDecisionOutline, mdiCloud } from '@mdi/js'
import {
  Container,
  Stack,
  Box,
  Typography,
  Button,
  Divider,
  ButtonProps,
  ListItem,
  List,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export type BigTopicButtonProps = {
  imageSrc?: string
  label: string
  color: string
  onClick?: ButtonProps['onClick']
  height?: number
  icon?: React.ReactNode
  background?: string
}
export const BigTopicButton = (props: BigTopicButtonProps) => {
  const { imageSrc, color, label, onClick, height = 250, icon, background = 'transparent' } = props
  const theme = useTheme()
  return (
    <Button
      color="inherit"
      sx={{
        color: color,
        display: 'block',
        // border: "4px solid " + color,
        boxShadow: theme.shadows[3],
        borderRadius: 10,
        height: '100%',
        background: background,
        p: 1,
        textTransform: 'none',
      }}
      onClick={onClick}
    >
      <Typography
        variant="h5"
        color={color}
        component="div"
        sx={{ textAlign: 'center', lineHeight: 1.25, position: 'relative' }}
      >
        {label}
      </Typography>
      <Stack direction="row" sx={{ gap: 0.5, pt: 1 }}>
        {icon ? icon : <img src={imageSrc} alt="React Logo" height={height - 96} />}
        <List sx={{ p: 0 }}>
          <ListItem sx={{ p: 0 }}>
            <Typography component="span" color="text.primary">
              - Motivation
            </Typography>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <Typography component="span" color="text.primary">
              - Available Frameworks
            </Typography>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <Typography component="span" color="text.primary">
              - Layout example
            </Typography>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <Typography component="span" color="text.primary">
              - Summary
            </Typography>
          </ListItem>
        </List>
      </Stack>
    </Button>
  )
}

export type TopicButtonProps = {
  imageSrc: string
  alignImageTop?: number
  label: string
  color: string
  onClick?: ButtonProps['onClick']
  size?: number
}
export const TopicButton = (props: TopicButtonProps) => {
  const { imageSrc, color, label, onClick, size = 100, alignImageTop } = props

  const theme = useTheme()
  return (
    <div>
      <Button
        color="inherit"
        sx={{
          color: color,
          display: 'block',
          boxShadow: theme.shadows[3],
          borderRadius: 4,
          height: size,
          width: size,
          p: 0,
          textTransform: 'none',
          position: 'relative',
        }}
        onClick={onClick}
      >
        <img src={imageSrc} alt="React Logo" style={{ width: '60%', height: 'auto', marginTop: alignImageTop }} />
        <Typography
          // variant="h6"
          color={color}
          component="div"
          sx={{ textAlign: 'center', lineHeight: 1.1, position: 'relative', top: -2, fontWeight: 600 }}
        >
          {label}
        </Typography>
      </Button>
    </div>
  )
}

export const DevBlog = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [InitTransition, setInitTransition] = React.useState('100%')
  React.useEffect(() => {
    setInitTransition('0px')
  }, [])

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container
      maxWidth="md"
      sx={{
        position: 'relative',
        top: 0,
        left: InitTransition,
        transition: 'left .4s',
        pt: 2,
        pb: 3,
        textAlign: 'center',
        p: isMobile ? 1 : 2,
      }}
    >
      <Typography variant="h2" component="div">
        Devblog
      </Typography>
      <Typography>
        Here you will find my developer knowledge collection and articles. Web development is a very broad-ranging task.
        Articles are a convenient way to lookup a certain topic. In addition I find it useful to summarize a topic in
        order to grasp it's complete extent.
      </Typography>
      <Divider />
      <Typography variant="h2" component="div">
        Articles and Tutorials
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 2,
          mb: 2,
          alignContent: 'center',
        }}
      >
        <BigTopicButton icon={<Icon path={mdiCloud} size={'128px'} />} color="#3178c6" label="How to use Rest APIs" />
        <BigTopicButton
          icon={<Icon path={mdiArrowDecisionOutline} size={'128px'} />}
          color="#E86100"
          label="How to use Routing?"
        />
        <BigTopicButton imageSrc="/react-lib.svg" color="#c83737ff" label="How to use a react component library?" />
      </Box>

      <Divider />

      <Typography variant="h2" component="div">
        Advanced
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(100px, max-content))',
          gap: isMobile ? 0.5 : 2,
          mb: 2,
          alignContent: 'center',
          justifyContent: 'center',
          // overflowX: "auto"
        }}
      >
        <TopicButton imageSrc="/react-logo2.svg" alignImageTop={4} color="#61dafb" label="React" />
        <TopicButton imageSrc="/ts-logo.svg" color="#3178c6" label="Typescript" />
        <TopicButton imageSrc="/node-logo.svg" color="#8cc84b" label="Node.js" />
      </Box>

      <Divider />
      <Typography variant="h2" component="div">
        Web Basics
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(100px, max-content))',
          gap: isMobile ? 0.5 : 2,
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <TopicButton
          imageSrc="/html5-logo.svg"
          color="#e44d26"
          label="HTML"
          onClick={() => {
            navigate('/devblog/html')
          }}
        />
        <TopicButton
          imageSrc="/css-logo.svg"
          color="#264de4"
          label="CSS"
          alignImageTop={4}
          onClick={() => {
            navigate('/devblog/css')
          }}
        />
        <TopicButton imageSrc="/js-logo.png" color="#f7e018" label="Javascript" />
      </Box>
    </Container>
  )
}
