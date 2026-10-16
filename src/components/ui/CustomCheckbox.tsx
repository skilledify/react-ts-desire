import { useId } from 'react'
import type { ChangeEvent } from 'react'
import styles from './CustomCheckbox.module.css'

interface CustomCheckboxProps {
  label: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export function CustomCheckbox({ label, checked = false, onChange }: CustomCheckboxProps) {
  const id = useId()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked)
  }

  return (
    <label className={styles.checkbox} htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.checkmark} aria-hidden="true" />
      {label}
    </label>
  )
}
