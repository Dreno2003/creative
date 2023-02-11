import '../App.css';
// import './index.css';
import { FaArrowRight } from "react-icons/fa"
// eslint-disable-next-line
import {Header} from '../components/Header'
import {Heading} from '../components/heading'
import {Subheading} from '../components/Subheadings'
import {Card} from '../components/card'
import profileOne from "../components/assests/images/profile1.jpg";
import serviceIconTwo from "../components/assests/images/img two/software.png";
import serviceIconThree from "../components/assests/images/img two/consult.png";
import React, { useState } from 'react';
import {Button} from "../components/button"
import { FaFacebookSquare,FaLinkedin,FaTwitter } from "react-icons/fa";


export const About = () =>  {



  return (
    <> 
    <section>
    <div className='lg:px-16 px-6 h-[90vh] bg-bg-about bg-no-repeat bg-origin-border bg-center bg-cover flex justify-center text-left flex-col'>
    <div className="text-white w-[95%] md:w-full">

    <h3 className="text-[2em] font-bold lg:text-[3em] xl:text-[3.4em]">About Us</h3>
    <p className="text-gray-100 mt-2 lg:text-[1.2em] sm:w-[28rem] lg:w-[30rem]">We provide the prefect blend of people and technology. Our approach to problem-solving & strategic planing will help you deliver exceptional services</p>

    </div>
    </div>
    </section>


    <section id="whyus_section" className="lg:px-16 px-6 py-16 bg-service-section bg-cover bg-repeat text-gray-800">

    <div className="md:flex md:justify-between md:gap-11">
    <img src={require("../components/assests/images/storyimg.png") } className="mb-5 min-w-full md:min-w-[53%]" alt=""/>
    <div>
    <h3 className="font-extrabold text-2xl mb-4 mt-10 md:text-4xl">OUR STORY</h3>
    <p className="text-gray-800 lg:text-[1.2em]">Unik Creative Technologies is a full-service agency that provides a range of design and software development services as well as training in these areas to clients in Africa. Our team is made up of highly skilled and experienced professionals who are passionate about delivering high-quality work to our clients. We use a collaborative approach to ensure that our clients are fully involved in the design and development process and that their needs and expectations are met. We have a proven track record of success and are confident in our ability to continue delivering exceptional results in the future.</p>

    </div>
    </div>
    <Button action="Get in touch" />
    </section>

    <section className="bg-bg-val text-gray-100 px-6 py-16 lg:px-16">
    <div>
    <div className="mb-5 md:flex md:justify-between md:items-center md:gap-[2em]">
    <div className="bg-green-400 text-gray-800 p-5 py-6 mb-5 lg:flex-col lg:flex lg:justify-center lg:h-[21em] xl:w-[45em] xl:px-10">
    <h3 className="font-bold text-xl mb-4">Our Mission</h3>
    <p className="text-gray-700">Our mission at UCT is to use technology to drive positive change in Africa by helping businesses and organizations solve problems and achieve their goals through the use of innovative software solutions and expert design and development skills. We understand that many African communities face unique challenges and we are committed to delivering customized software solutions that address these issues and support sustainable development.</p>
    </div>
    <img src={require("../components/assests/images/imgone.png") } className="md:max-w-[40%] md:h-[26%]" alt=""/>
    </div>

    <div className="mb-5 md:flex-row-reverse md:flex md:justify-between md:items-center md:gap-[2em]">
    <div className="bg-[#04838C] text-gray-100 p-5 lg:flex-col lg:flex lg:justify-center lg:h-[21em] py-6 mb-5 xl:w-[45em] xl:px-10">
    <h3 className="font-bold text-xl mb-4">Our Vision</h3>
    <p>Our mission at UCT is to use technology to drive positive change in Africa by helping businesses and organizations solve problems and achieve their goals through the use of innovative software solutions and expert design and development skills. We understand that many African communities face unique challenges and we are committed to delivering customized software solutions that address these issues and support sustainable development.</p>
    </div>
    <img src={require("../components/assests/images/imgtwo.png") } className="md:max-w-[40%] md:h-[26%]"  alt=""/>

    </div>
    </div>

    </section>


    <section id="service-section" className="lg:px-16 bg-service-section bg-contain bg-repeat px-6 py-16 ">
    <Heading heading="The Scrum Team" />
    <Subheading  subheading="We believe strongly in our capacity to help businesses and organisations meet their needs, using the solutions we build together, involving them every step of the way. A peep at some of our people…"/>
    
    <div className="lg:justify-center lg:flex">
    <div className="mt-14 mb-12 md:flex md:flex-wrap md:gap-11 lg:gap-6 md:justify-center lg:justify-center">
    <Card  className="bg-white" >


    <img src={require("../components/assests/images/profile1.jpg") } className="flex justify-center ml-[auto] mr-[auto] w-[7rem] h-[7rem]"  alt=""/>
    <h3 className="text-primary text-2xl text-bold pt-2 pb-1">Joseph Umoren</h3>
    <p className="text-gray-800 sm:px-[25px] text-gray-600 lg:text-[1.2em]">Product Manager / Agile Scrum master</p>
    <div className="ml-[auto] mr-[auto] flex gap-2 mt-4">
    <FaLinkedin color="#0072b1" fontSize="2rem"/>
    <FaFacebookSquare color="blue" fontSize="2rem"/> 
    <FaTwitter color="#00acee " fontSize="2rem"/>
    </div>
    </Card>

    <Card  >

    <img src={require("../components/assests/images/profile2.jpg") } className="flex justify-center ml-[auto] mr-[auto] w-[7rem] h-[7rem]"  alt=""/>
    <h3 className="text-primary text-2xl text-bold pt-2 pb-1">Emmanuel Ugbotor</h3>
    <p className="text-gray-800 sm:px-[25px] text-gray-600 lg:text-[1.2em]">Senior Software Engineer Manager</p>
    <div className="ml-[auto] mr-[auto] flex gap-2 mt-4">
    <FaLinkedin color="#0072b1" fontSize="2rem"/>
    <FaFacebookSquare color="blue" fontSize="2rem"/> 
    <FaTwitter color="#00acee " fontSize="2rem"/>
    </div>
    
    </Card>

    <Card  className="bg-white">

    <img src={require("../components/assests/images/profile.jpg") } className="flex justify-center ml-[auto] mr-[auto] w-[7rem] h-[7rem]"  alt=""/>
    <h3 className="text-primary text-2xl text-bold pt-2 pb-1">Wisdom Usa</h3>
    <p className="text-gray-800 sm:px-[25px] text-gray-600 lg:text-[1.2em]">Frontend / Blockchain Engineer</p>
    <div className="ml-[auto] mr-[auto] flex gap-2 mt-4">
    <FaLinkedin color="#0072b1" fontSize="2rem"/>
    <FaFacebookSquare color="blue" fontSize="2rem"/> 
    <FaTwitter color="#00acee " fontSize="2rem"/>
    </div>
    
    </Card>

    <Card >
    <img src={require("../components/assests/images/profile3.jpg") } className="flex justify-center ml-[auto] mr-[auto] w-[7rem] h-[7rem]"  alt=""/>
    <h3 className="text-primary text-2xl text-bold pt-2 pb-1">Moses Benjamin</h3>
    <p className="text-gray-800 sm:px-[25px] text-gray-600 lg:text-[1.2em]">Backend Developer</p>
    <div className="ml-[auto] mr-[auto] flex gap-2 mt-4">
    <FaLinkedin color="#0072b1" fontSize="2rem"/>
    <FaFacebookSquare color="blue" fontSize="2rem"/> 
    <FaTwitter color="#00acee " fontSize="2rem"/>
    </div>
    </Card>

    <Card >

    <img src={require("../components/assests/images/profile4.jpg") } className="flex justify-center ml-[auto] mr-[auto] w-[7rem] h-[7rem]"  alt=""/>
    <h3 className="text-primary text-2xl text-bold pt-2 pb-1">Abigail Oniah</h3>
    <p className="text-gray-800 sm:px-[25px] text-gray-600 lg:text-[1.2em]">Copy Writer</p>
    <div className="ml-[auto] mr-[auto] flex gap-2 mt-4">
    <FaLinkedin color="#0072b1" fontSize="2rem"/>
    <FaFacebookSquare color="blue" fontSize="2rem"/> 
    <FaTwitter color="#00acee " fontSize="2rem"/>
    </div>
    
    </Card>
    </div>
    </div>
    <div className="text-center text-primary mt-10 hidden">
    <h3 className="text-xl font-extrabold">What can we help you with today</h3>
    <Button action="Get in touch"/>
    </div>
    </section>

    <section className="bg-white text-center lg:px-16 py-16 px-6 bg-white ">

    <h3 className="text-primary text-2xl lg:text-4xl font-extrabold mb-2"> Do you have a dream?</h3>

    <h5 className="text-gray-800 lg:text-[1.2em] md:w-[29em] ml-[auto] mr-[auto] mt-5">Allow us bring your dreams to life. We are ready to listen to your need and proffer solutions in different areas of technology and business</h5>
    <Button action="Get in touch" />
    </section>



    </>
    );
}
