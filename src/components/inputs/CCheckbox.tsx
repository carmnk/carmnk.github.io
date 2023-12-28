import React from 'react'
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'

export type CCheckboxProps = CheckboxProps & {
  label: React.ReactNode
  formControlLabelProps?: any
}

const styles = {
  fontSize: '14px',
}

export const CCheckbox = (props: CCheckboxProps) => {
  const { value, onChange, name, label, formControlLabelProps, ...restCheckBoxProps } = props
  return (
    <FormControlLabel
      slotProps={{ typography: { sx: { fontSize: '14px' }} }}
      control={<Checkbox name={name} value={value} checked={!!value} onChange={onChange} {...restCheckBoxProps}/>}
      label={label}
      {...formControlLabelProps}
    />
  )
}
