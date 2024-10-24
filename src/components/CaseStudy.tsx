'use client';
import { useRef } from 'react';
// import { useScroll } from 'framer-motion';
import { caseStudies } from './data';
import Card from './Cards';



export default function Home() {
    const containerRef = useRef(null);
    // const { scrollYProgress } = useScroll({ target: containerRef });  

    return (
        <main ref={containerRef} className="w-full mb-28 ">
            {caseStudies.map((study, index) => (
                <Card
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

      

        </main>
    );
}
