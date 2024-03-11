import React from 'react'
import ProductsCard from './ProductsCard'

const Products = () => {
	return (
		<div className='py-10'>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
					Shope
				</h1>

				<span className='w-20 h-[3px] bg-black'></span>

				<p className='max-w-[700px] text-gray-600 text-center'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
					culpa maxime illo! Aut, amet culpa! Quaerat libero repellendus
					doloribus amet nulla voluptatum. Excepturi ipsam, sapiente nam modi
					eligendi porro cumque officia quos sequi necessitatibus dolorum nemo
					eius tempora quaerat ea numquam id quia sunt. Incidunt numquam iure
					accusamus aut. Placeat!
				</p>
			</div>

			<div className='max-w-screen-xl mx-auto'>
				<ProductsCard />
			</div>
		</div>
	)
}

export default Products
