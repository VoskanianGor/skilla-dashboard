import s from './index.module.scss'

interface ProgressBarProps {
	percent: number
	color: string
}

export default function ProgressBar({ color, percent }: ProgressBarProps) {
	const styles = {
		'--local-bg-progress': color,
		'--local-progress-percent': `${percent}%`,
	} as React.CSSProperties

	return (
		<div className={s.progressBar} style={styles}>
			<div className={s.progress}></div>
		</div>
	)
}
