import SideBar from './components/side-bar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<header>header</header>
			<SideBar />
			<main>{children}</main>
		</div>
	)
}
