import Header from './components/header'
import SideBar from './components/side-bar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="layout">
			<Header />
			<SideBar />
			{/* <main>{children}</main> */}
		</div>
	)
}
