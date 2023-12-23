import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'
import './scss/app.scss'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Partners from './pages/Partners'
import News from './pages/News'
import Footer from './components/Footer'
import { ContextProvider } from './context/ContextProvider'

function App() {
	const Layout = () => {
		return (
			<div className='main'>
				<ContextProvider>
					<SideBar isVisible={true} />
					<div className='main-container'>
						<Header />
						<Outlet />
						<Footer />
					</div>
				</ContextProvider>
			</div>
		)
	}

	const router = createBrowserRouter([
		{
			path: '*',
			element: <Home />,
		},
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/news',
					element: <News />,
				},
				{
					path: '/partners',
					element: <Partners />,
				},
				{
					path: '/rules',
					element: <Rules />,
				},
			],
		},
	])

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}
export default App
