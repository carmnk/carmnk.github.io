import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card, { CardProps } from "@material-ui/core/Card";
import CardActionArea, { CardActionAreaProps } from "@material-ui/core/CardActionArea";
import CardActions, { CardActionsProps } from "@material-ui/core/CardActions";
import CardContent, { CardContentProps } from "@material-ui/core/CardContent";
import CardMedia, { CardMediaProps } from "@material-ui/core/CardMedia";
import CardHeader, { CardHeaderProps } from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  headerAction: {
    margin: 0,
  },
});

/** CCardPropTypes */
export interface CCardPropTypes {
  cardWidth?: number;
  content?: React.ReactNode;
  elevation?: number;
  footerContent?: React.ReactNode;
  headerAction?: React.ReactNode;
  headerAvatar?: React.ReactNode;
  headerSubTitle?: React.ReactNode;
  headerTitle?: React.ReactNode;
  imageSrc?: string;
  imageToolTip?: string;
  mediaHeight?: number;
  muiCardActionAreaProps?: CardActionAreaProps;
  muiCardActionsProps?: CardActionsProps;
  muiCardContentProps?: CardContentProps;
  muiCardHeaderProps?: CardHeaderProps;
  muiCardMediaProps?: CardMediaProps;
  muiCardProps?: CardProps;
  useActionArea?: boolean;
  useContent?: boolean;
  useFooter?: boolean;
  useHeader?: boolean;
  useMedia?: boolean;
  onActionAreaClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

/** CCard Component
 * @remark A simple card component using Material UI's Card component
 * @docu
 */
export default function CCard(props: CCardPropTypes) {
  const {
    cardWidth = 320,
    content = null,
    elevation = 8,
    footerContent = null,
    headerAction = null,
    headerAvatar = null,
    headerSubTitle = null,
    headerTitle = null,
    imageSrc = "#",
    imageToolTip = "",
    mediaHeight = 240,
    muiCardActionAreaProps = {},
    muiCardActionsProps = {},
    muiCardContentProps = {},
    muiCardHeaderProps = {},
    muiCardMediaProps = {},
    muiCardProps = {},
    useActionArea = true,
    useContent = true,
    useFooter = true,
    useHeader = true,
    useMedia = true,
    onActionAreaClick = undefined,
  } = props;

  const classes = useStyles();

  const headerProps: any = {};
  if (!!headerAvatar) headerProps.avatar = headerAvatar;
  if (!!headerAction) headerProps.action = headerAction;
  if (!!headerTitle) headerProps.title = headerTitle;
  if (!!headerSubTitle) headerProps.subheader = headerSubTitle;

  const cardContent = (
    <React.Fragment>
      {useMedia ? (
        <CardMedia image={imageSrc} title={imageToolTip} style={{ height: mediaHeight }} {...muiCardMediaProps} />
      ) : null}
      {useContent ? <CardContent {...muiCardContentProps}>{content}</CardContent> : null}
    </React.Fragment>
  );

  return (
    <Card elevation={elevation} style={{ maxWidth: cardWidth }} {...muiCardProps}>
      {useHeader ? (
        <CardHeader classes={{ action: classes.headerAction }} {...headerProps} {...muiCardHeaderProps} />
      ) : null}
      {useActionArea ? (
        <CardActionArea onClick={onActionAreaClick} {...muiCardActionAreaProps}>
          {cardContent}
        </CardActionArea>
      ) : (
        cardContent
      )}
      {useFooter ? <CardActions {...muiCardActionsProps}>{footerContent}</CardActions> : null}
    </Card>
  );
}
