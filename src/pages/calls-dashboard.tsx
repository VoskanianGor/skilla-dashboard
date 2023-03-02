import { useEffect, useState } from 'react'
import calls from '../mock.json'

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
	// const [calls, setCalls] = useState([])

	// useEffect(() => {
	// 	getCalls().then(setCalls)
	// }, [])

	return <div className="App">{JSON.stringify(calls)}</div>
}
