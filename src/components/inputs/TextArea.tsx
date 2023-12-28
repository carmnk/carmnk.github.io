import { useTheme } from '@mui/material'
import React from 'react'

import { Label } from '../basics/Typography'

export type TextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  value: string | undefined
  name: string
  onChange?: any
  rows?: number
  style?: { [key: string]: string }
  isError?: boolean
  className?: string
  label?: React.ReactNode
  required?: boolean
  helperText?: string
  helperTextHeight?: number
  labelSx?: { [key: string]: string }
  onChangeCompleted?: any
  injectLabelComponent?: React.ReactNode
  labelSubtext?: React.ReactNode
  disableLabel?: boolean
}

const requiredFieldText = "This field is required";

export const TextArea = (props: TextAreaProps) => {
  const {
    value,
    name,
    onChange,
    rows,
    style,
    isError,
    className,
    label,
    required,
    helperText,
    helperTextHeight,
    labelSx,
    onChangeCompleted,
    injectLabelComponent,
    labelSubtext,
    disableLabel,
    ...rest
  } = props
  const addClass = className ? className : ''
  const theme = useTheme()

  const [valueStarted, setValueStarted] = React.useState<string>('')

  const themeErrorText = {
    color: theme.palette.error.main,
    fontWeight: 700,
  }

  const handleChangeCompleted = React.useCallback(() => {
    //dont trigger if value has not changed
    if (value === valueStarted) return
    onChangeCompleted?.(value)
  }, [onChangeCompleted, value, valueStarted])

  const handleChangeStarted = React.useCallback(() => {
    setValueStarted?.(value ?? '')
  }, [value])

  return (
    <div className="relative flex flex-col w-full">
      {!disableLabel && (
        <div className="grid grid-cols-[max-content_auto]">
          <Label
            className="pb-2 text-black pl-0.5"
            style={isError ? { color: theme.palette.error.main } : {}}
            sx={labelSx}
          >
            {label} {required && <strong style={themeErrorText}>*</strong>}
            {labelSubtext}
          </Label>
          {injectLabelComponent}
        </div>
      )}
      <textarea
        {...rest}
        value={value}
        name={name}
        data-testid={name}
        rows={rows}
        onChange={onChange}
        className={`block w-full px-4 py-3 leading-tight text-gray-700 bg-white border appearance-none rounded-md focus:outline-none focus:border-grey-500 ${addClass}`}
        style={{
          ...style,
          borderColor: isError ? theme.palette.error.main : '#dde2ea',
          borderWidth: 1,
          borderStyle: 'solid',
          fontSize: 14,
          lineHeight: '16px',
          height: 'auto',
          // minHeight: '185px',
          // color: '#212529',
        }}
        onBlur={handleChangeCompleted}
        onFocus={handleChangeStarted}
      />
      {(isError || helperText) && (
        <Label
          className="absolute bottom-0 mt-20"
          style={{
            ...(isError ? { color: theme.palette.error.main } : {}),
            bottom: helperTextHeight ? -helperTextHeight : '-22px',
          }}
        >
          {helperText ? helperText : requiredFieldText}
        </Label>
      )}
    </div>
  )
}
