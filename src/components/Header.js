import React from 'react'
import { cardImg, logoDark, logoUser } from '../assets'

const Header = () => {
	return (
		<div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
			<div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
				<div>
					<img className='w-14' src={logoDark} alt='logoDark' />
				</div>

				<div>
					<div className='flex items-center gap-8'>
						<ul className='flex items-center gap-8'>
							<li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
								Home
							</li>
							<li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
								Pages
							</li>
							<li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
								Shop
							</li>
							<li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
								Element
							</li>
							<li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
								Blog
							</li>
						</ul>
						<div className='relative'>
							<img className='w-12' src={cardImg} alt='cardImg' />
							<span className='absolute w-6 top-5 left-3 text-sm flex items-center justify-center font-semibold'>
								0
							</span>
						</div>
						<img
							className='w-8 h-8 rounded-full'
							src={logoUser}
							alt='logoUser'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
