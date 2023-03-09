import { Dropdown, DropdownContent, DropdownItem } from 'components/dropdown'
import { useMemo } from 'react'
import { useCallsStore } from 'store/calls'
import { FilterIds, useFilterStore } from 'store/filter'
import { Call } from 'types/calls'
import s from './index.module.scss'

interface FilterOptions {
	/**
	 * 0 - outgoing, 1 - incoming, -1 - all
	 */
	filterTypeArgument?: 0 | 1 | -1
	filterWorkerArgument?: number
}

export default function Filters() {
	const { calls } = useCallsStore()
	const { filters, setLabel, getInitialLabel, filterByType, filterByWorker } =
		useFilterStore()

	const items = useMemo(
		() =>
			({
				types,
				workers: getWorkers(calls as Call[]),
				calls: callsFilter,
				sources: getSources(calls as Call[]),
				results: [],
				errors,
			} as const),
		[calls]
	)

	const handleFilter = (id: FilterIds, options: FilterOptions) => {
		setLabel(id, getInitialLabel(id))

		switch (id) {
			case 'types':
				filterByType(options.filterTypeArgument)
				break
			case 'workers':
				filterByWorker(options.filterWorkerArgument)
		}
	}

	return (
		<div className={s.filters}>
			{filters.map(({ id, label }) => (
				<div className={s.filter} key={id}>
					<span className={s.label}>{label}</span>
					<Dropdown className={s.dropdown}>
						<DropdownContent className={s.content}>
							<DropdownItem
								className={s.item}
								onClick={() =>
									handleFilter(id, {
										filterTypeArgument: -1,
										filterWorkerArgument: -1,
									})
								}
							>
								{getInitialLabel(id)}
							</DropdownItem>
							{items[id].map((item, index) => (
								<DropdownItem
									className={s.item}
									onClick={() =>
										handleFilter(id, {
											filterTypeArgument: item.id === 'incoming' ? 1 : 0,
											filterWorkerArgument: item.id as number,
										})
									}
									key={index}
								>
									{item.content}
								</DropdownItem>
							))}
						</DropdownContent>
					</Dropdown>
				</div>
			))}
		</div>
	)
}

interface FilterItem {
	id: string
	content: any
}

interface Worker extends Omit<FilterItem, 'id'> {
	id: number
	name: string
	avatar: string
}

function getWorkers(calls: Call[]) {
	const workers = [] as Worker[]

	calls.forEach(call => {
		const worker = workers.find(w => w.id === call.person_id)
		const name = `${call.person_name} ${call.person_surname}`

		if (!worker) {
			workers.push({
				id: call.person_id,
				name,
				avatar: call.person_avatar,
				content: name,
			})
		}
	})

	return workers
}

function getSources(calls: Call[]) {
	const sources = [] as FilterItem[]

	calls.forEach(call => {
		if (call.source === '') return

		const source = sources.find(s => s.id === call.source)

		if (!source) {
			sources.push({
				id: call.source,
				content: call.source,
			})
		}
	})

	return sources
}

const errors = [
	{
		id: 'greetings',
		content: 'Приветствие',
	},
	{
		id: 'name',
		content: 'Имя',
	},

	{
		id: 'price',
		content: 'Цена',
	},
	{
		id: 'discount',
		content: 'Скидка',
	},
	{
		id: 'order',
		content: 'Предзаказ',
	},
	{
		id: 'thank',
		content: 'Благодарность',
	},
	{
		id: 'stop',
		content: 'Стоп слова',
	},
] as const

const types = [
	{
		id: 'incoming',
		content: 'Входящие',
	},
	{
		id: 'outgoing',
		content: 'Исходящие',
	},
] as const

const callsFilter = [
	{
		id: 'all_clients',
		content: 'Все клиенты',
	},
	{
		id: 'new_clients',
		content: 'Новые клиенты',
	},
	{
		id: 'all_executors',
		content: 'Все исполнители',
	},
	{
		id: 'app',
		content: 'Через приложение',
	},
	{
		id: 'others',
		content: 'Прочие звонки',
	},
] as const
