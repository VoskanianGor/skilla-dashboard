import SearchIcon from 'assets/icons/search.svg'
import clsx from 'clsx'
import BalanceBadge from 'components/balance-badge'
import Calendar from 'components/calendar'
import Filters from 'components/filters'
import Table from 'components/table'
import { useEffect, useState } from 'react'
import { useCallsStore } from 'store/calls'
import { Call } from 'types/calls'
import s from './index.module.scss'

const startDate = '2022-01-01'
const endDate = '2022-12-31'

const getCalls = async () => {
	const res = await fetch(
		`https://api.skilla.ru/mango/getList?date_start=${startDate}&date_end=${endDate}&in_out=`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer testtoken',
			},
		}
	)

	const calls = await res.json()

	return calls.results as Call[]
}

export default function CallsDashboard() {
	const { setCalls } = useCallsStore()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getCalls()
			.then(setCalls)
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className={s.wrapper}>
			<div className={s.balanceAndDate}>
				<BalanceBadge amount={272} currency="₽" />
				<Calendar />
			</div>
			<div className={s.searchAndFilters}>
				<button className={s.searchButton}>
					<SearchIcon />
					Поиск по звонкам
				</button>
				<Filters />
			</div>
			<div
				className={clsx(s.tableWrapper, {
					[s.isLoading]: isLoading,
				})}
			>
				<Table />
			</div>
		</div>
	)
}
