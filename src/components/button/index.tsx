import AddIcon from 'assets/icons/add.svg'
import AlertIcon from 'assets/icons/alert.svg'
import clsx from 'clsx'
import s from './index.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	size?: 'small' | 'large'
	kind?: 'primary' | 'outline' | 'link'
	icon?: 'add' | 'alert'
}

const icons = {
	add: <AddIcon />,
	alert: <AlertIcon />,
}

export default function Button({
	children,
	icon,
	kind = 'primary',
	size = 'large',
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(s.button, s[kind], s[size], props.className, {
				[s.withIcon]: icon,
			})}
			{...props}
		>
			<span>{children}</span>
			<span className={s.icon}>{icon && icons[icon]}</span>
		</button>
	)
}
