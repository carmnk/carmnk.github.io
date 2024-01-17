import {
  Backdrop,
  Box,
  CircularProgress,
  Portal,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { ReactNode, useMemo } from "react";

export type CBackdropProps = {
  open: boolean;
  label?: ReactNode;
};

export const CBackdrop = (props: CBackdropProps) => {
  const { label, open } = props;

  const theme = useTheme();
  const backdropStyles = useMemo(() => {
    return {
      color: theme.palette.primary.main,
      zIndex: (theme: Theme) => theme.zIndex.drawer + 10000,
    };
  }, [theme]);

  return (
    <Portal>
      <Backdrop sx={backdropStyles} open={open}>
        <Stack alignItems="center" justifyContent="center" textAlign="center">
          <CircularProgress color="inherit" />
          {label && <Typography> {label}</Typography>}
        </Stack>
      </Backdrop>
    </Portal>
  );
};
