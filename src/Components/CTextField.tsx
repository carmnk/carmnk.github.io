import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { isRefValid, useCombinedRefs } from "../utils/utils";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import * as clipboardy from "clipboardy";
import Icon from "@mdi/react";
import { mdiDelete, mdiSubdirectoryArrowLeft, mdiContentPaste } from "@mdi/js";

/** CTextFieldPropTypes */
export type CTextFieldPropTypes = Omit<TextFieldProps, "error"> & {
  error?: boolean | ((val: any) => boolean);
  onEnter?: (val: any) => void;
  onDeleteInput?: (val: any) => void;
  useDelBtn?: boolean;
  usePasteBtn?: boolean;
  useEnterBtn?: boolean;
  customDelBtn?: React.ReactNode;
  customPasteBtn?: React.ReactNode;
  customEnterBtn?: React.ReactNode;
};

const cTextFieldDefaultProps: CTextFieldPropTypes = {
  useDelBtn: true,
  usePasteBtn: true,
  useEnterBtn: true,
};

/** CTextField Component
 * @remark A simple textfield component using Material UI's Textfield component
 * @docu
 */
export const CTextField = React.forwardRef<HTMLDivElement, CTextFieldPropTypes>((props, ref) => {
  const {
    error,
    onChange,
    defaultValue,
    inputRef,
    InputProps,
    onEnter,
    onDeleteInput,
    useDelBtn,
    usePasteBtn,
    useEnterBtn,
    customDelBtn,
    customPasteBtn,
    customEnterBtn,
    ...other
  } = props;

  const errorInt = typeof error === "boolean" || typeof error === "function" ? error : false;

  const [IsValError, setIsValError] = React.useState<boolean>(false);
  const InputValueRef = React.useRef<any>("");
  const InputRefCombined = useCombinedRefs<HTMLInputElement>(inputRef as React.RefObject<any>);

  const checkIsError = (val: any): void => {
    let isErr;
    if (typeof errorInt === "boolean") {
      isErr = errorInt;
    } else if (typeof errorInt === "function") isErr = errorInt(val);
    else return;
    if (IsValError !== isErr) setIsValError(isErr);
  };

  const checkUncontrolledTextfield = (val: any): void => {
    if (props.value === undefined) {
      checkIsError(val);
      if (isRefValid(InputValueRef)) InputValueRef.current = val;
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const newVal = e.target.value;
    checkUncontrolledTextfield(newVal);
    onChange?.(e);
  };

  const onKeyUp = (key: KeyboardEvent): void => {
    if ((key as unknown) === "Enter") {
      if (isRefValid(InputValueRef)) onEnter?.(InputValueRef.current);
    }
  };

  const onEnterBtnClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (onEnter && isRefValid(InputValueRef)) onEnter(InputValueRef.current);
  };

  const onDelBtnClicked = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (isRefValid(InputRefCombined)) {
      InputRefCombined.current.value = "";
    }
    checkIsError("");
    const valBeforeDel = isRefValid(InputValueRef) ? InputValueRef.current : "";
    InputValueRef.current = "";
    onDeleteInput?.(valBeforeDel);
  };

  const onPasteBtnClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const clipProm = clipboardy.read();
    clipProm
      .then((val) => {
        if (isRefValid(InputRefCombined)) {
          InputRefCombined.current.focus();
          InputRefCombined.current.value = val;
        }
        if (isRefValid(InputValueRef)) InputValueRef.current = val;
        checkIsError(val);
      })
      .catch((reason) => {
        // Log the rejection reason
        console.log(`Handle rejected Clipboard-reading promise (${reason}) here.`);
        alert("Error reading clipboard. Please make sure to grant permission to access clipboard.");
      });
  };

  React.useEffect(() => {
    const initVal = !!defaultValue ? (defaultValue as any) : "";
    checkUncontrolledTextfield(initVal);
    const inputRef = isRefValid(InputRefCombined) ? InputRefCombined.current : null;
    if (!!inputRef) inputRef.addEventListener("keyup", onKeyUp);

    return () => {
      if (!!inputRef) inputRef.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  React.useEffect(() => {
    if (props.value !== undefined) {
      if (isRefValid(InputValueRef))
        if (InputValueRef.current !== props.value) InputValueRef.current = props.value as any;
      checkIsError(props.value as any);
    }
  }, [props.value, props.error]);

  const endAdornmentPreset = (
    <InputAdornment position="end">
      {!!useDelBtn && !customDelBtn ? (
        <IconButton aria-label="delete" color="primary" onClick={onDelBtnClicked}>
          <Icon path={mdiDelete} size={1} color="#333" />
        </IconButton>
      ) : !!customDelBtn ? (
        customDelBtn
      ) : null}
      {!!usePasteBtn && !customPasteBtn ? (
        <IconButton aria-label="paste" color="primary" onClick={onPasteBtnClicked}>
          <Icon path={mdiContentPaste} size={1} color="#333" />
        </IconButton>
      ) : !!customPasteBtn ? (
        customPasteBtn
      ) : null}
      {!!useEnterBtn && !customEnterBtn ? (
        <IconButton aria-label="enter" color="primary" onClick={onEnterBtnClicked}>
          <Icon path={mdiSubdirectoryArrowLeft} size={1} color="#333" />
        </IconButton>
      ) : !!customEnterBtn ? (
        customEnterBtn
      ) : null}
    </InputAdornment>
  );
  const inputPropsPreset: any = {};
  if (!!InputProps)
    if (!("endAdornment" in InputProps) && (useDelBtn || usePasteBtn || useEnterBtn))
      inputPropsPreset.endAdornment = endAdornmentPreset;
  if (!InputProps && (useDelBtn || usePasteBtn || useEnterBtn)) inputPropsPreset.endAdornment = endAdornmentPreset;

  return (
    <TextField
      error={IsValError}
      onChange={onInputChange}
      inputRef={InputRefCombined}
      defaultValue={defaultValue}
      ref={ref}
      {...other}
      InputProps={{
        ...inputPropsPreset,
        ...InputProps,
      }}
    />
  );
});
CTextField.displayName = "CTextField";
CTextField.defaultProps = cTextFieldDefaultProps;
export default CTextField;
