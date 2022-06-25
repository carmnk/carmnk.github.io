import React from 'react'
import { Typography, Button, Card, CardMedia, CardContent, CardActions, CardHeader, styled } from '@mui/material'

export type CCardProps = {
  maxWidth?: number
  title: React.ReactNode
  content: React.ReactNode
  imageUrl: string
}

const StyledCardHeader = styled(CardHeader)({ padding: '8px' })

export const CCard = (props: CCardProps) => {
  const { maxWidth = '560px', content, imageUrl, title } = props
  const cardStyles = React.useMemo(
    () => ({ maxWidth,  display: 'flex', flexDirection: 'column' as const , opacity: 0}),
    [maxWidth]
  )
  return (
    <Card sx={cardStyles} className="card">
      <StyledCardHeader
        title={
          <Typography gutterBottom variant="h5" component="div" mb={0}>  
            {title}
          </Typography>
        }
      ></StyledCardHeader>

      <CardMedia component="img" height="200" image={imageUrl} alt="dashboard" />
      <CardContent sx={{ flexGrow: 1 }}>{content}</CardContent>

      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  )
}
