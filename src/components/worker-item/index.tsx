import cutLastName from 'utils/cut-last-name'
import s from './index.module.scss'

interface WorkerItemProps {
	avatar: string
	name: string
	shortName?: boolean
}

export default function WorkerItem({
	avatar,
	name,
	shortName = false,
}: WorkerItemProps) {
	const finalName = shortName ? cutLastName(name) : name

	return (
		<div className={s.worker}>
			<div className={s.worker__avatar}>
				{avatar && <img src={avatar} alt={name} />}
			</div>
			<span className={s.worker__name}>{finalName}</span>
		</div>
	)
}
