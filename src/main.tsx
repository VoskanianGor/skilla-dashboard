import ReactDOM from 'react-dom/client'
import Layout from './layout'
import CallsDashboard from './pages/calls-dashboard'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Layout>
		<CallsDashboard />
	</Layout>
)
