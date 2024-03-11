import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const data = [
		'https://cdn.pixabay.com/photo/2016/05/28/06/47/woman-1421083_1280.jpg',
		'https://cdn.pixabay.com/photo/2017/12/20/18/42/rose-3030462_1280.jpg',

		'https://media.istockphoto.com/id/1167031517/photo/eccentric-senior-woman-portrait.jpg?s=1024x1024&w=is&k=20&c=ZISrORSB-NrxYkgoWlrFOCTvDjjp0Gpbx8EKGbTklpc=',

		'https://cdn.pixabay.com/photo/2018/05/23/18/08/ring-with-ornament-3424669_1280.png',
	]

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 3 : prev => prev - 1)
	}

	const nextSlide = () => {
		setCurrentSlide(currentSlide === 3 ? 0 : prev => prev + 1)
	}

	console.log(currentSlide)
	return (
		<div className='w-full h-auto overflow-x-hidden'>
			<div className='w-screen h-[650px] relative '>
				<div
					style={{ transform: ` translateX(-${currentSlide * 100}vw)` }}
					className='w-[400vw] h-full flex transition-transform duration-1000'
				>
					<img
						className='w-screen h-full object-cover'
						src={data[0]}
						alt='imgOne'
						loading='priority'
					/>
					<img
						className='w-screen h-full object-cover'
						src={data[1]}
						alt='imgTwo'
					/>
					<img
						className='w-screen h-full object-cover'
						src={data[2]}
						alt='imgTree'
					/>
					<img
						className='w-screen h-full object-cover'
						src={data[3]}
						alt='imgFour'
					/>
				</div>
				<div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
					<div
						onClick={prevSlide}
						className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover: cursor-pointer hover: bg-gray-700 hover: text-white active: bg-gray-900 duration300'
					>
						<FaArrowLeft />
					</div>
					<div
						onClick={nextSlide}
						className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover: cursor-pointer hover: bg-gray-700 hover: text-white active: bg-gray-900 duration300'
					>
						<FaArrowRight />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
