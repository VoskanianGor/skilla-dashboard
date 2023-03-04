import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
import type { Call } from 'types/calls'
import convertMinutesToHoursAndMinutes from 'utils/convert-minutes-to-hour-and-minutes'
import formatPhoneNumber from 'utils/format-phone-number'
import data from '../../mock.json'
import CallType from './call-type'
import s from './index.module.scss'

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
		cell: info => (
			<PhoneOrName
				phone={info.getValue()}
				name={info.row.original.contact_name}
				company={info.row.original.contact_company}
			/>
		),
		size: 326,
	}),
	columnHelper.accessor('source', {
		header: 'Источник',
		size: 214,
	}),
	columnHelper.accessor('status', {
		header: 'Оценка',
		size: 461,
	}),
	columnHelper.accessor('time', {
		header: 'Длительность',
		cell: info => (
			<span className={s.time}>
				{convertMinutesToHoursAndMinutes(info.getValue())}
			</span>
		),
		size: 90,
	}),
]

export default function Table() {
	const { getHeaderGroups, getRowModel } = useReactTable({
		data: data.results as Call[],
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div className={s.tableWrapper}>
			<table className={s.table}>
				<thead className={s.header}>
					{getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
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

interface PhoneOrNameProps {
	phone: string
	name?: string
	company?: string
}

function PhoneOrName({ phone, name, company }: PhoneOrNameProps) {
	if (!name || !company) {
		return <span>{formatPhoneNumber(phone)}</span>
	}

	return (
		<span>
			{name} <span className={s.company}>{company}</span>
		</span>
	)
}
