// components/TemplatesGrid.tsx
import React from 'react';
import Image from 'next/image';

interface Template {
    title: string;
    image: string;
}

const templates: Template[] = [
    {
        title: 'Prologue - Creative Website',
        image: '/images/prolouge.jpg',
    },
    {
        title: 'Nicaea - Cybersecurity Template',
        image: '/images/nicae.avif',
    },
    {
        title: 'Athos 2.0 - UX Portfolio',
        image: '/images/athos.avif',
    },
    {
        title: 'Vision - Framework',
        image: '/images/vision.avif',
    },
    {
        title: 'Meteora - Agency',
        image: '/images/meteora.avif',
    },
    {
        title: 'Valaam - AI',
        image: '/images/valaam.avif',
    },
    {
        title: 'Haylie - Coaching Businesses',
        image: '/images/valaie.avif',
    },
    {
        title: 'Nevsky - Consulting',
        image: '/images/nevskey.avif',
    },
    {
        title: 'Axios - Task Management',
        image: '/images/axios.avif',
    },
    {
        title: 'Athos - UX Portfolio',
        image: '/images/athos2.avif',
    },
];

const TemplatesGrid: React.FC = () => {
    return (
        <div className=" w-full py-12 px-6">
            <h2 className="text-center text-2xl w-full font-semibold text-gray-800 mb-10">Free Framer Templates</h2>
            <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-1   lg:grid-cols-3 xl:grid-col-4 gap-8 max-w-7xl mx-auto">
                {templates.map((template, index) => (
                    <div key={index} className="bg-white p-4 w-full justify-between flex flex-col rounded-lg  text-center">
                        <div className="relative w-full h-56 lg:h-56 md:h-[700px] mb-4">
                            <Image
                                src={template.image}
                                alt={template.title}
                                layout="fill"
                                objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-medium text-black text-opacity-75 mb-2">{template.title}</h3>
                        <button className="bg-gray-900 w-fit text-white py-2 px-4 lg:px-4 self-center block rounded-full">
                            Download Template
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplatesGrid;
