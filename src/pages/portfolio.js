import '../App.css';
// import './index.css';
import { FaArrowRight } from "react-icons/fa"
// eslint-disable-next-line
import {Header} from '../components/Header'
import {Herosection} from '../components/Herosection'
import {Heading} from '../components/heading'
import {Subheading} from '../components/Subheadings'
import {Card} from '../components/card'
import {Footer} from '../components/footer'
import serviceIconOne from "../components/assests/images/img two/Vector.png";
import serviceIconTwo from "../components/assests/images/img two/software.png";
import serviceIconThree from "../components/assests/images/img two/consult.png";
// eslint-disable-next-line
import {Routes, Route} from 'react-router-dom'
import React, { useState } from "react";
import {Allproject} from '../components/allprojects'
import {Mobilesolution} from '../components/mobilesolution'
import {Webprojects} from '../components/websolution'
import {Design} from '../components/designproject'
import {Button} from '../components/button'


export const Portfolio = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (

    <>

      {/*hero section start */}
    <section>
    <div className='lg:px-16 px-6  h-[90vh] bg-bg-port bg-no-repeat bg-origin-border bg-center bg-cover flex justify-center text-left flex-col'>
    <div className="text-white w-[95%] md:w-full">
    
    <h3 className="text-[2em] font-bold lg:text-[3em] xl:text-[3.4em]">Some Clients We've Worked With</h3>
    <p className="text-gray-100 mt-4 lg:text-[1.2em] sm:w-[28rem] lg:w-[30rem]">We provide the prefect blend of people and technology. Our approach to problem-solving & strategic planing will help you deliver exceptional services</p>
    <a href="/contact"><button className="text-left border-2 border-[#07a6c6] mt-6 px-6  cursor-pointer font-bold py-2 rounded-full"> Contact Us </button></a>

    </div>
    </div>
    </section>

      {/*hero section end */}


    <div className="lg:px-16 bg-service-section bg-cover  bg-no-repeat px-6 py-16">

    <div className="md:flex md:justify-center md:gap-[1.5rem]">

    <div className="border-2 text-gray-800 border-[#07a6c6] mt-6 px-6  cursor-pointer font-bold py-2 rounded-full  w-[fit-content]" onClick={() => handleTabClick(0)} >
    All
    </div>

    <div className="border-2 text-gray-800 border-[#07a6c6] mt-6 px-6  cursor-pointer font-bold py-2 rounded-full  w-[fit-content]"onClick={() => handleTabClick(1)} >
    Mobile Solution
    </div>

    <div className="border-2 text-gray-800 border-[#07a6c6] mt-6 px-6  cursor-pointer font-bold py-2 rounded-full  w-[fit-content]"  onClick={() => handleTabClick(2)} >
    Web Solution
    </div>

    <div className="border-2 text-gray-800 border-[#07a6c6] mt-6 px-6  cursor-pointer font-bold py-2 rounded-full  w-[fit-content]" onClick={() => handleTabClick(3)} >
    Design
    </div>
    </div>

    <div className="md:mt-16">
    {selectedTab === 0 && <p>

    <Allproject />
    </p>}



    {selectedTab === 1 && <div><Mobilesolution /></div>}
    {selectedTab === 2 && <p><Webprojects /></p>}
    {selectedTab === 3 && <p><Design /></p>}
    </div>
    </div>

    <section className="bg-white text-center lg:px-16 py-16 px-6 bg-white ">

    <h3 className="text-primary text-2xl lg:text-4xl font-extrabold mb-2"> Do you have a dream?</h3>

    <h5 className="text-gray-800 lg:text-[1.2em] md:w-[29em] ml-[auto] mr-[auto] mt-5">Allow us bring your dreams to life. We are ready to listen to your need and proffer solutions in different areas of technology and business</h5>
    <Button action="Get In Touch" />
    </section>

    </>
    );
};

