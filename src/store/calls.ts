import { Call } from 'types/calls'
import { proxy, subscribe, useSnapshot } from 'valtio'
import { filterStore } from './filter'

const { f } = filterStore

export const callsStore = proxy({
	calls: [] as Call[],
	filteredCalls: [] as Call[],
	get filteredCalls2() {
		return this.calls.filter(call => {
			Object.entries(f).every(([key, value]) => {})
		})
	},
	setCalls: (calls: Call[]) => {
		callsStore.calls = calls
		callsStore.filteredCalls = calls
	},
	setFilteredCalls: (calls: Call[]) => {
		callsStore.filteredCalls = calls
	},
})

export const useCallsStore = () => useSnapshot(callsStore)

subscribe(callsStore, () => {
	console.log('callsStore', callsStore.filteredCalls)
})
