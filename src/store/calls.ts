import { Call } from 'types/calls'
import { proxy, useSnapshot } from 'valtio'
import { filterStore } from './filter'

const { f } = filterStore

export const callsStore = proxy({
	calls: [] as Call[],
	filteredCalls: [] as Call[],
	setCalls: (calls: Call[]) => {
		callsStore.calls = calls
		callsStore.filteredCalls = calls
	},
	setFilteredCalls: (calls: Call[]) => {
		callsStore.filteredCalls = calls
	},
})

export const useCallsStore = () => useSnapshot(callsStore)
