import LogoIcon from 'assets/icons/logo.svg?inline'
import clsx from 'clsx'
import Button from 'components/button'
import s from './index.module.scss'
import { navigationData } from './navigation-data'

// Fake check if link is active. Calls is alway active in this case
function isActive(path: string) {
	return path === '/calls'
}

export default function SideBar() {
	return (
		<aside className={s.sideBar}>
			<a className={s.logo} href="/">
				<img src={LogoIcon} alt="Skilla IS" />
			</a>
			<nav className={s.nav}>
				{navigationData.map(({ title, path, Icon }) => (
					<li
						className={clsx(s.nav__item, { [s.active]: isActive(path) })}
						key={title}
					>
						<a className={s.nav__link} href={path}>
							{/* @ts-ignore */}
							<Icon className={s.nav__icon} />
							{title}
						</a>
					</li>
				))}
			</nav>
			<div className={s.buttons}>
				<Button icon="add">Добавить заказ</Button>
				<Button icon="alert">Оплата</Button>
			</div>
		</aside>
	)
}
