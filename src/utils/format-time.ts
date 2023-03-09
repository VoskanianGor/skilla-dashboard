export default function formatTime(minutes: number) {
	if (minutes === 0) {
		return ''
	}

	const hours = Math.floor(minutes / 60)
	const remainingMinutes = Math.floor(minutes % 60)
	const formattedHours = hours.toString().padStart(2, '0')
	const formattedMinutes = remainingMinutes.toString().padStart(2, '0')

	return `${formattedHours}:${formattedMinutes}`
}
