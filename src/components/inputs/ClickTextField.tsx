import { mdiCheck, mdiDelete, mdiPencil } from "@mdi/js";
import {
  Stack,
  Typography,
  Box,
  ClickAwayListener,
  TypographyProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { ChangeEvent, memo, useCallback, useState } from "react";
import { Button } from "../buttons/Button";
import { CAutoComplete, CAutoCompleteProps } from "./CAutoComplete";

const inputStyles = { sx: { p: 0.5, px: 1 } };

type CommonClickTextFieldProps = {
  value: string;
  //   label: string;
  typographyProps?: TypographyProps;
  additionalLabelComponent?: React.ReactNode;
  onChange?: (newValue: string) => void;
  validateInput?: (newValue: string) => boolean;
  onClickAway?: () => void;
  handleRemoveItem?: () => void;
  onToggle?: (isEdit: boolean) => void;
};

type TextClickTextFieldProps = {
  variant?: "text";
  textFieldProps?: TextFieldProps;
};

type AutoCompleteClickTextFieldProps = {
  variant?: "autocomplete";
  options: { value: string; label: string }[];
  autoCompleteProps?: CAutoCompleteProps;
};

export type ClickTextFieldProps = CommonClickTextFieldProps &
  (TextClickTextFieldProps | AutoCompleteClickTextFieldProps);

export const ClickTextFieldComponent = (props: ClickTextFieldProps) => {
  const {
    variant,
    value,
    typographyProps,
    additionalLabelComponent,
    textFieldProps,
    options,
    onChange,
    validateInput,
    onClickAway,
    handleRemoveItem,
    onToggle,
  } = props as TextClickTextFieldProps &
    AutoCompleteClickTextFieldProps &
    CommonClickTextFieldProps;
  const [ui, setUi] = useState({ isEdit: false, tempValue: "" });

  const handleTakeover = useCallback(() => {
    setUi((current) => ({ ...current, isEdit: false, tempValue: "" }));
    onChange?.(ui?.tempValue);
  }, [ui?.tempValue, onChange]);

  const handleToggleIsEdit = useCallback(() => {
    onToggle?.(!ui?.isEdit);
    setUi((current) => ({
      ...current,
      isEdit: !current.isEdit,
      tempValue: current.isEdit ? "" : value,
    }));
    if (ui?.isEdit) {
      onClickAway?.();
    }
  }, [ui?.isEdit, onClickAway, value, onToggle]);

  const handleChangeTempValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e?.target?.value;
      if (validateInput && !validateInput(newValue)) return;
      setUi((current) => ({ ...current, tempValue: newValue }));
    },
    [validateInput]
  );

  const handleChangeTempSelectValue = useCallback(
    (newValue: string) => {
      //   const newValue = e?.target?.value;
      if (validateInput && !validateInput(newValue)) return;
      setUi((current) => ({ ...current, tempValue: newValue }));
    },
    [validateInput]
  );

  return !ui?.isEdit ? (
    <Stack direction="row" maxWidth={248} alignItems="center" gap={1}>
      <Typography
        fontWeight={700}
        color="text.primary"
        // variant="h6"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
        variant="h5"
        {...typographyProps}
      >
        {value ?? ""}
      </Typography>
      {additionalLabelComponent}

      <Box minWidth={24} minHeight={24}>
        <Button
          icon={mdiPencil}
          iconButton={true}
          type="text"
          onClick={handleToggleIsEdit}
        />
      </Box>
      {handleRemoveItem && (
        <Box minWidth={24} minHeight={24}>
          <Button
            icon={mdiDelete}
            iconButton={true}
            type="text"
            onClick={handleRemoveItem}
          />
        </Box>
      )}
    </Stack>
  ) : (
    <ClickAwayListener onClickAway={handleToggleIsEdit}>
      <Stack direction="row" alignItems="center" gap={1}>
        <Box flexGrow={1}>
          {variant === "autocomplete" ? (
            <CAutoComplete
              value={(ui?.tempValue as any) ?? ""}
              name="editRuleValue"
              options={options}
              // value={ui.ruleValue}
              onChange={handleChangeTempSelectValue as any}
              size="small"
              sx={{ width: "140px" }}
              disableLabel={true}
              disableHelperText={true}
              {...(textFieldProps as any)}
            />
          ) : (
            <TextField
              size="small"
              inputProps={inputStyles}
              onChange={handleChangeTempValue}
              value={ui?.tempValue ?? ""}
              {...textFieldProps}
            />
          )}
        </Box>
        <Box minWidth={24} minHeight={24}>
          <Button
            icon={mdiCheck}
            iconButton={true}
            type="text"
            onClick={handleTakeover}
          />
        </Box>
      </Stack>
    </ClickAwayListener>
  );
};

export const ClickTextField = memo(ClickTextFieldComponent);
