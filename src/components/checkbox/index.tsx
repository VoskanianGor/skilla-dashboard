import { useId } from 'react'
import s from './index.module.scss'

interface CheckboxProps {
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
	const checkboxId = useId()

	return (
		<>
			<input
				className={s.actualCheckbox}
				id={checkboxId}
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
			<label className={s.checkbox} htmlFor={checkboxId} />
		</>
	)
}
