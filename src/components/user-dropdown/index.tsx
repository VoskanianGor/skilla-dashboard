import PhoneIcon from 'assets/icons/calls.svg'
import LoginIcon from 'assets/icons/login.svg'
import LogoutIcon from 'assets/icons/logout.svg'
import MailIcon from 'assets/icons/mail.svg'
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownLabel,
	DropdownSeparator,
} from 'components/dropdown'
import WorkerItem from 'components/worker-item'
import s from './index.module.scss'

interface UserDropdownProps {
	name: string
	phone: string
	email: string
	city: string
	position: string
}

export default function UserDropdown({
	name,
	email,
	phone,
	city,
	position,
}: UserDropdownProps) {
	return (
		<Dropdown>
			<DropdownContent
				className={s.dropdown__content}
				align="end"
				topOffset={50}
			>
				<div className={s.user}>
					<div className={s.user__header}>
						<span className={s.user__name}>Упоров Кирилл</span>
						<button className={s.logout}>
							<LogoutIcon />
						</button>
					</div>
					<div className={s.user__info}>
						<span className={s.user__position}>Директор</span>
						<div className={s.dot} />
						<span className={s.user__city}>Санкт-Петербург</span>
					</div>
					<div className={s.user__contacts}>
						<div className={s.contact}>
							{/* @ts-ignore */}
							<PhoneIcon className={s.contact__icon} />
							<span className={s.user__phone}>8 (800) 333-17-21</span>
						</div>
						<div className={s.contact}>
							{/* @ts-ignore */}
							<MailIcon className={s.contact__icon} />
							<span className={s.user__email}>hi@skilla.ru</span>
						</div>
					</div>
					<DropdownSeparator />
				</div>
				<DropdownLabel>Операторы</DropdownLabel>
				<DropdownItem>
					<WorkerItem avatar="" name="alice doe" shortName />
					icon
				</DropdownItem>
				<DropdownItem>
					<WorkerItem kind="accent" avatar="" name="Mihael Jared" />
					<LoginIcon />
				</DropdownItem>
			</DropdownContent>
		</Dropdown>
	)
}
