import React from 'react'
import { mdiDotsVertical } from '@mdi/js'
import { CIconButtonProps } from './IconButton'
import { Button } from './Button'

export const MoreActionsIconButton = (
  props: Pick<CIconButtonProps, 'onClick' | 'tooltip' | 'disabled'> & { sx?: any }
) => {
  const { onClick, tooltip, sx, disabled } = props
  return (
    <Button
      disableTabstop={true}
      type="text"
      iconButton={true}
      icon={mdiDotsVertical}
      tooltip={tooltip}
      onClick={onClick}
      disabled={disabled}
      sx={sx}
    ></Button>
  )
  //  <CIconButton tooltip={tooltip ?? ''} onClick={onClick} IconButtonSx={sx} mdiIconPath={mdiDotsVertical} />
}
