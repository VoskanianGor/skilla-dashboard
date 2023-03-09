import BalanceAddIcon from 'assets/icons/balance-add.svg'
import s from './index.module.scss'

type Currency = '$' | '€' | '£' | '₽' | '₸' | '₺' | '₴' | '₨' | '₩'

interface BalanceBadgeProps {
	amount: number
	currency: Currency
}

export default function BalanceBadge({ amount, currency }: BalanceBadgeProps) {
	return (
		<div className={s.badge}>
			<span className={s.label}>Баланс:</span>
			<span className={s.amount}>
				{amount} {currency}
			</span>
			<button className={s.buttonAdd}>
				<BalanceAddIcon />
			</button>
		</div>
	)
}
