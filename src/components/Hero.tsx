"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import contra from "@/components/assets/contra.png";
import Image from 'next/image';
import Particles from './ui/particles';

const Hero = () => {
    return (
        <div className="relative flex w-full h-full items-center justify-center"  >

            {/* Main content */}
            <div className="flex  z-10  max-w-5xl relative w-full px-4 lg:px-8 gap-8 lg:mb-36 items-center lg:pt-20 pt-16  flex-col">
                <div className="rounded-full flex items-center lg:h-24 lg:w-24  h-20  w-20 ">
                    <Particles
                        className="absolute -z-20 inset-0"
                        quantity={15000}
                        ease={100}
                        staticity={3}
                        color={`#bf2e30`}
                        size={0.01}
                        refresh
                    />
                    <Image src="/images/boy.avif" width={24} height={24} alt="guy image" className="object-cover w-full rounded-full h-full" />
                </div>

                {/* Responsive h1 text */}
                <h1 className=" font-normal text-[#000000C0] text-4xl text-center  lg:text-[50px] lg:leading-[60px] lg:text-center lg:w-[30rem]" style={{ fontFamily: 'var(--font-racoleta)' }}>
                    <span className="block md:hidden">Product Design Partner for your Growth and Success</span>
                    <span className="hidden md:block">Product Designer & Framer Developer</span>
                </h1>

                <p className="text-xl lg:w-[30rem] text-opacity-50 font-medium md:w-8/12 text-center lg:text-2xl text-black">
                    Over a decade of experience in building exceptional websites and digital products.
                </p>

                <Button className="text-xl lg:mb-20 cursor-pointer py-6 flex">
                    <span><Image src={contra} height={6} width={6} className="h-8 w-8" alt="contra logo" /></span>
                    <span>Hire me on Contra</span>
                </Button>
            </div>

        </div>
    );
};

export default Hero;
