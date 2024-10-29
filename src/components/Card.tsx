'use client';
import Image from 'next/image';
import { FC } from 'react';
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

// Function to get the gradient background based on the title
const getTitleGradient = (title: string): string => {
    switch (title) {
        case 'UI Design for Internet Sharing App':
            return 'bg-gradient-to-r from-[#d1eafa] to-[#b8d9f2]';
        case 'Bitbo - Bitcoin Stats & Data':
            return 'bg-gradient-to-r from-[#e8e0eb] to-[#d7ceda]';
        case 'Truly Redefining Product Research and Review':
            return 'bg-gradient-to-r from-[#fae5d0] to-[#e6d0ba]';
        case 'Transforming the Proxy Market with a User-Focused Approach':
            return 'bg-gradient-to-r from-[#e8e0eb] to-[#d7ceda]';
        case 'Website Redesign with Framer':
            return 'bg-gradient-to-r from-[#d0f3f7] to-[#b6e4ea]';
        case 'Designing a Scalable CRM Tool':
            return 'bg-gradient-to-r from-[#d3e4e7] to-[#c0d3d6]';
        case 'Free Framer Templates':
            return 'bg-gradient-to-r from-[#d0e9f9] to-[#b5d8f0]';
        case 'Finance Intelligence with Fintelli':
            return 'bg-gradient-to-r from-[#dfeed6] to-[#c5d5b9]';
        default:
            return 'bg-gray-100';
    }
};

const Case: FC<CardProps> = ({
    title, description, userRetention, userSatisfaction, buttonText, tag, imageSrc, index
}) => {
    const shouldApplyMargin = index >= caseStudies.length - 3; // Apply margin for last three cards
    const isComingSoon = buttonText.toLowerCase() === 'coming soon'; // Check if the button is "Coming Soon"

    return (
        <div
            className={`p-6 rounded-lg shadow-lg max-w-5xl  mx-auto ${getTitleGradient(title)} ${shouldApplyMargin ? 'mt-12' : ''}`}
        >
            <div className="flex flex-col lg:flex-row  justify-between items-center gap-8 p-6">
                <div className="lg:w-1/2">
                    <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1">{tag}</span>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-900">{title}</h2>
                    <p className="mt-4 text-lg text-black text-opacity-50 font-medium">{description}</p>
                    <button
                        className={`mt-6 font-medium py-2 px-4 rounded-full transition ${
                            isComingSoon ? 'text-[white] bg-[#827b80]' : 'bg-black text-white hover:bg-gray-800'
                        }`}
                    >
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
        </div>
    );
};

export default Case;
