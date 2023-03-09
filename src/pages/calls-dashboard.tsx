import Filters from 'components/filters'
import Player from 'components/player'
import Table from 'components/table'
import { useEffect, useState } from 'react'
import { useCallsStore } from 'store/calls'
import calls from '../mock.json'
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

	return await res.json()
}

export default function CallsDashboard() {
	const { setCalls } = useCallsStore()
	// const [calls, setCalls] = useState([])

	// useEffect(() => {
	// 	getCalls().then(setCalls)
	// }, [])

	useEffect(() => {
		setCalls(calls.results)
	}, [])

	return (
		<div className={s.wrapper}>
			<Player callId="MToxMDA2NzYxNToxNDMwMDM3NzExNzow" partnershipId={578} />
			<Filters />
			<Table />
		</div>
	)
}
