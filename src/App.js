import { productData } from './api/Api'
import Footer from './components/Footer'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: productData,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
])
function App() {
	return (
		<div className='font-bodyFont'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
