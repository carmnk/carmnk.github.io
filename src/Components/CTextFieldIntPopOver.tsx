import {
  Button,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  TextFieldProps,
  Typography,
} from "@material-ui/core";
import { mdiAccountMultiple, mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

const PopOverStepper = (props: any) => {
  const { val, onClose, anchorEl, id, valueStringTransform } = props;
  //const classes = useStyles();
  const [AnchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(anchorEl);
  const [stepVal, setStepVal] = React.useState(val);

  if (anchorEl !== AnchorEl) setAnchorEl(anchorEl);

  const handleCancel = () => {
    onClose?.();
    setStepVal(val);
  };
  const handleConfirm = () => {
    onClose?.(stepVal);
  };

  const open = Boolean(AnchorEl);
  const idPopover = open ? id+"-popover" : undefined;

  return (
    <Popover
      id={idPopover}
      open={open}
      anchorEl={AnchorEl}
      onClose={handleCancel}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      PaperProps={{ elevation: 8 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 50% 25%",
          justifyItems: "center",
          alignItems: "center",
          height: 84,
        }}
      >
        <div>
          <IconButton
            color="secondary"
            size="medium"
            onClick={() => {
              setStepVal(stepVal - 1);
            }}
          >
            <Icon path={mdiMinus} size={1.25} />
          </IconButton>
        </div>
        <div style={{ justifySelf: "center", alignSelf: "center" }}>
          <Typography variant="h6">{valueStringTransform(stepVal)}</Typography>
        </div>
        <div>
          <IconButton
            color="primary"
            size="medium"
            onClick={() => {
              setStepVal(stepVal + 1);
            }}
          >
            <Icon path={mdiPlus} size={1.25} />
          </IconButton>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Button style={{ margin: 1 }} variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button style={{ margin: 1 }} variant="outlined" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </div>
    </Popover>
  );
};

export type CTextFieldIntPopOverProps = Omit<TextFieldProps, "onChange" | "value"> & {
  valueStringTransform?: (val: number) => string;
  onChange?: (val: number) => void;
  value?: number;
};

export const CTextFieldIntPopOver = (props: CTextFieldIntPopOverProps) => {
  const { id, label, variant, onClick, valueStringTransform, value, onChange } = props;

  const valueNN = !!value ? value : 0;
  const valueDisplay = !!valueStringTransform ? valueStringTransform(valueNN) : valueNN;
  const [Anchor, setAnchor] = React.useState<HTMLInputElement | HTMLTextAreaElement | null>(null);

    
  const handleOnClick = (e: any): void | undefined => {
    setAnchor(e.currentTarget);
    onClick?.(e);
  };

  return (
    <React.Fragment>
      <TextField
        id={id}
        label={label}
        variant={variant}
        value={valueDisplay}
        onClick={handleOnClick}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">
              <Icon path={mdiAccountMultiple} size={1} />
            </InputAdornment>
          ),
        }}
      />
      <PopOverStepper
        id={id}
        val={valueNN}
        valueStringTransform={valueStringTransform}
        anchorEl={Anchor}
        onClose={(value: any) => {
          setAnchor(null);
          if (value) onChange?.(value);
        }}
      />
    </React.Fragment>
  );
};
export default CTextFieldIntPopOver;
