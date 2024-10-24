"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and y 50 (fade in and up)
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8 }} // Transition duration
            className="flex w-full px-6 flex-col"
        >
            <h1 className="text-3xl font-semibold flex lg:justify-start justify-center text-center text-gray-800 mb-8">
                Frequently asked questions
            </h1>

            <Accordion type="single" collapsible className="font-normal w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="lg:text-2xl font-medium text-opacity-75 text-start text-xl hover:no-underline text-black">
                        What is your design process?
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-2xl text-xl text-opacity-50 text-black font-normal">
                        My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="text-2xl font-normal">
                    <AccordionTrigger className="lg:text-2xl text-opacity-75 text-start text-xl hover:no-underline text-black font-medium">
                        What tools and software do you use for UX design?
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-2xl text-xl text-opacity-50 text-black font-normal">
                        I use a variety of tools and software, depending on the project and the needs of the client. Some of the most common tools I use include Figma, Framer, Adobe Creative Suite, and user testing platforms like UserTesting.com, Smartlook, Hotjar and Optimal Workshop.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="text-2xl font-normal">
                    <AccordionTrigger className="lg:text-2xl font-medium text-opacity-75 text-start text-xl hover:no-underline text-black">
                        How do you measure the success of your UX designs?
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-2xl text-xl text-opacity-50 text-black font-normal">
                        I measure the success of my UX designs through a combination of user feedback, analytics, and business goals. I track metrics like engagement, conversion rates, and user satisfaction to determine how well the design is performing. I also conduct user testing and collect feedback to understand how users are interacting with the design and identify areas for improvement. Ultimately, the success of a UX design should be tied to the goals of the project and the needs of the user.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </motion.div>
    );
}
