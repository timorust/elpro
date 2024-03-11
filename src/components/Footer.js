import React from 'react'
import {
	FaFacebookF,
	FaHome,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'

import { ImGithub } from 'react-icons/im'
import { logoLight, logoPayment } from '../assets'

const Footer = () => {
	return (
		<div className='bg-[#003566] text-[#949494] py-20 font-titleFont'>
			<div className='max-w-screen-xl mx-auto'>
				<div className='flex flex-col gap-7'>
					<img className='w-12' src={logoLight} alt='logoLight' />
					<p className='text-white text-sm tracking-wide'>@TimoRUST.com</p>
					<img className='w-56' src={logoPayment} alt='logoPayment' />

					<div className='flex gap-5 text-lg text-gray-400'>
						<ImGithub className='hover:text-white duration-300 cursor-pointer' />

						<FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
						<FaTwitter className='hover:text-white duration-300 cursor-pointer' />
						<FaInstagram className='hover:text-white duration-300 cursor-pointer' />
						<FaYoutube className='hover:text-white duration-300 cursor-pointer' />
						<FaHome className='hover:text-white duration-300 cursor-pointer' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
