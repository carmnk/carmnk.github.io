import { Container, ContainerProps, styled } from "@mui/material";

export type CContainerProps = ContainerProps &
  Partial<
    Pick<
      React.CSSProperties,
      | "paddingTop"
      | "paddingBottom"
      | "marginTop"
      | "marginBottom"
      | "paddingRight"
      | "paddingLeft"
      | "position"
      | "zIndex"
    >
  >;

export const CContainer = styled((props: CContainerProps) => {
  const {
    /*  eslint-disable @typescript-eslint/no-unused-vars */
    paddingTop,
    paddingBottom,
    marginBottom,
    marginTop,
    paddingLeft,
    paddingRight,
    position,
    zIndex,
    /* eslint-enable @typescript-eslint/no-unused-vars */
    children,
    ...restProps
  } = props;
  return <Container {...restProps}>{children}</Container>;
})<CContainerProps>(
  ({
    paddingTop,
    paddingBottom,
    marginBottom,
    marginTop,
    paddingLeft,
    paddingRight,
    position,
    zIndex,
  }) => ({
    paddingTop,
    paddingBottom,
    marginBottom,
    marginTop,
    paddingLeft,
    paddingRight,
    position,
    zIndex,
  })
);
