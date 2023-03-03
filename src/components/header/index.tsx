import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownSeparator,
} from 'components/dropdown'
import ProgressBar from 'components/progress-bar'
import UserDropdown from 'components/user-dropdown'
import { useState } from 'react'
import s from './index.module.scss'

const date = new Date()
const formatter = new Intl.DateTimeFormat('ru-RU', {
	weekday: 'long',
	day: 'numeric',
	month: 'short',
})
const formattedDate = formatter.format(date).replace(/\.\s*$/, '') // delete last dot

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function Header() {
	const [selected, setSelected] = useState(false)
	return (
		<header className={s.header}>
			<div className={s.date}>{capitalizeFirstLetter(formattedDate)}</div>

			<div className={s.statWrapper}>
				<div className={s.stat}>
					Новые звонки <span>20 из 30 шт</span>
					<ProgressBar color="var(--c-green)" percent={40} />
				</div>
				<div className={s.stat}>
					Качество разговоров <span>40%</span>
					<ProgressBar color="var(--c-yellow)" percent={40} />
				</div>
				<div className={s.stat}>
					Конверсия в заказ <span>67%</span>
					<ProgressBar color="var(--c-red)" percent={50} />
				</div>
			</div>
			<div>ИП Сидорова Александра Михайловна</div>
			<div className={s.avatar} />
			<UserDropdown />
		</header>
	)
}
