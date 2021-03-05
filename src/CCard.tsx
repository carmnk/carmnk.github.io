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
  /** max-width of whole card */
  cardMaxWidth?: number;
  /** content displayed (below header and media/image)*/
  content?: React.ReactNode;
  /** [Mui paper elevation](https://material-ui.com/api/paper/)*/
  elevation?: number;
  /** content displayed in static footer*/
  footerContent?: React.ReactNode;
  /** content (typically IconButton) to display in right section of header*/
  headerAction?: React.ReactNode;
  /** content (typically Avatar) to display in left section of header*/
  headerAvatar?: React.ReactNode;
  /** header subtitle*/
  headerSubTitle?: React.ReactNode;
  /** header title*/
  headerTitle?: React.ReactNode;
  /** src for image*/
  imageSrc?: string;
  /** image hover tooltip*/
  imageToolTip?: string;
  /** overlay content for media section */
  mediaContent?: React.ReactNode;
  /** height  of media/image */
  mediaHeight?: number;
  /** [material ui CardActionAreaProps](https://material-ui.com/api/card-action-area/)
   * @nospec
   */
  muiCardActionAreaProps?: CardActionAreaProps;
  /** [material ui CardActionsProps](https://material-ui.com/api/card-actions/)
   * @nospec
   */
  muiCardActionsProps?: CardActionsProps;
  /** [material ui CardContentProps](https://material-ui.com/api/card-content/)
   * @nospec
   */
  muiCardContentProps?: CardContentProps;
  /** [material ui CardHeaderProps](https://material-ui.com/api/card-header/)
   * @nospec
   */
  muiCardHeaderProps?: CardHeaderProps;
  /** [material ui CardMediaProps](https://material-ui.com/api/card-media/)
   * @nospec
   */
  muiCardMediaProps?: CardMediaProps;
  /** [material ui CardMediaProps](https://material-ui.com/api/card/)
   * @nospec
   */
  muiCardProps?: CardProps;
  /** use mui ActionArea for Click/Tap events covering Media and Content */
  useActionArea?: boolean;
  /** use content section */
  useContent?: boolean;
  /** use static footer */
  useFooter?: boolean;
  /** use card header */
  useHeader?: boolean;
  /** use media section */
  useMedia?: boolean;
  /** callback fired when ActionArea is clicked */
  onActionAreaClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

const ccardDefaultProps: CCardPropTypes = {
  cardMaxWidth: 320,
  content: null,
  elevation: 8,
  footerContent: null,
  headerAction: null,
  headerAvatar: null,
  headerSubTitle: null,
  headerTitle: null,
  imageSrc: "#",
  imageToolTip: "",
  mediaContent: null,
  mediaHeight: 240,
  muiCardActionAreaProps: {},
  muiCardActionsProps: {},
  muiCardContentProps: {},
  muiCardHeaderProps: {},
  muiCardMediaProps: {},
  muiCardProps: {},
  useActionArea: true,
  useContent: true,
  useFooter: true,
  useHeader: true,
  useMedia: true,
  onActionAreaClick: undefined,
};

/** CCard Component
 * @remark A simple card component using Material UI's Card component
 * @docu
 */
export const CCard = (props: CCardPropTypes) => {
  const {
    cardMaxWidth,
    content,
    elevation,
    footerContent,
    headerAction,
    headerAvatar,
    headerSubTitle,
    headerTitle,
    imageSrc,
    imageToolTip,
    mediaContent,
    mediaHeight,
    muiCardActionAreaProps,
    muiCardActionsProps,
    muiCardContentProps,
    muiCardHeaderProps,
    muiCardMediaProps,
    muiCardProps,
    useActionArea,
    useContent,
    useFooter,
    useHeader,
    useMedia,
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
        <CardMedia
          image={imageSrc}
          title={imageToolTip}
          style={{ height: mediaHeight, position: "relative", top: 0 }}
          {...muiCardMediaProps}
        >
          {mediaContent}
        </CardMedia>
      ) : null}
      {useContent ? <CardContent {...muiCardContentProps}>{content}</CardContent> : null}
    </React.Fragment>
  );

  return (
    <Card elevation={elevation} style={{ maxWidth: cardMaxWidth }} {...muiCardProps}>
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
};
CCard.defaultProps = ccardDefaultProps;
export default CCard;
