"use client";
import React, {  } from 'react';
// import { motion, useInView } from 'framer-motion';

import { Button } from '@/components/ui/button';
import contra from "@/components/assets/contra.png";
import Image from 'next/image';

const Hero = () => {
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' }); // Only animate once when it enters the viewport

    return (
        <div className="relative flex w-full h-fit items-center justify-center"
            style={{
                background: 'rgba(255, 255, 255, 0.4)', // Base background color for the glass effect
                backdropFilter: 'blur(15px)', // Apply blur for frosted glass effect
                WebkitBackdropFilter: 'blur(15px)', // For Safari compatibility
            }}
        >
            {/* Main content */}
            <div className="flex max-w-5xl w-full px-4 lg:px-8 gap-8 lg:mb-36 items-center pt-20 flex-col">

                <div className="rounded-full flex items-center  bg-primary h-24 w-24">

                </div>

                <h1 className="font-light text-[#000000C0] text-4xl text-center  recoleta lg:text-[50px] leading-[60px] lg:text-center lg:w-[30rem] ">

                    Product Designer &
                    Framer Developer          </h1>

                <p className="text-xl lg:w-[30rem] text-opacity-50 font-medium md:w-8/12 text-center lg:text-2xl text-black   "  >Over a decade of experience in building exceptional websites and digital products.</p>

                <Button className="text-xl py-6 flex  "  >
                    <span><Image src={contra} height={6} width={6} className="h-8 w-8" alt="contra logo" /></span>
                    <span>Hire me on Contra</span> </Button>
            </div>
        </div>
    );
};

export default Hero;
