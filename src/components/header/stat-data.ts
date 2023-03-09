interface StatData {
	text: string
	stat: string
	progress: number
	color: 'green' | 'yellow' | 'red'
}

export const statData = [
	{
		text: 'Новые звонки',
		stat: '20 из 30 шт',
		progress: 30,
		color: 'green',
	},
	{
		text: 'Качество разговоров',
		stat: '40%',
		progress: 40,
		color: 'yellow',
	},
	{
		text: 'Качество разговоров',
		stat: '67%',
		progress: 67,
		color: 'red',
	},
] satisfies StatData[]
