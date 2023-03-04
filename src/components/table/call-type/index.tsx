import CallInIcon from 'assets/icons/call-in.svg'
import CallOutIcon from 'assets/icons/call-out.svg'
import type { Call } from 'types/calls'
import s from './index.module.scss'

interface CallTypeProps {
	in_out: Call['in_out']
	status: Call['status']
}

export default function CallType({ in_out, status }: CallTypeProps) {
	const className = status === 'Дозвонился' ? s.success : s.error

	return (
		<div className={className}>
			{in_out === 1 ? <CallInIcon /> : <CallOutIcon />}
		</div>
	)
}
