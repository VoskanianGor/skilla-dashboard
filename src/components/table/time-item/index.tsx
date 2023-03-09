import Player, { type PlayerProps } from 'components/player'
import formatTime from 'utils/format-time'
import s from './index.module.scss'

interface TimeItemProps extends PlayerProps {
	time: number
}

export default function TimeItem({
	time,
	callId,
	partnershipId,
}: TimeItemProps) {
	if (!callId) {
		return <span className={s.time}>{formatTime(time)}</span>
	}

	return (
		<div className={s.timeItem}>
			<span className={s.time} data-id="record-time">
				{formatTime(time)}
			</span>
			<div className={s.player} data-id="record-player">
				<Player
					callId={callId}
					partnershipId={partnershipId}
					externalDuration={time}
				/>
			</div>
		</div>
	)
}
