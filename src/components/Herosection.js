import React from  'react'

export const Herosection = ({children}) => {
	return(
		<div className='lg:px-16 px-6 h-[90vh]  bg-hero-background bg-no-repeat bg-origin-border bg-center bg-cover flex justify-center text-left flex-col'>
		<div className="text-white w-[95%] md:w-full">
		{children}
		<h3 className="text-[2em] font-bold lg:text-[3em] xl:text-[3.4em]">Some Clients We've Worked With</h3>

		<p className="text-gray-100 mt-2 lg:text-[1.2em] sm:w-[28rem] ">We provide the prefect blend of people and technology. Our approach to problem-solving & strategic planing will help you deliver exceptional services</p>

		<a href="/about"><button className="text-left border-2 border-[#07a6c6] mt-6 px-6  cursor-pointer font-bold py-2 rounded-full"> About Us </button></a>
		</div>
		</div>
		)
}