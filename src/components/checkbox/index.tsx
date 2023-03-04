import { useId } from 'react'
import s from './index.module.scss'

export default function Checkbox() {
	const checkboxId = useId()

	return (
		<>
			<input className={s.actualCheckbox} id={checkboxId} type="checkbox" />
			<label className={s.checkbox} htmlFor={checkboxId} />
		</>
	)
}
