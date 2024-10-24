'use client';
import Case from '@/components/Card';
import MarqueeComponent from '@/components/Marquee';
import { work } from '@/components/work';
import { useRef } from 'react';
// import { useScroll } from 'framer-motion';



export default function Work() {
    const containerRef = useRef(null);
    // const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <main ref={containerRef} className="w-full flex flex-col items-center px-8 pt-28  mb-28 ">


            <div className="w-full recoleta text-5xl mb-12  items-center justify-center font-light flex">Case Studies

            </div>

            {work.map((study, index) => (
                <Case
                    key={index}
                    title={study.title}
                    description={study.description}
                    userRetention={study.userRetention}
                    userSatisfaction={study.userSatisfaction}
                    buttonText={study.buttonText}
                    tag={study.tag}
                    imageSrc={study.imageSrc}
                    index={index}
                // totalCards={caseStudies.length}
                />
            ))}

            <div className="flex w-full max-w-5xl mt-32 flex-col gap-8">
                <h2 className="text-3xl font-semibold  justify-center lg:justify-start flex  mb-6 text-gray-800">Tools</h2>

                <MarqueeComponent />
            </div>

        </main>
    );
}
