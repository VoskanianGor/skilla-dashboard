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
import { Fragment } from 'react'
import s from './index.module.scss'
import { mockWorkers } from './mock-workers'

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
						<span className={s.user__name}>{name}</span>
						<button className={s.logout}>
							<LogoutIcon />
						</button>
					</div>
					<div className={s.user__info}>
						<span className={s.user__position}>{position}</span>
						<div className={s.dot} />
						<span className={s.user__city}>{city}</span>
					</div>
					<div className={s.user__contacts}>
						<div className={s.contact}>
							{/* @ts-ignore */}
							<PhoneIcon className={s.contact__icon} />
							<span className={s.user__phone}>{phone}</span>
						</div>
						<div className={s.contact}>
							{/* @ts-ignore */}
							<MailIcon className={s.contact__icon} />
							<span className={s.user__email}>{email}</span>
						</div>
					</div>
					<DropdownSeparator />
				</div>
				{mockWorkers.map(category => (
					<div className={s.workersGroup} key={category.id}>
						<DropdownLabel>{category.position}</DropdownLabel>
						{category.workers.map(worker => (
							<DropdownItem className={s.dropdownItem} key={worker.id}>
								<WorkerItem
									key={worker.id}
									avatar={worker.avatar}
									name={worker.name}
								/>
								{/* @ts-ignore */}
								<LoginIcon className={s.dropdownItem__icon} />
							</DropdownItem>
						))}
					</div>
				))}
			</DropdownContent>
		</Dropdown>
	)
}
