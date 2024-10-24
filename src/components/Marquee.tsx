"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const toolsData = [
    {
        name: 'Notion',
        description: 'Wiki, docs and projects',
        logo: '/images/notion.svg',
    },
    {
        name: 'Figma',
        description: 'Design Tool',
        logo: '/images/figma.avif',
    },
    {
        name: 'Fathom',
        description: 'Web Analytics',
        logo: '/images/fathom.svg',
    },
    {
        name: 'Framer',
        description: 'Website Builder',
        logo: '/images/framer.avif',
    },
    {
        name: 'Relume',
        description: 'No-code AI Site Builder',
        logo: '/images/relume.avif',
    },
    {
        name: 'Webflow',
        description: 'Website Builder',
        logo: '/images/webflow.avif',
    },
    {
        name: 'ChatGPT',
        description: 'Artificial Intelligence',
        logo: '/images/chatgpt.svg',
    },
    {
        name: 'ProtoPie',
        description: 'Prototype Tool',
        logo: '/images/protopie.svg',
    },
    {
        name: 'Hotjar',
        description: 'Behaviour Tool',
        logo: '/images/hotjar.svg',
    },
    {
        name: 'VWO',
        description: 'A/B Testing',
        logo: '/images/vwo.avif',
    },
];

const MarqueeComponent: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Start from below with opacity 0
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8 }} // Animation duration
            className="relative flex w-full overflow-hidden py-5"
        >
            {/* Left Fade Effect */}
            <div className="absolute inset-y-0 left-0 pointer-events-none fade-left"></div>
            {/* Right Fade Effect */}
            <div className="absolute inset-y-0 right-0 pointer-events-none fade-right"></div>

            {/* Marquee Content */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0 flex-row space-x-6 whitespace-nowrap"
            >
                {/* Duplicate the items enough times to prevent empty spaces */}
                {[...toolsData, ...toolsData, ...toolsData].map((tool, index) => (
                    <div key={index} className="flex items-center">
                        <Image
                            src={tool.logo}
                            alt={tool.name}
                            width={50}
                            height={50}
                            className="h-12 object-contain" // Ensure images have the same height
                        />
                    </div>
                ))}
            </motion.div>

            {/* Optional: You can duplicate the same content for a continuous loop */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0 flex-row space-x-6 whitespace-nowrap"
            >
                {[...toolsData, ...toolsData, ...toolsData].map((tool, index) => (
                    <div key={index} className="flex items-center">
                        <Image
                            src={tool.logo}
                            alt={tool.name}
                            width={50}
                            height={50}
                            className="h-12 object-contain" // Ensure images have the same height
                        />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MarqueeComponent;
