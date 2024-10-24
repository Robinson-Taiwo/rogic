// components/HighlightedText.tsx
'use client'; // Required for using hooks in Next.js

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HighlightedText = () => {
    const ref = useRef(null);  // Create a ref for the container
    const isInView = useInView(ref, { once: true });  // Detect when it comes into view

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Start off invisible and below
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8 }} // Customize animation duration
            className="p-4 bg-gray-50 text-center lg:w-[689px] text-gray-600 font-light text-lg leading-[60.64px]"
        >
            <p className="mb-3 text-2xl">
                <span className="inline-block">Web designer and expert in</span>
                <span className="bg-white text-gray-900 font-normal text-base rounded-full px-4 py-2 mx-2 shadow-md inline-block">UX/UI Design</span>
                <span className="inline-block">with over</span>
                <span className="bg-white text-gray-900 font-normal text-base rounded-full px-4 py-2 mx-2 shadow-md inline-block">15 years</span>
                <span className="inline-block">of industry experience. Expertise extends to</span>
                <span className="bg-white text-gray-900 font-normal text-base rounded-full px-4 py-2 mx-2 shadow-md inline-block">Framer Development</span>
                <span className="inline-block">enabling me to create </span>  
                <span className="inline-block"> both aesthetically pleasing</span> 
                <span className="inline-block">and easily implementable designs.</span>
            </p>
            <p>
                <span className="inline-block">Currently works as</span>
                <span className="bg-white text-gray-900 font-normal text-base rounded-full px-4 py-2 mx-2 shadow-md inline-block">Product Designer</span>
                <span className="inline-block">at FLYR Hospitality.</span>
            </p>
        </motion.div>
    );
};

export default HighlightedText;
