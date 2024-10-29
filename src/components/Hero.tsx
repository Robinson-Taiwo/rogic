"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import contra from "@/components/assets/contra.png";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative flex w-full h-fit items-center justify-center"
            style={{
                background: 'rgba(255, 255, 255, 0.4)', // Base background color for the glass effect
                backdropFilter: 'blur(15px)', // Apply blur for frosted glass effect
                WebkitBackdropFilter: 'blur(15px)', // For Safari compatibility
            }}
        >
            {/* Main content */}
            <div className="flex max-w-5xl w-full px-4 lg:px-8 gap-8 lg:mb-36 items-center lg:pt-20 pt-16  flex-col">
                <div className="rounded-full flex items-center bg-primary lg:h-24 lg:w-24  h-20  w-20 "></div>

                {/* Responsive h1 text */}
                <h1 className=" font-normal text-[#000000C0] text-4xl text-center  lg:text-[50px] lg:leading-[60px] lg:text-center lg:w-[30rem]"  style={{ fontFamily: 'var(--font-racoleta)' }}>
                    <span className="block md:hidden">Product Design Partner for your Growth and Success</span>
                    <span className="hidden md:block">Product Designer & Framer Developer</span>
                </h1>

                <p className="text-xl lg:w-[30rem] text-opacity-50 font-medium md:w-8/12 text-center lg:text-2xl text-black">
                    Over a decade of experience in building exceptional websites and digital products.
                </p>

                <Button className="text-xl cursor-pointer py-6 flex">
                    <span><Image src={contra} height={6} width={6} className="h-8 w-8" alt="contra logo" /></span>
                    <span>Hire me on Contra</span>
                </Button>
            </div>
      
        </div>
    );
};

export default Hero;
