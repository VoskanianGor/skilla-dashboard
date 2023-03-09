import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
import Checkbox from 'components/checkbox'
import PhoneOrName from 'components/phone-or-name'
import { useCallsStore } from 'store/calls'
import type { Call } from 'types/calls'
import CallType from './call-type'
import s from './index.module.scss'
import TimeItem from './time-item'

const columnHelper = createColumnHelper<Call>()

const columns = [
	columnHelper.accessor('in_out', {
		header: 'Тип',
		cell: info => (
			<CallType in_out={info.getValue()} status={info.row.original.status} />
		),
		size: 53,
	}),
	columnHelper.accessor('date', {
		header: 'Время',
		cell: info =>
			new Date(info.getValue()).toLocaleTimeString(['ru-RU'], {
				hour: '2-digit',
				minute: '2-digit',
			}),
		size: 90,
	}),
	columnHelper.accessor('person_avatar', {
		header: 'Сотрудник',
		cell: info => <img className={s.image} src={info.getValue()} alt="" />,
		size: 128,
	}),
	columnHelper.accessor('to_number', {
		header: 'Звонок',
		cell: info => {
			const ctx = info.row.original

			return (
				<PhoneOrName
					phone={info.getValue()}
					name={ctx.contact_name}
					company={ctx.contact_company}
				/>
			)
		},
		size: 326,
	}),
	columnHelper.accessor('source', {
		header: 'Источник',
		size: 214,
	}),
	columnHelper.accessor('results', {
		header: 'Оценка',
		cell: info => <span></span>,
		size: 200,
	}),
	columnHelper.accessor('time', {
		header: 'Длительность',
		cell: info => {
			const ctx = info.row.original

			return (
				<TimeItem
					time={info.getValue()}
					callId={ctx.record}
					partnershipId={ctx.partnership_id}
					externalDuration={info.getValue()}
				/>
			)
		},
		size: 365,
	}),
]

export default function Table() {
	const { filteredCalls } = useCallsStore()

	const { getHeaderGroups, getRowModel } = useReactTable({
		data: filteredCalls as Call[],
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div className={s.tableWrapper}>
			<table className={s.table}>
				<thead className={s.header}>
					{getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							<th className={s.header__cell}>
								<Checkbox />
							</th>
							{headerGroup.headers.map(header => (
								<th
									className={s.header__cell}
									key={header.id}
									style={{ width: header.getSize() }}
								>
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody className={s.body}>
					{getRowModel().rows.map(row => (
						<tr className={s.table__row} key={row.id}>
							<td className={s.rowCheckbox}>
								<Checkbox />
							</td>
							{row.getVisibleCells().map(cell => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
