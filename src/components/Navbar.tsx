"use client"

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react'; // Icons for the hamburger menu
import Link from 'next/link';
// import Home from '../app/page';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (

        <div className=" flex justify-between items-center lg:px-10 px-4  py-5">
            <div className="text-xs flex  items-center flex-row gap-2 text-gray-400">
            <div className='w-2 h-2 bg-green-500 rounded-full animate-blink'></div>
            <div> OPEN FOR WORK</div>
            </div>

          

            {/* Hamburger Menu for Mobile */}
            <div className="flex flex-row lg:gap-6  gap-4 items-center">

                <Button className="bg-white  text-gray-600 hover:bg-white hover:text-gray-600 font-semibold py-5 text-base " >Start a Project</Button>

                <button onClick={toggleMobileMenu} className="focus:outline-none   text-gray-400">
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-8  text-gray-400 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 flex flex-col items-center gap-10 text-2xl  text-gray-500 lg:gap-10 font-medium  h-[93vh] py-4">


<Link href="/"  className="flex items-center justify-center font-medium  w-full"> <button className="px-6 py-2 ">Home</button></Link>
<Link href="/resources" className="flex items-center justify-center w-full">   <button className="px-6 py-2 ">Resources</button></Link>
<div className="flex items-center justify-center w-full">   <button className="px-6 py-2 ">Resume</button></div>
<div className="flex items-center justify-center w-full"> <button className="px-6 py-2 ">Email Me</button></div>
<div className="flex items-center justify-center w-full"> <button className="px-6 py-2 ">LInkedin</button></div>

                   
                 
                 
                   
                   

                </div>
            )}
        </div>
    );
};

export default Navbar;
