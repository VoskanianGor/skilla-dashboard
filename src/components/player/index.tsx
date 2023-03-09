import CloseIcon from 'assets/icons/close.svg'
import DownloadIcon from 'assets/icons/download.svg'
import PauseIcon from 'assets/icons/pause.svg'
import PlayIcon from 'assets/icons/play.svg'
import useInterval from 'hooks/use-interval'
import { useState } from 'react'
import formatTime from 'utils/format-time'
import s from './index.module.scss'

const getCallRecord = async (callId: string, partnershipId: string) => {
	const res = await fetch(
		`https://api.skilla.ru/mango/getRecord?record=${callId}&partnership_id=${partnershipId}`,
		{
			method: 'POST',
			headers: {
				Authorization: 'Bearer testtoken',
				'Content-type':
					'application/json, audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
				'Content-Transfer-Encoding': 'binary',
				'Content-Disposition': 'filename = "record.mp3")',
			},
		}
	)

	return await res.blob()
}

export interface PlayerProps {
	callId: string
	partnershipId: string
	externalDuration: number
}

export default function Player({
	callId,
	partnershipId,
	externalDuration,
}: PlayerProps) {
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [delay, setDelay] = useState<number | null>(null)

	const audioProgress = duration ? (currentTime / duration) * 100 : 0
	const restTime = duration ? duration - currentTime : 0

	const handlePlay = async () => {
		if (audio) {
			setIsPlaying(true)
			setDelay(1000)
			audio.play()

			return
		}

		const blob = await getCallRecord(callId, partnershipId)
		const url = URL.createObjectURL(blob)
		const receivedAudio = new Audio(url)

		receivedAudio.onloadedmetadata = () => {
			setDuration(receivedAudio.duration)
		}

		receivedAudio.onended = () => {
			setIsPlaying(false)
			setDelay(null)
			setCurrentTime(0)
		}

		setAudio(receivedAudio)
		receivedAudio.play()

		setIsPlaying(true)
		setCurrentTime(receivedAudio.currentTime)
		setDelay(1000)
	}

	const handlePause = () => {
		if (!audio) {
			return
		}

		audio.pause()
		setIsPlaying(false)
		setDelay(null)
	}

	useInterval(() => {
		if (!audio) {
			return
		}

		setCurrentTime(audio.currentTime)
	}, delay)

	return (
		<div className={s.player}>
			{formatTime(restTime > 0 ? restTime : externalDuration)}
			<button
				className={s.button}
				onClick={isPlaying ? handlePause : handlePlay}
			>
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</button>
			<input
				className={s.track}
				type="range"
				value={currentTime}
				max={duration}
				style={{
					backgroundSize: `${audioProgress}% 100%`,
				}}
			/>
			<div className={s.icons}>
				<DownloadIcon />
				{audio && <CloseIcon />}
			</div>
		</div>
	)
}
