"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryData = [
    {
        bigImage: "/images/collabo.jpg",
        smallImage: "/images/peeps.avif",
        texts: [
            { type: "text", title: "20,000", subtitle: "AGNC enthusiasts worldwide" },
        ],
    },
    {
        bigImage: "/images/tech.png",
        smallImage: "/images/gee.avif",
        texts: [
            { type: "text", title: "15,000", subtitle: "Team meetings" },
        ],
    },
    {
        bigImage: "/images/gada.avif",
        smallImage: "/images/tech.png",
        texts: [
            { type: "text", title: "2,800", subtitle: "Brainstorming sessions" },
        ],
    },
    {
        bigImage: "/images/tech.png",
        smallImage: "/images/collabo.jpg",
        texts: [
            { type: "text", title: "900", subtitle: "Completed projects" },
        ],
    },
    {
        bigImage: "/images/collabo.jpg",
        smallImage: "/images/peeps.avif",
        texts: [
            { type: "text", title: "20,000", subtitle: "AGNC enthusiasts worldwide" },
        ],
    },
    {
        bigImage: "/images/tech.png",
        smallImage: "/images/gee.avif",
        texts: [
            { type: "text", title: "15,000", subtitle: "Team meetings" },
        ],
    },
    {
        bigImage: "/images/gada.avif",
        smallImage: "/images/tech.png",
        texts: [
            { type: "text", title: "2,800", subtitle: "Brainstorming sessions" },
        ],
    },
    {
        bigImage: "/images/tech.png",
        smallImage: "/images/collabo.jpg",
        texts: [
            { type: "text", title: "900", subtitle: "Completed projects" },
        ],
    },
];

const CollaborativeGallery: React.FC = () => {
    return (
        <div className="overflow-hidden MyGradient max-w-5xl mx-auto">
            {/* Continuous scrolling motion container */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex"
            >
                {[...galleryData, ...galleryData].map((item, index) => (
                    <div key={index} className="flex gap-2 px-2">
                        {/* Left Side Container - Large Image with conditional width */}
                        <div
                            className={`${
                                index % galleryData.length === 1 || index % galleryData.length === 3
                                    ? "w-[18rem]"
                                    : "w-[40rem]"
                            } h-[25rem] rounded-lg bg-black overflow-hidden`}
                        >
                            <Image
                                src={item.bigImage}
                                alt="Big collaboration image"
                                layout="responsive"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Right Side Column */}
                        <div className="flex flex-col gap-2 h-[25rem]">
                            {index % 2 === 1 ? (
                                <>
                                    {/* Top - Text Block */}
                                    <div className="w-[20rem] h-[12.5rem] rounded-lg bg-blue-200 flex items-center justify-center p-4">
                                        {item.texts.map((text, textIndex) => (
                                            <div key={textIndex} className="text-center">
                                                <p className="text-4xl font-bold text-gray-800">{text.title}</p>
                                                <p className="text-lg text-gray-600">{text.subtitle}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Bottom - Small Image */}
                                    <div className="w-[20rem] h-[12.5rem] rounded-lg bg-black overflow-hidden">
                                        <Image
                                            src={item.smallImage}
                                            alt="Small collaboration image"
                                            layout="responsive"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Top - Small Image */}
                                    <div className="w-[20rem] h-[12.5rem] rounded-lg bg-black overflow-hidden">
                                        <Image
                                            src={item.smallImage}
                                            alt="Small collaboration image"
                                            layout="responsive"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    {/* Bottom - Text Block */}
                                    <div className="w-[20rem] h-[12.5rem] rounded-lg bg-blue-200 flex items-center justify-center p-4">
                                        {item.texts.map((text, textIndex) => (
                                            <div key={textIndex} className="text-center">
                                                <p className="text-4xl font-bold text-gray-800">{text.title}</p>
                                                <p className="text-lg text-gray-600">{text.subtitle}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CollaborativeGallery;
