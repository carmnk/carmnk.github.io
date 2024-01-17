import React from "react";
import { Button, CButtonProps } from "./Button";
import { Divider, Stack, useTheme } from "@mui/material";

export type ButtonGroupButtonProps = Pick<
  CButtonProps,
  "icon" | "tooltip" | "onClick"
> & {
  value: string;
  selected: boolean;
  disabled?: boolean;
};

export const ButtonGroupButton = (props: ButtonGroupButtonProps) => {
  const { value, selected, icon, tooltip, onClick, disabled } = props;
  return (
    <Button
      type={selected ? "primary" : "text"}
      iconButton={true}
      icon={icon}
      tooltip={tooltip}
      name={value}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export type ButtonGroupProps = {
  buttons: (Omit<ButtonGroupButtonProps, "selected"> | null)[];
  value: string;
  onChange: (value: string) => void;
  isSelected?: (itemValue: string, groupValue: string) => boolean;
  transformValue?: (newItemValue: string, currentGroupValue: string) => string;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { buttons, value, onChange, isSelected, transformValue } = props;

  const handleChange = React.useCallback(
    (newValue: string) => {
      if (!onChange) return;
      const newValueAdj = transformValue
        ? transformValue(newValue, value)
        : newValue;
      onChange(newValueAdj);
    },
    [onChange, transformValue, value]
  );

  const theme = useTheme();
  return (
    <Stack
      direction="row"
      gap={0.25}
      border={"1px solid " + theme.palette.divider}
      width="max-content"
    >
      {buttons?.map?.((button, bIdx) => {
        return button ? (
          <ButtonGroupButton
            {...button}
            key={bIdx}
            selected={
              isSelected?.(button.value, value) ?? button.value === value
            }
            onClick={() => handleChange(button.value)}
          />
        ) : (
          <Divider orientation="vertical" flexItem key={bIdx} />
        );
      }) ?? null}
    </Stack>
  );
};
