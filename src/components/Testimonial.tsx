// components/Testimonials.tsx
'use client'; // Required for using hooks in Next.js

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Testimonial {
    logo: string;
    feedback: string;
    company: string;
}

const testimonials: Testimonial[] = [
    {
        logo: '/images/perkup.png', // Update with correct path to PerkUp logo
        feedback: '"He consistently exceeds our expectations"',
        company: '',
    },
    {
        logo: '/images/user.avif', // Update with correct path to the second logo
        feedback: '"Lead design department successfully and built us a scalable design system"',
        company: '',
    },
    {
        logo: '/path-to-season-logo.svg', // Update with correct path to Season logo
        feedback: '"Loved to work with Goran, great communication!"',
        company: '',
    },
];

const Testimonials: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div className="w-full  relative flex ">
          <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Start off invisible and below
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8 }} // Customize animation duration
            className="px-8 py-12 w-full relative text-xl bg-gray-50"
        >
            <div className="flex flex-col w-full lg:grid lg:grid-cols-3 justify-center gap-12">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="lg:h-20 flex items-center justify-center lg:w-[243px]">
                            {index === 2 ? (
                                <div className="text-5xl recoleta">Season</div>
                            ) : (
                                <Image
                                    src={testimonial.logo}
                                    width={60}
                                    height={40}
                                    alt={`${testimonial.company} logo`}
                                    className="h-16 w-auto mb-6"
                                />
                            )}
                        </div>

                        <p className="lg:text-xl font-light text-gray-600 mb-4">
                            {testimonial.feedback}
                        </p>
                        <p className="text-lg font-semibold text-gray-800">
                            {testimonial.company}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
      </div>
    );
};

export default Testimonials;
