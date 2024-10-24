"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Product Designer',
    company: 'FLYR Hospitality',
    period: 'May 2024 - Present',
  },
  {
    title: 'Senior Product Designer',
    company: 'Comet ML',
    period: 'Oct 2023 - Feb 2024',
  },
  {
    title: 'Lead Product Designer',
    company: 'OmniSafe',
    period: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'Design Lead & Product Designer',
    company: 'Geonode',
    period: 'Apr 2021 - May 2023',
  },
  {
    title: 'Lead UX/UI Designer',
    company: 'Truely',
    period: 'Jan 2019 - Mar 2021',
  },
  {
    title: 'Product Design Consultant',
    company: 'Nicey Studio',
    period: 'Jun 2016 - Present',
  },
  {
    title: 'Co-Founder',
    company: 'Brandingmag',
    period: 'Jan 2011 - Jun 2015',
  },
];

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Fade in from below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Trigger animation when in view
      transition={{ duration: 0.8 }} // Animation duration
      className="px-10 w-full py-8 bg-gray-50"
    >
      <h2 className="text-3xl font-semibold justify-center lg:justify-start flex  mb-6 text-gray-800">Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <div key={index} className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start  items-center border-b border-gray-300 pb-4">
            <div className="flex flex-col">
              <span className="lg:text-2xl text-lg  mb-4 lg:mb-0 font-normal text-gray-800">{experience.title}</span>
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <span className="lg:text-2xl">{experience.company}</span>
              <span className="text-sm text-gray-500">{experience.period}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
