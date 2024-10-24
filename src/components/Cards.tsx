'use client';
import Image from 'next/image';
import { FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { caseStudies } from './data';

interface CardProps {
    title: string;
    description: string;
    userRetention: string;
    userSatisfaction: string;
    buttonText: string;
    tag: string;
    imageSrc: string;
    index: number;
}

// Function to get the gradient background based on the tag
const getTagGradient = (tag: string): string => {
    switch (tag.toLowerCase()) {
        case 'technology':
            return 'bg-gradient-to-r from-[#f6d9c0] to-[#e8c7ab]';
        case 'security':
            return 'bg-gradient-to-r from-[#e8e0eb] to-[#d9cfe0]';
        case 'insurance':
            return 'bg-gradient-to-r from-[#d4e5e8] to-[#c0d3d6]';
        case 'fintech':
            return 'bg-gradient-to-r from-[#dfeed6] to-[#c7d9be]';
        default:
            return 'bg-gray-100';
    }
};

const CaseStudyCard: FC<CardProps> = ({
    title, description, userRetention, userSatisfaction, buttonText, tag, imageSrc, index
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const shouldApplyMargin = index >= caseStudies.length - 3; // Apply margin for last three cards

    const translateY = useTransform(scrollYProgress, [0, 1], [index * 100, 0]);

    return (
        <motion.div
            ref={containerRef}
            style={{ translateY }}
            className={`p-6 rounded-lg shadow-lg max-w-5xl mx-auto sticky top-0 z-${index} ${getTagGradient(tag)}  ${shouldApplyMargin ? '-mt-10' : ''} `}
        >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 p-6">
                <div className="lg:w-1/2">
                    <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1">{tag}</span>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-900">{title}</h2>
                    <p className="mt-4 text-lg text-black text-opacity-50 font-medium">{description}</p>
                    <button className="mt-6 bg-black font-medium text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">
                        {buttonText}
                    </button>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col items-center lg:items-end">
                    <Image
                        src={imageSrc}
                        alt="App Screenshot"
                        width={150}
                        height={300}
                        className="rounded-lg w-full h-full object-cover shadow-lg"
                    />
                    <div className="flex space-x-16 mt-6">
                        <div className="text-center">
                            <p className="text-gray-600">User Retention</p>
                            <p className="lg:text-4xl text-2xl font-semibold text-black text-opacity-50">{userRetention}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600">User Satisfaction</p>
                            <p className="lg:text-4xl text-2xl font-semibold text-black text-opacity-50">{userSatisfaction}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudyCard;
