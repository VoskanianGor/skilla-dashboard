import s from './index.module.scss'

interface ProgressBarProps {
	progress: number
	color: string
}

export default function ProgressBar({ color, progress }: ProgressBarProps) {
	const styles = {
		'--local-bg-progress': color,
		'--local-progress-percent': `${progress}%`,
	} as React.CSSProperties

	return (
		<div className={s.progressBar} style={styles}>
			<div className={s.progress}></div>
		</div>
	)
}
