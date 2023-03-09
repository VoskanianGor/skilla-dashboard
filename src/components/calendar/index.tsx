import ArrowIcon from 'assets/icons/arrow_down.svg'
import CalendarIcon from 'assets/icons/calendar.svg'
import s from './index.module.scss'

export default function Calendar() {
	return (
		<div className={s.wrapper}>
			<button className={s.arrowButton}>
				<ArrowIcon />
			</button>

			<div className={s.date}>
				<CalendarIcon />
				<button className={s.dateButton}>3 дня</button>
			</div>

			<button className={s.arrowButton}>
				<ArrowIcon />
			</button>
		</div>
	)
}
