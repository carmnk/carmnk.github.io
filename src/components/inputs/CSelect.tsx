import React, { ChangeEvent } from 'react'
import { Select, MenuItem, useTheme, FormHelperText, FormControl, SelectProps, FormControlProps } from '@mui/material'
import { Label } from '../basics/Typography'
import { BoxProps } from '@mui/system'

export type CSelectProps = Omit<SelectProps, 'onChange'> & {
  disableTopPadding?: boolean
  value?: string | number | boolean | null
  options?: { value: string | number | boolean; label: string }[]
  isError?: boolean
  isDisabled?: boolean
  required?: boolean
  label?: React.ReactNode
  disableHelperText?: boolean
  disableLabel?: boolean
  labelSx?: BoxProps['sx']
  ContainerProps?: FormControlProps
  onChange?:
    | ((newValue: string, e: ChangeEvent<HTMLInputElement>) => void)
    | ((newValue: number, e: ChangeEvent<HTMLInputElement>) => void)
    | ((newValue: boolean, e: ChangeEvent<HTMLInputElement>) => void)
  locked?: boolean
  helperText?: string
  disableHelperTextTheming?: boolean
}

const requiredFieldText = "This field is required";

export const CSelect2 = (props: CSelectProps) => {
  const {
    disableTopPadding,
    value,
    onChange,
    options,
    isError,
    isDisabled,
    required,
    label,
    disableHelperText,
    disableLabel,
    labelSx,
    ContainerProps,
    name,
    locked,
    helperText,
    disableHelperTextTheming,
    ...rest
  } = props
  const isDisabledAdj = isDisabled || locked

  const theme = useTheme()
  const handleChange = React.useCallback(
    (e: any) => {
      const value = e?.target?.value
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      onChange?.(value as never, e)
    },
    [onChange]
  )

  const themeErrorText = {
    color: theme.palette.error.main,
    fontWeight: 700,
  }

  return (
    <FormControl className="flex flex-col w-full" {...ContainerProps}>
      {!disableLabel && (
        <Label className="pb-2 pl-0.5" style={isError ? { color: theme.palette.error.main } : {}} sx={labelSx}>
          {label}
          {required && <strong style={themeErrorText}> *</strong>}
        </Label>
      )}
      <Select
        {...rest}
        value={value ?? ''}
        onChange={handleChange}
        error={!!isError}
        size="small"
        disabled={isDisabledAdj}
        sx={{
          height: 42,
          pt: !disableTopPadding ? 1 : 0,
          width: '100%',
          background: 'white',
          fontSize: 14,
          lineHeight: '16px',
          color: '#212529',
          ...(props?.sx ?? {}),
        }}
        data-testid={name}
        inputProps={{ title: name, name: name }}
      >
        {options?.map((opt, oIdx) => (
          <MenuItem
            value={opt?.value as any}
            key={oIdx}
            sx={{
              fontSize: 14,
              lineHeight: '16px',
              color: '#212529',
              minHeight: { xs: 28 },
            }}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      {!disableHelperText && (
        <FormHelperText sx={{ ml: '2px', height: 23, color: !disableHelperTextTheming ? 'error.main' : undefined }}>
          {helperText ?? (isError ? requiredFieldText : ' ')}
        </FormHelperText>
      )}
    </FormControl>
  )
}
