import clsx from 'clsx'
import s from './index.module.scss'

interface WorkerItemProps {
	avatar: string
	name: string
	kind?: 'accent' | 'normal'
	shortName?: boolean
}

export default function WorkerItem({
	avatar,
	name,
	kind = 'normal',
	shortName = false,
}: WorkerItemProps) {
	const finalName = shortName ? cutLastName(name) : name

	return (
		<div className={clsx(s.worker, s[kind])}>
			<div className={s.worker__avatar}>
				{avatar && <img src={avatar} alt={name} />}
			</div>
			<span className={s.worker__name}>{finalName}</span>
			{/* <span></span> */}
		</div>
	)
}

function cutLastName(name: string): string {
	const regex = /^(\S+\s)(\S+)\b/
	const shortenedName = name.replace(regex, (match, first, last) => {
		return `${first}${last.charAt(0)}.`
	})
	return shortenedName
}
