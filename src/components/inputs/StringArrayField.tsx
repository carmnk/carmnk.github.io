import { mdiDeleteOutline } from '@mdi/js'
import { Box } from '@mui/material'
import React from 'react'
import { Button } from '../buttons/Button'
import { CTextField } from './CTextField'

export type StringArrayFieldProps = {
  value?: string[] | null
  label?: React.ReactNode
  name?: string
  required?: any
  error?: boolean
  showError?: boolean
  onChangeArray: (newValue: string, name: string, arrayIdx: number) => void
  onRemoveItem: (name: string, arrayIndex: number) => void
  enableDeleteFirst?: boolean
  disableHelperText?: boolean
}

export const StringArrayField = (props: StringArrayFieldProps) => {
  const {
    value,
    label,
    error,
    required,
    name,
    onChangeArray,
    onRemoveItem,
    enableDeleteFirst,
    showError,
    disableHelperText,
  } = props
  const valueAdjusted = value?.length || enableDeleteFirst ? value : ['']
  return (
    <>
      {valueAdjusted?.map((item, index) => (
        <div className="flex items-center mb-2 gap-4" style={{ overflowX: 'visible' }} key={index}>
          <CTextField
            type="text"
            value={item}
            label={label}
            name={name}
            required={required && !index}
            onChange={(e) => {
              const { name, value } = e?.target ?? {}
              onChangeArray(value, name, index)
            }}
            mainClass="w-full"
            ContainerProps={{ sx: { width: 320 } }}
            injectError={error ?? (showError && required && !value && !index)}
            disableHelperText={disableHelperText}
          />
          {(enableDeleteFirst || index > 0) && (
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                paddingTop: disableHelperText ? '24px' : 0,
              }}
            >
              <Button
                type="text"
                iconButton={true}
                icon={mdiDeleteOutline}
                title={'delete_' + index}
                tooltip="Eintrag löschen"
                onClick={() => name && onRemoveItem(name, index)}
              />
            </Box>
          )}
        </div>
      )) ?? null}
    </>
  )
}
