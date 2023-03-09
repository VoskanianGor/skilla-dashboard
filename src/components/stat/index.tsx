import ProgressBar from 'components/progress-bar'
import s from './index.module.scss'

interface StatProps {
	text: string
	stat: string
	progress: number
	color: 'green' | 'yellow' | 'red'
}

export default function Stat({ text, stat, progress, color }: StatProps) {
	return (
		<div className={s.stat}>
			<div className={s.text}>
				<span>{text}</span>
				<span style={{ color: `var(--c-${color})` }}>{stat}</span>
			</div>
			<ProgressBar color={`var(--c-${color})`} progress={progress} />
		</div>
	)
}
