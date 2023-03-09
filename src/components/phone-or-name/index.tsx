import formatPhoneNumber from 'utils/format-phone-number'
import s from './index.module.scss'

interface PhoneOrNameProps {
	phone: string
	name?: string
	company?: string
}

export default function PhoneOrName({
	phone,
	name,
	company,
}: PhoneOrNameProps) {
	if (!name || !company) {
		return <span className={s.number}>{formatPhoneNumber(phone)}</span>
	}

	return (
		<div className={s.wrapper}>
			<span className={s.name}>{name}</span>
			<span className={s.company}>{company}</span>
		</div>
	)
}
