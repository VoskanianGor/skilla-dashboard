import SearchIcon from 'assets/icons/search.svg'
import ProgressBar from 'components/progress-bar'
import Stat from 'components/stat'
import UserDropdown from 'components/user-dropdown'
import { useState } from 'react'
import s from './index.module.scss'
import { statData } from './stat-data'
import { userData } from './user-data'

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
	return (
		<header className={s.header}>
			<div className={s.date}>{capitalizeFirstLetter(formattedDate)}</div>

			<div className={s.statWrapper}>
				{statData.map((item, index) => (
					<Stat key={index} {...item} />
				))}
			</div>

			<SearchIcon />
			<div className={s.username}>{userData.name}</div>
			<div className={s.avatar} />
			<UserDropdown {...userData} />
		</header>
	)
}
