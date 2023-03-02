import LogoIcon from 'assets/icons/logo.svg?inline'
import s from './index.module.scss'
import { navigationData } from './navigation-data'

function isActive(path: string) {
	return path === '/calls' ? s.active : ''
}

export default function SideBar() {
	return (
		<aside className={s.sideBar}>
			<a className={s.logo} href="/">
				<img src={LogoIcon} alt="Skilla IS" />
			</a>
			<nav className={s.nav}>
				{navigationData.map(({ title, path, Icon }) => (
					<li className={s.nav__item + ' ' + isActive(path)}>
						<a className={s.nav__link} key={title} href={path}>
							{/* @ts-ignore */}
							<Icon className={s.nav__icon} />
							{title}
						</a>
					</li>
				))}
			</nav>
		</aside>
	)
}
