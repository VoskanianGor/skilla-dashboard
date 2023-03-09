import { Call } from 'types/calls'
import { proxy } from 'valtio'
import { useSnapshot } from 'valtio/react'
import { callsStore } from './calls'

export type FilterIds =
	| 'types'
	| 'workers'
	| 'calls'
	| 'sources'
	| 'results'
	| 'errors'

export type Filter = {
	id: FilterIds
	label: string
}

export const filtersData: Filter[] = [
	{
		id: 'types',
		label: 'Все типы',
	},
	{
		id: 'workers',
		label: 'Все сотрудники',
	},
	{
		id: 'calls',
		label: 'Все звонки',
	},
	{
		id: 'sources',
		label: 'Все источники',
	},
	{
		id: 'results',
		label: 'Все оценки',
	},
	{
		id: 'errors',
		label: 'Все ошибки',
	},
]

export const filterStore = proxy({
	filters: filtersData,
	setLabel: (id: FilterIds, label: string) => {
		const filter = filterStore.filters.find(item => item.id === id)

		if (filter) {
			filter.label = label
		}
	},
	getInitialLabel: (id: FilterIds) => {
		const filter = filtersData.find(item => item.id === id)

		return filter?.label || ''
	},
	filterByType: (type?: number) => {
		if (type === -1) {
			callsStore.setFilteredCalls(callsStore.calls)

			return
		}

		callsStore.setFilteredCalls(
			callsStore.calls.filter(call => call.in_out === type)
		)
	},
	filterByWorker: (workerId?: number) => {
		if (workerId === -1) {
			callsStore.setFilteredCalls(callsStore.calls)

			return
		}

		callsStore.setFilteredCalls(
			callsStore.calls.filter(call => call.person_id === workerId)
		)
	},
})

export const useFilterStore = () => useSnapshot(filterStore)
