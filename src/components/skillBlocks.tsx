// components/SkillsTags.tsx
import React from 'react';

const skills = [
  'Design Strategy',
  'Systems Designer',
  'Informational System Designer',
  'User Research',
  'User Testing',
  'Interaction Design',
  'User Interface Design',
  'User Experience Design',
  'Holistic Approach',
  'Leadership',
  'Framer',
  'Business Acumen',
  'Technical Literacy',
  'Front End Development',
];

const SkillsTags: React.FC = () => {
  return (
    <div className="bg-orange-100 p-6 rounded-lg sm:max-w-full lg:max-w-[1200px] mx-auto">
      <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white text-gray-800 text-sm lg:text-base font-medium py-2 px-4 rounded-full  shadow-md :inline-block whitespace-nowrap"
          >
            {skill}
          </span>

        ))}
        <span className="text-gray-500 hidden font-normal md:inline-block justify-center text-xl py-2 px-4 ">
          + More
        </span>
      </div>
      <p className="text-gray-500 font-normal md:hidden w-full flex items-center justify-center text-xl py-2 px-4 ">
        + More
      </p>
    </div>

  );
};

export default SkillsTags;
