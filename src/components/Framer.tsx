"use client"

import CaseStudyCard from '@/components/Cards';

const CaseStudies = () => {
    const caseStudies = [
        {
            title: 'Case Study 1',
            description: 'This is a case study about technology.',
            userRetention: '85%',
            userSatisfaction: '90%',
            buttonText: 'Read More',
            tag: 'Technology',
            imageSrc: '/path/to/image1.jpg',
        },
        {
            title: 'Case Study 2',
            description: 'This is a case study about security.',
            userRetention: '75%',
            userSatisfaction: '80%',
            buttonText: 'Read More',
            tag: 'Security',
            imageSrc: '/path/to/image2.jpg',
        },
        // Add more case studies here...
    ];

    return (
        <div className="space-y-6">
            {caseStudies.map((study, index) => (
                <CaseStudyCard
                    key={index}
                    title={study.title}
                    description={study.description}
                    userRetention={study.userRetention}
                    userSatisfaction={study.userSatisfaction}
                    buttonText={study.buttonText}
                    tag={study.tag}
                    imageSrc={study.imageSrc}
                    index={index} // Pass index for staggered animation
                />
            ))}
        </div>
    );
};

export default CaseStudies;
