import React, {useState} from 'react';
import { FaAlignLeft } from "react-icons/fa";

export const Header = () => {

	
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleNavToggle = () => {
		setIsNavOpen(!isNavOpen);
	}

	return(
		<div>
		<header className="px-6  lg:hidden flex justify-between items-center py-8 lg:px-16">
			{/*mobile view */}
		<a href="/"><img  src={require("./assests/images/logo.png") } className="w-[3.8em]" alt="logo" /></a>
		
		{ isNavOpen && <ul className="absolute top-[6rem] bg-white w-[100%] left-[0] pb-3 pl-[1.75rem]" id="navLinksContainer">
		<li className="cursor-pointer pb-3"><a href="/">Home</a></li>
		<li className="cursor-pointer pb-3"><a href="/about">About Us</a></li>
		<li className="cursor-pointer pb-3"><a href="/solutions">Solutions</a></li>
		<li className="cursor-pointer pb-3"><a href="/portfolio">Portfolio</a></li>
		<a href="/programs"><li className="cursor-pointer pb-3">Programs</li></a>
		<a href="/Contact"><button className="border-2  pb-3 border-[#07a6c6] rounded-full py-2 px-6 text-primary cursor-pointer text-bold">Contact</button></a>

		</ul> }
		<div id="navbar" onClick={handleNavToggle}><FaAlignLeft size={'1.5em'}  /></div>
\
		</header>

		<header className="px-6 hidden lg:block justify-between py-4 lg:px-16 lg:text-[1.2em]">
			{/*desktop view */}

		<div className="flex justify-between items-center">
		<a href="/"><img  src={require("./assests/images/logo.png") } className="w-[3.8em]" alt="logo" /></a>
		<ul className="flex gap-[1.32em] text-gray-800">
		<li className="cursor-pointer"><a href="/">Home</a></li>
		<li className="cursor-pointer"><a href="/about">About Us</a></li>
		<li className="cursor-pointer"><a href="/solutions">Solutions</a></li>
		<li className="cursor-pointer"><a href="/portfolio">Portfolio</a></li>
		<li className="cursor-pointer"><a href="/programs">Programs</a></li>
		</ul>
		<a href="/Contact"><button className="border-2 border-[#07a6c6] rounded-full py-2 px-6 text-primary cursor-pointer text-bold">Contact</button></a>
		</div>
		</header>
		</div>
		)
	}
