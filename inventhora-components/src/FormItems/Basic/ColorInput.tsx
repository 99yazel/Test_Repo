import { FormControl, FormHelperText, InputLabel } from '@material-ui/core'
import { useField } from 'formik'
import { generateSlug } from 'inventhora-utils'
import { ColorPicker } from 'material-ui-color'
import React, { FC } from 'react'

const ColorInput: FC<Props> = ({
  name,
  helperText,
  subName,
  index,
  label,
  required,
  onChange,
}) => {
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const [, meta, helpers] = useField(formName)
  return (
    <FormControl
      error={Boolean(meta.error)}
      id={generateSlug(formName)}
      style={{ width: '100%' }}
      required={required}>
      <InputLabel
        style={{ transform: 'initial', position: 'relative', marginBottom: 5 }}
        id={`${generateSlug(formName)}-label`}>
        {label}
      </InputLabel>
      <ColorPicker
        value={meta.value}
        onChange={(val) => {
          helpers.setValue(val)
          onChange && onChange(val)
        }}
        defaultValue='transparent'
      />
      <FormHelperText>{meta.error ?? helperText}</FormHelperText>
    </FormControl>
  )
}

export default ColorInput

interface Props {
  name: string
  index?: number
  subName?: string
  onChange?: any
  label: string
  required?: boolean
  helperText?: string
}
