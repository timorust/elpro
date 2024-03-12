import React from 'react'
import {
	FaFacebookF,
	FaHome,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

import { BsPaypal, BsPersonFill } from 'react-icons/bs'

import { ImGithub } from 'react-icons/im'
import { logoLight, logoPayment } from '../assets'

const Footer = () => {
	return (
		<div className='bg-[#003566] text-[#949494] py-20 font-titleFont'>
			<div className='max-w-screen-xl mx-auto grid grid-cols-4'>
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

				<div>
					<h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
					<div className='text-base flex flex-col gap-2'>
						<p>Firs Name, Last Name</p>
						<p>Mobile, 00000000</p>
						<p>Phone, 0000000000</p>
						<p>e-mail, t@.com</p>
					</div>
				</div>

				<div>
					<h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
					<div className='text-base flex flex-col gap-2'>
						<p className='flex items-center gap-3 hover:text-white duration-300 cursor pointer '>
							<span>
								<BsPersonFill />
							</span>
							my account
						</p>
						<p className='flex items-center gap-3 hover:text-white duration-300 cursor pointer '>
							<span>
								<BsPaypal />
							</span>
							checkout
						</p>
						<p className='flex items-center gap-3 hover:text-white duration-300 cursor pointer '>
							<span>
								<FaHome />
							</span>
							order tracking
						</p>
						<p className='flex items-center gap-3 hover:text-white duration-300 cursor pointer '>
							<span>
								<MdLocationOn />
							</span>
							halp & support
						</p>
					</div>
				</div>

				<div className='flex flex-col justify-center'>
					<input
						type='text'
						className='bg-transparent border px-4 text-sm'
						placeholder='email...'
					/>
					<button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
