import ArrowDownIcon from 'assets/icons/arrow_down.svg'
import clsx from 'clsx'
import useClickOutside from 'hooks/use-click-outside'
import { useId, useRef, useState } from 'react'
import s from './index.module.scss'

type DivProps = React.HTMLAttributes<HTMLDivElement>

interface DropdownProps extends DivProps {
	children: React.ReactNode
	label?: string
}

interface DropdownContentProps extends DivProps {
	children: React.ReactNode
	align?: 'start' | 'center' | 'end'
	topOffset?: number
}

interface DropdownItemProps extends DivProps {
	children: React.ReactNode
}

export function Dropdown({
	children,
	label,
	className,
	...props
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const triggerId = useId()

	useClickOutside([contentRef, dropdownRef], () => setIsOpen(false))

	const toggle = () => setIsOpen(!isOpen)

	return (
		<div className={clsx(s.dropdown, className)} ref={dropdownRef} {...props}>
			{label && <label htmlFor={triggerId}>{label}</label>}

			<button
				id={triggerId}
				className={clsx(s.arrowButton, { [s.open]: isOpen })}
				onClick={toggle}
			>
				<ArrowDownIcon />
			</button>

			{isOpen && <div ref={contentRef}>{children}</div>}
		</div>
	)
}

export function DropdownItem({
	children,
	className,
	...props
}: DropdownItemProps) {
	return (
		<div className={clsx(s.item, className)} {...props}>
			{children}
		</div>
	)
}

export function DropdownContent({
	children,
	className,
	align = 'end',
	topOffset = 0,
	...props
}: DropdownContentProps) {
	return (
		<>
			<div style={{ marginTop: topOffset }} />
			<div className={clsx(s.content, s[align], className)} {...props}>
				{children}
			</div>
		</>
	)
}

export function DropdownLabel({ children }: { children: React.ReactNode }) {
	return <div className={s.label}>{children}</div>
}

export function DropdownSeparator() {
	return <div className={s.separator} />
}
